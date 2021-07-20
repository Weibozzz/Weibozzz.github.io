# 从零搭建React全家桶框架教程
## 说明

技术栈均是目前最新的。本文借鉴 [从零搭建React全家桶框架教程](https://github.com/brickspert/blog/issues/1)

- webpack 4.41.2
- Babel 7.x
- redux 4.0.4
- React 16.12.0

## init项目

1. 创建文件夹并进入

   `mkdir react-family && cd react-family`

2. init npm

   `npm init` 按照提示填写项目基本信息

## webpack

1. 安装 `webpack`

   `npm install --save-dev webpack@3`

   Q: 什么时候用`--save-dev`，什么时候用`--save`？

   A: `--save-dev` 是你开发时候依赖的东西，`--save` 是你发布之后还依赖的东西。看[这里](https://segmentfault.com/q/1010000005163089)

2. 根据[webpack文档](https://doc.webpack-china.org/guides/getting-started)编写最基础的配置文件

   新建`webpack`开发配置文件 `touch webpack.dev.config.js`

   `webpack.dev.config.js`

   ```
   const path = require('path');
   
   module.exports = {
    
       /*入口*/
       entry: path.join(__dirname, 'src/index.js'),
       
       /*输出到dist文件夹，输出文件名字为bundle.js*/
       output: {
           path: path.join(__dirname, './dist'),
           filename: 'bundle.js'
       }
   };
   ```

1. 学会使用`webpack`编译文件

   新建入口文件

   `mkdir src && touch ./src/index.js`

   `src/index.js` 添加内容

   `document.getElementById('app').innerHTML = "Webpack works"`

   现在我们执行命令 `webpack --config webpack.dev.config.js`

   > webpack如果没有全局安装，这里会报错哦。命令建议全局安装,同时需要全局安装 webpack-cli

   我们可以看到生成了`dist`文件夹和`bundle.js`。

2. 现在我们测试下~

   `dist`文件夹下面新建一个`index.html`

   `touch ./dist/index.html`

   `dist/index.html`填写内容

   ```
   <!doctype html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Document</title>
   </head>
   <body>
   <div id="app"></div>
   <script type="text/javascript" src="./bundle.js" charset="utf-8"></script>
   </body>
   </html>
   ```

   用浏览器打开`index.html`,可以看到`Webpack works`!

   [![webpack](https://camo.githubusercontent.com/f011eda1205f66f52dea4c7d7d8ae6c0de1c8630/687474703a2f2f6f71636238646a6c772e626b742e636c6f7564646e2e636f6d2f7765627061636b2e706e67)](https://camo.githubusercontent.com/f011eda1205f66f52dea4c7d7d8ae6c0de1c8630/687474703a2f2f6f71636238646a6c772e626b742e636c6f7564646e2e636f6d2f7765627061636b2e706e67)

   现在回头看下，我们做了什么或者说`webpack`做了什么。

   把入口文件 `index.js` 经过处理之后，生成 `bundle.js`。就这么简单。

## 命令优化

Q：每次打包都得在根目录执行这么一长串命令`webpack --config webpack.dev.config.js`,能不打这么长吗？

A：修改`package.json`里面的`script`，增加`dev-build`。

```
package.json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev-build": "webpack --config webpack.dev.config.js"
  }
```

现在我们打包只需要执行`npm run dev-build`就可以啦！

参考地址：

http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html

## babel

> Babel 把用最新标准编写的 JavaScript 代码向下编译成可以在今天随处可用的版本。 这一过程叫做“源码到源码”编译， 也被称为转换编译。

通俗的说，就是我们可以用ES6, ES7等来编写代码，Babel会把他们统统转为ES5。

- [babel-loader](https://github.com/babel/babel-loader)：使用 Babel 转换 JavaScript依赖关系的 Webpack 加载器
- [@babel/core](https://babeljs.io/docs/en/babel-core)：即 babel-core，将 ES6 代码转换为 ES5
- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)：即 babel-preset-env，根据您要支持的浏览器，决定使用哪些 transformations / plugins 和 polyfills，例如为旧浏览器提供现代浏览器的新特性
- [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)：即 babel-preset-react，针对所有 React 插件的 Babel 预设，例如将 JSX 转换为函数

**注：babel 7 使用了 `@babel` 命名空间来区分官方包，因此以前的官方包 babel-xxx 改成了 `@babel/xxx`



`npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react`

新建`babel`配置文件`.babelrc`

`touch .babelrc`

`.babelrc`

```
  {
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

修改`webpack.dev.config.js`，增加`babel-loader`！

```
    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    }
```

现在我们简单测试下，是否能正确转义ES6~

## react

```
npm install --save react react-dom
```

修改 `src/index.js`使用`react`

```
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <div>Hello React!</div>, document.getElementById('app'));
```

执行打包命令`webpack --config webpack.dev.config.js`

打开`index.html` 看效果。

我们简单做下改进，把`Hello React`放到组件里面。体现组件化~

```
cd src
mkdir components
cd components
touch Hello.js
```

按照React语法，写一个Hello组件

```
import React, {Component} from 'react';

export default class Hello extends Component {
    render() {
        return (
            <div>
                Hello,React!
            </div>
        )
    }
}
```

然后让我们修改`src/index.js`，引用`Hello`组件！

```
src/index.js
import React from 'react';
import ReactDom from 'react-dom';
import Hello from './component/Hello';

ReactDom.render(
    <Hello/>, document.getElementById('app'));
```

在**根目录**执行打包命令

```
webpack --config webpack.dev.config.js
```

打开`index.html`看效果咯~

## react-router

```
npm install --save react-router-dom
```

新建`router`文件夹和组件

```
cd src
mkdir router && touch router/router.js
```

按照`react-router`[文档](http://reacttraining.cn/web/guides/quick-start)编辑一个最基本的`router.js`。包含两个页面`home`和`page1`。

```
src/router/router.js
import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Page1 from '../pages/Page1/Page1';


const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;
```

新建页面文件夹

```
cd src
mkdir pages
```

新建两个页面 `Home`,`Page1`

```
cd src/pages
mkdir Home && touch Home/Home.js
mkdir Page1 && touch Page1/Page1.js
```

填充内容：

```
src/pages/Home/Home.js
import React, {Component} from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
                this is home~
            </div>
        )
    }
}
```

Page1.js

```
import React, {Component} from 'react';

export default class Page1 extends Component {
    render() {
        return (
            <div>
                this is Page1~
            </div>
        )
    }
}
```

现在路由和页面建好了，我们在入口文件`src/index.js`引用Router。

修改`src/index.js`

```
import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/router';

ReactDom.render(
    getRouter(), document.getElementById('app'));
```

现在执行打包命令`npm run dev-build`。打开`index.html`查看效果啦！

那么问题来了~我们发现点击‘首页’和‘Page1’没有反应。不要惊慌，这是正常的。

我们之前一直用这个路径访问`index.html`，类似这样：`file:///F:/react/react-family/dist/index.html`。
这种路径了，不是我们想象中的路由那样的路径`http://localhost:3000`~我们需要配置一个简单的WEB服务器，指向
`index.html`~有下面两种方法来实现

1. `Nginx`, `Apache`, `IIS`等配置启动一个简单的的WEB服务器。
2. 使用`webpack-dev-server`来配置启动WEB服务器。

下一节，我们来使用第二种方法启动服务器。这一节的DEMO，先放这里。



# webpack-dev-server

简单来说，`webpack-dev-server`就是一个小型的静态文件服务器。使用它，可以为`webpack`打包生成的资源文件提供Web服务。

```
npm install webpack-dev-server --save-dev
```

> 2017.11.16补充：这里webpack-dev-server需要全局安装，要不后面用的时候要写相对路径。需要再执行这个 `npm install webpack-dev-server@2 -g`

修改`webpack.dev.config.js`,增加`webpack-dev-server`的配置。

```
webpack.dev.config.js
    devServer: {
        contentBase: path.join(__dirname, './dist')
    }
```

现在执行

```
webpack-dev-server --config webpack.dev.config.js
```

浏览器打开[http://localhost:8080](http://localhost:8080/)，OK,现在我们可以点击`首页`,`Page1`了，
看URL地址变化啦！我们看到`react-router`已经成功了哦。

Q: `--content-base`是什么？

A：`URL的根目录。如果不设定的话，默认指向项目根目录。`

**重要提示：webpack-dev-server编译后的文件，都存储在内存中，我们并不能看见的。你可以删除之前遗留的文件dist/bundle.js，仍然能正常打开网站！**

每次执行`webpack-dev-server --config webpack.dev.config.js`,要打很长的命令，我们修改`package.json`，增加`script->start`:

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev-build": "webpack --config webpack.dev.config.js",
    "start": "webpack-dev-server --config webpack.dev.config.js"
  }
```

下次执行`npm start`就可以了。

既然用到了`webpack-dev-server`，我们就看看[它的其他的配置项](https://doc.webpack-china.org/configuration/dev-server)。
看了之后，发现有几个我们可以用的。

- color（CLI only） `console`中打印彩色日志
- historyApiFallback 任意的`404`响应都被替代为`index.html`。有什么用呢？你现在运行
  `npm start`，然后打开浏览器，访问`http://localhost:8080`,然后点击`Page1`到链接`http://localhost:8080/page1`，
  然后刷新页面试试。是不是发现刷新后`404`了。为什么？`dist`文件夹里面并没有`page1.html`,当然会`404`了，所以我们需要配置
  `historyApiFallback`，让所有的`404`定位到`index.html`。
- host 指定一个`host`,默认是`localhost`。如果你希望服务器外部可以访问，指定如下：`host: "0.0.0.0"`。比如你用手机通过IP访问。
- hot 启用`Webpack`的模块热替换特性。关于热模块替换，我下一小节专门讲解一下。
- port 配置要监听的端口。默认就是我们现在使用的`8080`端口。
- proxy 代理。比如在 `localhost:3000` 上有后端服务的话，你可以这样启用代理：

```
    proxy: {
      "/api": "http://localhost:3000"
    }
```

- progress（CLI only） 将编译进度输出到控制台。

根据这几个配置，修改下我们的`webpack-dev-server`的配置~

```
webpack.dev.config.js
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    }
```

`CLI ONLY`的需要在命令行中配置

```
package.json
"start": "webpack-dev-server --config webpack.dev.config.js --color --progress"
```

现在我们执行`npm start` 看看效果。是不是看到打包的时候有百分比进度？在`http://localhost:8080/page1`页面刷新是不是没问题了？
用手机通过局域网IP是否可以访问到网站？

# 模块热替换（Hot Module Replacement）

到目前，当我们修改代码的时候，浏览器会自动刷新，不信你可以去试试。（如果你的不会刷新，看看这个[调整文本编辑器](https://github.com/brickspert/blog/issues/1#editor)）

我相信看这个教程的人，应该用过别人的框架。我们在修改代码的时候，浏览器不会刷新，只会更新自己修改的那一块。我们也要实现这个效果。

我们看下[webpack模块热替换](https://doc.webpack-china.org/guides/hot-module-replacement)教程。

我们接下来要这么修改

```
package.json` 增加 `--hot
"start": "webpack-dev-server --config webpack.dev.config.js --color --progress --hot"
```

`src/index.js` 增加`module.hot.accept()`,如下。当模块更新的时候，通知`index.js`。

```
src/index.js
import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/router';

if (module.hot) {
    module.hot.accept();
}

ReactDom.render(
    getRouter(), document.getElementById('app'));
```

现在我们执行`npm start`，打开浏览器，修改`Home.js`,看是不是不刷新页面的情况下，内容更新了？惊不惊喜？意不意外？

**做模块热替换，我们只改了几行代码，非常简单的。纸老虎一个~**

现在我需要说明下我们命令行使用的`--hot`，可以通过配置`webpack.dev.config.js`来替换，
向文档上那样,修改下面三处。但我们还是用`--hot`吧。下面的方式我们知道一下就行，我们不用。同样的效果。

```
const webpack = require('webpack');

devServer: {
    hot: true
}

plugins:[
     new webpack.HotModuleReplacementPlugin()
]
```

`HRM`配置其实有两种方式，一种`CLI`方式，一种`Node.js API`方式。我们用到的就是`CLI`方式，比较简单。
`Node.js API`方式，就是建一个`server.js`等等，网上大部分教程都是这种方式，这里不做讲解了。

你以为模块热替换到这里就结束了？no~~no~~no~

上面的配置对`react`模块的支持不是很好哦。

例如下面的`demo`，当模块热替换的时候，`state`会重置，这不是我们想要的。

修改`Home.js`,增加计数`state`

```
src/pages/Home/Home.js
import React, {Component} from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
            <div>
                this is home~<br/>
                当前计数：{this.state.count}<br/>
                <button onClick={() => this._handleClick()}>自增</button>
            </div>
        )
    }
}
```

你可以测试一下，当我们修改代码的时候，`webpack`在更新页面的时候，也把`count`初始为0了。

为了在`react`模块更新的同时，能保留`state`等页面中其他状态，我们需要引入[react-hot-loader](https://github.com/gaearon/react-hot-loader)~

Q:　请问`webpack-dev-server`与`react-hot-loader`两者的热替换有什么区别？

A: 区别在于`webpack-dev-serve`r自己的`--hot`模式只能即时刷新页面，但状态保存不住。因为`React`有一些自己语法(JSX)是`HotModuleReplacementPlugin`搞不定的。
而`react-hot-loader`在`--hot`基础上做了额外的处理，来保证状态可以存下来。（来自[segmentfault](https://segmentfault.com/q/1010000005612845)）

下面我们来加入`react-hot-loader v4`,

安装依赖

```
npm install react-hot-loader --save-dev
```

根据[文档](https://github.com/gaearon/react-hot-loader#getting-started)，
我们要做如下几个修改~

1. `.babelrc` 增加 `react-hot-loader/babel`

```
.babelrc
{
  "presets": [
    "es2015",
    "react",
    "stage-0"
  ],
  "plugins": [
    "react-hot-loader/babel"
  ]
}
```

1. `webpack.dev.config.js`入口增加`react-hot-loader/patch`

```
webpack.dev.config.js
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ]
```

1. `src/index.js`修改如下

```
src/index.js
import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/router';

if (module.hot) {
  module.hot.accept();
}
ReactDom.render(
  getRouter(), document.getElementById('app'));

```

现在，执行`npm start`，试试。是不是修改页面的时候，`state`不更新了？

2. `src/Page1/Page1.js`修改如下

   ```JS
   import React, {Component} from 'react';
   import { hot } from 'react-hot-loader/root';
   
   class Home extends Component {
     render() {
       return (
         <div>
           this is page1~
         </div>
       )
     }
   }
   export default hot(Home)
   
   ```

3. `src/Home/Home.js` 修改如下

   ```js
   import React, {Component} from 'react';
   import { hot } from 'react-hot-loader/root';
   class Home extends Component {
     constructor(props) {
       super(props);
       this.state = {
         count: 0
       }
     }
   
     _handleClick() {
       this.setState({
         count: ++this.state.count
       });
     }
   
     render() {
       return (
         <div>
           this is home~<br/>
           当前计数：{this.state.count}<br/>
           <button onClick={() => this._handleClick()}>自增</button>
         </div>
       )
     }
   }
   export default hot(Home)
   
   ```

   

### 使用 hooks

[文档](https://github.com/gaearon/react-hot-loader#hook-support)

1. `src/Pages/Hooks/Hooks.js` 

   ```js
   import React, { useState, useEffect } from 'react';
   import { hot } from 'react-hot-loader/root';
   const useGithub = userName => {
     const [user, setUser] = useState();
     useEffect(() => {
       fetch(`https://api.github.com/users/${userName}`)
         .then(r => r.json())
         .then(setUser);
     }, [userName]);
     return user;
   };
   function App() {
     const user = useGithub('weibozzz');
     if (!user) {
       return <div>Loading...</div>;
     }
     return (
       <div>
         Hello <b>{user.login}</b>
         <p>{user.bio}</p>
       </div>
     );
   }
   export default hot(App);
   
   ```

   

2. `src/router/router.js`

```js
import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Page1 from '../pages/Page1/Page1';
import Hook from '../pages/Hooks/Hooks'

const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/page1">Page1</Link></li>
        <li><Link to="/hook">Hook2</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/page1" component={Page1}/>
        <Route path="/hook" component={Hook}/>
      </Switch>
    </div>
  </Router>
);

export default getRouter;

```



3. `webpack.dev.config.js` 避免出现黄色警告

```js
const path = require('path');
const webpack = require('webpack')

module.exports = {
	...
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
 ...
};

```



- https://github.com/gatsbyjs/gatsby/issues/11934

**注意：您不能在类组件中使用 Hooks ，但是您绝对可以在组件树中，将类和函数式组件混合在一起使用。组件是类还是使用Hook的函数是该组件的实现细节** http://react.html.cn/docs/hooks-faq.html

# 文件路径优化

做到这里，我们简单休息下。做下优化~

在之前写的代码中，我们引用组件，或者页面时候，写的是相对路径~

比如`src/router/router.js`里面，引用`Home.js`的时候就用的相对路径

```
import Home from '../pages/Home/Home';
```

webpack提供了一个别名配置，就是我们无论在哪个路径下，引用都可以这样

```
import Home from 'pages/Home/Home';
```

下面我们来配置下，修改`webpack.dev.config.js`，增加别名~

```
webpack.dev.config.js
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router')
        }
    }
```

然后我们把之前使用的绝对路径统统改掉。

```
src/router/router.js
import Home from 'pages/Home/Home';
import Page1 from 'pages/Page1/Page1';
src/index.js
import getRouter from 'router/router';
```

我们这里约定，下面，我们会默认配置需要的别名路径，不再做重复的讲述哦。

# redux

`npm install redux -S`

接下来，我们就要就要就要集成`redux`了。

要对`redux`有一个大概的认识，可以阅读阮一峰前辈的[Redux 入门教程（一）：基本用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)

如果要对`redux`有一个非常详细的认识，我推荐阅读[中文文档](http://cn.redux.js.org/index.html)，写的非常好。读了这个教程，有一个非常深刻的感觉，`redux`并没有任何魔法。

**不要被各种关于 reducers, middleware, store 的演讲所蒙蔽 ---- Redux 实际是非常简单的。**

当然，我这篇文章是写给新手的，如果看不懂上面的文章，或者不想看，没关系。先会用，多用用就知道原理了。

开始整代码！我们就做一个最简单的计数器。自增，自减，重置。

先安装`redux` `npm install --save redux`

初始化目录结构

```
cd src
mkdir redux
cd redux
mkdir actions
mkdir reducers
touch reducers.js
touch store.js
touch actions/counter.js
touch reducers/counter.js
```

先来写`action`创建函数。**通过action创建函数，可以创建action~**
`src/redux/actions/counter.js`

```
/*action*/

export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const RESET = "counter/RESET";

export function increment() {
    return {type: INCREMENT}
}

export function decrement() {
    return {type: DECREMENT}
}

export function reset() {
    return {type: RESET}
}
```

再来写`reducer`,**reducer是一个纯函数，接收action和旧的state,生成新的state.**

```
src/redux/reducers/counter.js
import {INCREMENT, DECREMENT, RESET} from '../actions/counter';

/*
* 初始化state
 */

const initState = {
    count: 0
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case DECREMENT:
            return {
                count: state.count - 1
            };
        case RESET:
            return {count: 0};
        default:
            return state
    }
}
```

一个项目有很多的`reducers`,我们要把他们整合到一起

```
src/redux/reducers.js
import counter from './reducers/counter';

