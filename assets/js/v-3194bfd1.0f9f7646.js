(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[3499],{9584:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-3194bfd1",path:"/JS/fetch%E4%BD%BF%E7%94%A8%E7%9A%84%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%8F%8A%E5%85%B6%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html",title:"fetch使用的常见问题及其解决办法",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"fetch默认不携带cookie",slug:"fetch默认不携带cookie",children:[]},{level:2,title:"fetch请求对某些错误http状态不会reject",slug:"fetch请求对某些错误http状态不会reject",children:[]},{level:2,title:"fetch不支持超时timeout处理",slug:"fetch不支持超时timeout处理",children:[]},{level:2,title:"fetch不支持JSONP",slug:"fetch不支持jsonp",children:[]},{level:2,title:"fetch不支持progress事件",slug:"fetch不支持progress事件",children:[]},{level:2,title:"fetch跨域问题",slug:"fetch跨域问题",children:[]},{level:2,title:"参考",slug:"参考",children:[]},{level:2,title:"今日图 - 巨星招牌技：詹皇乾坤大挪移",slug:"今日图-巨星招牌技-詹皇乾坤大挪移",children:[]}],filePathRelative:"JS/fetch使用的常见问题及其解决办法.md",git:{updatedTime:1626767622e3}}},4128:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>g});var p=a(6252);const t=(0,p.Wm)("h1",{id:"fetch使用的常见问题及其解决办法",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#fetch使用的常见问题及其解决办法","aria-hidden":"true"},"#"),(0,p.Uk)(" fetch使用的常见问题及其解决办法")],-1),e=(0,p.Uk)("首先声明一下，本文不是要讲解fetch的具体用法，不清楚的可以参考 "),o={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("MDN fetch"),l=(0,p.Uk)("教程。"),u=(0,p.uE)('<h2 id="fetch默认不携带cookie" tabindex="-1"><a class="header-anchor" href="#fetch默认不携带cookie" aria-hidden="true">#</a> fetch默认不携带cookie</h2><p>配置其 credentials 项，其有3个值：</p><ul><li>omit: 默认值，忽略cookie的发送</li><li>same-origin: 表示cookie只能同域发送，不能跨域发送</li><li>include: cookie既可以同域发送，也可以跨域发送</li></ul><p>credentials所表达的含义，其实与XHR2中的withCredentials属性类似，表示请求是否携带cookie</p><p>这样，若要fetch请求携带cookie信息，只需设置一下credentials选项即可，例如fetch(url, {credentials: &#39;include&#39;});</p><h2 id="fetch请求对某些错误http状态不会reject" tabindex="-1"><a class="header-anchor" href="#fetch请求对某些错误http状态不会reject" aria-hidden="true">#</a> fetch请求对某些错误http状态不会reject</h2><p>这主要是由fetch返回promise导致的，因为fetch返回的promise在某些错误的http状态下如400、500等不会reject，相反它会被resolve；只有网络错误会导致请求不能完成时，fetch 才会被 reject；所以一般会对fetch请求做一层封装，例如下面代码所示：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">checkStatus</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> response<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  error<span class="token punctuation">.</span>response <span class="token operator">=</span> response<span class="token punctuation">;</span>\n  <span class="token keyword">throw</span> error<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">parseJSON</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> opt <span class="token operator">=</span> options<span class="token operator">||</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>credentials<span class="token operator">:</span> <span class="token string">&#39;include&#39;</span><span class="token punctuation">,</span> <span class="token operator">...</span>opt<span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>checkStatus<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>parseJSON<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span> data <span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span> err <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="fetch不支持超时timeout处理" tabindex="-1"><a class="header-anchor" href="#fetch不支持超时timeout处理" aria-hidden="true">#</a> fetch不支持超时timeout处理</h2><p>方法一：单纯setTimeout方式</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> oldFetchfn <span class="token operator">=</span> fetch<span class="token punctuation">;</span> <span class="token comment">//拦截原始的fetch方法</span>\nwindow<span class="token punctuation">.</span><span class="token function-variable function">fetch</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">input<span class="token punctuation">,</span> opts</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//定义新的fetch方法，封装原有的fetch方法</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">var</span> timeoutId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;fetch timeout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> opts<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">oldFetchfn</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> opts<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n            <span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n                <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeoutId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n                <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeoutId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>当然在上面基础上可以模拟类似XHR的abort功能：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> oldFetchfn <span class="token operator">=</span> fetch<span class="token punctuation">;</span>\nwindow<span class="token punctuation">.</span><span class="token function-variable function">fetch</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">input<span class="token punctuation">,</span> opts</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">var</span> <span class="token function-variable function">abort_promise</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;fetch abort&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token function">oldFetchfn</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> opts<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        p<span class="token punctuation">.</span>abort <span class="token operator">=</span> abort_promise<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> p<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>方法二：利用Promise.race方法 Promise.race方法接受一个promise实例数组参数，表示多个promise实例中任何一个最先改变状态，那么race方法返回的promise实例状态就跟着改变，具体可以参考这里。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> oldFetchfn <span class="token operator">=</span> fetch<span class="token punctuation">;</span> <span class="token comment">//拦截原始的fetch方法</span>\nwindow<span class="token punctuation">.</span><span class="token function-variable function">fetch</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">input<span class="token punctuation">,</span> opts</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//定义新的fetch方法，封装原有的fetch方法</span>\n    <span class="token keyword">var</span> fetchPromise <span class="token operator">=</span> <span class="token function">oldFetchfn</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> opts<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> timeoutPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n             <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;fetch timeout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> opts<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    retrun Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span>fetchPromise<span class="token punctuation">,</span> timeoutPromise<span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="fetch不支持jsonp" tabindex="-1"><a class="header-anchor" href="#fetch不支持jsonp" aria-hidden="true">#</a> fetch不支持JSONP</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> fetch-jsonp --save-dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后在像下面一样使用：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">fetchJsonp</span><span class="token punctuation">(</span><span class="token string">&#39;/users.jsonp&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    timeout<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>\n    jsonpCallback<span class="token operator">:</span> <span class="token string">&#39;custom_callback&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;parsing failed&#39;</span><span class="token punctuation">,</span> ex<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="fetch不支持progress事件" tabindex="-1"><a class="header-anchor" href="#fetch不支持progress事件" aria-hidden="true">#</a> fetch不支持progress事件</h2><p>XHR是原生支持progress事件的，例如下面代码这样：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nxhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/uploads&#39;</span><span class="token punctuation">)</span>\nxhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\nxhr<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">updateProgress</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>lengthComputable<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> percent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>loaded <span class="token operator">/</span> event<span class="token punctuation">.</span>total<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>percent<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\nxhr<span class="token punctuation">.</span>upload<span class="token punctuation">.</span>onprogress <span class="token operator">=</span>updateProgress<span class="token punctuation">;</span> <span class="token comment">//上传的progress事件</span>\nxhr<span class="token punctuation">.</span>onprogress <span class="token operator">=</span> updateProgress<span class="token punctuation">;</span> <span class="token comment">//下载的progress事件</span>\n<span class="token punctuation">}</span>\nxhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>但是fetch是不支持有关progress事件的；不过可喜的是，根据fetch的指导规范标准，其内部设计实现了Request和Response类；其中Response封装一些方法和属性，通过Response实例可以访问这些方法和属性，例如response.json()、response.body等等；</p><p>值得关注的地方是，response.body是一个可读字节流对象，其实现了一个getRender()方法，其具体作用是：</p><p>getRender()方法用于读取响应的原始字节流，该字节流是可以循环读取的，直至body内容传输完成；</p><p>因此，利用到这点可以模拟出fetch的progress</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// fetch() returns a promise that resolves once headers have been received</span>\n<span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// response.body is a readable stream.</span>\n  <span class="token comment">// Calling getReader() gives us exclusive access to the stream&#39;s content</span>\n  <span class="token keyword">var</span> reader <span class="token operator">=</span> response<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">getReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">var</span> bytesReceived <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// read() returns a promise that resolves when a value has been received</span>\n  reader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">processResult</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Result objects contain two properties:</span>\n    <span class="token comment">// done  - true if the stream has already given you all its data.</span>\n    <span class="token comment">// value - some data. Always undefined when done is true.</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Fetch complete&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// result.value for fetch streams is a Uint8Array</span>\n    bytesReceived <span class="token operator">+=</span> result<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Received&#39;</span><span class="token punctuation">,</span> bytesReceived<span class="token punctuation">,</span> <span class="token string">&#39;bytes of data so far&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// Read some more, and call this function again</span>\n    <span class="token keyword">return</span> reader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>processResult<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="fetch跨域问题" tabindex="-1"><a class="header-anchor" href="#fetch跨域问题" aria-hidden="true">#</a> fetch跨域问题</h2><p>fetch的mode配置项有3个值，如下：</p><ul><li><p>same-origin：该模式是不允许跨域的，它需要遵守同源策略，否则浏览器会返回一个error告知不能跨域；其对应的response type为basic。</p></li><li><p>cors: 该模式支持跨域请求，顾名思义它是以CORS的形式跨域；当然该模式也可以同域请求不需要后端额外的CORS支持；其对应的response type为cors。</p></li><li><p>no-cors: 该模式用于跨域请求但是服务器不带CORS响应头，也就是服务端不支持CORS；这也是fetch的特殊跨域请求方式；其对应的response type为opaque。</p></li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',31),r={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/ReadableStream",target:"_blank",rel:"noopener noreferrer"},i=(0,p.Uk)("MDN-ReadableStream"),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch",target:"_blank",rel:"noopener noreferrer"},b=(0,p.Uk)("MDN fetch"),m={href:"https://segmentfault.com/a/1190000008484070#articleHeader3",target:"_blank",rel:"noopener noreferrer"},d=(0,p.Uk)("https://segmentfault.com/a/1190000008484070#articleHeader3"),h=(0,p.Wm)("h2",{id:"今日图-巨星招牌技-詹皇乾坤大挪移",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#今日图-巨星招牌技-詹皇乾坤大挪移","aria-hidden":"true"},"#"),(0,p.Uk)(" 今日图 - 巨星招牌技：詹皇乾坤大挪移")],-1),f=(0,p.Wm)("p",null,[(0,p.Wm)("img",{src:"http://images.liuweibo.cn/khkrrjhkj.gif",alt:"http://images.liuweibo.cn/khkrrjhkj.gif"})],-1),g={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("p",null,[e,(0,p.Wm)("a",o,[c,(0,p.Wm)(a)]),l]),u,(0,p.Wm)("ul",null,[(0,p.Wm)("li",null,[(0,p.Wm)("a",r,[i,(0,p.Wm)(a)])]),(0,p.Wm)("li",null,[(0,p.Wm)("a",k,[b,(0,p.Wm)(a)])]),(0,p.Wm)("li",null,[(0,p.Wm)("a",m,[d,(0,p.Wm)(a)])])]),h,f],64)}}}}]);