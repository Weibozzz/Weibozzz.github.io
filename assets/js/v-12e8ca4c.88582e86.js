(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[11],{6402:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-12e8ca4c",path:"/RegExp/%E6%AD%A3%E5%88%99%E5%BA%94%E7%94%A8(%E6%80%BB%E7%BB%93).html",title:"正则应用(总结)",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. 常见业务举例",slug:"_1-常见业务举例",children:[{level:3,title:"1.1 用户名正则",slug:"_1-1-用户名正则",children:[]}]},{level:2,title:"2. 正则分组",slug:"_2-正则分组",children:[{level:3,title:"2.1 例子(如电话号码中间隐藏)",slug:"_2-1-例子-如电话号码中间隐藏",children:[]}]},{level:2,title:"3. 添加变量",slug:"_3-添加变量",children:[]},{level:2,title:"4. string的replace",slug:"_4-string的replace",children:[]},{level:2,title:"5. 边界类(boudary)",slug:"_5-边界类-boudary",children:[]},{level:2,title:"6. 正则断言",slug:"_6-正则断言",children:[{level:3,title:"6.1 (?=pattern) 正向先行断言",slug:"_6-1-pattern-正向先行断言",children:[]},{level:3,title:"6.2 (?!pattern) 负向先行断言(负向预查，非获取匹配)",slug:"_6-2-pattern-负向先行断言-负向预查-非获取匹配",children:[]},{level:3,title:"6.3 (?<=pattern) 正向后行断言",slug:"_6-3-pattern-正向后行断言",children:[]},{level:3,title:"6.4 (?<!pattern) 负向后行断言",slug:"_6-4-pattern-负向后行断言",children:[]}]},{level:2,title:"7. 多行匹配",slug:"_7-多行匹配",children:[]}],filePathRelative:"RegExp/正则应用(总结).md",git:{updatedTime:1627026748e3}}},8273:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="正则应用-总结" tabindex="-1"><a class="header-anchor" href="#正则应用-总结" aria-hidden="true">#</a> 正则应用(总结)</h1><h2 id="_1-常见业务举例" tabindex="-1"><a class="header-anchor" href="#_1-常见业务举例" aria-hidden="true">#</a> 1. 常见业务举例</h2><blockquote><p>常见业务(用户名,密码强度等，这里不列举，一搜一大把。),也可以看我总结的《前端表单验证常用的正则表达式》</p></blockquote><h3 id="_1-1-用户名正则" tabindex="-1"><a class="header-anchor" href="#_1-1-用户名正则" aria-hidden="true">#</a> 1.1 用户名正则</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//用户名正则，4到16位（字母，数字，下划线，减号）</span>\n<span class="token keyword">var</span> uPattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-zA-Z0-9_-]{4,16}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>\n<span class="token comment">//输出 true</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>uPattern<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;caibaojian&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//密码的强度必须是包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间。</span>\n\n<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[\\da-zA-Z]{8,10}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_2-正则分组" tabindex="-1"><a class="header-anchor" href="#_2-正则分组" aria-hidden="true">#</a> 2. 正则分组</h2><blockquote><p>正则表达式是一个字符一个字符的去匹配，所以如果要匹配一个单词如<code>is</code> ,就是必须写<code>/is/</code>, 如果想要匹配<code>is</code> 出现3次，就只能写/<code>isisis/</code>, 我们想使用量词<code>/is{3}/</code>,但这只表示<code>s</code>出现3次，那怎么修改才能表示<code>is</code> 出现三次，把<code>is</code> 用括号括起来，<code>/(is){3}/</code>. 用括号把<code>is</code>括起来，就表示是它是一个整体，一个组，它们要一起出现，才算匹配成功，所以称之为分组。分组有一个重要的概念，就是引用，当正则表达式中有分组时，我们可以获取到分组的内容，怎么获取，就是<code>$n</code>,<code> n</code>表示数字，<code>$1 </code>表示第一个分组的内容，<code>$2</code> 表示第二个分组的内容，<code>$3</code> 表示第三个分组的内容，依次类推，其实这里还有一个<code>$0</code>, 它比较特殊，所以单列出来，它表示，整个正则表达式匹配成功的内容</p></blockquote><h3 id="_2-1-例子-如电话号码中间隐藏" tabindex="-1"><a class="header-anchor" href="#_2-1-例子-如电话号码中间隐藏" aria-hidden="true">#</a> 2.1 例子(如电话号码中间隐藏)</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 例子1</span>\n<span class="token keyword">var</span> reg<span class="token operator">=</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d{3})\\d{4}(\\d{4})</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> phone<span class="token operator">=</span><span class="token string">&quot;13423874592&quot;</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> phone<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">&quot;$1****$2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//134****4592</span>\n\n<span class="token comment">// 例子2：驼峰变中划线</span>\n<span class="token string">&#39;fooBarBaz&#39;</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([A-Z])</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&quot;-$1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// foo-bar-baz</span>\n\n<span class="token comment">// 例子3</span>\n<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d{4})-(\\d{2})-(\\d{2})</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token string">&#39;2017-03-20&#39;</span>\n<span class="token keyword">let</span> replaceString <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span><span class="token string">&quot;$2/$3/$1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>replaceString<span class="token punctuation">)</span>  <span class="token comment">//  03/20/2017</span>\n\n<span class="token comment">// 例子4</span>\n<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d)2\\1</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token string">&#39;121 222 323 424&#39;</span>\n<span class="token keyword">let</span> replaceString <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span><span class="token string">&#39;X&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>replaceString<span class="token punctuation">)</span>  <span class="token comment">// X X X X</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_3-添加变量" tabindex="-1"><a class="header-anchor" href="#_3-添加变量" aria-hidden="true">#</a> 3. 添加变量</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// http://blog.csdn.net/icanlove/article/details/39499777</span>\n<span class="token keyword">var</span> v <span class="token operator">=</span> <span class="token string">&quot;bl&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> re <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;^\\\\d+&quot;</span> <span class="token operator">+</span> v <span class="token operator">+</span> <span class="token string">&quot;$&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;gim&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// re为/^\\d+bl$/gim</span>\n\n<span class="token comment">//至此，最初的问题问题也完全解决了。</span>\n\n<span class="token comment">//另外，还有一种方法是用过eval动态执行一段字符串的方法，不过我觉得从各方面来说，都属下策。</span>\n\n<span class="token keyword">var</span> re <span class="token operator">=</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;/^\\\\d+&quot;</span> <span class="token operator">+</span> v <span class="token operator">+</span> <span class="token string">&quot;$/gim&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_4-string的replace" tabindex="-1"><a class="header-anchor" href="#_4-string的replace" aria-hidden="true">#</a> 4. string的replace</h2><blockquote><p>查找符合正则的字符串，就替换成对应的字符串。返回替换后的内容</p></blockquote><p>用法： <code>String.replace(正则,新的字符串/回调函数)</code>（在回调函数中，第一个参数指的是每次匹配成功的字符）</p><p>例子：敏感词过滤，比如 ”我爱北京天安门，天安门上太阳升“。------我爱*****，***<em>上太阳升。即（北京和天安门变成</em>号），</p><p>一开始我们可能会想到这样的方法：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;我爱北京天安门，天安门上太阳升。&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">北京|天安门</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span> <span class="token comment">// 找到北京 或者天安门 全局匹配</span>\n<span class="token keyword">var</span> str2 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>re<span class="token punctuation">,</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">alert</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span> <span class="token comment">//我爱**，*上太阳升</span>\n<span class="token comment">//这种只是把找到的变成了一个*，并不能几个字就对应几个*。</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>要想实现几个字对应几个*，我们可以用回调函数实现：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;我爱北京天安门，天安门上太阳升。&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> re <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">北京|天安门</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span> <span class="token comment">// 找到北京 或者天安门 全局匹配</span>\n<span class="token keyword">var</span> str2 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>re<span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//用来测试：函数的第一个参数代表每次搜索到的符合正则的字符，所以第一次str指的是北京 第二次str是天安门 第三次str是天安门</span>\n<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>str<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i  <span class="token punctuation">)</span><span class="token punctuation">{</span>\nresult  <span class="token operator">=</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">return</span> result<span class="token punctuation">;</span> <span class="token comment">//所以搜索到了几个字就返回几个*</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span> <span class="token comment">//我爱*****，***上太阳升</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>整个过程就是，找到北京，替换成了两个*，找到天安门替换成了3个*，找到天安门替换成3个*。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span>\n    content<span class="token operator">:</span> <span class="token string">&quot;你好#D12345#,hello#D321#world&quot;</span><span class="token punctuation">,</span>\n    lawitems<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">&quot;D12345&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aaaa&quot;</span><span class="token punctuation">,</span>\n        <span class="token string">&quot;D321&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bbbbb&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\narr<span class="token punctuation">.</span>content <span class="token operator">=</span> arr<span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">#([^#]+)#</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">match<span class="token punctuation">,</span> $<span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> arr<span class="token punctuation">.</span>lawitems<span class="token punctuation">[</span>$<span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">||</span>match<span class="token punctuation">;</span><span class="token comment">//没有在lawitems找到返回原字符串</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// &quot;你好aaaa,hellobbbbbworld&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>replace</code> 是一个很有用的方法，经常会用到。</p><h2 id="_5-边界类-boudary" tabindex="-1"><a class="header-anchor" href="#_5-边界类-boudary" aria-hidden="true">#</a> 5. 边界类(boudary)</h2><blockquote><p>边界类主要用四个: ^ 表示以什么开始，$表示以什么结尾， boudary 表示单词边界，B 表示非单词边界。边界就是单词和单词相隔的地方，最明显的就是空格。</p></blockquote><p>写一个例子来看一下可以更为直观。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">is</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token string">&#39;this is a dog &#39;</span>\n<span class="token keyword">let</span> replaceString <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span><span class="token string">&quot;IS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>replaceString<span class="token punctuation">)</span>  <span class="token comment">// thIS IS a dog</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>两个<code>is</code> 都被替换掉了，这符合预期。但我们怎么只替换中间的<code>is</code>，中间的<code>is</code> 有一个特点，它是一个单词，因为前面和后面都是空格，使得它与其它单词分开了，正因为有空格的存在<code>is</code> 才成为了一个单词，所以空格是单词边界， <code>\\b</code> 可以匹配到它。把正则表达式改成 <code>/\\bis/g</code>， 可以看到输出 <code>this IS a dog</code>, 只匹配第二个。 如果只想改变第一个呢?那好办，因为第一个is被包含在一个单词中，所以它的前面不是单词边界，直接改成<code>B</code> 就可以了， 正则表达式改成 <code>/Bis/g</code> 就可以了.</p><h2 id="_6-正则断言" tabindex="-1"><a class="header-anchor" href="#_6-正则断言" aria-hidden="true">#</a> 6. 正则断言</h2><blockquote><p>断言，只匹配一个位置,比如看下方例子</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 比如，你想匹配一个“人”字，但是你只想匹配中国人的人字，不想匹配法国人的人就可以用一下表达式</span>\n<span class="token operator">/</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">&lt;=</span>中国<span class="token punctuation">)</span>人<span class="token operator">/</span>\n<span class="token comment">// 所以，表达式与其他通配符连用才能起到效果。</span>\n<span class="token operator">/</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">=</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">[</span>a<span class="token operator">-</span>z<span class="token punctuation">]</span><span class="token punctuation">)</span>\\d<span class="token operator">/</span>\n<span class="token comment">// 这个就表示  匹配以“任意字符连着一个小写字母”开头的数字，只匹配数字。</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 例子1</span>\n<span class="token function">String</span><span class="token punctuation">(</span><span class="token number">123456789</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d)(?=(\\d{3})+$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;$1,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// or</span>\n<span class="token string">&#39;123456789&#39;</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\B(?=(\\d{3})+(?!\\d))</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>\n<span class="token comment">// 结果是：123,456,789</span>\n\n<span class="token comment">// 例子2:整数小数都兼容</span>\n<span class="token string">&#39;1234567890030.7890&#39;</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?=\\B(?:\\d{3})+\\b)(\\d{3}(\\.\\d+$)?)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&#39;,$1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_6-1-pattern-正向先行断言" tabindex="-1"><a class="header-anchor" href="#_6-1-pattern-正向先行断言" aria-hidden="true">#</a> 6.1 <code>(?=pattern)</code> 正向先行断言</h3><blockquote><p>代表字符串中的一个位置，紧接该位置之后的字符序列能够匹配<code>pattern</code></p></blockquote><p>例如对<code>a regular expression</code>这个字符串，要想匹配<code>regular</code>中的re，但不能匹配<code>expression</code>中的<code>re</code>，可以用<code>re(?=gular)</code>，该表达式限定了<code>re</code>右边的位置，这个位置之后是<code>gular</code>，但并不消耗<code>gular</code>这些字符，将表达式改为<code>re(?=gular).</code>，将会匹配<code>reg</code>，元字符.匹配了<code>g</code>，括号这一砣匹配了<code>e和g</code>之间的位置。</p><h3 id="_6-2-pattern-负向先行断言-负向预查-非获取匹配" tabindex="-1"><a class="header-anchor" href="#_6-2-pattern-负向先行断言-负向预查-非获取匹配" aria-hidden="true">#</a> 6.2 <code>(?!pattern)</code> 负向先行断言(负向预查，非获取匹配)</h3><blockquote><p>代表字符串中的一个位置，紧接该位置之后的字符序列不能匹配<code>pattern</code></p></blockquote><p>例如对<code>regex represents regular expression</code>这个字符串，要想匹配除<code>regex</code>和<code>regular</code>之外的re，可以用<code>re(?!g)</code>，该表达式限定了<code>re</code>右边的位置，这个位置后面不是字符<code>g</code>。负向和正向的区别，就在于该位置之后的字符能否匹配括号中的表达式。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 不会匹配到含有 df的内容</span>\n<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(?!.*df).*$</span><span class="token regex-delimiter">/</span></span>     <span class="token comment">// df就是你不想匹配的一个字符串了。</span>\nreg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;abc@c&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\n\n<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">abc@c\n\nabc@d\n\nasdf@aa\n\nasdfsdf@qq</span><span class="token template-punctuation string">`</span></span>\n\nreg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token comment">// false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_6-3-pattern-正向后行断言" tabindex="-1"><a class="header-anchor" href="#_6-3-pattern-正向后行断言" aria-hidden="true">#</a> 6.3 <code>(?&lt;=pattern)</code> 正向后行断言</h3><blockquote><p>代表字符串中的一个位置，紧接该位置之前的字符序列能够匹配<code>pattern</code> ES6+支持后行断言</p></blockquote><p>例如对<code>regex represents regular expression</code>这个字符串，有4个单词，要想匹配单词内部的<code>re</code>，但不匹配单词开头的<code>re</code>，可以用<code>(?&lt;=\\w)re</code>，单词内部的<code>re</code>，在<code>re</code>前面应该是一个单词字符。之所以叫后行断言，是因为正则表达式引擎在匹配字符串和表达式时，是从前向后逐个扫描字符串中的字符，并判断是否与表达式符合，当在表达式中遇到该断言时，正则表达式引擎需要往字符串前端检测已扫描过的字符，相对于扫描方向是向后的。</p><h3 id="_6-4-pattern-负向后行断言" tabindex="-1"><a class="header-anchor" href="#_6-4-pattern-负向后行断言" aria-hidden="true">#</a> 6.4 <code>(?&lt;!pattern)</code> 负向后行断言</h3><blockquote><p>代表字符串中的一个位置，紧接该位置之前的字符序列不能匹配<code>pattern</code>。 ES6+支持后行断言</p></blockquote><p>例如对<code>regex represents regular expression</code>这个字符串，要想匹配单词开头的<code>re</code>，可以用<code>(?&lt;!\\w)re</code>。单词开头的<code>re</code>，在本例中，也就是指不在单词内部的<code>re</code>，即<code>re</code>前面不是单词字符。当然也可以用<code>\\bre</code>来匹配。</p><h2 id="_7-多行匹配" tabindex="-1"><a class="header-anchor" href="#_7-多行匹配" aria-hidden="true">#</a> 7. 多行匹配</h2><p><code>^</code> 和<code>$</code> 很好理解, <code>/^T/</code>以大写字母<code>T</code>开头即可, <code>/T$/</code> 以大写字母<code>T</code>结束即可, 要注意它们的书写位置,一个在前,一个在后. 如果字符串中有换行符,<code> let string = &#39;@123 @456 @789&#39;</code>, 字符串表现地就像有三行一样. 以下是<code>chrome</code> 浏览器中的输出</p><p>这时如果以<code>/^@/g</code> 去进行匹配的话,它只会匹配第一个@,</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\n<span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^@</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">@123\n@456\n@789</span><span class="token template-punctuation string">`</span></span>\n<span class="token keyword">let</span> replaceString <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>replaceString<span class="token punctuation">)</span>\n<span class="token comment">/*\n*    X123\n*    @456\n*    @789\n*/</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>如果想匹配三个,那就要用到<code>m</code>修饰符，多行标示符，它表示如果字符串中有换行符，那就把字符串当成多行看待。<code>m </code>标示符，只有在正则表达式中有<code>^或&amp;</code>时才起作用，这也是把<code>m</code>标示符放到这里说明的原因。</p>',49),p={render:function(n,s){return e}}}}]);