export default function combineReducers(state = {}, action) {
    return {
        counter: counter(state.counter, action)
    }
}
```

到这里，我们必须再理解下一句话。

**reducer就是纯函数，接收state 和 action，然后返回一个新的 state。**

看看上面的代码，无论是`combineReducers`函数也好，还是`reducer`函数也好，都是接收`state`和`action`，
返回更新后的`state`。区别就是`combineReducers`函数是处理整棵树，`reducer`函数是处理树的某一点。

接下来，我们要创建一个`store`。

前面我们可以使用 `action` 来描述“发生了什么”，使用`action`创建函数来返回`action`。

还可以使用 `reducers` 来根据 `action` 更新 `state` 。

那我们如何提交`action`？提交的时候，怎么才能触发`reducers`呢？

`store` 就是把它们联系到一起的对象。`store` 有以下职责：

- 维持应用的 `state`；
- 提供 `getState()` 方法获取 `state`；
- 提供 `dispatch(action)` 触发`reducers`方法更新 `state`；
- 通过` subscribe(listener)` 注册监听器;
- 通过 `subscribe(listener)` 返回的函数注销监听器。

```
src/redux/store.js
import {createStore} from 'redux';
import combineReducers from './reducers.js';

let store = createStore(combineReducers);

export default store;
```

到现在为止，我们已经可以使用`redux`了~

下面我们就简单的测试下

```
cd src
cd redux
touch testRedux.js
src/redux/testRedux.js
import {increment, decrement, reset} from './actions/counter';

