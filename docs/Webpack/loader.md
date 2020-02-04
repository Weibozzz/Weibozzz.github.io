## loader

`webpack` 可以使用 `loader` 来预处理文件。
这允许你打包除 `JavaScript` 之外的任何静态资源。
你可以使用 `Node.js` 来很简单地编写自己的 `loader`。

## 写一个loader例子
`// src/example.html`
我们把这个文件变为 `hey weibozzz!`
```html

Hey [name]!

```
### package.json
```json
{
  "name": "loader",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-jest": "^24.9.0",
    "babel-preset-env": "^1.7.0",
    "jest": "^24.9.0",
    "memory-fs": "^0.5.0",
    "webpack": "^4.41.2"
  },
  "dependencies": {
    "file-loader": "^4.2.0",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10"
  }
}

```
### .babelrc
```
{
  "presets": [[
    "env",
    {
      "targets": {
        "node": "4"
      }
    }
  ]]
}

```
### src/loader.js
```js
// loader-utils(不需要特地安装，装了webpack一套就自带)
const getOptions = require('loader-utils').getOptions

module.exports = function(source) {
  const options = getOptions(this);

  source = source.replace(/\[name\]/g, options.name);

  return source;
}


```
### webpack.config.js
1. 常规方法
```js
const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/example.html',
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: [
          'file-loader?name=[name].[ext]',
          {
            loader: path.resolve(__dirname, './src/loader.js'),
            options: {
              name: '你好'
            }
          }
        ]
      }
    ]
  }
}

``` 

2. 第二种引用方式

`loadername`! 前缀方式 比如有一个txt文件，
我们想通过`raw-loader`来获取整个`txt`文件里面的字符串内容。除了使用统一
`webpack config`配置的方式之外，
我们还可以在引入的时候，用这样的语法来引入：

```js
import txt from "raw-loader!./1.txt";
// txt就是这个文件里面所有的内容
```

其实使用`webpack.config`文件统一配置loader后，最终也是会转成这
种方式使用loader再引入的。支持多个loader，语法: `loader1!loader2!yourfilename`

`query`替代`options`

使用`loadername!` 前缀语法：`raw-loader?a=1&b=2!./1.txt`，等价于`webpack`配置：
```
 {
        test: /^1\.txt$/,
        exclude: /node_modules/,
        use: [
          { loader: "raw-loader", options: { a: '1', b: '2' } },
        ]
 },
```
     


## 引用
- https://webpack.docschina.org/contribute/writing-a-loader/
- https://juejin.im/post/5e3389436fb9a02fef3a707a?utm_source=gold_browser_extension
- [webpack之loader和plugin简介](https://zhuanlan.zhihu.com/p/28245984)

## 结语

分享别人写的 `loader` [async-catch-loader](https://github.com/yeyan1996/async-catch-loader)
