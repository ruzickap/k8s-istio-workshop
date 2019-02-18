module.exports = {
  title: "Istio Workshop",
  description: "Istio workshop running on OpenStack",
  base: '/k8s-istio-workshop/',
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: true,
    repo: 'ruzickap/k8s-istio-workshop',
    docsDir: 'docs',
    editLinks: true,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Istio links',
        items: [
          { text: 'Istio', link: 'https://istio.io/' },
          { text: 'Istio docs', link: 'https://istio.io/docs/' },
          { text: 'Istio demo', link: 'https://github.com/ruzickap/k8s-istio-demo' }
        ]
      }
    ],
    sidebar: [
      '/',
      '/lab-01/',
      '/lab-02/',
      '/lab-03/',
      '/lab-04/',
      '/lab-05/',
      '/lab-06/',
    ]
  },
  plugins: [
    ['@vuepress/medium-zoom'],
    ['@vuepress/back-to-top'],
    ['seo']
  ]
}
