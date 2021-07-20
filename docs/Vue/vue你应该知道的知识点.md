# vue你应该知道的知识点
## vue核心知识点
### 对于Vue是一套渐进式框架的理解
`Vue`核心功能是一个视图模板引擎，可以通过添加组件系统、客户端路由、大规模状态管理来构建一个完整的框架。可以在核心功能的基础上任意选用其他的部件。这就是“渐进式”，就是Vue的使用方式。
### vue事件中如何使用event对象？
```js
@click="EventName($event,...params)
```
### vue中子组件调用父组件的方法

- 第一种：this.$parent.xxx;
- 第二种：通过props传递父组件函数名，子组件接受，接受类型为Function；
- 第三种：创建eventBus。
### vue更新数组时触发视图更新的方法
`Vue.set(object, key, value)`

数组

- 使用下标更新数组元素；
- 使用赋值方式改变数组长度；
- 使用下标增删数组元素；

对象
- 对象的增删
### vue中对象更改检测的注意事项

- `Vue` 不能检测对象属性的添加或删除；不能动态添加根级别的响应式属性。
- 使用 `Vue.set(object, key, value)` 方法向嵌套对象添加响应式属性。
### v-model语法糖的组件中的使用
使用v-model来进行双向数据绑定的时：
```js
<input v-model="something">
```
复制代码仅仅是一个语法糖：
```js
<input v-bind:value="something" v-on:input="something=$event.target.value">
```
复制代码所以在组件中使用的时候，相当于下面的简写：
```js
<custom v-bind:value="something" v-on:input="something = $event.target.value"></custom>
```
复制代码所以要组件的v-model生效，它必须：

接受一个 `value` 属性
在有新的`value`时触发`input`事件

摘自 https://juejin.im/post/5c99eadb5188251c3a2f30af

### vue-cli开发环境使用全局常量

1. 全局变量模块文件，在需要的地方引用进全局变量模块文件
2. 在程序入口的`main.js`文件里面，将数据挂载到Vue.prototype。

## vue弹窗后如何禁止滚动条滚动？
 ```js
     /***滑动限制***/
     stop(){
       var mo=function(e){e.preventDefault();};
       document.body.style.overflow='hidden';
       document.addEventListener("touchmove",mo,false);//禁止页面滑动
     },
     /***取消滑动限制***/
     move(){
       var mo=function(e){e.preventDefault();};
       document.body.style.overflow='';//出现滚动条
       document.removeEventListener("touchmove",mo,false);
     }
     // 如果不是Vue，可以直接给html设置overflow：hidden
```

## vue-router
### vue-router如何响应 路由参数 的变化
当使用路由参数时，例如从 `/user/foo` 导航到 `/user/bar`，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。同时意味着组件的生命周期钩子不会再被调用。
复用组件时，想对路由参数的变化作出响应的话，你可以简单地 `watch` (监测变化) `$route` 对象：

```js
watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
}
```

### 完整的 vue-router 导航解析流程

- 导航被触发。
- 在失活的组件里调用离开守卫。
- 调用全局的 beforeEach 守卫。
- 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
- 在路由配置里调用 beforeEnter。
- 解析异步路由组件。
- 在被激活的组件里调用 beforeRouteEnter。
- 调用全局的 beforeResolve 守卫 (2.5+)。
- 导航被确认。
- 调用全局的 afterEach 钩子。
- 触发 DOM 更新。
- 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。

## vuex
### vuex在vue-cli中的应用

单页应用中，组件之间的状态、音乐播放、登录状态、加入购物车
## Http
### axios、fetch与ajax有什么区别
ajax
```js
本身是针对MVC的编程,不符合现在前端MVVM的浪潮
基于原生的XHR开发，XHR本身的架构不清晰，已经有了fetch的替代方案
JQuery整个项目太大，单纯使用ajax却要引入整个JQuery非常的不合理（采取个性化打包的方案又不能享受CDN服务）
```

axios
基于`Promise` 用于浏览器和 `nodejs` 的 `HTTP` 客户端，本质上也是对原生`XHR`的封装，只不过它是`Promise`的实现版本，符合最新的ES规范，

fetch
```
是AJAX的替代品，是在ES6出现的，使用了ES6中的promise对象。Fetch是基于promise设计的。
参数有点像jQuery ajax。
fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象。
```

## UI样式
### 如何适配移动端

`使用postcss+vw单位`

### 移动端常用媒体查询的使用
```
    移动端1像素边框的问题
    图片几倍的问题
    bg-image($url)
      background-image: url($url + "@2x.png")
      @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3)
        background-image: url($url + "@3x.png")
```
## 生产环境
vue如何优化首屏加载速度？

1. 使用CDN资源,减小服务器带宽压力
2. 路由懒加载
3. 将一些静态js css放到其他地方（如OSS），减小服务器压力
4. 按需加载三方资源，如iview,建议按需引入iview中的组件
5. 使用nginx开启gzip减小网络传输的流量大小
6. 若首屏为登录页，可以做成多入口，登录页单独分离为一个入口
7. 使用uglifyjs-webpack-plugin插件代替webpack自带UglifyJsPlugin插件

## MVVM设计模式

### MVC、MVP与MVVM的区别

mvc

```
MVC全名是**Model View Controller**，模型(model)－视图(view)－控制器(controller)的缩写，一种架构模式；
view操作会触发controller去改变model，然后model再去改变视图
model：应用程序中处理数据逻辑的一部分，通常用来模型对象对数据库的存存取等操作
view：视图部分，通常指jsp、html等用来对用户展示的一部分
controller：控制层通常用来处理业务逻辑，负责从试图读取数据，并向模型发送数据
```

mvvm

```
mvvm 即 **Model-View-ViewModel**，即模型-视图-视图模型；一种设计思想；本质上就是MVC 的改进版。
主要目的是分离视图（View）和模型（Model）。
【模型】指的是后端传递的数据。
【视图】指的是所看到的页面。
【视图模型】mvvm模式的核心，它是连接view和model的桥梁。
    一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。
    二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。
        这两个方向都实现的，我们称之为数据的双向绑定。
 低耦合、可重用性、独立开发
```

mvp

```
MVP 模式将 Controller 改名为 Presenter，同时改变了通信方向。

1. 各部分之间的通信，都是双向的。

2. View 与 Model 不发生联系，都通过 Presenter 传递。

3. View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。
```

## 摘自
- https://segmentfault.com/a/1190000016351284
- https://segmentfault.com/a/1190000018663104

## 今日图 - 终于知道詹姆斯一个人扛起一个队的痛苦了吧
![7e79906dc30dd24bfbad9b7676a9c780.jpg](../../images/7e79906dc30dd24bfbad9b7676a9c780.jpg)
