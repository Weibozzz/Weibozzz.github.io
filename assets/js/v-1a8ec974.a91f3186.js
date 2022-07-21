"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[3392],{4422:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-1a8ec974",path:"/Vue/vue%E4%BD%A0%E5%BA%94%E8%AF%A5%E7%9F%A5%E9%81%93%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9.html",title:"vue你应该知道的知识点",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"vue核心知识点",slug:"vue核心知识点",children:[{level:3,title:"对于Vue是一套渐进式框架的理解",slug:"对于vue是一套渐进式框架的理解",children:[]},{level:3,title:"vue事件中如何使用event对象？",slug:"vue事件中如何使用event对象",children:[]},{level:3,title:"vue中子组件调用父组件的方法",slug:"vue中子组件调用父组件的方法",children:[]},{level:3,title:"vue更新数组时触发视图更新的方法",slug:"vue更新数组时触发视图更新的方法",children:[]},{level:3,title:"vue中对象更改检测的注意事项",slug:"vue中对象更改检测的注意事项",children:[]},{level:3,title:"v-model语法糖的组件中的使用",slug:"v-model语法糖的组件中的使用",children:[]},{level:3,title:"vue-cli开发环境使用全局常量",slug:"vue-cli开发环境使用全局常量",children:[]}]},{level:2,title:"vue弹窗后如何禁止滚动条滚动？",slug:"vue弹窗后如何禁止滚动条滚动",children:[]},{level:2,title:"vue-router",slug:"vue-router",children:[{level:3,title:"vue-router如何响应 路由参数 的变化",slug:"vue-router如何响应-路由参数-的变化",children:[]},{level:3,title:"完整的 vue-router 导航解析流程",slug:"完整的-vue-router-导航解析流程",children:[]}]},{level:2,title:"vuex",slug:"vuex",children:[{level:3,title:"vuex在vue-cli中的应用",slug:"vuex在vue-cli中的应用",children:[]}]},{level:2,title:"Http",slug:"http",children:[{level:3,title:"axios、fetch与ajax有什么区别",slug:"axios、fetch与ajax有什么区别",children:[]}]},{level:2,title:"UI样式",slug:"ui样式",children:[{level:3,title:"如何适配移动端",slug:"如何适配移动端",children:[]},{level:3,title:"移动端常用媒体查询的使用",slug:"移动端常用媒体查询的使用",children:[]}]},{level:2,title:"生产环境",slug:"生产环境",children:[]},{level:2,title:"MVVM设计模式",slug:"mvvm设计模式",children:[{level:3,title:"MVC、MVP与MVVM的区别",slug:"mvc、mvp与mvvm的区别",children:[]}]},{level:2,title:"摘自",slug:"摘自",children:[]},{level:2,title:"今日图 - 终于知道詹姆斯一个人扛起一个队的痛苦了吧",slug:"今日图-终于知道詹姆斯一个人扛起一个队的痛苦了吧",children:[]}],filePathRelative:"Vue/vue你应该知道的知识点.md",git:{updatedTime:1626767622e3}}},7216:(n,a,e)=>{e.r(a),e.d(a,{default:()=>i});var s=e(6252);const t=e.p+"assets/img/7e79906dc30dd24bfbad9b7676a9c780.2bd04e37.jpg",l=(0,s.uE)('<h1 id="vue你应该知道的知识点" tabindex="-1"><a class="header-anchor" href="#vue你应该知道的知识点" aria-hidden="true">#</a> vue你应该知道的知识点</h1><h2 id="vue核心知识点" tabindex="-1"><a class="header-anchor" href="#vue核心知识点" aria-hidden="true">#</a> vue核心知识点</h2><h3 id="对于vue是一套渐进式框架的理解" tabindex="-1"><a class="header-anchor" href="#对于vue是一套渐进式框架的理解" aria-hidden="true">#</a> 对于Vue是一套渐进式框架的理解</h3><p><code>Vue</code>核心功能是一个视图模板引擎，可以通过添加组件系统、客户端路由、大规模状态管理来构建一个完整的框架。可以在核心功能的基础上任意选用其他的部件。这就是“渐进式”，就是Vue的使用方式。</p><h3 id="vue事件中如何使用event对象" tabindex="-1"><a class="header-anchor" href="#vue事件中如何使用event对象" aria-hidden="true">#</a> vue事件中如何使用event对象？</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@click<span class="token operator">=</span>&quot;<span class="token function">EventName</span><span class="token punctuation">(</span>$event<span class="token punctuation">,</span><span class="token operator">...</span>params<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="vue中子组件调用父组件的方法" tabindex="-1"><a class="header-anchor" href="#vue中子组件调用父组件的方法" aria-hidden="true">#</a> vue中子组件调用父组件的方法</h3><ul><li>第一种：this.$parent.xxx;</li><li>第二种：通过props传递父组件函数名，子组件接受，接受类型为Function；</li><li>第三种：创建eventBus。</li></ul><h3 id="vue更新数组时触发视图更新的方法" tabindex="-1"><a class="header-anchor" href="#vue更新数组时触发视图更新的方法" aria-hidden="true">#</a> vue更新数组时触发视图更新的方法</h3><p><code>Vue.set(object, key, value)</code></p><p>数组</p><ul><li>使用下标更新数组元素；</li><li>使用赋值方式改变数组长度；</li><li>使用下标增删数组元素；</li></ul><p>对象</p><ul><li>对象的增删</li></ul><h3 id="vue中对象更改检测的注意事项" tabindex="-1"><a class="header-anchor" href="#vue中对象更改检测的注意事项" aria-hidden="true">#</a> vue中对象更改检测的注意事项</h3><ul><li><code>Vue</code> 不能检测对象属性的添加或删除；不能动态添加根级别的响应式属性。</li><li>使用 <code>Vue.set(object, key, value)</code> 方法向嵌套对象添加响应式属性。</li></ul><h3 id="v-model语法糖的组件中的使用" tabindex="-1"><a class="header-anchor" href="#v-model语法糖的组件中的使用" aria-hidden="true">#</a> v-model语法糖的组件中的使用</h3><p>使用v-model来进行双向数据绑定的时：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;something&quot;</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>复制代码仅仅是一个语法糖：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input v<span class="token operator">-</span>bind<span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">&quot;something&quot;</span> v<span class="token operator">-</span>on<span class="token operator">:</span>input<span class="token operator">=</span><span class="token string">&quot;something=$event.target.value&quot;</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>复制代码所以在组件中使用的时候，相当于下面的简写：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>custom v<span class="token operator">-</span>bind<span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">&quot;something&quot;</span> v<span class="token operator">-</span>on<span class="token operator">:</span>input<span class="token operator">=</span><span class="token string">&quot;something = $event.target.value&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>custom<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>复制代码所以要组件的v-model生效，它必须：</p><p>接受一个 <code>value</code> 属性 在有新的<code>value</code>时触发<code>input</code>事件</p><p>摘自 https://juejin.im/post/5c99eadb5188251c3a2f30af</p><h3 id="vue-cli开发环境使用全局常量" tabindex="-1"><a class="header-anchor" href="#vue-cli开发环境使用全局常量" aria-hidden="true">#</a> vue-cli开发环境使用全局常量</h3><ol><li>全局变量模块文件，在需要的地方引用进全局变量模块文件</li><li>在程序入口的<code>main.js</code>文件里面，将数据挂载到Vue.prototype。</li></ol><h2 id="vue弹窗后如何禁止滚动条滚动" tabindex="-1"><a class="header-anchor" href="#vue弹窗后如何禁止滚动条滚动" aria-hidden="true">#</a> vue弹窗后如何禁止滚动条滚动？</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token doc-comment comment">/***滑动限制***/</span>\n    <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token keyword">var</span> <span class="token function-variable function">mo</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow<span class="token operator">=</span><span class="token string">&#39;hidden&#39;</span><span class="token punctuation">;</span>\n      document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;touchmove&quot;</span><span class="token punctuation">,</span>mo<span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//禁止页面滑动</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token doc-comment comment">/***取消滑动限制***/</span>\n    <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token keyword">var</span> <span class="token function-variable function">mo</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span><span class="token comment">//出现滚动条</span>\n      document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;touchmove&quot;</span><span class="token punctuation">,</span>mo<span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 如果不是Vue，可以直接给html设置overflow：hidden</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> vue-router</h2><h3 id="vue-router如何响应-路由参数-的变化" tabindex="-1"><a class="header-anchor" href="#vue-router如何响应-路由参数-的变化" aria-hidden="true">#</a> vue-router如何响应 路由参数 的变化</h3><p>当使用路由参数时，例如从 <code>/user/foo</code> 导航到 <code>/user/bar</code>，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。同时意味着组件的生命周期钩子不会再被调用。 复用组件时，想对路由参数的变化作出响应的话，你可以简单地 <code>watch</code> (监测变化) <code>$route</code> 对象：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;$route&#39;</span> <span class="token punctuation">(</span>to<span class="token punctuation">,</span> from<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 对路由变化作出响应...</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="完整的-vue-router-导航解析流程" tabindex="-1"><a class="header-anchor" href="#完整的-vue-router-导航解析流程" aria-hidden="true">#</a> 完整的 vue-router 导航解析流程</h3><ul><li>导航被触发。</li><li>在失活的组件里调用离开守卫。</li><li>调用全局的 beforeEach 守卫。</li><li>在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。</li><li>在路由配置里调用 beforeEnter。</li><li>解析异步路由组件。</li><li>在被激活的组件里调用 beforeRouteEnter。</li><li>调用全局的 beforeResolve 守卫 (2.5+)。</li><li>导航被确认。</li><li>调用全局的 afterEach 钩子。</li><li>触发 DOM 更新。</li><li>用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。</li></ul><h2 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> vuex</h2><h3 id="vuex在vue-cli中的应用" tabindex="-1"><a class="header-anchor" href="#vuex在vue-cli中的应用" aria-hidden="true">#</a> vuex在vue-cli中的应用</h3><p>单页应用中，组件之间的状态、音乐播放、登录状态、加入购物车</p><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> Http</h2><h3 id="axios、fetch与ajax有什么区别" tabindex="-1"><a class="header-anchor" href="#axios、fetch与ajax有什么区别" aria-hidden="true">#</a> axios、fetch与ajax有什么区别</h3><p>ajax</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>本身是针对<span class="token constant">MVC</span>的编程<span class="token punctuation">,</span>不符合现在前端<span class="token constant">MVVM</span>的浪潮\n基于原生的<span class="token constant">XHR</span>开发，<span class="token constant">XHR</span>本身的架构不清晰，已经有了fetch的替代方案\nJQuery整个项目太大，单纯使用ajax却要引入整个JQuery非常的不合理（采取个性化打包的方案又不能享受<span class="token constant">CDN</span>服务）\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>axios 基于<code>Promise</code> 用于浏览器和 <code>nodejs</code> 的 <code>HTTP</code> 客户端，本质上也是对原生<code>XHR</code>的封装，只不过它是<code>Promise</code>的实现版本，符合最新的ES规范，</p><p>fetch</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>是AJAX的替代品，是在ES6出现的，使用了ES6中的promise对象。Fetch是基于promise设计的。\n参数有点像jQuery ajax。\nfetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="ui样式" tabindex="-1"><a class="header-anchor" href="#ui样式" aria-hidden="true">#</a> UI样式</h2><h3 id="如何适配移动端" tabindex="-1"><a class="header-anchor" href="#如何适配移动端" aria-hidden="true">#</a> 如何适配移动端</h3><p><code>使用postcss+vw单位</code></p><h3 id="移动端常用媒体查询的使用" tabindex="-1"><a class="header-anchor" href="#移动端常用媒体查询的使用" aria-hidden="true">#</a> 移动端常用媒体查询的使用</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    移动端1像素边框的问题\n    图片几倍的问题\n    bg-image($url)\n      background-image: url($url + &quot;@2x.png&quot;)\n      @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3)\n        background-image: url($url + &quot;@3x.png&quot;)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="生产环境" tabindex="-1"><a class="header-anchor" href="#生产环境" aria-hidden="true">#</a> 生产环境</h2><p>vue如何优化首屏加载速度？</p><ol><li>使用CDN资源,减小服务器带宽压力</li><li>路由懒加载</li><li>将一些静态js css放到其他地方（如OSS），减小服务器压力</li><li>按需加载三方资源，如iview,建议按需引入iview中的组件</li><li>使用nginx开启gzip减小网络传输的流量大小</li><li>若首屏为登录页，可以做成多入口，登录页单独分离为一个入口</li><li>使用uglifyjs-webpack-plugin插件代替webpack自带UglifyJsPlugin插件</li></ol><h2 id="mvvm设计模式" tabindex="-1"><a class="header-anchor" href="#mvvm设计模式" aria-hidden="true">#</a> MVVM设计模式</h2><h3 id="mvc、mvp与mvvm的区别" tabindex="-1"><a class="header-anchor" href="#mvc、mvp与mvvm的区别" aria-hidden="true">#</a> MVC、MVP与MVVM的区别</h3><p>mvc</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>MVC全名是**Model View Controller**，模型(model)－视图(view)－控制器(controller)的缩写，一种架构模式；\nview操作会触发controller去改变model，然后model再去改变视图\nmodel：应用程序中处理数据逻辑的一部分，通常用来模型对象对数据库的存存取等操作\nview：视图部分，通常指jsp、html等用来对用户展示的一部分\ncontroller：控制层通常用来处理业务逻辑，负责从试图读取数据，并向模型发送数据\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>mvvm</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mvvm 即 **Model-View-ViewModel**，即模型-视图-视图模型；一种设计思想；本质上就是MVC 的改进版。\n主要目的是分离视图（View）和模型（Model）。\n【模型】指的是后端传递的数据。\n【视图】指的是所看到的页面。\n【视图模型】mvvm模式的核心，它是连接view和model的桥梁。\n    一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。\n    二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。\n        这两个方向都实现的，我们称之为数据的双向绑定。\n 低耦合、可重用性、独立开发\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>mvp</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>MVP 模式将 Controller 改名为 Presenter，同时改变了通信方向。\n\n1. 各部分之间的通信，都是双向的。\n\n2. View 与 Model 不发生联系，都通过 Presenter 传递。\n\n3. View 非常薄，不部署任何业务逻辑，称为&quot;被动视图&quot;（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="摘自" tabindex="-1"><a class="header-anchor" href="#摘自" aria-hidden="true">#</a> 摘自</h2><ul><li>https://segmentfault.com/a/1190000016351284</li><li>https://segmentfault.com/a/1190000018663104</li></ul><h2 id="今日图-终于知道詹姆斯一个人扛起一个队的痛苦了吧" tabindex="-1"><a class="header-anchor" href="#今日图-终于知道詹姆斯一个人扛起一个队的痛苦了吧" aria-hidden="true">#</a> 今日图 - 终于知道詹姆斯一个人扛起一个队的痛苦了吧</h2><p><img src="'+t+'" alt="7e79906dc30dd24bfbad9b7676a9c780.jpg"></p>',66),p={},i=(0,e(3744).Z)(p,[["render",function(n,a){return l}]])}}]);