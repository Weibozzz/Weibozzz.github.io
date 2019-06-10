# npm发布包
## 初始化
在[https://www.npmjs.com/](https://www.npmjs.com/)这里注册登录，
起一个名字，比如http-auth-zfb,首先查询是否已存在
```bash
mkdir http-auth-zfb
cd http-auth-zfb
npm init -y
```

## 新建入口文件 index.js

```js
//index.js
module.exports = require('./lib/index');

```
要发布的文件放到lib文件夹下

## 发布
`npm login`登录会填写你在`npmjs.com`注册的用户名密码邮箱等信息。
```bash
npm login
npm publish
```
## 更新发布
只需要更改版本号然后`npm publish`

## 如果发布的有es6代码

新建`src`目录，把原始文件（es6代码），放入`src`,需要`babael`转化
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src --out-dir lib"
  },

"devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-3": "^6.24.1"
  },
  "dependencies": {
    "transform-runtime": "^0.0.0"
  }
```
发布前，执行`npm run build`转化后的代码会在lib下面，更改版本号，在执行`npm publish`
## 错误

`npm ERR! publish Failed PUT 401`
解决过程：

1. 检查仓库是否被设成了淘宝镜像库
`npm config get registry`
2. 如是，则设回原仓库
`npm config set registry=http://registry.npmjs.org`
3. 登录账号（如未登录）
`npm login` 或者添加用户 `npm adduser`

4. 再次发布
`npm publish`

5. 如发布成功，则再次将仓库地址设为淘宝镜像地址
`npm config set registry=https://registry.npm.taobao.org/`


## 今日图 - 猜猜这个是谁？
![e5f879a92a3c190ff5e29dd7146f4611.gif](../../images/e5f879a92a3c190ff5e29dd7146f4611.gif)
