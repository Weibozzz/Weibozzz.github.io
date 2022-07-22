"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[1740],{7069:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-f1ea40fc",path:"/JS/%E5%8E%9F%E7%94%9Fjs%E5%A4%8D%E5%88%B6%E7%B2%98%E8%B4%B4%E5%89%AA%E5%88%87.html",title:"原生js复制粘贴剪切",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"复制",slug:"复制",children:[{level:3,title:"兼容性",slug:"兼容性",children:[]}]},{level:2,title:"粘贴",slug:"粘贴",children:[{level:3,title:"兼容性",slug:"兼容性-1",children:[]}]},{level:2,title:"剪切",slug:"剪切",children:[{level:3,title:"兼容性",slug:"兼容性-2",children:[]}]},{level:2,title:"参考",slug:"参考",children:[]},{level:2,title:"今日图 - 每个人挺高逼自己一把",slug:"今日图-每个人挺高逼自己一把",children:[]}],filePathRelative:"JS/原生js复制粘贴剪切.md",git:{updatedTime:1626767622e3}}},653:(n,a,s)=>{s.r(a),s.d(a,{default:()=>h});var t=s(6252);const p=s.p+"assets/img/169fc27e0fdf4d09.205d9623.webp",e=(0,t.uE)('<h1 id="原生js复制粘贴剪切" tabindex="-1"><a class="header-anchor" href="#原生js复制粘贴剪切" aria-hidden="true">#</a> 原生js复制粘贴剪切</h1><h2 id="复制" tabindex="-1"><a class="header-anchor" href="#复制" aria-hidden="true">#</a> 复制</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>source<span class="token punctuation">&quot;</span></span> <span class="token attr-name">contenteditable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Try copying text from this box...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>target<span class="token punctuation">&quot;</span></span> <span class="token attr-name">contenteditable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...and pasting it into this one<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> source <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div.source&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nsource<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;copy&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> selection <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    event<span class="token punctuation">.</span>clipboardData<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">,</span> selection<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性" aria-hidden="true">#</a> 兼容性</h3><p>chrome58</p><h2 id="粘贴" tabindex="-1"><a class="header-anchor" href="#粘贴" aria-hidden="true">#</a> 粘贴</h2><p>例子</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>source<span class="token punctuation">&quot;</span></span> <span class="token attr-name">contenteditable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Try copying text from this box...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>target<span class="token punctuation">&quot;</span></span> <span class="token attr-name">contenteditable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...and pasting it into this one<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div.target&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ntarget<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;paste&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> paste <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>clipboardData <span class="token operator">||</span> window<span class="token punctuation">.</span>clipboardData<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    paste <span class="token operator">=</span> paste<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> selection <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>selection<span class="token punctuation">.</span>rangeCount<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    selection<span class="token punctuation">.</span><span class="token function">deleteFromDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    selection<span class="token punctuation">.</span><span class="token function">getRangeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertNode</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>paste<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="兼容性-1" tabindex="-1"><a class="header-anchor" href="#兼容性-1" aria-hidden="true">#</a> 兼容性</h3><p>chrome58</p><h2 id="剪切" tabindex="-1"><a class="header-anchor" href="#剪切" aria-hidden="true">#</a> 剪切</h2><p>例子</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>source<span class="token punctuation">&quot;</span></span> <span class="token attr-name">contenteditable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Try copying text from this box...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>target<span class="token punctuation">&quot;</span></span> <span class="token attr-name">contenteditable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...and pasting it into this one<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> source <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div.source&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nsource<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;cut&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> selection <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    event<span class="token punctuation">.</span>clipboardData<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">,</span> selection<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    selection<span class="token punctuation">.</span><span class="token function">deleteFromDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="兼容性-2" tabindex="-1"><a class="header-anchor" href="#兼容性-2" aria-hidden="true">#</a> 兼容性</h3><p>chrome58</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',19),o={href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("复制"),l={href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("粘贴"),i={href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/cut_event",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Uk)("剪切"),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Selection",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("getSelection()"),b=(0,t._)("h2",{id:"今日图-每个人挺高逼自己一把",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#今日图-每个人挺高逼自己一把","aria-hidden":"true"},"#"),(0,t.Uk)(" 今日图 - 每个人挺高逼自己一把")],-1),g=(0,t._)("p",null,[(0,t._)("img",{src:p,alt:"169fc27e0fdf4d09.webp"})],-1),m={},h=(0,s(3744).Z)(m,[["render",function(n,a){const s=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",o,[c,(0,t.Wm)(s)])]),(0,t._)("li",null,[(0,t._)("a",l,[u,(0,t.Wm)(s)])]),(0,t._)("li",null,[(0,t._)("a",i,[r,(0,t.Wm)(s)])]),(0,t._)("li",null,[(0,t._)("a",k,[d,(0,t.Wm)(s)])])]),b,g],64)}]])}}]);