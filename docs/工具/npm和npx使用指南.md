# npx使用
npm v5.2.0引入的一条命令（npx），引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验。
举例：使用`create-react-app`创建一个react项目。
老方法：
```bash
npm install -g create-react-app
create-react-app my-app
```

`npx`方式：
```bash
npx create-react-app my-app
```

这条命令会临时安装 create-react-app 包，命令完成后create-react-app 会删掉，不会出现在 global 中。下次再执行，还是会重新临时安装。

`npx` 会帮你执行依赖包里的二进制文件。
举例来说，之前我们可能会写这样的命令：
```bash
npm i -D webpack
./node_modules/.bin/webpack -v
```

如果你对 bash 比较熟，可能会写成这样：
```bash
npm i -D webpack
`npm bin`/webpack -v
```

有了 npx，你只需要这样：
```bash
npm i -D webpack
npx webpack -v
```

也就是说` npx `会自动查找当前依赖包中的可执行文件，如果找不到，就会去` PATH `里找。如果依然找不到，就会帮你安装！
`npx` 甚至支持运行远程仓库的可执行文件：
npx github:piuccio/cowsay hello

再比如` npx http-server` 可以一句话帮你开启一个静态服务器！（第一次运行会稍微慢一些）
`npx http-server`

指定`node`版本来运行`npm scripts`：
```bash
npx -p node@8 npm run build
```

主要特点：
1. 临时安装可执行依赖包，不用全局安装，不用担心长期的污染。
2. 可以执行依赖包中的命令，安装完成自动运行。
3. 自动加载node_modules中依赖包，不用指定$PATH。
4. 可以指定node版本、命令的版本，解决了不同项目使用不同版本的命令的问题。


# npm使用
## 查看`webpack`所有版本号
```bash
npm view webpack versions  --json

```
## 查看源并设置
```bash
npm config get registry
npm config set registry https://registry.npm.taobao.org
```
## 安装指定版本
```bash
npm i vue-cli@2.9.6 -g
```
## update
```bash
 npm update 模块名
 //当然你也可以update 该模块到指定版本
 npm update 模块名 @版本号
 //如果安装到最新版本可以使用以下命令
 npm install 模块名@latest
```

## 卸载
```bash
npm uninstall vue-cli -g
```
# npm scripts
## 原理

`npm` 脚本的原理非常简单。每当执行`npm run`，就会自动新建一个 `Shell`，在这个 `Shell `里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。

比较特别的是，`npm run`新建的这个 Shell，会将当前目录的`node_modules/.bin`子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。

这意味着，当前目录的node_modules/.bin子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写`mocha test`就可以了。

## 通配符

由于 npm 脚本就是 Shell 脚本，因为可以使用 Shell 通配符。

```bash
"lint": "jshint *.js"
"lint": "jshint **/*.js"
```
上面代码中，`*`表示任意文件名，`**`表示任意一层子目录。

如果要将通配符传入原始命令，防止被 Shell 转义，要将星号转义。

```bash
"test": "tap test/\*.js"
```

## 传参

向 `npm` 脚本传入参数，要使用`--`标明。

```bash
"lint": "jshint **.js"
```
向上面的`npm run lint`命令传入参数，必须写成下面这样。

```bash
$ npm run lint --  --reporter checkstyle > checkstyle.xml
```
也可以在`package.json`里面再封装一个命令。

```bash
"lint": "jshint **.js",
"lint:checkstyle": "npm run lint -- --reporter checkstyle > checkstyle.xml"
```

## 执行顺序
如果 npm 脚本里面需要执行多个任务，那么需要明确它们的执行顺序。

如果是并行执行（即同时的平行执行），可以使用`&`符号。

```bash
$ npm run script1.js & npm run script2.js
```
如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用`&&`符号。

```bash
$ npm run script1.js && npm run script2.js
```

## 钩子
npm 脚本有`pre和post`两个钩子。举例来说，build脚本命令的钩子就是`prebuild和postbuild`。

```bash
"prebuild": "echo I run before the build script",
"build": "cross-env NODE_ENV=production webpack",
"postbuild": "echo I run after the build script"
```
用户执行`npm run build`的时候，会自动按照下面的顺序执行。

```bash
npm run prebuild && npm run build && npm run postbuild
```
因此，可以在这两个钩子里面，完成一些准备工作和清理工作。下面是一个例子。

```bash
"clean": "rimraf ./dist && mkdir dist",
"prebuild": "npm run clean",
"build": "cross-env NODE_ENV=production webpack"
```
npm 默认提供下面这些钩子。

- prepublish，postpublish
- preinstall，postinstall
- preuninstall，postuninstall
- preversion，postversion
- pretest，posttest
- prestop，poststop
- prestart，poststart
- prerestart，postrestart

自定义的脚本命令也可以加上`pre和post`钩子。比如，`myscript`这个脚本命令，也有`premyscript和postmyscript`钩子。不过，双重的`pre和post`无效，比如`prepretest和postposttest`是无效的。

npm 提供一个`npm_lifecycle_event`变量，返回当前正在运行的脚本名称，比如`pretest、test、posttest`等等。所以，可以利用这个变量，在同一个脚本文件里面，为不同的`npm scripts`命令编写代码。请看下面的例子。
```js

const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'test') {
  console.log(`Running the test task!`);
}

if (TARGET === 'pretest') {
  console.log(`Running the pretest task!`);
}

if (TARGET === 'posttest') {
  console.log(`Running the posttest task!`);
}
```
注意，`prepublish`这个钩子不仅会在`npm publish`命令之前运行，还会在`npm install`（不带任何参数）命令之前运行。这种行为很容易让用户感到困惑，所以 npm 4 引入了一个新的钩子`prepare`，行为等同于`prepublish`，而从 `npm 5` 开始，`prepublish`将只在`npm publish`命令之前运行。

## 变量
npm 脚本有一个非常强大的功能，就是可以使用 npm 的内部变量。

首先，通过`npm_package_`前缀，npm 脚本可以拿到`package.json`里面的字段。比如，下面是一个package.json。

```json
{
  "name": "foo",
  "version": "1.2.5",
  "scripts": {
    "view": "node view.js"
  }
}
```
那么，变量`npm_package_name`返回`foo`，变量`npm_package_version`返回`1.2.5`。

```js
// view.js
console.log(process.env.npm_package_name); // foo
console.log(process.env.npm_package_version); // 1.2.5
```
上面代码中，我们通过环境变量`process.env`对象，拿到`package.json`的字段值。如果是` Bash `脚本，可以用`$npm_package_name和$npm_package_version`取到这两个值。

摘自：[http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
## 其他
有时候我们 `npm install` 安装报错信息奇怪，已经找过原因，我们可以试试清楚缓存
```shell script
npm cache clean --force
```
## 今日图 - 老板画饼
![16ac3747430c8cd7.gif](../../images/16ac3747430c8cd7.gif)
