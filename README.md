# Istio workshop

[Istio](https://istio.io/) is an open platform to connect, secure, control
and observe microservices, also known as a service mesh, on cloud platforms
such as Kubernetes.

![Istio](./istio.svg "Istio")

With Istio, you can manage network traffic, load balance across microservices,
enforce access policies, verify service identity, secure service communication,
and observe what exactly is going on with your services.

* Full asciinema screencast: [https://asciinema.org/a/229605](https://asciinema.org/a/229605?autoplay=1)
* GitHub repository: [https://github.com/ruzickap/k8s-istio-workshop](https://github.com/ruzickap/k8s-istio-workshop)

## Requirements

* [Docker](https://www.docker.com/)
* [kubectl](https://kubernetes.io/docs/reference/kubectl/)
* Access to OpenStack environment to provision 3 VMs
* Kubernetes knowledge

## Objectives

After you complete this course, you'll be able to:

* Download and install Istio in your cluster
* Deploy the Guestbook sample app
* Use metrics, logging, and tracing to observe services
* Set up the Istio Ingress Gateway
* Perform simple traffic management, such as A/B tests and canary deployments
* Secure your service mesh
* Enforce policies for your microservices

![Lab diagram](./lab-02/kubeadm_diagram.png "Lab diagram")

## Workshop

You will perform the following exercises in the lab:

* [Lab 01 - Create VMs in OpenStack](lab-01/README.md)
* [Lab 02 - Install Kubernetes to the VMs](lab-02/README.md)
* [Lab 03 - Install Helm](lab-03/README.md)
* [Lab 04 - Install Rook](lab-04/README.md)
* [Lab 05 - Install ElasticSearch](lab-05/README.md)
* [Lab 06 - Istio - Installation](lab-06/README.md)
* [Lab 07 - Istio - Bookinfo Application](lab-07/README.md)
* [Lab 08 - Istio - Configuring Request Routing](lab-08/README.md)
* [Lab 09 - Istio - Injecting an HTTP delay fault](lab-09/README.md)
* [Lab 10 - Istio - Weight-based routing](lab-10/README.md)
* [Lab 11 - Istio - Mirroring](lab-11/README.md)
* [Lab 12 - Istio - Cleanup](lab-12/README.md)

::: tip
In case you turned off the servers or restart your computer please verify you
have the `KUBECONFIG` variable set and all `kubectl port-forward` up and running:
:::

```bash
[ -f $PWD/kubeconfig.conf ] && export KUBECONFIG=${KUBECONFIG:-$PWD/kubeconfig.conf}
kubectl get nodes -o wide
```

## List of GUIs used in Workshop

* [Jaeger](https://www.jaegertracing.io/) - [https://istio.io/docs/tasks/telemetry/distributed-tracing/](https://istio.io/docs/tasks/telemetry/distributed-tracing/)

  * ```shell
    kubectl port-forward -n istio-system $(kubectl get pod -n istio-system \
    -l app=jaeger -o jsonpath="{.items[0].metadata.name}") 16686:16686 &
    ```

    * Link: [http://localhost:16686](http://localhost:16686)

* [Prometheus](https://prometheus.io/) - [https://istio.io/docs/tasks/telemetry/querying-metrics/](https://istio.io/docs/tasks/telemetry/querying-metrics/)

  * ```shell
    kubectl -n istio-system port-forward $(kubectl -n istio-system get pod \
    -l app=prometheus -o jsonpath="{.items[0].metadata.name}") 9090:9090 &
    ```

  * Link: [http://localhost:9090/graph](http://localhost:9090/graph)

* [Grafana](https://grafana.com/) - [https://istio.io/docs/tasks/telemetry/using-istio-dashboard/](https://istio.io/docs/tasks/telemetry/using-istio-dashboard/)

  * ```shell
    kubectl -n istio-system port-forward $(kubectl -n istio-system get pod \
    -l app=grafana -o jsonpath="{.items[0].metadata.name}") 3000:3000 &
    ```

  * Link: [http://localhost:3000/dashboard/db/istio-mesh-dashboard](http://localhost:3000/dashboard/db/istio-mesh-dashboard)

* [Kiali](https://www.kiali.io/) - [https://istio.io/docs/tasks/telemetry/kiali/](https://istio.io/docs/tasks/telemetry/kiali/)

  * ```shell
    kubectl -n istio-system port-forward $(kubectl -n istio-system get pod \
    -l app=kiali -o jsonpath="{.items[0].metadata.name}") 20001:20001 &
    ```

  * Login: admin

  * Password: admin

  * Link: [http://localhost:20001](http://localhost:20001)

* Servicegraph - [https://archive.istio.io/v1.0/docs/tasks/telemetry/servicegraph/](https://archive.istio.io/v1.0/docs/tasks/telemetry/servicegraph/)

  * ```shell
    kubectl -n istio-system port-forward $(kubectl -n istio-system get pod \
    -l app=servicegraph -o jsonpath="{.items[0].metadata.name}") 8088:8088 &
    ```

  * Link: [http://localhost:8088/force/forcegraph.html](http://localhost:8088/force/forcegraph.html),
    [http://localhost:8088/dotviz](http://localhost:8088/dotviz)

* [Kibana](https://www.elastic.co/products/kibana)

  * ```shell
    kubectl -n logging port-forward $(kubectl -n logging get pod \
    -l role=kibana -o jsonpath="{.items[0].metadata.name}") 5601:5601 &
    ```

  * Link: [https://localhost:5601](https://localhost:5601)

* [Cerebro](https://github.com/lmenezes/cerebro)

  * ```shell
    kubectl -n logging port-forward $(kubectl -n logging get pod \
    -l role=cerebro -o jsonpath="{.items[0].metadata.name}") 9000:9000 &
    ```

  * Link: [http://localhost:9000](http://localhost:9000)

* [Ceph Dashboard](https://docs.ceph.com/en/latest/mgr/dashboard/)

  * ```shell
    kubectl -n rook-ceph port-forward $(kubectl -n rook-ceph get pod \
    -l app=rook-ceph-mgr -o jsonpath="{.items[0].metadata.name}") 8443:8443 &
    ```

  * Login: admin

  * Password:

    ```shell
    kubectl -n rook-ceph get secret rook-ceph-dashboard-password -o yaml \
    | grep "password:" | awk '{print $2}' | base64 --decode
    ```

  * Link: [https://localhost:8443](https://localhost:8443)

## Links

* Video:

  * [Istio Service Mesh by Mete Atamel @ .NET Conf UY v2018](https://www.youtube.com/watch?v=sh0F7FMFVSI)

  * [Liam White - Istio @ GDGReading DevFest 2018](https://www.youtube.com/watch?v=RVScqW8_liw)

  * [Istio Service Mesh & pragmatic microservices architecture - Álex Soto](https://www.youtube.com/watch?v=OAW5rbttic0)

* Pages:

  * [Introduction - Istio 101 Lab](https://istio101.gitbook.io/lab/workshop/)

  * [Using Istio Workshop by Layer5.io](https://github.com/leecalcote/istio-service-mesh-workshop)

  * [Istio Workshop by Ray Tsang](https://github.com/retroryan/istio-workshop)

  * [Amazon EKS Workshop - Service Mesh with Istio](https://eksworkshop.com/servicemesh_with_istio/)
