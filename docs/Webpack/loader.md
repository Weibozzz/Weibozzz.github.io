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
const getOptions = require('loader-utils').getOptions

module.exports = function(source) {
  const options = getOptions(this);

  source = source.replace(/\[name\]/g, options.name);

  return source;
}


```
### webpack.config.js

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
## 引用
- https://webpack.docschina.org/contribute/writing-a-loader/
- [webpack之loader和plugin简介](https://zhuanlan.zhihu.com/p/28245984)

## 结语

分享别人写的 `loader` [async-catch-loader](https://github.com/yeyan1996/async-catch-loader)
