module.exports = {
  title: 'Stars UI',
  description: '繁星组件库',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/components/toast' },
      { text: 'Github', link: 'https://github.com/zyprepare/growth-stars-ui' },
    ],
    sidebar: [
      {
        title: '组件',
        collapsable: false,
        children: [
          // '/components/',
          '/components/toast',
          '/components/loading',
          '/components/exception',
          '/components/popup',
        ]
      }
    ]
  }
}
