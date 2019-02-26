# Install Kubernetes to the VMs

::: tip
Screencast: [https://asciinema.org/a/229605?t=106](https://asciinema.org/a/229605?autoplay=0&t=106)
:::

This diagram is showing how your environment will looks like after this lab:

![Lab diagram](./kubeadm_diagram.png "Lab diagram")

Install k8s using kubeadm to the provisioned VMs:

```bash
./files/install-k8s-kubeadm.sh
```

Check if all nodes are up:

```bash
export KUBECONFIG=$PWD/kubeconfig.conf
kubectl get nodes -o wide
```

Output:

```shell
NAME                             STATUS   ROLES    AGE   VERSION   INTERNAL-IP      EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION      CONTAINER-RUNTIME
pruzicka-k8s-istio-workshop-node01   Ready    master   2m    v1.13.3   192.168.250.11   <none>        Ubuntu 18.04.1 LTS   4.15.0-43-generic   docker://18.6.1
pruzicka-k8s-istio-workshop-node02   Ready    <none>   45s   v1.13.3   192.168.250.12   <none>        Ubuntu 18.04.1 LTS   4.15.0-43-generic   docker://18.6.1
pruzicka-k8s-istio-workshop-node03   Ready    <none>   50s   v1.13.3   192.168.250.13   <none>        Ubuntu 18.04.1 LTS   4.15.0-43-generic   docker://18.6.1
```

View services, deployments, and pods:

```bash
kubectl get svc,deploy,po --all-namespaces -o wide
```

Output:

```shell
NAMESPACE     NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)         AGE     SELECTOR
default       service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP         2m16s   <none>
kube-system   service/kube-dns     ClusterIP   10.96.0.10   <none>        53/UDP,53/TCP   2m11s   k8s-app=kube-dns

NAMESPACE     NAME                            READY   UP-TO-DATE   AVAILABLE   AGE     CONTAINERS   IMAGES                     SELECTOR
kube-system   deployment.extensions/coredns   2/2     2            2           2m11s   coredns      k8s.gcr.io/coredns:1.2.6   k8s-app=kube-dns

NAMESPACE     NAME                                                         READY   STATUS    RESTARTS   AGE    IP               NODE                             NOMINATED NODE   READINESS GATES
kube-system   pod/coredns-86c58d9df4-tlmvh                                 1/1     Running   0          116s   10.244.0.2       pruzicka-k8s-istio-workshop-node01   <none>           <none>
kube-system   pod/coredns-86c58d9df4-zk685                                 1/1     Running   0          116s   10.244.0.3       pruzicka-k8s-istio-workshop-node01   <none>           <none>
kube-system   pod/etcd-pruzicka-k8s-istio-workshop-node01                      1/1     Running   0          79s    192.168.250.11   pruzicka-k8s-istio-workshop-node01   <none>           <none>
kube-system   pod/kube-apiserver-pruzicka-k8s-istio-workshop-node01            1/1     Running   0          72s    192.168.250.11   pruzicka-k8s-istio-workshop-node01   <none>           <none>
kube-system   pod/kube-controller-manager-pruzicka-k8s-istio-workshop-node01   1/1     Running   0          65s    192.168.250.11   pruzicka-k8s-istio-workshop-node01   <none>           <none>
kube-system   pod/kube-flannel-ds-amd64-cvpfq                              1/1     Running   0          65s    192.168.250.13   pruzicka-k8s-istio-workshop-node03   <none>           <none>
kube-system   pod/kube-flannel-ds-amd64-ggqmv                              1/1     Running   0          60s    192.168.250.12   pruzicka-k8s-istio-workshop-node02   <none>           <none>
kube-system   pod/kube-flannel-ds-amd64-ql6g6                              1/1     Running   0          117s   192.168.250.11   pruzicka-k8s-istio-workshop-node01   <none>           <none>
kube-system   pod/kube-proxy-79mx8                                         1/1     Running   0          117s   192.168.250.11   pruzicka-k8s-istio-workshop-node01   <none>           <none>
kube-system   pod/kube-proxy-f99q2                                         1/1     Running   0          65s    192.168.250.13   pruzicka-k8s-istio-workshop-node03   <none>           <none>
kube-system   pod/kube-proxy-w4tbd                                         1/1     Running   0          60s    192.168.250.12   pruzicka-k8s-istio-workshop-node02   <none>           <none>
kube-system   pod/kube-scheduler-pruzicka-k8s-istio-workshop-node01            1/1     Running   0          78s    192.168.250.11   pruzicka-k8s-istio-workshop-node01   <none>           <none>
```

::: warning
Configure the access to k8s also from your local environment...
:::

Open new terminal on your PC and run:

```shell
export KUBECONFIG=/tmp/test/k8s-istio-workshop/kubeconfig.conf
kubectl get nodes -o wide
```

![Kubernetes](https://upload.wikimedia.org/wikipedia/commons/6/67/Kubernetes_logo.svg
"Kubernetes")
