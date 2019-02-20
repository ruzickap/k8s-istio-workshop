# Create VMs in OpenStack

Before you start with the main content of the workshop, you need to provision
the VMs in OpenStack.

Create VMs in OpenStack using Ubuntu Docker image.

## Prepare the local working environment inside Docker

Run Ubuntu docker image and mount the directory there:

```bash
mkdir /tmp/test && cd /tmp/test
docker run -it -rm -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix -v $PWD:/mnt ubuntu
```

Install necessary software into the Docker container:

```bash
apt update -qq
apt-get install -y -qq apt-transport-https curl firefox git gnupg jq openssh-client psmisc siege sudo unzip vim > /dev/null
```

Install `kubernetes-client` package - (`kubectl`):

```bash
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" > /etc/apt/sources.list.d/kubernetes.list
apt-get update -qq
apt-get install -y -qq kubectl
```

Install [Terraform](https://www.terraform.io/):

```bash
TERRAFORM_LATEST_VERSION=$(curl -s https://checkpoint-api.hashicorp.com/v1/check/terraform | jq -r -M ".current_version")
curl --silent --location https://releases.hashicorp.com/terraform/${TERRAFORM_LATEST_VERSION}/terraform_${TERRAFORM_LATEST_VERSION}_linux_amd64.zip --output /tmp/terraform_linux_amd64.zip
unzip -o /tmp/terraform_linux_amd64.zip -d /usr/local/bin/
```

Change directory to `/mnt` where the git repository is mounted:

```bash
cd /mnt
```

## Provision VMs in OpenStack

Start 3 VMs (one master and 2 workers) where the k8s will be installed.

* Terraform diagram:

  ![Terraform](https://cdn-images-1.medium.com/max/1200/1*lYFNHNM03biX_95IQMayUw.png
  "Terraform")
  ([https://hackernoon.com/terraform-openstack-ansible-d680ea466e22](https://hackernoon.com/terraform-openstack-ansible-d680ea466e22))

Generate ssh keys if not exists:

```bash
test -f $HOME/.ssh/id_rsa || ( install -m 0700 -d $HOME/.ssh && ssh-keygen -b 2048 -t rsa -f $HOME/.ssh/id_rsa -q -N "" )
# ssh-agent must be running...
test -n "$SSH_AUTH_SOCK" || eval `ssh-agent`
if [ "`ssh-add -l`" = "The agent has no identities." ]; then ssh-add; fi
```

Clone this git repository:

```bash
git clone https://github.com/ruzickap/k8s-istio-workshop
cd k8s-istio-workshop
```

::: danger STOP
Modify the Terraform variable file!
:::

```bash
OPENSTACK_PASSWORD=${OPENSTACK_PASSWORD:-default}

cat > terrafrom/openstack/terraform.tfvars << EOF
openstack_auth_url                          = "https://ic-us.ssl.mirantis.net:5000/v3"
openstack_instance_flavor_name              = "dev.log"
openstack_instance_image_name               = "bionic-server-cloudimg-amd64-20190119"
openstack_networking_subnet_dns_nameservers = ["172.19.80.70"]
openstack_password                          = "$OPENSTACK_PASSWORD"
# drivetrain-team
openstack_tenant_name                       = "mirantis-services-team"
openstack_user_name                         = "pruzicka"
openstack_user_domain_name                  = "ldap_mirantis"
prefix                                      = "pruzicka-k8s-istio-workshop"
EOF
```

Download Terraform components:

```bash
terraform init -var-file=terrafrom/openstack/terraform.tfvars terrafrom/openstack
```

Create VMs in OpenStack:

```bash
terraform apply -auto-approve -var-file=terrafrom/openstack/terraform.tfvars terrafrom/openstack
```

Show Terraform output:

```bash
terraform output
```

Output:

```shell
vms_name = [
    pruzicka-k8s-istio-workshop-node01.01.localdomain,
    pruzicka-k8s-istio-workshop-node02.01.localdomain,
    pruzicka-k8s-istio-workshop-node03.01.localdomain
]
vms_public_ip = [
    172.16.240.185,
    172.16.242.218,
    172.16.240.44
]
```

At the end of the output you should see 3 IP addresses which
should be accessible by ssh using your public key `~/.ssh/id_rsa.pub`.
