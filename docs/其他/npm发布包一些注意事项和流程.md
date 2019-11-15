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

## npm包来制作命令行工具的原理
> 用过构建工具的亲们知道，通常通过全局安装一个 xxx-cli 的 npm 包，
就能在命令行用命令进行构建。那么这个 npm 包如何变成一个可执行的命令呢？

1.使用 `npm init` 初始化一个项目目录 `my-cli`。

2.在 `package.json` 中添加或者编辑 `bin` 字段：
```
{
  "name": "my-cli",
  ...,
  "bin": {
    "command-name": "jsfile" // path of jsfile relative to package.json
  },
  ...
}
```
`commandName` 就是命令的名字，`jsfile` 就是当用户键入命令时的处理程序。

3.代码开发。必须在 `jsfile` 文件的第一行写这行命令 `#!/usr/bin/env node`，譬如：
```js
#!/usr/bin/env node
const program = require('commander');
const packageJson = require('../package');

let defaultJsProcessors = [ 'react' ];
let defaultStyleProcessors = [ 'sasslike' ];
let defaultWebpackVersion = '4';

function parseListArgv( val ) {
  if ( val ) {
    return val.split( ',' );
  } else {
    return [];
  }
}

program
  .version( packageJson.version, '-v, --version' )
  .option( '-u, --use-version <version-number>', 'Webpack version' )
  .option( '-j, --js-processors <processors>', 'Specify javascript processors', parseListArgv )
  .option( '-s, --style-processors <processors>', 'Specify style(css,image,fonts) processors', parseListArgv )
  .option( '--no-install', 'Do not install devDependncies package' )
  .parse( process.argv );


let jsProcessors = program.jsProcessors || defaultJsProcessors;
let styleProcessors = program.styleProcessors || defaultStyleProcessors;
let webpackVersion = program.useVersion || defaultWebpackVersion;

if ( webpackVersion=='4' ) {
  // code
} else {
  // code
}
```

4.当发布成功之后，全局安装刚刚发布的包 `npm install -g my-cli`，安装完以后就可以在命令行使用步骤2中的命令了
 `$ command-name`


### Unix-like 平台
当全局安装 `npm` 包的时候，`npm` 会把 `package.json` 中 `bin` 配置的 
`command-name` 添加到系统 `$PATH` 中去。拿 `macOS` 举例，
`npm` 会在 `/usr/local/bin` 下创建一个以 `command-name` 为名字的软链接，指向全局安装下来的 `my-cli` 包下面的
 `js:jsfile`。
（`/usr/local/bin` 是在 `$PATH` 中的）

在命令行键入` command-name` 相当于执行了文本文件 `jsfile`。

在执行的时候碰到第一行 `#!/usr/bin/env node`，这是一个 `shebang` 行。这行告诉系统使用 `node` 去执行当前文件。
（`shebang` 只有在`Unix-like`平台才有）
执行 `js` 文件。这里有一个问题：`#!` 并不是一个符合 `js` 语法的语句，理论上直接执行是会有
 `syntax error` 的。但是 `node` 对 `shebang` 行做了例外处理，所以用 `node` 执行带 `shebang` 行的 `js` 文件是没有问题的。
### Windows 平台
全局安装会把包安装到 `C:\Users\username\AppData\Roaming\npm\node_modules`下面，
然后在` C:\Users\username\AppData\Roaming\npm` 生成一个
以 `command-name` 为名字的 `cmd` 文件：`command-name.cmd`。`（C:\Users\username\AppData\Roaming\npm` 在安装
 `npm` 时被加入到 `%PATH% `中）
在 `Windows` 平台运行 `cmd` 文件是不需要后缀名的，所以当在命令行键入 `command-name `
相当于执行 `C:\Users\username\AppData\Roaming\npm\command-name.cmd`。
为什么有这个 `cmd` 文件，因为 `windows` 平台没有 `shebang`，那么 `command-name.cmd` 
就模拟了 `#!/usr/bin/env node` 的功能，调用 `C:\Users\username\AppData\Roaming\npm\node_modules\my-cli\ jsfile`

### 本地开发 cli 测试
在没有发布到 `npm` 平台，我们在 `package.json` 可以添加

```json
{
   "bin": {
      "command-name": "jsfile"
    }
}
```

安装一来后然后执行 `npm init` ,即可本地使用这个命令

## 引用
- [npm包来制作命令行工具的原理](https://segmentfault.com/a/1190000015218126)
## 今日图 - 猜猜这个是谁？
![e5f879a92a3c190ff5e29dd7146f4611.gif](../../images/e5f879a92a3c190ff5e29dd7146f4611.gif)
