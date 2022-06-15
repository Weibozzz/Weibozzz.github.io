# ast语法实战
> 未完结

## 定义

## 使用的场景
写 `loader` `plugin` `eslint` 等

## js-loader 实战
### 1. 先写一个壳子
假设现在要写一个解析js的 `loader`
```js
// loader.js
const generator = require('@babel/generator')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse')
const t = require('@babel/types')
function compile (code) {
  //   1. 解析为AST
  const ast = parser.parse(code, { sourceType: 'module' })
  //visitor可以对特定节点进行处理
  const visitor = {
  }
  traverse.default(ast, visitor)
  //   2. 生成代码片段
  return generator.default(ast, {}, code)
}

module.exports = function (code) {
  return compile(code).code
}

```
```js

// main.js 假设解析此文件
const imgPath = '/assets/image/aa.png'
const imgPath1 = 123
const imgPatharr = []
const imgPath2 = 'sfdgsdf'
const imgPath3 = true
function test () {
  return 456
}
test(9, 1, 2, 3)


```

webpack.base.conf.js

```
{
    rules: [
      {
        test: /\.js$/,
        include: [
          resolve('src')
        ],
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: path.resolve(__dirname, './loader.js')
          }
        ]
      }
    ]
}
```
### 2. 解析字符串
```js
// loader.js
const visitor = {
    StringLiteral (path) {
      let { value } = path.node // 找到所有定义的字符串
      path.node.value = value + 12333 // 进行修改，会匹配到 /assets/image/aa.png sfdgsdf,最后我们可以做想要的处理
    },
  }
```
- 比如我们想找到项目中所有的图片，比如找到了一个 `/assets/image/aa.png` ，我们可以进行替换2倍图(`/assets/image/aa@2x.png`)，或者转换webp(`/assets/image/aa.png.webp`)等
- 也可以再此进行网络请求获取此图片，进行压缩获取缩略图，最终再 `img` 标签(也可以封装一个成熟的组件封装此繁琐功能)再图片未加载完毕利用分割获取到 `base64` 让用户先看到模糊的图片外加高斯模糊，图片加载完毕替换即可，例如拼在 `/assets/image/aa.png?$-$data:image/jpg;base64,/9j/ffa……`
### 3. 解析number
```js
// loader.js
const visitor = {
  NumericLiteral (path) {
    let { value } = path.node
    console.log(value) // 可以找出所有的number 123 456 9 1 2 3
    path.node.value = value + 12333 
  },
}
```
### 4. 解析其他
```js
  const visitor = {
    BooleanLiteral (path){
      let { value } = path.node
      console.log('BooleanLiteral', value)
      // path.node.value = false;
    },
    BigIntLiteral  (path){
      let { value } = path.node
      console.log('BigIntLiteral', value)
    },
  }
```
## css-loader 实战
```js
const csstree = require('css-tree')
module.exports = function (code) {
  // parse CSS to AST
  const ast = csstree.parse(code);

  // traverse AST and modify it
  csstree.walk(ast, (node, item, aa) => {
    console.log('type', node.type)
    console.log('name', node.name)
    console.log('value', node.value)
    if (node.type === 'ClassSelector' && node.name === 'h2') {
      node.name = 'hello';
    }
  });

  // generate CSS from AST
  return csstree.generate(ast)
}

```
## 参考

- [babel-traverse](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#babel-traverse)
- [babel-traverse](https://www.babeljs.cn/docs/babel-traverse)
- [babel-types](https://babel.dev/docs/en/babel-types)
- https://juejin.cn/post/7007725841689870366

## 今日图 
