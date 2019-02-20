# Istio - Bookinfo Application

The Bookinfo application is broken into four separate microservices:

* `productpage` - the productpage microservice calls the details and reviews
  microservices to populate the page.
* `details` - the details microservice contains book information.
* `reviews` - the reviews microservice contains book reviews. It also calls
  the ratings microservice.
* `ratings` - the ratings microservice contains book ranking information
  that accompanies a book review.

There are 3 versions of the `reviews` microservice:

* Version `v1` - doesn’t call the **ratings service**.
* Version `v2` - calls the ratings service, and displays each rating as 1 to 5
  **black stars**.
* Version `v3` - calls the ratings service, and displays each rating as 1 to 5
  **red stars**.

[Bookinfo](https://istio.io/docs/examples/bookinfo/) application architecture:

![Application Architecture without Istio](https://istio.io/docs/examples/bookinfo/noistio.svg
"Application Architecture without Istio")

![Application Architecture with Istio](https://istio.io/docs/examples/bookinfo/withistio.svg
"Application Architecture with Istio")

Deploy the demo of [Bookinfo](https://istio.io/docs/examples/bookinfo/) application:

```bash
kubectl apply -f samples/bookinfo/platform/kube/bookinfo.yaml
sleep 400
```

-----

Confirm all services and pods are correctly defined and running:

```bash
kubectl get svc,deployment,pods -o wide
```

Output:

```shell
NAME                  TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE     SELECTOR
service/details       ClusterIP   10.103.142.153   <none>        9080/TCP   4m21s   app=details
service/kubernetes    ClusterIP   10.96.0.1        <none>        443/TCP    75m     <none>
service/productpage   ClusterIP   10.111.62.53     <none>        9080/TCP   4m17s   app=productpage
service/ratings       ClusterIP   10.110.22.215    <none>        9080/TCP   4m20s   app=ratings
service/reviews       ClusterIP   10.100.73.81     <none>        9080/TCP   4m19s   app=reviews

NAME                                   READY   UP-TO-DATE   AVAILABLE   AGE     CONTAINERS    IMAGES                                         SELECTOR
deployment.extensions/details-v1       1/1     1            1           4m21s   details       istio/examples-bookinfo-details-v1:1.8.0       app=details,version=v1
deployment.extensions/productpage-v1   1/1     1            1           4m16s   productpage   istio/examples-bookinfo-productpage-v1:1.8.0   app=productpage,version=v1
deployment.extensions/ratings-v1       1/1     1            1           4m20s   ratings       istio/examples-bookinfo-ratings-v1:1.8.0       app=ratings,version=v1
deployment.extensions/reviews-v1       1/1     1            1           4m19s   reviews       istio/examples-bookinfo-reviews-v1:1.8.0       app=reviews,version=v1
deployment.extensions/reviews-v2       1/1     1            1           4m18s   reviews       istio/examples-bookinfo-reviews-v2:1.8.0       app=reviews,version=v2
deployment.extensions/reviews-v3       1/1     1            1           4m18s   reviews       istio/examples-bookinfo-reviews-v3:1.8.0       app=reviews,version=v3

NAME                                      READY   STATUS    RESTARTS   AGE     IP            NODE                             NOMINATED NODE   READINESS GATES
pod/details-v1-68c7c8666d-pvrx6           2/2     Running   0          4m21s   10.244.1.20   pruzicka-k8s-istio-workshop-node03   <none>           <none>
pod/elasticsearch-operator-sysctl-297j8   1/1     Running   0          45m     10.244.2.8    pruzicka-k8s-istio-workshop-node02   <none>           <none>
pod/elasticsearch-operator-sysctl-bg8rn   1/1     Running   0          45m     10.244.1.10   pruzicka-k8s-istio-workshop-node03   <none>           <none>
pod/elasticsearch-operator-sysctl-vwvbl   1/1     Running   0          45m     10.244.0.8    pruzicka-k8s-istio-workshop-node01   <none>           <none>
pod/productpage-v1-54d799c966-2b4ss       2/2     Running   0          4m16s   10.244.1.23   pruzicka-k8s-istio-workshop-node03   <none>           <none>
pod/ratings-v1-8558d4458d-ln99n           2/2     Running   0          4m20s   10.244.1.21   pruzicka-k8s-istio-workshop-node03   <none>           <none>
pod/reviews-v1-cb8655c75-hpqfg            2/2     Running   0          4m19s   10.244.1.22   pruzicka-k8s-istio-workshop-node03   <none>           <none>
pod/reviews-v2-7fc9bb6dcf-snshx           2/2     Running   0          4m18s   10.244.2.19   pruzicka-k8s-istio-workshop-node02   <none>           <none>
pod/reviews-v3-c995979bc-wcql9            2/2     Running   0          4m18s   10.244.0.12   pruzicka-k8s-istio-workshop-node01   <none>           <none>
```

Check the container details - you should see also container `istio-proxy` next
to `productpage`:

```bash
kubectl describe pod -l app=productpage
kubectl logs $(kubectl get pod -l app=productpage -o jsonpath="{.items[0].metadata.name}") istio-proxy --tail=5
```

Define the [Istio gateway](https://istio.io/docs/reference/config/istio.networking.v1alpha3/#Gateway)
for the application:

```bash
cat samples/bookinfo/networking/bookinfo-gateway.yaml
kubectl apply -f samples/bookinfo/networking/bookinfo-gateway.yaml
sleep 5
```

Confirm the gateway has been created:

```bash
kubectl get gateway,virtualservice
```

Output:

```shell
NAME                                           AGE
gateway.networking.istio.io/bookinfo-gateway   11s

NAME                                          AGE
virtualservice.networking.istio.io/bookinfo   12s
```

Determining the ingress IP and ports when using a node port:

```bash
export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath="{.spec.ports[?(@.name==\"http2\")].nodePort}")
export SECURE_INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath="{.spec.ports[?(@.name==\"https\")].nodePort}")
export INGRESS_HOST=$(kubectl get po -l istio=ingressgateway -n istio-system -o "jsonpath={.items[0].status.hostIP}")
if test -f ../../terraform.tfstate && grep -q vms_public_ip ../../terraform.tfstate; then
  export INGRESS_HOST=$(terraform output -json -state=../../terraform.tfstate | jq -r ".vms_public_ip.value[0]")
fi
export GATEWAY_URL=$INGRESS_HOST:$INGRESS_PORT
echo "$INGRESS_PORT | $SECURE_INGRESS_PORT | $INGRESS_HOST | $GATEWAY_URL | http://$GATEWAY_URL/productpage"
```

Output:

```shell
31380 | 31390 | 172.16.242.170 | 172.16.242.170:31380
```

-----

Confirm the app is running:

```bash
curl -o /dev/null -s -w "%{http_code}\n" -A "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5" http://${GATEWAY_URL}/productpage
```

Output:

```shell
200
```

Create default [destination rules](https://istio.io/docs/reference/config/istio.networking.v1alpha3/#DestinationRule)
(subsets) for the Bookinfo services:

```bash
kubectl apply -f samples/bookinfo/networking/destination-rule-all.yaml
```

Display the destination rules:

```bash
kubectl get destinationrules -o yaml
```

Generate some traffic for next 5 minutes to gether some data:

```bash
siege --log=/tmp/siege --concurrent=1 -q --internet --time=5M $GATEWAY_URL/productpage &
```

Open the browser with these pages:

* [http://localhost:8088/force/forcegraph.html](http://localhost:8088/force/forcegraph.html)
* [http://localhost:8088/dotviz](http://localhost:8088/dotviz)
* [http://localhost:20001](http://localhost:20001) (admin/admin)
* [http://localhost:16686](http://localhost:16686)
* [https://localhost:5601/app/kibana](https://localhost:5601/app/kibana)
* [http://localhost:3000](http://localhost:3000) (Grafana -> Home -> Istio ->
  Istio Performance Dashboard, Istio Service Dashboard,
  Istio Workload Dashboard)

* Open the Bookinfo site in your browser `http://$GATEWAY_URL/productpage`
  and refresh the page several times - you should see different versions
  of reviews shown in productpage, presented in a **round robin style**
  (red stars, black stars, no stars), since we haven’t yet used Istio to control
  the version routing.

![Bookinfo v1, v3, v2](./bookinfo_v1_v3_v2.gif "Bookinfo v1, v3, v2")

* Check the flows in [Kiali](https://www.kiali.io/) graph

![Istio Graph](./istio_kiali_graph.gif "Istio Graph")

-----
