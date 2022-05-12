"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[2597],{2730:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-75bcff0f",path:"/JS/%E5%87%BD%E6%95%B0%E8%AE%B0%E5%BF%86.html",title:"函数记忆",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"定义",slug:"定义",children:[]},{level:2,title:"原理",slug:"原理",children:[]},{level:2,title:"实现",slug:"实现",children:[]},{level:2,title:"注意",slug:"注意",children:[]},{level:2,title:"使用的场景",slug:"使用的场景",children:[]},{level:2,title:"参考",slug:"参考",children:[]},{level:2,title:"今日图 - 工作的我 VS 下班的我",slug:"今日图-工作的我-vs-下班的我",children:[]}],filePathRelative:"JS/函数记忆.md",git:{updatedTime:1626767622e3}}},7136:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var p=a(6252);const e=a.p+"assets/img/16b4ae46b859bdbf.fa4e2c26.png",t=(0,p.uE)('<h1 id="函数记忆"><a class="header-anchor" href="#函数记忆">#</a> 函数记忆</h1><h2 id="定义"><a class="header-anchor" href="#定义">#</a> 定义</h2><p>函数记忆是指将上次的计算结果缓存起来，当下次调用时，如果遇到相同的参数，就直接返回缓存中的数据。</p><p>举个例子：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 假设 memoize 可以实现函数记忆</span>\n<span class="token keyword">var</span> memoizedAdd <span class="token operator">=</span> <span class="token function">memoize</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">memoizedAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>\n<span class="token function">memoizedAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 相同的参数，第二次调用时，从缓存中取出数据，而非重新计算一次</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="原理"><a class="header-anchor" href="#原理">#</a> 原理</h2><p>实现这样一个 <code>memoize</code> 函数很简单，原理上只用把参数和对应的结果数据存到一个对象中，调用时，判断参数对应的数据是否存在，存在就返回对应的结果数据。</p><h2 id="实现"><a class="header-anchor" href="#实现">#</a> 实现</h2><p>看看 <code>underscore</code> 的 <code>memoize</code> 函数是如何实现的：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">memoize</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> hasher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> <span class="token function-variable function">memoize</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> cache <span class="token operator">=</span> memoize<span class="token punctuation">.</span>cache<span class="token punctuation">;</span>\n        <span class="token keyword">var</span> address <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>hasher <span class="token operator">?</span> <span class="token function">hasher</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span> <span class="token operator">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cache<span class="token punctuation">[</span>address<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            cache<span class="token punctuation">[</span>address<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> cache<span class="token punctuation">[</span>address<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    memoize<span class="token punctuation">.</span>cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> memoize<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>从这个实现可以看出，<code>underscore</code> 默认使用 <code>function</code> 的第一个参数作为 key，所以如果直接使用</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> memoizedAdd <span class="token operator">=</span> <span class="token function">memoize</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span>\n\n<span class="token function">memoizedAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>\n<span class="token function">memoizedAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>肯定是有问题的，如果要支持多参数，我们就需要传入 <code>hasher</code> 函数，自定义存储的 <code>key</code> 值。所以我们考虑使用 <code>JSON.stringify</code>：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> memoizedAdd <span class="token operator">=</span> <span class="token function">memoize</span><span class="token punctuation">(</span>add<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">memoizedAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">memoizedAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 7</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>如果使用 <code>JSON.stringify</code>，参数是对象的问题也可以得到解决，因为存储的是对象序列化后的字符串。</p><h2 id="注意"><a class="header-anchor" href="#注意">#</a> 注意</h2><p>函数记忆只是一种编程技巧，本质上是牺牲算法的空间复杂度以换取更优的时间复杂度，在客户端 JavaScript 中代码的执行时间复杂度往往成为瓶颈，因此在大多数场景下，这种牺牲空间换取时间的做法以提升程序执行效率的做法是非常可取的。</p><h2 id="使用的场景"><a class="header-anchor" href="#使用的场景">#</a> 使用的场景</h2><p>如果需要大量重复的计算，或者大量计算又依赖于之前的结果，便可以考虑使用函数记忆。而这种场景，当你遇到的时候，你就会知道的。</p><h2 id="参考"><a class="header-anchor" href="#参考">#</a> 参考</h2><ul><li>https://github.com/mqyqingfeng/Blog/issues/46</li></ul><h2 id="今日图-工作的我-vs-下班的我"><a class="header-anchor" href="#今日图-工作的我-vs-下班的我">#</a> 今日图 - 工作的我 VS 下班的我</h2><p><img src="'+e+'" alt="16b4ae46b859bdbf.png"></p>',23),c={},o=(0,a(3744).Z)(c,[["render",function(n,s){return t}]])}}]);