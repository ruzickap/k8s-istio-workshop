# Istio - Cleanup

::: tip
Screencast: [https://asciinema.org/a/229605?t=522](https://asciinema.org/a/229605?autoplay=0&t=522)
:::

Remove the Bookinfo application and clean it up (delete the routing rules
and terminate the application pods):

```bash
# Clean everything - remove port-forward, Bookinfo application, all Istio VirtualServices, Gateways, DestinationRules
killall kubectl siege
sed -i "/read NAMESPACE/d" ./samples/bookinfo/platform/kube/cleanup.sh
./samples/bookinfo/platform/kube/cleanup.sh
```

To remove your VMs from Openstack, please run:

```shell
cd ../..
terraform destroy -auto-approve -var-file=terrafrom/openstack/terraform.tfvars terrafrom/openstack
```

![Istio](../.vuepress/public/istio.svg "Istio")
