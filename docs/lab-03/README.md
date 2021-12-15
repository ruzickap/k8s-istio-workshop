# Install Helm

::: tip
Screencast: [https://asciinema.org/a/229605?t=136](https://asciinema.org/a/229605?autoplay=0&t=136)
:::

Install [Helm](https://helm.sh/) binary:

```bash
export DESIRED_VERSION="v2.13.0"
curl -s https://raw.githubusercontent.com/helm/helm/master/scripts/get | bash
```

Install Tiller (the Helm server-side component) into the Kubernetes cluster:

```bash
kubectl create serviceaccount tiller --namespace kube-system
kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
helm init --wait --service-account tiller
helm repo update
```

Check if the tiller was installed properly:

```bash
kubectl get pods -l app=helm --all-namespaces
```

Output:

```shell
NAMESPACE     NAME                            READY   STATUS    RESTARTS   AGE
kube-system   tiller-deploy-dbb85cb99-z4c47   1/1     Running   0          28s
```
