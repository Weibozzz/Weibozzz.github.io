"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[8729],{9723:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-3716344a",path:"/Utils/Node/npm%E5%92%8Cnpx%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97.html",title:"npm和npx使用指南",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"npx使用",slug:"npx使用",children:[]},{level:2,title:"npm使用",slug:"npm使用",children:[]},{level:2,title:"查看webpack所有版本号",slug:"查看webpack所有版本号",children:[]},{level:2,title:"查看源并设置",slug:"查看源并设置",children:[]},{level:2,title:"安装指定版本",slug:"安装指定版本",children:[]},{level:2,title:"update",slug:"update",children:[]},{level:2,title:"卸载",slug:"卸载",children:[]},{level:2,title:"npm scripts",slug:"npm-scripts",children:[]},{level:2,title:"原理",slug:"原理",children:[]},{level:2,title:"通配符",slug:"通配符",children:[]},{level:2,title:"传参",slug:"传参",children:[]},{level:2,title:"执行顺序",slug:"执行顺序",children:[]},{level:2,title:"钩子",slug:"钩子",children:[]},{level:2,title:"变量",slug:"变量",children:[]},{level:2,title:"其他",slug:"其他",children:[{level:3,title:"node_modules",slug:"node-modules",children:[]}]},{level:2,title:"今日图 - 老板画饼",slug:"今日图-老板画饼",children:[]}],filePathRelative:"Utils/Node/npm和npx使用指南.md",git:{updatedTime:1627026748e3}}},2286:(s,n,a)=>{a.r(n),a.d(n,{default:()=>u});var e=a(6252);const p=a.p+"assets/img/16ac3747430c8cd7.366130f1.gif",l=(0,e.uE)('<h1 id="npm和npx使用指南"><a class="header-anchor" href="#npm和npx使用指南">#</a> npm和npx使用指南</h1><h2 id="npx使用"><a class="header-anchor" href="#npx使用">#</a> npx使用</h2><p>npm v5.2.0引入的一条命令（npx），引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验。 举例：使用<code>create-react-app</code>创建一个react项目。 老方法：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g create-react-app\ncreate-react-app my-app\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>npx</code>方式：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx create-react-app my-app\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这条命令会临时安装 create-react-app 包，命令完成后create-react-app 会删掉，不会出现在 global 中。下次再执行，还是会重新临时安装。</p><p><code>npx</code> 会帮你执行依赖包里的二进制文件。 举例来说，之前我们可能会写这样的命令：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i -D webpack\n./node_modules/.bin/webpack -v\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果你对 bash 比较熟，可能会写成这样：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i -D webpack\n<span class="token variable"><span class="token variable">`</span><span class="token function">npm</span> bin<span class="token variable">`</span></span>/webpack -v\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>有了 npx，你只需要这样：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i -D webpack\nnpx webpack -v\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>也就是说<code>npx</code>会自动查找当前依赖包中的可执行文件，如果找不到，就会去<code>PATH</code>里找。如果依然找不到，就会帮你安装！ <code>npx</code> 甚至支持运行远程仓库的可执行文件： npx github:piuccio/cowsay hello</p><p>再比如<code> npx http-server</code> 可以一句话帮你开启一个静态服务器！（第一次运行会稍微慢一些） <code>npx http-server</code></p><p>指定<code>node</code>版本来运行<code>npm scripts</code>：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx -p node@8 <span class="token function">npm</span> run build\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>主要特点：</p><ol><li>临时安装可执行依赖包，不用全局安装，不用担心长期的污染。</li><li>可以执行依赖包中的命令，安装完成自动运行。</li><li>自动加载node_modules中依赖包，不用指定$PATH。</li><li>可以指定node版本、命令的版本，解决了不同项目使用不同版本的命令的问题。</li></ol><h2 id="npm使用"><a class="header-anchor" href="#npm使用">#</a> npm使用</h2><h2 id="查看webpack所有版本号"><a class="header-anchor" href="#查看webpack所有版本号">#</a> 查看<code>webpack</code>所有版本号</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> view webpack versions  --json\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="查看源并设置"><a class="header-anchor" href="#查看源并设置">#</a> 查看源并设置</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> config get registry\n<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="安装指定版本"><a class="header-anchor" href="#安装指定版本">#</a> 安装指定版本</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i vue-cli@2.9.6 -g\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="update"><a class="header-anchor" href="#update">#</a> update</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">npm</span> update 模块名\n //当然你也可以update 该模块到指定版本\n <span class="token function">npm</span> update 模块名 @版本号\n //如果安装到最新版本可以使用以下命令\n <span class="token function">npm</span> <span class="token function">install</span> 模块名@latest\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="卸载"><a class="header-anchor" href="#卸载">#</a> 卸载</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> uninstall vue-cli -g\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="npm-scripts"><a class="header-anchor" href="#npm-scripts">#</a> npm scripts</h2><h2 id="原理"><a class="header-anchor" href="#原理">#</a> 原理</h2><p><code>npm</code> 脚本的原理非常简单。每当执行<code>npm run</code>，就会自动新建一个 <code>Shell</code>，在这个 <code>Shell </code>里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。</p><p>比较特别的是，<code>npm run</code>新建的这个 Shell，会将当前目录的<code>node_modules/.bin</code>子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。</p><p>这意味着，当前目录的node_modules/.bin子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写<code>mocha test</code>就可以了。</p><h2 id="通配符"><a class="header-anchor" href="#通配符">#</a> 通配符</h2><p>由于 npm 脚本就是 Shell 脚本，因为可以使用 Shell 通配符。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&quot;lint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;jshint *.js&quot;</span>\n<span class="token string">&quot;lint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;jshint **/*.js&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面代码中，<code>*</code>表示任意文件名，<code>**</code>表示任意一层子目录。</p><p>如果要将通配符传入原始命令，防止被 Shell 转义，要将星号转义。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&quot;test&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;tap test/\\*.js&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="传参"><a class="header-anchor" href="#传参">#</a> 传参</h2><p>向 <code>npm</code> 脚本传入参数，要使用<code>--</code>标明。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&quot;lint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;jshint **.js&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>向上面的<code>npm run lint</code>命令传入参数，必须写成下面这样。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> run lint --  --reporter checkstyle <span class="token operator">&gt;</span> checkstyle.xml\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>也可以在<code>package.json</code>里面再封装一个命令。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&quot;lint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;jshint **.js&quot;</span>,\n<span class="token string">&quot;lint:checkstyle&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run lint -- --reporter checkstyle &gt; checkstyle.xml&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="执行顺序"><a class="header-anchor" href="#执行顺序">#</a> 执行顺序</h2><p>如果 npm 脚本里面需要执行多个任务，那么需要明确它们的执行顺序。</p><p>如果是并行执行（即同时的平行执行），可以使用<code>&amp;</code>符号。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> run script1.js <span class="token operator">&amp;</span> <span class="token function">npm</span> run script2.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用<code>&amp;&amp;</code>符号。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> run script1.js <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> run script2.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="钩子"><a class="header-anchor" href="#钩子">#</a> 钩子</h2><p>npm 脚本有<code>pre和post</code>两个钩子。举例来说，build脚本命令的钩子就是<code>prebuild和postbuild</code>。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&quot;prebuild&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;echo I run before the build script&quot;</span>,\n<span class="token string">&quot;build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=production webpack&quot;</span>,\n<span class="token string">&quot;postbuild&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;echo I run after the build script&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>用户执行<code>npm run build</code>的时候，会自动按照下面的顺序执行。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run prebuild <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> run build <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> run postbuild\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>因此，可以在这两个钩子里面，完成一些准备工作和清理工作。下面是一个例子。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&quot;clean&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rimraf ./dist &amp;&amp; mkdir dist&quot;</span>,\n<span class="token string">&quot;prebuild&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run clean&quot;</span>,\n<span class="token string">&quot;build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env NODE_ENV=production webpack&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>npm 默认提供下面这些钩子。</p><ul><li>prepublish，postpublish</li><li>preinstall，postinstall</li><li>preuninstall，postuninstall</li><li>preversion，postversion</li><li>pretest，posttest</li><li>prestop，poststop</li><li>prestart，poststart</li><li>prerestart，postrestart</li></ul><p>自定义的脚本命令也可以加上<code>pre和post</code>钩子。比如，<code>myscript</code>这个脚本命令，也有<code>premyscript和postmyscript</code>钩子。不过，双重的<code>pre和post</code>无效，比如<code>prepretest和postposttest</code>是无效的。</p><p>npm 提供一个<code>npm_lifecycle_event</code>变量，返回当前正在运行的脚本名称，比如<code>pretest、test、posttest</code>等等。所以，可以利用这个变量，在同一个脚本文件里面，为不同的<code>npm scripts</code>命令编写代码。请看下面的例子。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\n<span class="token keyword">const</span> <span class="token constant">TARGET</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>npm_lifecycle_event<span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">TARGET</span> <span class="token operator">===</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Running the test task!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">TARGET</span> <span class="token operator">===</span> <span class="token string">&#39;pretest&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Running the pretest task!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">TARGET</span> <span class="token operator">===</span> <span class="token string">&#39;posttest&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Running the posttest task!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>注意，<code>prepublish</code>这个钩子不仅会在<code>npm publish</code>命令之前运行，还会在<code>npm install</code>（不带任何参数）命令之前运行。这种行为很容易让用户感到困惑，所以 npm 4 引入了一个新的钩子<code>prepare</code>，行为等同于<code>prepublish</code>，而从 <code>npm 5</code> 开始，<code>prepublish</code>将只在<code>npm publish</code>命令之前运行。</p><h2 id="变量"><a class="header-anchor" href="#变量">#</a> 变量</h2><p>npm 脚本有一个非常强大的功能，就是可以使用 npm 的内部变量。</p><p>首先，通过<code>npm_package_</code>前缀，npm 脚本可以拿到<code>package.json</code>里面的字段。比如，下面是一个package.json。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.2.5&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node view.js&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>那么，变量<code>npm_package_name</code>返回<code>foo</code>，变量<code>npm_package_version</code>返回<code>1.2.5</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// view.js</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>npm_package_name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// foo</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>npm_package_version<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1.2.5</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>上面代码中，我们通过环境变量<code>process.env</code>对象，拿到<code>package.json</code>的字段值。如果是<code>Bash</code>脚本，可以用<code>$npm_package_name和$npm_package_version</code>取到这两个值。</p>',74),c=(0,e.Uk)("摘自："),t={href:"http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html"),i=(0,e.uE)('<h2 id="其他"><a class="header-anchor" href="#其他">#</a> 其他</h2><p>有时候我们 <code>npm install</code> 安装报错信息奇怪，已经找过原因，我们可以试试清楚缓存</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> cache clean --force\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="node-modules"><a class="header-anchor" href="#node-modules">#</a> node_modules</h3><p>有时候需要对 <code>npm(node_modules)</code> 包,做修改？ 如何做到修改了 <code>node_module</code> 中的包，却不受重新安装的影响, <code>patch-package</code> 这个 <code>npm</code> 是个好东西会帮到你。</p><ul><li>https://github.com/ds300/patch-package</li><li>https://juejin.cn/post/6955736879106883597</li></ul><h2 id="今日图-老板画饼"><a class="header-anchor" href="#今日图-老板画饼">#</a> 今日图 - 老板画饼</h2><p><img src="'+p+'" alt="16ac3747430c8cd7.gif"></p>',8),r={},u=(0,a(3744).Z)(r,[["render",function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,(0,e._)("p",null,[c,(0,e._)("a",t,[o,(0,e.Wm)(a)])]),i],64)}]])}}]);