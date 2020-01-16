module.exports = {
  title: '前端知识体系',
  description: '个人总结的前端知识体系',
  themeConfig: {
    sidebar: 'auto',
    search: true,
    smoothScroll: true,
    lastUpdated: 'Last Updated', // string | boolean
    searchMaxSuggestions: 10,
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/Weibozzz/Weibozzz.github.io',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',

    // 以下为可选的编辑链接选项

    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页',
    nav: [
      { text: '个人博客', link: 'http://www.liuweibo.cn' },
    ]
  },
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
    config.module.rules = [
      {
        test: /\.(webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          },
          {
            loader: 'webp-loader',
            options: {}
          },
        ]
      },
      {
        test: /\.(PNG)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          },
        ]
      },
      ...config.module.rules,
    ]
  }
}
