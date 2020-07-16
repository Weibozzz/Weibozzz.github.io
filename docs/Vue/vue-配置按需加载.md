## 版本
vue-cli 4.x

## babel.config.js
```sh
npm install babel-plugin-component -D
```
多个同时配置
`lodash element-ui mini-ui`,另外 `lodash` 需要增加插件

```js
// lodash 要增加的
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
module.exports = {
  configureWebpack: {
    plugins: [
      new LodashModuleReplacementPlugin()
    ]
  }
}
```
```js
// babel.config.js
module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', { 'modules': false }]
  ],
  'plugins': [
    'lodash',
    ['component',
      {
        'libraryName': 'mint-ui',
        'style': true
      },
      'mint-ui'
    ],
    ['component',
      { 'libraryName': 'element-ui', 'styleLibraryName': 'theme-chalk' },
      'element-ui'
    ]
  ]
}

```
## 打包分析
- 配置环境
```
// .env.report
VUE_APP_REPORT=true
NODE_ENV=production

```
- 增加插件
```js
// babel.config.js
module.exports = {
  chainWebpack: config => {
    if (process.env.VUE_APP_REPORT) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(BundleAnalyzerPlugin)
        .init(Plugin => new Plugin())
    }
  }
}
```
- package.json
```json
{
   "scripts": {
      "analyze": "vue-cli-service build --report --mode report"
    }
}
```
