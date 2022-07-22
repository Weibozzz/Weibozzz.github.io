"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[3751],{7805:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-05f123de",path:"/JS/socket/SSE%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8E%A8%E9%80%81.html",title:"SSE服务端推送",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"SSE服务端推送",slug:"sse服务端推送-1",children:[]},{level:2,title:"简单示例",slug:"简单示例",children:[{level:3,title:"服务端",slug:"服务端",children:[]},{level:3,title:"客户端",slug:"客户端",children:[]}]},{level:2,title:"事件",slug:"事件",children:[]},{level:2,title:"参考",slug:"参考",children:[]},{level:2,title:"相关推荐",slug:"相关推荐",children:[]},{level:2,title:"兼容性",slug:"兼容性",children:[]}],filePathRelative:"JS/socket/SSE服务端推送.md",git:{updatedTime:1627026748e3}}},305:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(6252);const p=(0,t.uE)('<h1 id="sse服务端推送" tabindex="-1"><a class="header-anchor" href="#sse服务端推送" aria-hidden="true">#</a> SSE服务端推送</h1><h2 id="sse服务端推送-1" tabindex="-1"><a class="header-anchor" href="#sse服务端推送-1" aria-hidden="true">#</a> SSE服务端推送</h2><p><code>SSE</code> (Server-sent Events) 是 <code>WebSocket</code> 的一种轻量代替方案，使用 <code>HTTP</code> 协议。 与 <code>WebSockets</code>,不同的是，服务端推送是单向的。</p><p>严格地说，<code>HTTP</code> 协议是没有办法做服务器推送的，但是当服务器向客户端声明接下来要发送流信息时， 客户端就会保持连接打开，<code>SSE</code> 使用的就是这种原理。</p><h2 id="简单示例" tabindex="-1"><a class="header-anchor" href="#简单示例" aria-hidden="true">#</a> 简单示例</h2><h3 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nhttp<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\n  <span class="token comment">// 服务器声明接下来发送的是事件流</span>\n  res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/event-stream&#39;</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&#39;Cache-Control&#39;</span><span class="token operator">:</span> <span class="token string">&#39;no-cache&#39;</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&#39;Connection&#39;</span><span class="token operator">:</span> <span class="token string">&#39;keep-alive&#39;</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&#39;Access-Control-Allow-Origin&#39;</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 发送消息</span>\n  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;event: slide\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 事件类型</span>\n    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">id: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 消息 ID</span>\n    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;data: 7\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 消息数据</span>\n    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;retry: 10000\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 重连时间</span>\n    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;\\n\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 消息结束</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 发送注释保持长连接</span>\n  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;: \\n\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">12000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端" aria-hidden="true">#</a> 客户端</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>EventSource<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 创建 EventSource 对象连接服务器</span>\n  <span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:2000&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 连接成功后会触发 open 事件</span>\n  source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Connected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 服务器发送信息到客户端时，如果没有 event 字段，默认会触发 message 事件</span>\n  source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">data: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 自定义 EventHandler，在收到 event 字段为 slide 的消息时触发</span>\n  source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;slide&#39;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">data: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; data: 7</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 连接异常时会触发 error 事件并自动重连</span>\n  source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>readyState <span class="token operator">===</span> EventSource<span class="token punctuation">.</span><span class="token constant">CLOSED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Disconnected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>readyState <span class="token operator">===</span> EventSource<span class="token punctuation">.</span><span class="token constant">CONNECTING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Connecting...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Your browser doesn\\&#39;t support SSE&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><ul><li><code>error</code> Fired when a connection to an event source failed to open.</li><li><code>message</code> Fired when data is received from an event source.</li><li><code>open</code> Fired when a connection to an event source has opened.</li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>https://developer.mozilla.org/zh-CN/docs/Server-sent_events/EventSource</li><li>https://www.cnblogs.com/goloving/p/9196066.html</li></ul><h2 id="相关推荐" tabindex="-1"><a class="header-anchor" href="#相关推荐" aria-hidden="true">#</a> 相关推荐</h2>',14),e=(0,t.Uk)("js实现webSocket客户端"),o=(0,t._)("h2",{id:"兼容性",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#兼容性","aria-hidden":"true"},"#"),(0,t.Uk)(" 兼容性")],-1),c=(0,t._)("p",null,"不支持ie",-1),l={},u=(0,a(3744).Z)(l,[["render",function(n,s){const a=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(a,{to:"/JS/socket/js%E5%AE%9E%E7%8E%B0webSocket%E5%AE%A2%E6%88%B7%E7%AB%AF.html"},{default:(0,t.w5)((()=>[e])),_:1})])]),o,c],64)}]])}}]);