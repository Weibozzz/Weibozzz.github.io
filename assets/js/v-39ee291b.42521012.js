"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[6810],{2058:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-39ee291b",path:"/React/10%E5%88%86%E9%92%9F%E4%BA%86%E8%A7%A3react%E6%96%B0%E7%89%B9%E6%80%A7hooks.html",title:"10分钟了解react新特性hooks",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Hook 简介",slug:"hook-简介",children:[]},{level:2,title:"useState",slug:"usestate",children:[]},{level:2,title:"Effect Hook",slug:"effect-hook",children:[]},{level:2,title:"Hook 使用规则",slug:"hook-使用规则",children:[]},{level:2,title:"自定义 Hook",slug:"自定义-hook",children:[]},{level:2,title:"其他Hooks",slug:"其他hooks",children:[]},{level:2,title:"摘自",slug:"摘自",children:[]},{level:2,title:"今日图 - 我喜欢你 React",slug:"今日图-我喜欢你-react",children:[]}],filePathRelative:"React/10分钟了解react新特性hooks.md",git:{updatedTime:1626767622e3}}},2402:(n,s,a)=>{a.r(s),a.d(s,{default:()=>c});var p=a(6252);const t=a.p+"assets/img/pkpjg.450d0afa.gif",e=(0,p.uE)('<h1 id="_10分钟了解react新特性hooks"><a class="header-anchor" href="#_10分钟了解react新特性hooks">#</a> 10分钟了解react新特性hooks</h1><h2 id="hook-简介"><a class="header-anchor" href="#hook-简介">#</a> Hook 简介</h2><p><code>Hook</code> 是 <code>React 16.8</code> 的新增特性。它可以让你在不编写 <code>class</code> 的情况下使用 <code>state</code> 以及其他的 <code>React</code> 特性。</p><h2 id="usestate"><a class="header-anchor" href="#usestate">#</a> useState</h2><p>这个例子用来显示一个计数器。当你点击按钮，计数器的值就会增加：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 声明一个新的叫做 “count” 的 state 变量</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>You clicked <span class="token punctuation">{</span>count<span class="token punctuation">}</span> times<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>\n        Click me\n      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><code>useState</code> 唯一的参数就是初始 <code>state</code>。在上面的例子中，我们的计数器是从零开始的，所以初始 <code>state</code> 就是 0。</p><h4 id="声明多个-state-变量"><a class="header-anchor" href="#声明多个-state-变量">#</a> 声明多个 state 变量</h4><p>你可以在一个组件中多次使用 <code>State Hook</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ExampleWithManyStates</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 声明多个 state 变量！</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>age<span class="token punctuation">,</span> setAge<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>fruit<span class="token punctuation">,</span> setFruit<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;banana&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>todos<span class="token punctuation">,</span> setTodos<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Learn Hooks&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="effect-hook"><a class="header-anchor" href="#effect-hook">#</a> Effect Hook</h2><p>你之前可能已经在 <code>React</code> 组件中执行过数据获取、订阅或者手动修改过 <code>DOM</code>。我们统一把这些操作称为“副作用”，或者简称为“作用”。</p><p><code>useEffect</code> 就是一个 <code>Effect Hook</code>，给函数组件增加了操作副作用的能力。它跟 <code>class</code> 组件中的 <code>componentDidMount</code>、<code>componentDidUpdate</code> 和 <code>componentWillUnmount</code> 具有相同的用途，只不过被合并成了一个 <code>API</code>。</p><p>可以通知 <code>React</code> 跳过对 <code>effect</code> 的调用，只要传递数组作为 <code>useEffect</code> 的第二个可选参数即可：</p><p>例如，下面这个组件在 <code>React</code> 更新 <code>DOM</code> 后会设置一个页面标题：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 相当于 componentDidMount 和 componentDidUpdate:</span>\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 使用浏览器的 API 更新页面标题</span>\n    document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">You clicked </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> times</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 仅在 count 更改时更新</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>You clicked <span class="token punctuation">{</span>count<span class="token punctuation">}</span> times<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>\n        Click me\n      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>当你调用 <code>useEffect</code> 时，就是在告诉 <code>React</code> 在完成对 <code>DOM</code> 的更改后运行你的“副作用”函数。由于副作用函数是在组件内声明的，所以它们可以访问到组件的 <code>props</code> 和 <code>state</code>。默认情况下，<code>React</code> 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候。</p><p>**副作用函数还可以通过返回一个函数来指定如何“清除”副作用。**例如，在下面的组件中使用副作用函数来订阅好友的在线状态，并通过取消订阅来进行清除操作：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">FriendStatus</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>isOnline<span class="token punctuation">,</span> setIsOnline<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">handleStatusChange</span><span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setIsOnline</span><span class="token punctuation">(</span>status<span class="token punctuation">.</span>isOnline<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    ChatAPI<span class="token punctuation">.</span><span class="token function">subscribeToFriendStatus</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>id<span class="token punctuation">,</span> handleStatusChange<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      ChatAPI<span class="token punctuation">.</span><span class="token function">unsubscribeFromFriendStatus</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>id<span class="token punctuation">,</span> handleStatusChange<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>isOnline <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&#39;Loading...&#39;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> isOnline <span class="token operator">?</span> <span class="token string">&#39;Online&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;Offline&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>在这个示例中，<code>React</code> 会在组件销毁或者后续渲染重新执行副作用函数时取消对 <code>ChatAPI</code> 的订阅。（如果传给 <code>ChatAPI</code> 的 <code>props.friend.id</code> 没有变化，你也可以告诉 <code>React</code> 跳过重新订阅。）</p><h2 id="hook-使用规则"><a class="header-anchor" href="#hook-使用规则">#</a> Hook 使用规则</h2><p><code>Hook</code> 就是 <code>JavaScript</code> 函数，但是使用它们会有两个额外的规则：</p><ul><li>只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。</li><li>只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。</li></ul><h2 id="自定义-hook"><a class="header-anchor" href="#自定义-hook">#</a> 自定义 Hook</h2><p>有时候我们会想要在组件之间重用一些状态逻辑。目前为止，有两种主流方案来解决这个问题：高阶组件和 <code>render props</code>。自定义 <code>Hook</code> 可以让你在不增加组件的情况下达到同样的目的。</p><p>前面，我们介绍了一个叫 <code>FriendStatus</code> 的组件，它通过调用 <code>useState</code> 和 <code>useEffect</code> 的 <code>Hook</code> 来订阅一个好友的在线状态。假设我们想在另一个组件里重用这个订阅逻辑。</p><p>首先，我们把这个逻辑抽取到一个叫做 <code>useFriendStatus</code> 的自定义 <code>Hook</code> 里：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">useFriendStatus</span><span class="token punctuation">(</span><span class="token parameter">friendID</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>isOnline<span class="token punctuation">,</span> setIsOnline<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">handleStatusChange</span><span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setIsOnline</span><span class="token punctuation">(</span>status<span class="token punctuation">.</span>isOnline<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    ChatAPI<span class="token punctuation">.</span><span class="token function">subscribeToFriendStatus</span><span class="token punctuation">(</span>friendID<span class="token punctuation">,</span> handleStatusChange<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      ChatAPI<span class="token punctuation">.</span><span class="token function">unsubscribeFromFriendStatus</span><span class="token punctuation">(</span>friendID<span class="token punctuation">,</span> handleStatusChange<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> isOnline<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>它将 <code>friendID</code> 作为参数，并返回该好友是否在线：</p><p>现在我们可以在两个组件中使用它：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">FriendStatus</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> isOnline <span class="token operator">=</span> <span class="token function">useFriendStatus</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>isOnline <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&#39;Loading...&#39;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> isOnline <span class="token operator">?</span> <span class="token string">&#39;Online&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;Offline&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">FriendListItem</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> isOnline <span class="token operator">=</span> <span class="token function">useFriendStatus</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>li style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> isOnline <span class="token operator">?</span> <span class="token string">&#39;green&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;black&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>\n      <span class="token punctuation">{</span>props<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>name<span class="token punctuation">}</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>这两个组件的 <code>state</code> 是完全独立的。<code>Hook</code> 是一种复用状态逻辑的方式，它不复用 <code>state</code> 本身。事实上 <code>Hook</code> 的每次调用都有一个完全独立的 <code>state</code> —— 因此你可以在单个组件中多次调用同一个自定义 <code>Hook</code>。</p><p>自定义 <code>Hook</code> 更像是一种约定而不是功能。如果函数的名字以 <code>“use”</code> 开头并调用其他 <code>Hook</code>，我们就说这是一个自定义 <code>Hook</code>。</p><h2 id="其他hooks"><a class="header-anchor" href="#其他hooks">#</a> 其他Hooks</h2><ul><li>useReducer</li></ul><p><code>useState</code> 的替代方案。它接收一个形如 <code>(state, action) =&gt; newState</code> 的 <code>reducer</code>，并返回当前的 <code>state</code> 以及与其配套的 <code>dispatch</code> 方法。（如果你熟悉 <code>Redux</code> 的话，就已经知道它如何工作了。）</p><p>在某些场景下，<code>useReducer</code> 会比 <code>useState</code> 更适用，例如 <code>state</code> 逻辑较复杂且包含多个子值，或者下一个 <code>state</code> 依赖于之前的 <code>state</code> 等。并且，使用 <code>useReducer</code> 还能给那些会触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数 。</p><p>以下是用 <code>reducer</code> 重写 <code>useState</code> 计数器示例：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">&#39;increment&#39;</span><span class="token operator">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">&#39;decrement&#39;</span><span class="token operator">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span><span class="token operator">:</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> initialState<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>\n      <span class="token literal-property property">Count</span><span class="token operator">:</span> <span class="token punctuation">{</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;increment&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;decrement&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">-</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ul><li>useContext</li></ul><h2 id="摘自"><a class="header-anchor" href="#摘自">#</a> 摘自</h2><ul><li>https://zh-hans.reactjs.org/docs/hooks-intro.html</li></ul><h2 id="今日图-我喜欢你-react"><a class="header-anchor" href="#今日图-我喜欢你-react">#</a> 今日图 - 我喜欢你 React</h2><p><img src="'+t+'" alt="pkpjg.gif"></p>',44),o={},c=(0,a(3744).Z)(o,[["render",function(n,s){return e}]])}}]);