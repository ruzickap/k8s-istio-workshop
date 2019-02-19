# Install Istio

* Istio architectue

  ![Istio Architecture](https://istio.io/docs/concepts/what-is-istio/arch.svg
  "Istio Architecture")
  [https://istio.io/docs/concepts/what-is-istio/](https://istio.io/docs/concepts/what-is-istio/)

Either download Istio directly from [https://github.com/istio/istio/releases](https://github.com/istio/istio/releases)
or get the latest version by using curl:

```bash
export ISTIO_VERSION="1.0.5"
test -d tmp || mkdir tmp
cd tmp
curl -sL https://git.io/getLatestIstio | sh -
```

Change the directory to the Istio installation files location:

```bash
cd istio*
```

Install `istioctl`:

```bash
sudo mv bin/istioctl /usr/local/bin/
```

Install [Istio](https://istio.io/) using Helm:

```bash
helm install --wait --name istio --namespace istio-system install/kubernetes/helm/istio \
  --set gateways.istio-ingressgateway.type=NodePort \
  --set gateways.istio-egressgateway.type=NodePort \
  --set grafana.enabled=true \
  --set kiali.enabled=true \
  --set kiali.dashboard.grafanaURL=http://localhost:3000 \
  --set kiali.dashboard.jaegerURL=http://localhost:16686 \
  --set servicegraph.enabled=true \
  --set telemetry-gateway.grafanaEnabled=true \
  --set telemetry-gateway.prometheusEnabled=true \
  --set tracing.enabled=true
```

See the Istio components:

```bash
kubectl get --namespace=istio-system svc,deployment,pods -o wide
```

Output:

```shell
NAME                             TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                                                                                                                   AGE   SELECTOR
service/grafana                  ClusterIP   10.101.117.126   <none>        3000/TCP                                                                                                                  15m   app=grafana
service/istio-citadel            ClusterIP   10.99.235.151    <none>        8060/TCP,9093/TCP                                                                                                         15m   istio=citadel
service/istio-egressgateway      NodePort    10.105.213.174   <none>        80:31610/TCP,443:31811/TCP                                                                                                15m   app=istio-egressgateway,istio=egressgateway
service/istio-galley             ClusterIP   10.110.154.0     <none>        443/TCP,9093/TCP                                                                                                          15m   istio=galley
service/istio-ingressgateway     NodePort    10.101.212.170   <none>        80:31380/TCP,443:31390/TCP,31400:31400/TCP,15011:31814/TCP,8060:31435/TCP,853:31471/TCP,15030:30210/TCP,15031:30498/TCP   15m   app=istio-ingressgateway,istio=ingressgateway
service/istio-pilot              ClusterIP   10.96.34.157     <none>        15010/TCP,15011/TCP,8080/TCP,9093/TCP                                                                                     15m   istio=pilot
service/istio-policy             ClusterIP   10.98.185.215    <none>        9091/TCP,15004/TCP,9093/TCP                                                                                               15m   istio-mixer-type=policy,istio=mixer
service/istio-sidecar-injector   ClusterIP   10.97.47.179     <none>        443/TCP                                                                                                                   15m   istio=sidecar-injector
service/istio-telemetry          ClusterIP   10.103.23.55     <none>        9091/TCP,15004/TCP,9093/TCP,42422/TCP                                                                                     15m   istio-mixer-type=telemetry,istio=mixer
service/jaeger-agent             ClusterIP   None             <none>        5775/UDP,6831/UDP,6832/UDP                                                                                                15m   app=jaeger
service/jaeger-collector         ClusterIP   10.110.10.174    <none>        14267/TCP,14268/TCP                                                                                                       15m   app=jaeger
service/jaeger-query             ClusterIP   10.98.172.235    <none>        16686/TCP                                                                                                                 15m   app=jaeger
service/kiali                    ClusterIP   10.111.114.225   <none>        20001/TCP                                                                                                                 15m   app=kiali
service/prometheus               ClusterIP   10.111.132.151   <none>        9090/TCP                                                                                                                  15m   app=prometheus
service/servicegraph             ClusterIP   10.109.59.250    <none>        8088/TCP                                                                                                                  15m   app=servicegraph
service/tracing                  ClusterIP   10.96.59.251     <none>        80/TCP                                                                                                                    15m   app=jaeger
service/zipkin                   ClusterIP   10.107.168.128   <none>        9411/TCP                                                                                                                  15m   app=jaeger

NAME                                           READY   UP-TO-DATE   AVAILABLE   AGE   CONTAINERS                 IMAGES                                                      SELECTOR
deployment.extensions/grafana                  1/1     1            1           15m   grafana                    grafana/grafana:5.2.3                                       app=grafana
deployment.extensions/istio-citadel            1/1     1            1           15m   citadel                    docker.io/istio/citadel:1.0.5                               istio=citadel
deployment.extensions/istio-egressgateway      1/1     1            1           15m   istio-proxy                docker.io/istio/proxyv2:1.0.5                               app=istio-egressgateway,istio=egressgateway
deployment.extensions/istio-galley             1/1     1            1           15m   validator                  docker.io/istio/galley:1.0.5                                istio=galley
deployment.extensions/istio-ingressgateway     1/1     1            1           15m   istio-proxy                docker.io/istio/proxyv2:1.0.5                               app=istio-ingressgateway,istio=ingressgateway
deployment.extensions/istio-pilot              1/1     1            1           15m   discovery,istio-proxy      docker.io/istio/pilot:1.0.5,docker.io/istio/proxyv2:1.0.5   app=pilot,istio=pilot
deployment.extensions/istio-policy             1/1     1            1           15m   mixer,istio-proxy          docker.io/istio/mixer:1.0.5,docker.io/istio/proxyv2:1.0.5   app=policy,istio=mixer,istio-mixer-type=policy
deployment.extensions/istio-sidecar-injector   1/1     1            1           15m   sidecar-injector-webhook   docker.io/istio/sidecar_injector:1.0.5                      istio=sidecar-injector
deployment.extensions/istio-telemetry          1/1     1            1           15m   mixer,istio-proxy          docker.io/istio/mixer:1.0.5,docker.io/istio/proxyv2:1.0.5   app=telemetry,istio=mixer,istio-mixer-type=telemetry
deployment.extensions/istio-tracing            1/1     1            1           15m   jaeger                     docker.io/jaegertracing/all-in-one:1.5                      app=jaeger
deployment.extensions/kiali                    1/1     1            1           15m   kiali                      docker.io/kiali/kiali:v0.10                                 app=kiali
deployment.extensions/prometheus               1/1     1            1           15m   prometheus                 docker.io/prom/prometheus:v2.3.1                            app=prometheus
deployment.extensions/servicegraph             1/1     1            1           15m   servicegraph               docker.io/istio/servicegraph:1.0.5                          app=servicegraph

NAME                                          READY   STATUS      RESTARTS   AGE   IP            NODE                             NOMINATED NODE   READINESS GATES
pod/grafana-59b8896965-pmwd2                  1/1     Running     0          15m   10.244.1.16   pruzicka-k8s-istio-workshop-node03   <none>           <none>
pod/istio-citadel-856f994c58-8r8nr            1/1     Running     0          15m   10.244.1.17   pruzicka-k8s-istio-workshop-node03   <none>           <none>
pod/istio-egressgateway-5649fcf57-sv8wf       1/1     Running     0          15m   10.244.1.14   pruzicka-k8s-istio-workshop-node03   <none>           <none>
pod/istio-galley-7665f65c9c-8sjmm             1/1     Running     0          15m   10.244.1.18   pruzicka-k8s-istio-workshop-node03   <none>           <none>
pod/istio-grafana-post-install-kw74d          0/1     Completed   0          10m   10.244.1.19   pruzicka-k8s-istio-workshop-node03   <none>           <none>
pod/istio-ingressgateway-6755b9bbf6-f7pnx     1/1     Running     0          15m   10.244.1.13   pruzicka-k8s-istio-workshop-node03   <none>           <none>
pod/istio-pilot-56855d999b-6zq86              2/2     Running     0          15m   10.244.0.11   pruzicka-k8s-istio-workshop-node01   <none>           <none>
pod/istio-policy-6fcb6d655f-4zndw             2/2     Running     0          15m   10.244.2.13   pruzicka-k8s-istio-workshop-node02   <none>           <none>
pod/istio-sidecar-injector-768c79f7bf-74wbc   1/1     Running     0          15m   10.244.2.18   pruzicka-k8s-istio-workshop-node02   <none>           <none>
pod/istio-telemetry-664d896cf5-smz7w          2/2     Running     0          15m   10.244.2.14   pruzicka-k8s-istio-workshop-node02   <none>           <none>
pod/istio-tracing-6b994895fd-vb58q            1/1     Running     0          15m   10.244.2.17   pruzicka-k8s-istio-workshop-node02   <none>           <none>
pod/kiali-67c69889b5-sw92h                    1/1     Running     0          15m   10.244.1.15   pruzicka-k8s-istio-workshop-node03   <none>           <none>
pod/prometheus-76b7745b64-kwzj5               1/1     Running     0          15m   10.244.2.15   pruzicka-k8s-istio-workshop-node02   <none>           <none>
pod/servicegraph-5c4485945b-j9bp2             1/1     Running     0          15m   10.244.2.16   pruzicka-k8s-istio-workshop-node02   <none>           <none>
```

Configure Istio with a new log type and send those logs to the FluentD:

```bash
kubectl apply -f ../../files/fluentd-istio.yaml
```

Check + Enable Istio in default namespace.

Let the default namespace to use Istio injection:

```bash
kubectl label namespace default istio-injection=enabled
```

Check namespaces:

```bash
kubectl get namespace -L istio-injection
```

Output:

```shell
NAME               STATUS   AGE   ISTIO-INJECTION
default            Active   70m   enabled
es-operator        Active   41m
istio-system       Active   16m
kube-public        Active   70m
kube-system        Active   70m
logging            Active   38m
rook-ceph          Active   59m
rook-ceph-system   Active   63m
```

Configure port forwarding for Istio services:

```bash
# Jaeger - http://localhost:16686
kubectl port-forward -n istio-system $(kubectl get pod -n istio-system -l app=jaeger -o jsonpath="{.items[0].metadata.name}") 16686:16686 &

# Prometheus - http://localhost:9090/graph
kubectl -n istio-system port-forward $(kubectl -n istio-system get pod -l app=prometheus -o jsonpath="{.items[0].metadata.name}") 9090:9090 &

# Grafana - http://localhost:3000/dashboard/db/istio-mesh-dashboard
kubectl -n istio-system port-forward $(kubectl -n istio-system get pod -l app=grafana -o jsonpath="{.items[0].metadata.name}") 3000:3000 &

# Kiali - http://localhost:20001
kubectl -n istio-system port-forward $(kubectl -n istio-system get pod -l app=kiali -o jsonpath="{.items[0].metadata.name}") 20001:20001 &

# Servicegraph - http://localhost:8088/force/forcegraph.html
kubectl -n istio-system port-forward $(kubectl -n istio-system get pod -l app=servicegraph -o jsonpath="{.items[0].metadata.name}") 8088:8088 &
```
