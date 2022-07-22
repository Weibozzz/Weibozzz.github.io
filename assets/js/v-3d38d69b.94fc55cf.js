"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[8651],{6054:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-3d38d69b",path:"/JS/call%E5%92%8Capply%E7%9A%84%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0.html",title:"call和apply的模拟实现",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Call",slug:"call",children:[{level:3,title:"模拟实现",slug:"模拟实现",children:[]}]},{level:2,title:"apply",slug:"apply",children:[]},{level:2,title:"参考",slug:"参考",children:[]},{level:2,title:"今日图 - 掏 哎呦 难受！",slug:"今日图-掏-哎呦-难受",children:[]}],filePathRelative:"JS/call和apply的模拟实现.md",git:{updatedTime:1626767622e3}}},5338:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var p=a(6252);const e=a.p+"assets/img/4a20e50778d1ec02fb7fe03a860310f2.5a1924d8.jpg",t=(0,p.uE)('<h1 id="call和apply的模拟实现" tabindex="-1"><a class="header-anchor" href="#call和apply的模拟实现" aria-hidden="true">#</a> call和apply的模拟实现</h1><h2 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> Call</h2><p><code>call()</code> 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。</p><p>举个例子：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">bar</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>注意两点：</p><p><code>call</code> 改变了 <code>this</code> 的指向，指向到 <code>foo</code></p><p><code>bar</code> 函数执行了</p><h3 id="模拟实现" tabindex="-1"><a class="header-anchor" href="#模拟实现" aria-hidden="true">#</a> 模拟实现</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 第三版</span>\n<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>rest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> context <span class="token operator">=</span> context <span class="token operator">||</span> window\n    context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>rest<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn\n    <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 测试一下</span>\n<span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span>\n        <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span>\n        <span class="token literal-property property">age</span><span class="token operator">:</span> age\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nbar<span class="token punctuation">.</span><span class="token function">call2</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">.</span><span class="token function">call2</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;kevin&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 1</span>\n<span class="token comment">// Object {</span>\n<span class="token comment">//    value: 1,</span>\n<span class="token comment">//    name: &#39;kevin&#39;,</span>\n<span class="token comment">//    age: 18</span>\n<span class="token comment">// }</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply</h2><p><code>apply</code>的模拟实现 <code>apply</code> 的实现跟 <code>call</code> 类似，在这里直接给代码：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">apply1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>rest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> context <span class="token operator">=</span> context <span class="token operator">||</span> window<span class="token punctuation">;</span>\n    context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn\n    <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>https://github.com/mqyqingfeng/Blog/issues/11</li></ul><h2 id="今日图-掏-哎呦-难受" tabindex="-1"><a class="header-anchor" href="#今日图-掏-哎呦-难受" aria-hidden="true">#</a> 今日图 - 掏 哎呦 难受！</h2><p><img src="'+e+'" alt="4a20e50778d1ec02fb7fe03a860310f2.jpg"></p>',17),c={},o=(0,a(3744).Z)(c,[["render",function(n,s){return t}]])}}]);