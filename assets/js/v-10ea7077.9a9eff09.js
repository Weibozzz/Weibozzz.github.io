(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[9858],{878:(e,d,o)=>{"use strict";o.r(d),o.d(d,{data:()=>n});const n={key:"v-10ea7077",path:"/Utils/Node/%E8%B0%83%E8%AF%95node.html",title:"调试node",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"使用客户端ide",slug:"使用客户端ide",children:[]},{level:2,title:"使用命令",slug:"使用命令",children:[]},{level:2,title:"引用",slug:"引用",children:[]}],filePathRelative:"Utils/Node/调试node.md",git:{updatedTime:1627026748e3}}},3965:(e,d,o)=>{"use strict";o.r(d),o.d(d,{default:()=>i});const n=(0,o(6252).uE)('<h1 id="调试node" tabindex="-1"><a class="header-anchor" href="#调试node" aria-hidden="true">#</a> 调试node</h1><p>调试node程序</p><h2 id="使用客户端ide" tabindex="-1"><a class="header-anchor" href="#使用客户端ide" aria-hidden="true">#</a> 使用客户端ide</h2><h2 id="使用命令" tabindex="-1"><a class="header-anchor" href="#使用命令" aria-hidden="true">#</a> 使用命令</h2><p><code>Chrome DevTools</code> 是从什么时候开始支持 <code>node</code> 调试、他怎么支持的、 都经历了几个版本的变化啊这些陈芝麻烂谷子我们不关心(其实我不知道)， 我们只关心我们如何才能用上这种方法。只需三步。</p><p><code>Step 0</code> 检查你的环境 要使用这种方法是有限制的。需要</p><ul><li>Node.js 6.3+</li><li>Chrome 55+</li></ul><p><code>Setp 1</code> 跑起你的程序 使用方法很优雅，只需用下面的命令把你的<code>node</code>代码跑起来</p><p><code>node --inspect app.js</code> 如果你想让他在第一行就停下来,等待调试也可以使用</p><p><code>node --inspect-brk app.js</code> 然后就会得到形如下面这样的输出</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Debugger listening on ws://127.0.0.1:9229/4dc825ec-a204-46f8-8edc-4afadc8da61a\nFor help see https://nodejs.org/en/docs/inspector\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>Setp 2</code> 调试界面在哪里 好了,程序现在已经可以开始调试了，只是我们需要找找调试界面在哪里。 我知道有两种方式可以打开调试界面</p><ol><li>在<code>Chrome</code>中打开<code>chrome://inspect/#devices</code></li><li><code>chrome</code> 打开 <code>127.0.0.1:9229/json</code>，会出现一个<code>json</code>,用浏览器打开 <code>devtoolsFrontendUrl</code>字段就可以调试了</li></ol><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><ul><li>https://nodejs.org/en/docs/inspector</li><li>https://nodejs.org/zh-cn/docs/guides/debugging-getting-started/</li><li>https://www.cnblogs.com/foreachlife/p/9341167.html</li></ul>',15),i={render:function(e,d){return n}}}}]);