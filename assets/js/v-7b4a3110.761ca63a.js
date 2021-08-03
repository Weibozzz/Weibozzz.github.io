"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[2489],{966:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-7b4a3110",path:"/JS/%E5%BE%AE%E4%BB%BB%E5%8A%A1_%E5%AE%8F%E4%BB%BB%E5%8A%A1%E4%B8%8EEvent-Loop.html",title:"微任务_宏任务与Event-Loop",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"微任务与宏任务的区别",slug:"微任务与宏任务的区别",children:[]},{level:2,title:"Event-Loop",slug:"event-loop",children:[]},{level:2,title:"引用",slug:"引用",children:[]}],filePathRelative:"JS/微任务_宏任务与Event-Loop.md",git:{updatedTime:1627976681e3}}},8008:(n,s,a)=>{a.r(s),a.d(s,{default:()=>c});var e=a(6252);const p=(0,e.uE)('<h1 id="微任务-宏任务与event-loop" tabindex="-1"><a class="header-anchor" href="#微任务-宏任务与event-loop" aria-hidden="true">#</a> 微任务_宏任务与Event-Loop</h1><blockquote><p>首先，JavaScript是一个单线程的脚本语言。</p></blockquote><h2 id="微任务与宏任务的区别" tabindex="-1"><a class="header-anchor" href="#微任务与宏任务的区别" aria-hidden="true">#</a> 微任务与宏任务的区别</h2><p>这个就像去银行办业务一样，先要取号进行排号。 一般上边都会印着类似：“您的号码为XX，前边还有XX人。”之类的字样。</p><p>因为柜员同时职能处理一个来办理业务的客户，这时每一个来办理业务的人就可以认为是银行柜员的一个宏任务来存在的， 当柜员处理完当前客户的问题以后，选择接待下一位，广播报号，也就是下一个宏任务的开始。 所以多个宏任务合在一起就可以认为说有一个任务队列在这，里边是当前银行中所有排号的客户。 <strong>任务队列中的都是已经完成的异步操作，而不是说注册一个异步任务就会被放在这个任务队列中， 就像在银行中排号，如果叫到你的时候你不在，那么你当前的号牌就作废了，柜员会选择直接 跳过进行下一个客户的业务处理，等你回来以后还需要重新取号</strong></p><p>而且一个宏任务在执行的过程中，是可以添加一些微任务的，就像在柜台办理业务，你前边的一位老大爷可能在存款，在存款这个业务办理完以后，柜员会问老大爷还有没有其他需要办理的业务，这时老大爷想了一下：“最近P2P爆雷有点儿多，是不是要选择稳一些的理财呢”，然后告诉柜员说，要办一些理财的业务，这时候柜员肯定不能告诉老大爷说：“您再上后边取个号去，重新排队”。</p><p>所以本来快轮到你来办理业务，会因为老大爷临时添加的“理财业务”而往后推。 也许老大爷在办完理财以后还想 再办一个信用卡？或者 再买点儿纪念币？ 无论是什么需求，只要是柜员能够帮她办理的，都会在处理你的业务之前来做这些事情，这些都可以认为是微任务。</p><p><strong>在当前的微任务没有执行完成时，是不会执行下一个宏任务的。</strong></p><p>所以就有了那个经常在面试题、各种博客中的代码片段：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>复制代码 <code>setTimeout</code> 就是作为宏任务来存在的，而 <code>Promise.then</code> 则是具有代表性的微任务，上述代码的执 行顺序就是按照序号来输出的。</p><p>所有会进入的异步都是指的事件回调中的那部分代码 也就是说<code>new Promise</code>在实例化的过程中所执行的代码都是同步进行的，而<code>then</code>中注册的回调才是异步执行的。 在同步代码执行完成后才回去检查是否有异步任务完成，并执行对应的回调，而微任务又会在宏任务之前执行。 所以就得到了上述的输出结论<code>1、2、3、4</code>。 +部分表示同步执行的代码</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code>\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">setTimeout(_ =&gt; {\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  console.log(4)\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">})\n</span></span>\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">new Promise(resolve =&gt; {\n</span><span class="token prefix inserted">+</span><span class="token line">  resolve()\n</span><span class="token prefix inserted">+</span><span class="token line">  console.log(1)\n</span><span class="token prefix inserted">+</span><span class="token line">}).then(_ =&gt; {\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  console.log(3)\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">})\n</span></span>\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">console.log(2)\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>复制代码本来<code>setTimeout</code>已经先设置了定时器（相当于取号），然后在当前进程中又添加了一些<code>Promise</code>的处理（临时添加业务）。 所以进阶的，即便我们继续在<code>Promise</code>中实例化<code>Promise</code>，其输出依然会早于<code>setTimeout</code>的宏任务：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\n  Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;before timeout&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;also before timeout&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>复制代码当然了，实际情况下很少会有简单的这么调用<code>Promise</code>的，一般都会在里边有其他的异步操作， 比如<code>fetch、fs.readFile</code>之类的操作。 而这些其实就相当于注册了一个宏任务，而非是微任务。</p><h2 id="event-loop" tabindex="-1"><a class="header-anchor" href="#event-loop" aria-hidden="true">#</a> Event-Loop</h2><p>上边一直在讨论 宏任务、微任务，各种任务的执行。 但是回到现实，<code>JavaScript</code>是一个单进程的语言，同一时间不能处理多个任务，所以何时执行宏任务，何时执行微任务？ 我们需要有这样的一个判断逻辑存在。</p><p>每办理完一个业务，柜员就会问当前的客户，是否还有其他需要办理的 业务。<strong>（检查还有没有微任务需要处理）</strong></p><p>而客户明确告知说没有事情以后，柜员就去查看后边还有没有等着办理业务 的人。<strong>（结束本次宏任务、检查还有没有宏任务需要处理）</strong></p><p>这个检查的过程是持续进行的，每完成一个任务都会进行一次，而这样的操作就被称为<code>Event Loop</code>。(这是个非常简易的描述了，实际上会复杂很多)</p><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2>',22),t={href:"https://juejin.im/post/5b73d7a6518825610072b42b",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("微任务、宏任务与Event-Loop"),c={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",t,[o,(0,e.Wm)(a)])])])],64)}}}}]);