import store from './store';

// 打印初始状态
console.log(store.getState());

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// 发起一系列 action
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

// 停止监听 state 更新
unsubscribe();
```

当前文件夹执行命令

```
webpack testRedux.js 

node dist/main.js
```

是不是看到输出了`state`变化？

```
{ counter: { count: 0 } }
{ counter: { count: 1 } }
{ counter: { count: 0 } }
{ counter: { count: 0 } }
```

做这个测试，就是为了告诉大家，`redux`和`react`没关系，虽说他俩能合作。

到这里，我建议你再理下`redux`的数据流，看看[这里](http://cn.redux.js.org/docs/basics/DataFlow.html)。

1. 调用`store.dispatch(action)`提交`action`。
2. `redux store`调用传入的`reducer`函数。把当前的`state`和`action`传进去。
3. 根 `reducer` 应该把多个子 `reducer` 输出合并成一个单一的 `state` 树。
4. `Redux store` 保存了根 `reducer` 返回的完整 `state` 树。

就是酱紫~~

这会`webpack.dev.config.js`路径别名增加一下，后面好写了。

```
webpack.dev.config.js
          alias: {
              ...
              actions: path.join(__dirname, 'src/redux/actions'),
              reducers: path.join(__dirname, 'src/redux/reducers')
          }
  
