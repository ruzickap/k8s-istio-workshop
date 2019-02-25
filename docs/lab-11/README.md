# Istio - Mirroring

::: tip
Screencast: [https://asciinema.org/a/229605?t=492](https://asciinema.org/a/229605?autoplay=0&t=492)
:::

[https://istio.io/docs/tasks/traffic-management/mirroring/](https://istio.io/docs/tasks/traffic-management/mirroring/)

Mirroring sends a copy of live traffic to a mirrored service.

First all traffic will go to `reviews:v1`, then the rule will be applied
to mirror a portion of traffic to `reviews:v2`.

Apply the virtual services which will route all traffic to `reviews:v1` of each microservice:

```bash
kubectl apply -f samples/bookinfo/networking/virtual-service-all-v1.yaml
```

Change the route rule to mirror traffic to `reviews:v2`:

```bash
cat << EOF | kubectl apply -f -
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews
spec:
  hosts:
    - reviews
  http:
  - route:
    - destination:
        host: reviews
        subset: v1
      weight: 100
    mirror:
      host: reviews
      subset: v2
EOF
```

-----

Check the logs on both pods `reviews:v1` and `reviews:v2` by splitting
the `byobu` screen and checking logs of the pod:

```shell
# Use "Ctrl + Alt then TAB" to switch between screens
byobu
byobu-tmux split-window -v
```

```shell
# Screen 1
kubectl logs $(kubectl get pod -l app=reviews,version=v1 -o jsonpath="{.items[0].metadata.name}") istio-proxy -f
# Screen 2
kubectl logs $(kubectl get pod -l app=reviews,version=v2 -o jsonpath="{.items[0].metadata.name}") istio-proxy -f
```

Do a simple query by refreshing the page in the web browser.

Output:

```shell
# Request comming to: reviews,version=v1
[2019-02-21T09:50:40.978Z] "GET /reviews/0HTTP/1.1" 200 - 0 295 3 2 "-" "python-requests/2.18.4" "fadff2a1-e895-4ff2-a6c6-17c0334a339d" "reviews:9080" "127.0.0.1:9080" inbound|9080||reviews.default.svc.cluster.local - 10.244.2.21:9080 10.244.0.14:34274

# Request comming to: reviews,version=v2
[2019-02-21T09:50:40.988Z] "GET /ratings/0HTTP/1.1" 200 - 0 48 4 3 "-" "Apache-CXF/3.1.14" "fadff2a1-e895-4ff2-a6c6-17c0334a339d" "ratings:9080" "10.244.1.20:9080" outbound|9080|v1|ratings.default.svc.cluster.local - 10.103.21.108:9080 10.244.1.21:37314
[2019-02-21T09:50:40.977Z] "GET /reviews/0HTTP/1.1" 200 - 0 379 18 16 "10.244.0.14" "python-requests/2.18.4" "fadff2a1-e895-4ff2-a6c6-17c0334a339d" "reviews-shadow:9080" "127.0.0.1:9080" inbound|9080||reviews.default.svc.cluster.local - 10.244.1.21:9080 10.244.0.14:0
```

Check the flows in Kiali graph

![Mirroring Kiali Graph](./istio_kiali_mirroring.gif "Mirroring Kiali Graph")

-----

![Istio](../.vuepress/public/istio.svg "Istio")
