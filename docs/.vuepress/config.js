const head = require('./config/head')
const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')
module.exports = {
  lang: 'zh-CN',
  base: process.argv[4] === 'gitee' ? '/weibozzz.github.io/' : '/',
  title: '伟波前端',
  description: '一个记录前端知识的小前端',
  head,
  themeConfig: {
    logo: '/images/avatar.jpg',
    navbar,
    sidebar,
    repo: 'https://github.com/Weibozzz/Weibozzz.github.io',
    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',
    // page meta
    editLinkText: '在 GitHub 上编辑此页',
    // docsRepo: 'https://gitlab.com/owner/name',
    docsBranch: 'master',
    // docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/docs/:path',
    lastUpdatedText: '上次更新',
    contributors: false,
    // contributorsText: '贡献者',
    backToHome: '返回首页',
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleDarkMode: '切换夜间模式',
  },
  locales: {
  },
  plugins: [
  ],
  bundlerConfig: {
    chainWebpack: config => {
      config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/i)
        .use('url-loader')
        .loader('url-loader')
        // .tap(options => Object.assign(options, { limit: 10240 }));
        .tap(options => ({...options, limit: 10240}));
    }
  }
}