```

把前面的相对路径都改改。

### react-redux

`npm install --save react-redux`

下面我们开始搭配`react`使用。

写一个`Counter`页面

```
cd src/pages
mkdir Counter
touch Counter/Counter.js
src/pages/Counter/Counter.js

```

```js
import React, {Component} from 'react';

export default class Counter extends Component {
    render() {
        return (
            <div>
                <div>当前计数为(显示redux计数)</div>
                <button onClick={() => {
                    console.log('调用自增函数');
                }}>自增
                </button>
                <button onClick={() => {
                    console.log('调用自减函数');
                }}>自减
                </button>
                <button onClick={() => {
                    console.log('调用重置函数');
                }}>重置
                </button>
            </div>
        )
    }
}
```



修改路由，增加`Counter`

```
// src/router/router.js

```

```js
import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Page1 from '../pages/Page1/Page1';
import Hook from '../pages/Hooks/Hooks'
import Counter from 'pages/Counter/Counter';


const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/page1">Page1</Link></li>
        <li><Link to="/hook">Hook2</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/page1" component={Page1}/>
        <Route path="/hook" component={Hook}/>
        <Route path="/counter" component={Counter}/>
      </Switch>
    </div>
  </Router>
);

export default getRouter;


```



npm start`看看效果。

下一步，我们让`Counter`组件和`Redux`联合起来。使`Counter`能获得到`Redux`的`state`，并且能发射`action`。

