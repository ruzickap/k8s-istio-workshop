# Istio - Mirroring

[https://istio.io/docs/tasks/traffic-management/mirroring/](https://istio.io/docs/tasks/traffic-management/mirroring/)

Mirroring sends a copy of live traffic to a mirrored service.

First all traffic will go to `reviews:v1`, then the rule will be applied
to mirror a portion of traffic to `reviews:v2`.

Apply the virtual services which will route all traffic to `v1` of each microservice:

```bash
kubectl apply -f samples/bookinfo/networking/virtual-service-all-v1.yaml
```

Change the route rule to mirror traffic to `v2`:

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

Check the logs on both pods `reviews:v1` and `reviews:v2`:

```shell
byobu
byobu-tmux select-pane -t 0
byobu-tmux split-window -v
byobu-tmux select-pane -t 0
```

```bash
kubectl logs $(kubectl get pod -l app=reviews,version=v1 -o jsonpath="{.items[0].metadata.name}") istio-proxy --tail=10
kubectl logs $(kubectl get pod -l app=reviews,version=v2 -o jsonpath="{.items[0].metadata.name}") istio-proxy --tail=10
```

* Do a simple query by refreshing the page in the web browser.

* Check the flows in Kiali graph

![Mirroring Kiali Graph](./istio_kiali_mirroring.gif "Mirroring Kiali Graph")

-----
