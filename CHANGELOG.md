# Changelog

## [0.2.0](https://github.com/ruzickap/k8s-istio-workshop/compare/v0.1.1...v0.2.0) (2024-07-02)


### Features

* **gh:** add default GitHub repo files ([#134](https://github.com/ruzickap/k8s-istio-workshop/issues/134)) ([e3a4720](https://github.com/ruzickap/k8s-istio-workshop/commit/e3a47209b367a9ff2f9fda7e3d2b70f1514379d6))
* **gh:** add default GitHub repo files ([#137](https://github.com/ruzickap/k8s-istio-workshop/issues/137)) ([191a3a9](https://github.com/ruzickap/k8s-istio-workshop/commit/191a3a95184dc2cd3379f5f7ddad5185414b7cd9))
* **gha:** unify GHA - renovate, megalinter, markdown, and others ([#132](https://github.com/ruzickap/k8s-istio-workshop/issues/132)) ([6c2e643](https://github.com/ruzickap/k8s-istio-workshop/commit/6c2e6436838d23331058723aa8de4f2f28c97afd))
* **gha:** update gha + add ignore-unfixed to trivy ([#149](https://github.com/ruzickap/k8s-istio-workshop/issues/149)) ([e8c6195](https://github.com/ruzickap/k8s-istio-workshop/commit/e8c619561adeac9fe125e1de1525d2fce89dd867))


### Bug Fixes

* add CVE-2024-4068 to .trivyignore.yaml ([#156](https://github.com/ruzickap/k8s-istio-workshop/issues/156)) ([02abe59](https://github.com/ruzickap/k8s-istio-workshop/commit/02abe59e644aca0a6e39d8809067846ede28b351))
* **url:** exclude package-lock.json from URL checks ([#153](https://github.com/ruzickap/k8s-istio-workshop/issues/153)) ([a0a4cb2](https://github.com/ruzickap/k8s-istio-workshop/commit/a0a4cb2bd7195ccf47ab637c2639703fc3c09eff))

## [v0.1.1](https://github.com/ruzickap/k8s-istio-workshop/compare/v0.1.0...v0.1.1) (2021-12-20)

- Improve GitHub Actions [`#85`](https://github.com/ruzickap/k8s-istio-workshop/pull/85)
- Fix linter issues [`#84`](https://github.com/ruzickap/k8s-istio-workshop/pull/84)
- Upgrade GH Actions versions [`#82`](https://github.com/ruzickap/k8s-istio-workshop/pull/82)
- npm update [`#81`](https://github.com/ruzickap/k8s-istio-workshop/pull/81)
- Upgrade action-my-broken-link-checker [`#70`](https://github.com/ruzickap/k8s-istio-workshop/pull/70)
- Fix My Broken Link Checker parameter [`#60`](https://github.com/ruzickap/k8s-istio-workshop/pull/60)
- Add missing Vuepress plugins to config.js [`#59`](https://github.com/ruzickap/k8s-istio-workshop/pull/59)
- Update package-lock.json [`#58`](https://github.com/ruzickap/k8s-istio-workshop/pull/58)
- Fix old Ceph Dashboard link [`#57`](https://github.com/ruzickap/k8s-istio-workshop/pull/57)
- Fix ceph URL (#83) [`23dc4bf`](https://github.com/ruzickap/k8s-istio-workshop/commit/23dc4bfc51cf283eafe8845fba958982cfcd91ca)

## [v0.1.0](https://github.com/ruzickap/k8s-istio-workshop/compare/v0.0.1...v0.1.0) (2020-09-17)

- Add actions/checkout with gh-pages to periodic-broken-link-checks.yml [`#55`](https://github.com/ruzickap/k8s-istio-workshop/pull/55)
- Use Terraform 0.12.x for tests [`#50`](https://github.com/ruzickap/k8s-istio-workshop/pull/50)
- Replace markdown linter [`#41`](https://github.com/ruzickap/k8s-istio-workshop/pull/41)
- Fix GH variables to pass the tests [`#37`](https://github.com/ruzickap/k8s-istio-workshop/pull/37)
- Move to GitHub's Dependabot (version 2) [`#29`](https://github.com/ruzickap/k8s-istio-workshop/pull/29)
- Ignore CHANGELOG.md when doing markdown checks [`#30`](https://github.com/ruzickap/k8s-istio-workshop/pull/30)
- Update README.md [`#2`](https://github.com/ruzickap/k8s-istio-workshop/pull/2)
- fix docker run [`#1`](https://github.com/ruzickap/k8s-istio-workshop/pull/1)
- Fix broken URL [`3eb234b`](https://github.com/ruzickap/k8s-istio-workshop/commit/3eb234ba5d9ddc513037ff2218cf467dcaa35435)
- Update ubuntu from ubuntu-18.04 -&gt; ubuntu-latest [`21f7d8c`](https://github.com/ruzickap/k8s-istio-workshop/commit/21f7d8ce7605794b697b8228567c94458df95cb6)
- Remove command-check due to non-existing rook helm chart (https://charts.rook.io/stable) [`9bbc04f`](https://github.com/ruzickap/k8s-istio-workshop/commit/9bbc04fe38d7a9613e0eb0e25a2c787263886abe)
- Add back the command-check [`b036bf5`](https://github.com/ruzickap/k8s-istio-workshop/commit/b036bf5c539c3dae3ee2651c689b00bda4b328c4)
- Remove command-check [`8f38ff7`](https://github.com/ruzickap/k8s-istio-workshop/commit/8f38ff7c45dfe98fd011dfbf6c4e21fb91611708)
- Use action-yamllint with proper tag "v1" instead of master [`a8b2d5e`](https://github.com/ruzickap/k8s-istio-workshop/commit/a8b2d5e9336d9d89fd6e34743b771430099a06cd)
- Upgrade actions-gh-pages to "v3" [`51d81f8`](https://github.com/ruzickap/k8s-istio-workshop/commit/51d81f862f5f7eed533c47bbbb0122218c8d9064)
- Add comments to .yamllint.yml [`4904728`](https://github.com/ruzickap/k8s-istio-workshop/commit/490472823be913586e6d4d5098aa12ebd4316e81)
- Add comment to .markdownlint.yml [`03969aa`](https://github.com/ruzickap/k8s-istio-workshop/commit/03969aab182c6a147a28131c103f53d76a4fb2a5)
- Add comments to .gitignore [`96ec988`](https://github.com/ruzickap/k8s-istio-workshop/commit/96ec98882572bd81197fec1e4cd557fc2dbe0277)
- Change broken link checker GH repository [`eb71f09`](https://github.com/ruzickap/k8s-istio-workshop/commit/eb71f094b23230fedbe0cb5a5f1a2985f31299a9)
- Periodic broken link checker improved [`5a7709c`](https://github.com/ruzickap/k8s-istio-workshop/commit/5a7709c756c3ac0144ccfac0e9e8af28caf9a517)
- Fix tests to let them run only on master branch [`f818faf`](https://github.com/ruzickap/k8s-istio-workshop/commit/f818fafe88a9c1af43bfca34312c9e0aa4d696a4)
- Fix mdspell [`2554183`](https://github.com/ruzickap/k8s-istio-workshop/commit/25541834bd18adac21d1de37c322a01188d01cdd)
- Allow checks on all branches (not just master) [`16acd5c`](https://github.com/ruzickap/k8s-istio-workshop/commit/16acd5c80f9f1ce2efe7f2e106fa3338caefc5ec)
- GitHub Actions rewritten + necessary code fix [`8a02584`](https://github.com/ruzickap/k8s-istio-workshop/commit/8a0258499e058f9f902d8a8bf284107ab4f6ea4d)
- Upgrading peaceiris/actions-gh-pages to v2.8.0 [`3ff3cf3`](https://github.com/ruzickap/k8s-istio-workshop/commit/3ff3cf367094b7e38294ca77152f7b6e47b53a2a)
- Upgrading peaceiris/actions-gh-pages to v2.6.0 [`1b99599`](https://github.com/ruzickap/k8s-istio-workshop/commit/1b99599c75959f43aa86d90e4d40fd34b43edb7f)
- Upgrading actions/checkout from v1 to v2 [`b6c26ec`](https://github.com/ruzickap/k8s-istio-workshop/commit/b6c26ecdcfea4aaf36ec7fa487ccedbc26875bce)
- Adding repository update command to GH Actions [`0c18e03`](https://github.com/ruzickap/k8s-istio-workshop/commit/0c18e03c261422a49acf66c264e61b650a1543d1)
- Adding "Automerged updates" by Dependabot [`d447a15`](https://github.com/ruzickap/k8s-istio-workshop/commit/d447a15b2bed0d6b6c59089f4b2fa10856e1a63e)
- Set request limit for muffet [`7276a7a`](https://github.com/ruzickap/k8s-istio-workshop/commit/7276a7a224a13abb1e1545b0911c8c405a515753)
- Fix broken url links [`8527003`](https://github.com/ruzickap/k8s-istio-workshop/commit/852700318d6b9329c3d81b21bb9e0f685eb5b825)
- Fix "Build Status" [`d9ef76d`](https://github.com/ruzickap/k8s-istio-workshop/commit/d9ef76da3390b01ad14e67d62ca91254122071c5)
- Istio version increased [`3978a16`](https://github.com/ruzickap/k8s-istio-workshop/commit/3978a169f684800995d841efe454ae5a6e9253a5)
- Adding GitHub Workflow instead of TravisCI [`cdd9249`](https://github.com/ruzickap/k8s-istio-workshop/commit/cdd924977b75c79aac0d360396cc901db04afe50)
- Fix broken links [`ebb653e`](https://github.com/ruzickap/k8s-istio-workshop/commit/ebb653ed6afb00e1164879aa71b20e780633cc06)
- Fix .travis.yml [`8ca7f7a`](https://github.com/ruzickap/k8s-istio-workshop/commit/8ca7f7a8368dcccd497feb60179275cf40832e9a)
- Fix broken links [`d340140`](https://github.com/ruzickap/k8s-istio-workshop/commit/d340140e674ac3bd0564698057494d857708da73)
- Fix TravisCI build - build only master branch [`9476fc3`](https://github.com/ruzickap/k8s-istio-workshop/commit/9476fc3edffbc2a8b39afb9aa48007674a4a9f3e)
- Fix rook installation [`9b40559`](https://github.com/ruzickap/k8s-istio-workshop/commit/9b40559b8c529040b9de1b0ba464cbebe1c37d49)
- Fix TravisCI issue when deploying any branch [`8486d54`](https://github.com/ruzickap/k8s-istio-workshop/commit/8486d548023a145a1c6beded738103986aefb200)
- Fix Servicegraph url [`391abec`](https://github.com/ruzickap/k8s-istio-workshop/commit/391abec109b0bc72ee27169bfa17a8a3d442c913)
- Skip travis tests for gh-pages branch [`899177f`](https://github.com/ruzickap/k8s-istio-workshop/commit/899177fce207d2bf24b45cb07d0c74d780ebfdde)
- Adding docker support (disabled by default) [`edc4fa8`](https://github.com/ruzickap/k8s-istio-workshop/commit/edc4fa86dcfe8e58e1065fc6ffa806e5b7e12341)
- Better image handling (especially form Github) [`4b91e53`](https://github.com/ruzickap/k8s-istio-workshop/commit/4b91e535c95e81f5da775f79e91a722882f67efb)
- ssh-agent docker access improved [`607a903`](https://github.com/ruzickap/k8s-istio-workshop/commit/607a9033c2a3f9232fe35f702ea2e4a1db0dd0f3)
- Adding availability zone to terraform [`6e44244`](https://github.com/ruzickap/k8s-istio-workshop/commit/6e44244e5dcd520b115c15ceadd0012735008bf3)
- TravisCI tests improved [`f6c49a9`](https://github.com/ruzickap/k8s-istio-workshop/commit/f6c49a9db091df240f3127a3e65c523eec6e65ed)
- READMEs changed based on review [`22c2726`](https://github.com/ruzickap/k8s-istio-workshop/commit/22c27266f7d9ad3d20047c6f350e3ef12cd459a2)
- Add "--no-status" to linkchecker [`83f7a80`](https://github.com/ruzickap/k8s-istio-workshop/commit/83f7a807f3a8ae66614b4cfb5e246f66936b0a9b)
- Adding post build link check [`1e8ecf1`](https://github.com/ruzickap/k8s-istio-workshop/commit/1e8ecf1e29dc2d724318b78ba5ed46a60e4f00ca)
- favicon fix [`de220b4`](https://github.com/ruzickap/k8s-istio-workshop/commit/de220b4a9610c0898cc7a44bd8b2686f366a768d)
- Adding more time (sleep) for bookinfo to start up [`c843f0f`](https://github.com/ruzickap/k8s-istio-workshop/commit/c843f0fbee4f58787ce4b3a7f2c1c31b2dd29bb6)
- TravisCI node_js change [`29ff4ed`](https://github.com/ruzickap/k8s-istio-workshop/commit/29ff4ed0a2346ecb01b05ac2c1da0be0be22ed17)

## v0.0.1 (2019-02-26)

- Better way of handling kubectl port-forward on local environment [`af517d1`](https://github.com/ruzickap/k8s-istio-workshop/commit/af517d1cae371543eca2e0dd4b6ad2983bc6e23b)
- READMEs updated [`53fcaaf`](https://github.com/ruzickap/k8s-istio-workshop/commit/53fcaaf295c8efe3446856fe5fa377686f35c403)
- Adding screencasts to all labs [`dc1240c`](https://github.com/ruzickap/k8s-istio-workshop/commit/dc1240c84bf2b03927a1901000b093eba7e9e9f8)
- READMEs updates... [`091fdd5`](https://github.com/ruzickap/k8s-istio-workshop/commit/091fdd53317362692c9c31451f7e2b1b5f9febfa)
- Logo changes [`3ec527e`](https://github.com/ruzickap/k8s-istio-workshop/commit/3ec527ea70bb84fb7a4229277bc795119e293927)
- Moving from istio 1.0.5 -&gt; 1.0.6 [`67725ff`](https://github.com/ruzickap/k8s-istio-workshop/commit/67725ffefc7f1af211bdf7f6612efd0293c49bdb)
- READMEs update [`75df0ea`](https://github.com/ruzickap/k8s-istio-workshop/commit/75df0eae45c50815b6ef6fb129b2b24dd2089331)
- Adding logos [`5ac3de4`](https://github.com/ruzickap/k8s-istio-workshop/commit/5ac3de43e6dfa3562db03fb5a996e737414e029d)
- Adding Istio logo and favicon [`8650b69`](https://github.com/ruzickap/k8s-istio-workshop/commit/8650b6906ad2b48164247c86bd36a9ffcec44112)
- Logos added [`c809a9e`](https://github.com/ruzickap/k8s-istio-workshop/commit/c809a9e2d75564dbf1294b0d112d0e3a5de58520)
- sleep modified... [`7fd0075`](https://github.com/ruzickap/k8s-istio-workshop/commit/7fd0075cbe76b64f5738931c7ff2793adc0b5215)
- Adding the demo-magic script to CI [`ab1d3e9`](https://github.com/ruzickap/k8s-istio-workshop/commit/ab1d3e9b2ef0c0de8402c5319580982ce1b6b6d8)
- READMEs updated, Requirements section improved [`56db728`](https://github.com/ruzickap/k8s-istio-workshop/commit/56db7281abadc4374a5efad05dc2a36b6bfdda9c)
- kubernetes installation moved from docker -&gt; containerd [`03af6d8`](https://github.com/ruzickap/k8s-istio-workshop/commit/03af6d87f8ff3b2166df06298ab3f6998668ec36)
- firefox excution moved from lab-05 -&gt; lab-04 [`06c37f2`](https://github.com/ruzickap/k8s-istio-workshop/commit/06c37f22e9f8933d06ed3ebf95c8d9e9ec6d4500)
- Add '-o wide' to 'kubectl get nodes' command to see the container runtime [`ffc1b37`](https://github.com/ruzickap/k8s-istio-workshop/commit/ffc1b374ef4187d259fe7dce6117753bff2b9f0d)
- READMEs updated, screenshots added [`8bcf14c`](https://github.com/ruzickap/k8s-istio-workshop/commit/8bcf14cc4f7349300195f7fa4db86aedec83d680)
- TravisCI improved by specifying the language [`e651576`](https://github.com/ruzickap/k8s-istio-workshop/commit/e65157639f97f53c396b981b244faed098bae25c)
- Add tmp directory to .gitignore [`dafede2`](https://github.com/ruzickap/k8s-istio-workshop/commit/dafede2a666e57cdc5f810509b9e3ad014139b6c)
- README updated with screenshots, Ceph Dashboard and Cerebro port forwarding [`3d08b28`](https://github.com/ruzickap/k8s-istio-workshop/commit/3d08b28c475168e12df94e7bfdfb02a3b3ff1c00)
- Labs splitted into multiple small parts [`b12cff1`](https://github.com/ruzickap/k8s-istio-workshop/commit/b12cff19a6eed7a25ee899b165caa0b6ad2bae4f)
- Markdown lint improved + related README changes [`dacc02c`](https://github.com/ruzickap/k8s-istio-workshop/commit/dacc02c7e80af54261cc4c68c17c689fea6b88ea)
- Moving ISTIO_VERSION variable from .travis.yml to docs/lab-04/README.md [`007c56a`](https://github.com/ruzickap/k8s-istio-workshop/commit/007c56ab78de5b6b888e7de1ef0f8605e987f07c)
- Fix README in gh-pages branch commited by TravisCI [`c829a43`](https://github.com/ruzickap/k8s-istio-workshop/commit/c829a438fc02b1074d9987b8a15e3eabe21575d8)
- Few more READMEs updates [`402d4ab`](https://github.com/ruzickap/k8s-istio-workshop/commit/402d4abc8f984784d8a16f67610a3e18b6c675f4)
- Moving ISTIO_VERSION variable from tests/ci_test.sh to .travis.yml [`95a7da9`](https://github.com/ruzickap/k8s-istio-workshop/commit/95a7da987b9b18f548be86e30a51c50ce6cbfa0e)
- Missing comma fixed in docs/.vuepress/config.js [`93e0929`](https://github.com/ruzickap/k8s-istio-workshop/commit/93e09291a8b61ce800404754a0c72b555d4a32bb)
- Fix indent in docs/README [`715fac7`](https://github.com/ruzickap/k8s-istio-workshop/commit/715fac73171060708a5ce5633ee2c9b2dbc6c1e8)
- Many document (READMEs) changes [`965f497`](https://github.com/ruzickap/k8s-istio-workshop/commit/965f497afb67728c6c18f9f8a90ba66a84bc526a)
- Fixing k8s-istio-demo -&gt; k8s-istio-workshop [`c3fc4f1`](https://github.com/ruzickap/k8s-istio-workshop/commit/c3fc4f1ac3bf5adb9a533dc3e1d94f332ae64e74)
- Adding workshop link to docs/.vuepress/config.js [`e20fa4b`](https://github.com/ruzickap/k8s-istio-workshop/commit/e20fa4b04e74fa040b84a5068497d178af4db432)
- Adding Istio cleanup to tests/ci_test.sh script [`53a35cc`](https://github.com/ruzickap/k8s-istio-workshop/commit/53a35cc0c330152c66cfea076efd68b84a1859dd)
- Istio version defined (because TravisCI can not get the latest version automatically) [`ed70b43`](https://github.com/ruzickap/k8s-istio-workshop/commit/ed70b436cc468957ff25458bd13c4047710874b5)
- Initial commit [`d4fbf73`](https://github.com/ruzickap/k8s-istio-workshop/commit/d4fbf730dbd11b850044da21350c8dda22ccad9a)