当然我们可以使用刚才测试`testRedux`的方法，手动监听~手动引入`store`~但是这肯定很麻烦哦。

`react-redux`提供了一个方法`connect`。

> 容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。你可以手工来开发容器组件，但建议使用 React Redux 库的 connect() 方法来生成，这个方法做了性能优化来避免很多不必要的重复渲染。

`connect`接收两个参数，一个`mapStateToProps`,就是把`redux`的`state`，转为组件的`Props`，还有一个参数是`mapDispatchToprops`,
就是把发射`actions`的方法，转为`Props`属性函数。

先来安装`react-redux`



```js
// src/pages/Counter/Counter.js
import React, {Component} from 'react';
import {increment, decrement, reset} from 'actions/counter';
import {connect} from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <div>当前计数为({this.props.counter.count})</div>
        <button onClick={this.props.increment}>自增
        </button>
        <button onClick={this.props.decrement}>自减
        </button>
        <button onClick={this.props.reset}>重置
        </button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    reset: () => {
      dispatch(reset())
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter)

```



下面我们要传入`store`

> 所有容器组件都可以访问 Redux store，所以可以手动监听它。一种方式是把它以 props 的形式传入到所有容器组件中。但这太麻烦了，因为必须要用 store 把展示组件包裹一层，仅仅是因为恰好在组件树中渲染了一个容器组件。

