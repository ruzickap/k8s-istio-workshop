(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{248:function(s,t,a){s.exports=a.p+"assets/img/istio.a24267ed.svg"},320:function(s,t,a){s.exports=a.p+"assets/img/istio_kiali_mirroring.73cb43f4.gif"},342:function(s,t,a){"use strict";a.r(t);var e=a(8),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"istio-mirroring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#istio-mirroring"}},[s._v("#")]),s._v(" Istio - Mirroring")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("Screencast: "),t("a",{attrs:{href:"https://asciinema.org/a/229605?autoplay=0&t=492",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://asciinema.org/a/229605?t=492"),t("OutboundLink")],1)])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://istio.io/docs/tasks/traffic-management/mirroring/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://istio.io/docs/tasks/traffic-management/mirroring/"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("Mirroring sends a copy of live traffic to a mirrored service.")]),s._v(" "),t("p",[s._v("First all traffic will go to "),t("code",[s._v("reviews:v1")]),s._v(", then the rule will be applied\nto mirror a portion of traffic to "),t("code",[s._v("reviews:v2")]),s._v(".")]),s._v(" "),t("p",[s._v("Apply the virtual services which will route all traffic to "),t("code",[s._v("reviews:v1")]),s._v(" of each microservice:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl apply "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" samples/bookinfo/networking/virtual-service-all-v1.yaml\n")])])]),t("p",[s._v("Change the route rule to mirror traffic to "),t("code",[s._v("reviews:v2")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" kubectl apply "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" -")]),s._v("\napiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: reviews\nspec:\n  hosts:\n    - reviews\n  http:\n  - route:\n    - destination:\n        host: reviews\n        subset: v1\n      weight: 100\n    mirror:\n      host: reviews\n      subset: v2\nEOF")]),s._v("\n")])])]),t("hr"),s._v(" "),t("p",[s._v("Check the logs on both pods "),t("code",[s._v("reviews:v1")]),s._v(" and "),t("code",[s._v("reviews:v2")]),s._v(" by splitting\nthe "),t("code",[s._v("byobu")]),s._v(" screen and checking logs of the pod:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# Use "Ctrl + Alt then TAB" to switch between screens')]),s._v("\nbyobu\nbyobu-tmux split-window "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Screen 1")]),s._v("\nkubectl logs "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("kubectl get pod "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("reviews,version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v1 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonpath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{.items[0].metadata.name}"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" istio-proxy "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Screen 2")]),s._v("\nkubectl logs "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("kubectl get pod "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("reviews,version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v2 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonpath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{.items[0].metadata.name}"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" istio-proxy "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v("\n")])])]),t("p",[s._v("Do a simple query by refreshing the page in the web browser.")]),s._v(" "),t("p",[s._v("Output:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Request comming to: reviews,version=v1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-02-21T09:50:40.978Z"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET /reviews/0HTTP/1.1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("295")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"python-requests/2.18.4"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fadff2a1-e895-4ff2-a6c6-17c0334a339d"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reviews:9080"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:9080"')]),s._v(" inbound"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9080")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("reviews.default.svc.cluster.local - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".2.21:9080 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.14:34274\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Request comming to: reviews,version=v2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-02-21T09:50:40.988Z"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET /ratings/0HTTP/1.1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("48")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Apache-CXF/3.1.14"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fadff2a1-e895-4ff2-a6c6-17c0334a339d"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ratings:9080"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.244.1.20:9080"')]),s._v(" outbound"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9080")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("v1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ratings.default.svc.cluster.local - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.103")]),s._v(".21.108:9080 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".1.21:37314\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-02-21T09:50:40.977Z"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET /reviews/0HTTP/1.1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("379")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.244.0.14"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"python-requests/2.18.4"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fadff2a1-e895-4ff2-a6c6-17c0334a339d"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reviews-shadow:9080"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:9080"')]),s._v(" inbound"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9080")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("reviews.default.svc.cluster.local - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".1.21:9080 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.14:0\n")])])]),t("p",[s._v("Check the flows in Kiali graph")]),s._v(" "),t("p",[t("img",{attrs:{src:a(320),alt:"Mirroring Kiali Graph",title:"Mirroring Kiali Graph"}})]),s._v(" "),t("hr"),s._v(" "),t("p",[t("img",{attrs:{src:a(248),alt:"Istio",title:"Istio"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);