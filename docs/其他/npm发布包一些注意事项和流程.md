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
只需要更改版本号然后`npm publish` ,下面介绍几个自动更新版本号的

### 1. version

每个npm包都有一个 `package.json`，如果要发布包的话，package.json里面的version字段就是决定发包的版本号了。

version字段是这样一个结构： ‘0.0.1’，是有三位的版本号。分别是对应的version里面的：`major`,  `minor`, `patch`。
 也就是说当发布大版本的时候会升级为 `1.0.0`，小版本是`0.1.0`，一些小修复是`0.0.2`

### 2. npm version

为了方便用户更改版本号，npm有`npm version`这个命令来自动更改版本号，同时帮忙commit.
 比如说 当前版本是 `1.1.1`，当执行 `npm version patch -m '[patch]'`的时候，会自动把package.json里面的`version`改为`1.1.2`，同时git会多一个commit log `[patch]`,这次改动便是更改package.json。

如果执行了prepatch，版本号会从`1.1.1`变成 `1.1.2-0`

- 我们称版本号的三位分别是  `大号.中号.小号-预发布号` 

### 3. major | minor | patch 等



| npm version |                                                         功能 |
| ----------- | -----------------------------------------------------------: |
| major       | - 如果没有预发布号，则直接升级一位大号，其他位都置为0 - 如果有预发布号：  -- 中号和小号都为0，则不升级大号，而将预发布号删掉。即2.0.0-1变成2.0.0，这就是预发布的作用   -- 如果中号和小号有任意一个不是0，那边会升级一位大号，其他位都置为0，清空预发布号。即 2.0.1-0变成3.0.0 |
| minor       | - 如果没有预发布号，则升级一位中号，大号不动，小号置为空  - 如果有预发布号:   -- 如果小号为0，则不升级中号，将预发布号去掉   -- 如果小号不为0，同理没有预发布号 |
| patch       | - 如果没有预发布号：直接升级小号，去掉预发布号  - 如果有预发布号：去掉预发布号，其他不动 |
| premajor    |             - 直接升级大号，中号和小号置为0，增加预发布号为0 |
| preminor    |                   - 直接升级中号，小号置为0，增加预发布号为0 |
| prepatch    |                              - 直接升级小号，增加预发布号为0 |
| prerelease  | - 如果没有预发布号：增加小号，增加预发布号为0   - 如果有预发布号，则升级预发布 |



[前端工具]()

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