> 建议的方式是使用指定的 React Redux 组件 来 魔法般的 让所有容器组件都可以访问 store，而不必显示地传递它。只需要在渲染根组件时使用即可。

```
// src/index.js
```

```js
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux'
import store from './redux/store'

import getRouter from './router/router';

if (module.hot) {
  module.hot.accept();
}
renderWithHotReload(getRouter())
function renderWithHotReload(RootElement) {
  ReactDom.render(
    <Provider store={store}>
      {RootElement}
    </Provider>,
    document.getElementById('app')
  )
}

```



到这里我们就可以执行`npm start`，打开localhost:8080/counter看效果了。

这里我们再缕下（可以读[React 实践心得：react-redux 之 connect 方法详解](http://taobaofed.org/blog/2016/08/18/react-redux-connect/)）

1. `Provider`组件是让所有的组件可以访问到`store`。不用手动去传。也不用手动去监听。
2. `connect`函数作用是从 `Redux state` 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。也传递`dispatch(action)`函数到`props`。

接下来，我们要说异步`action`

参考地址： http://cn.redux.js.org/docs/advanced/AsyncActions.html

想象一下我们调用一个异步`get`请求去后台请求数据：

1. 请求开始的时候，界面转圈提示正在加载。`isLoading`置为`true`。
2. 请求成功，显示数据。`isLoading`置为`false`,`data`填充数据。
3. 请求失败，显示失败。`isLoading`置为`false`，显示错误信息。

下面，我们以向后台请求用户基本信息为例。

1. 我们先创建一个`user.json`，等会请求用，相当于后台的API接口。

```
cd dist
mkdir api
cd api
touch user.json
dist/api/user.json
{
  "name": "brickspert",
  "intro": "please give me a star"
}
```

1. 创建必须的`action`创建函数。

```
cd src/redux/actions
touch userInfo.js
src/redux/actions/userInfo.js
export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

function getUserInfoRequest() {
    return {
        type: GET_USER_INFO_REQUEST
    }
}

function getUserInfoSuccess(userInfo) {
    return {
        type: GET_USER_INFO_SUCCESS,
        userInfo: userInfo
    }
}

function getUserInfoFail() {
    return {
        type: GET_USER_INFO_FAIL
    }
}
```

我们创建了请求中，请求成功，请求失败三个`action`创建函数。

1. 创建`reducer`

再强调下，`reducer`是根据`state`和`action`生成新`state`的**纯函数**。

```
cd src/redux/reducers
touch userInfo.js
src/redux/reducers/userInfo.js
import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL} from 'actions/userInfo';


const initState = {
    isLoading: false,
    userInfo: {},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                userInfo: {},
                errorMsg: ''
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userInfo: action.userInfo,
                errorMsg: ''
            };
        case GET_USER_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                userInfo: {},
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}
```

**这里的...state语法，是和别人的Object.assign()起同一个作用，合并新旧state。我们这里是没效果的，但是我建议都写上这个哦**

组合`reducer`

```
src/redux/reducers.js
import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';

export default function combineReducers(state = {}, action) {
    return {
        counter: counter(state.counter, action),
        userInfo: userInfo(state.userInfo, action)
    }
}
```

1. 现在有了

   ```
   action
   ```

   ，有了

   ```
   reducer
   ```

   ，我们就需要调用把

   ```
   action
   ```

   里面的三个

   ```
   action
   ```

   函数和网络请求结合起来。

   - 请求中 `dispatch getUserInfoRequest`
   - 请求成功 `dispatch getUserInfoSuccess`
   - 请求失败 `dispatch getUserInfoFail`

`src/redux/actions/userInfo.js`增加

```
export function getUserInfo() {
    return function (dispatch) {
        dispatch(getUserInfoRequest());

        return fetch('http://localhost:8080/api/user.json')
            .then((response => {
                return response.json()
            }))
            .then((json) => {
                    dispatch(getUserInfoSuccess(json))
                }
            ).catch(
                () => {
                    dispatch(getUserInfoFail());
                }
            )
    }
}
```

我们这里发现，别的`action`创建函数都是返回`action`对象：

```
{type: xxxx}
```

但是我们现在的这个`action`创建函数 `getUserInfo`则是返回函数了。

为了让`action`创建函数除了返回`action`对象外，还可以返回函数，我们需要引用`redux-thunk`。

```
npm install --save redux-thunk
```

这里涉及到`redux`中间件`middleware`，我后面会讲到的。你也可以读这里[Middleware](http://cn.redux.js.org/docs/advanced/Middleware.html)。

简单的说，中间件就是`action`在到达`reducer`，先经过中间件处理。我们之前知道`reducer`能处理的`action`只有这样的`{type:xxx}`，所以我们使用中间件来处理
函数形式的`action`，把他们转为标准的`action`给`reducer`。这是`redux-thunk`的作用。
使用`redux-thunk`中间件

我们来引入`redux-thunk`中间件

```
src/redux/store.js
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducers.js';

let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));

export default store;
```

到这里，`redux`这边OK了，我们来写个组件验证下。

```
cd src/pages
mkdir UserInfo
cd UserInfo
touch UserInfo.js
src/pages/UserInfo/UserInfo.js
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from "actions/userInfo";

class UserInfo extends Component {

    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        return (
            <div>
                {
                    isLoading ? '请求信息中......' :
                        (
                            errorMsg ? errorMsg :
                                <div>
                                    <p>用户信息：</p>
                                    <p>用户名：{userInfo.name}</p>
                                    <p>介绍：{userInfo.intro}</p>
                                </div>
                        )
                }
                <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
            </div>
        )
    }
}

export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo);
```

这里你可能发现`connect`参数写法不一样了，`mapStateToProps`函数用了`es6`简写，`mapDispatchToProps`用了`react-redux`提供的简单写法。

增加路由
`src/router/router.js`

```
import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Page1 from '../pages/Page1/Page1';
import Hook from '../pages/Hooks/Hooks'
import UserInfo from 'pages/UserInfo/UserInfo';
import Counter from 'pages/Counter/Counter';


const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/page1">Page1</Link></li>
        <li><Link to="/hook">Hook2</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/userInfo">UserInfo</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/page1" component={Page1}/>
        <Route path="/hook" component={Hook}/>
        <Route path="/counter" component={Counter}/>
        <Route path="/userInfo" component={UserInfo}/>
      </Switch>
    </div>
  </Router>
);

export default getRouter;

```

现在你可以执行`npm start`去看效果啦！

到这里`redux`集成基本告一段落了，后面我们还会有一些优化。

## combinReducers优化

`redux`提供了一个`combineReducers`函数来合并`reducer`，不用我们自己合并哦。写起来简单，但是意思和我们
自己写的`combinReducers`也是一样的。

```
src/redux/reducers.js
import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';


export default combineReducers({
    counter,
    userInfo
});
```

# devtool优化

现在我们发现一个问题，代码哪里写错了，浏览器报错只报在`build.js`第几行。

这让我们分析错误无从下手。看[这里](https://doc.webpack-china.org/configuration/devtool)。

我们增加`webpack`配置`devtool`！

`webpack.dev.config.js`增加

```
devtool: 'inline-source-map'
```

# 编译css

```
npm install css-loader style-loader --save-dev
```

`css-loader`使你能够使用类似`@import` 和 `url(...)`的方法实现 `require()`的功能；

`style-loader`将所有的计算后的样式加入页面中； 二者组合在一起使你能够把样式表嵌入`webpack`打包后的JS文件中。

`webpack.dev.config.js` `rules`增加

```
{
   test: /\.css$/,
   use: ['style-loader', 'css-loader']
}
```

我们用`Page1`页面来测试下

```
cd src/pages/Page1
touch Page1.css
src/pages/Page1/Page1.css
.page-box {
    border: 1px solid red;
}
src/pages/Page1/Page1.js
import React, {Component} from 'react';

import './Page1.css';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">
                this is page1~
            </div>
        )
    }
}
```

好了，现在`npm start`去看效果吧。

# 编译less

[https://webpack.docschina.org/loaders/less-loader/#%E8%A6%81%E6%B1%82](https://webpack.docschina.org/loaders/less-loader/#要求)

先说这里为什么不用`scss`，因为`Windows`使用`node-sass`，需要先安装[ Microsoft Windows SDK for Windows 7 and .NET Framework 4](https://www.microsoft.com/en-us/download/details.aspx?id=8279)。
我怕有些人copy这份代码后，没注意，运行不起来。所以这里不用`scss`了，如果需要，自行编译哦。

```
npm install less less-loader --save-dev
```

`css-loader`使你能够使用类似`@import` 和 `url(...)`的方法实现 `require()`的功能；

`style-loader`将所有的计算后的样式加入页面中； 二者组合在一起使你能够把样式表嵌入`webpack`打包后的JS文件中。

`webpack.dev.config.js` `rules`增加

```
{
   test: /\.less$/,
   use: ['style-loader', 'css-loader', 'less-loader']
}
```

我们用`Page1`页面来测试下

```
cd src/pages/Page1
touch Page1.css
src/pages/Page1/Page1.less
.page-box {
    border: 1px solid green;
}
src/pages/Page1/Page1.js
import React, {Component} from 'react';

import './Page1.css';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">
                this is page1~
            </div>
        )
    }
}
```

好了，现在`npm start`去看效果吧。

# 编译图片

```
npm install --save-dev url-loader file-loader
```

`webpack.dev.config.js` `rules`增加

```
{
    test: /\.(png|jpg|jpeg|gif)$/,
    use: [{
        loader: 'url-loader',
        options: {
            limit: 8192
        }
    }]
}
```

`options limit 8192`意思是，小于等于8K的图片会被转成`base64`编码，直接插入HTML中，减少`HTTP`请求。

我们来用`Page1` 测试下

```
cd src/pages/Page1
mkdir images
```

给`images`文件夹放一个图片。

修改代码，引用图片

```
src/pages/Page1/Page1.js
import React, {Component} from 'react';

import './Page1.css';

import image from './images/weibozzz.jpeg';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">
                this is page1~
                <img src={image}/>
            </div>
        )
    }
}
```

可以去看看效果啦。

# 按需加载

为什么要实现按需加载？

我们现在看到，打包完后，所有页面只生成了一个`build.js`,当我们首屏加载的时候，就会很慢。因为他也下载了别的页面的`js`了哦。

如果每个页面都打包了自己单独的JS，在进入自己页面的时候才加载对应的js，那首屏加载就会快很多哦。

在 `react-router 2.0`时代， 按需加载需要用到的最关键的一个函数，就是`require.ensure()`，它是按需加载能够实现的核心。

在4.0版本，官方放弃了这种处理按需加载的方式，选择了一个更加简洁的处理方式。

[传送门](https://reacttraining.com/react-router/web/guides/code-splitting)

根据官方示例，我们开搞

1. `npm install bundle-loader --save-dev`
2. 新建`bundle.js`

```
cd src/router
touch Bundle.js
src/router/Bundle.js
import React, {Component} from 'react'

class Bundle extends Component {
    state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null
    };

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        });
        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }

    render() {
        return this.props.children(this.state.mod)
    }
}

export default Bundle;
```

1. 改造路由器

```
src/router/router.js
import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';

const Loading = function () {
    return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userinfo">UserInfo</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={createComponent(Home)}/>
                <Route path="/page1" component={createComponent(Page1)}/>
                <Route path="/counter" component={createComponent(Counter)}/>
                <Route path="/userinfo" component={createComponent(UserInfo)}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;
```

现在你可以`npm start`，打开浏览器，看是不是进入新的页面，都会加载自己的JS的~

但是你可能发现，名字都是`0.bundle.js`这样子的，这分不清楚是哪个页面的`js`呀！

我们修改下`webpack.dev.config.js`,加个`chunkFilename`。`chunkFilename`是除了`entry`定义的入口`js`之外的`js`~

```
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
        chunkFilename: '[name].js'
    }
```

现在你运行发现名字变成`home.js`,这样的了。棒棒哒！

那么问题来了`home`是在哪里设置的？`webpack`怎么知道他叫`home`？

其实在这里我们定义了，`router.js`里面

```
import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
```

看到没。这里有个`name=home`。嘿嘿。

**报错： Support for the experimental syntax 'classProperties' isn't currently enabled **

**解决： https://github.com/babel/babel/issues/8655**

```
// .babelrc 增加此插件
"plugins": [
      "@babel/plugin-proposal-class-properties"
    ]
```



参考地址：

1. http://www.jianshu.com/p/8dd98a7028e0
2. https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/code-splitting.md
3. https://segmentfault.com/a/1190000007949841
4. http://react-china.org/t/webpack-react-router/10123
5. https://juejin.im/post/58f9717e44d9040069d06cd6

# 其他

其他的配置就相对简单，可参考这个 [从零搭建React全家桶框架教程](https://github.com/brickspert/blog/issues/1)，或者看最新 [webpack配置](https://github.com/Weibozzz/webpack-demos)
