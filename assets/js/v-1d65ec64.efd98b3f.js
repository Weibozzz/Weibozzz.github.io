"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[5008],{6411:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a={key:"v-1d65ec64",path:"/Utils/Mac/homebrew%E4%BD%BF%E7%94%A8.html",title:"homebrew使用",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"查看homebrew安装的服务列表",slug:"查看homebrew安装的服务列表",children:[{level:3,title:"查看安装路径",slug:"查看安装路径",children:[]}]},{level:2,title:"mysql",slug:"mysql",children:[{level:3,title:"安装",slug:"安装",children:[]},{level:3,title:"启动",slug:"启动",children:[]},{level:3,title:"关闭",slug:"关闭",children:[]},{level:3,title:"重启",slug:"重启",children:[]},{level:3,title:"连接navicat报错",slug:"连接navicat报错",children:[]}]},{level:2,title:"安装java",slug:"安装java",children:[]},{level:2,title:"maven",slug:"maven",children:[]},{level:2,title:"redis",slug:"redis",children:[]},{level:2,title:"tomcat",slug:"tomcat",children:[]},{level:2,title:"nginx",slug:"nginx",children:[]},{level:2,title:"python",slug:"python",children:[{level:3,title:"管理 python 版本工具 pyenv",slug:"管理-python-版本工具-pyenv",children:[]}]},{level:2,title:"今日图 - 前端真是越来越简单了啊",slug:"今日图-前端真是越来越简单了啊",children:[]}],filePathRelative:"Utils/Mac/homebrew使用.md",git:{updatedTime:1627026748e3}}},8688:(e,s,n)=>{n.r(s),n.d(s,{default:()=>c});var a=n(6252);const l=n.p+"assets/img/16b9358b7d5d09b1.411cb560.png",i=(0,a.uE)('<h1 id="homebrew使用" tabindex="-1"><a class="header-anchor" href="#homebrew使用" aria-hidden="true">#</a> homebrew使用</h1><h2 id="查看homebrew安装的服务列表" tabindex="-1"><a class="header-anchor" href="#查看homebrew安装的服务列表" aria-hidden="true">#</a> 查看homebrew安装的服务列表</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew services list\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="查看安装路径" tabindex="-1"><a class="header-anchor" href="#查看安装路径" aria-hidden="true">#</a> 查看安装路径</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew list nginx\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> mysql\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> mysql.server start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>此时可能会报错：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Starting MySQL\n<span class="token builtin class-name">.</span> ERROR<span class="token operator">!</span> The server quit without updating PID <span class="token function">file</span> <span class="token punctuation">(</span>/usr/local/var/mysql/xxxxx.local.pid<span class="token punctuation">)</span>.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这是由于权限问题造成的 可以通用一下命令修改权限</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> -R a+rwx /usr/local/var/mysql\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>再执行</p><p><code>sudo mysql.server start</code></p><p>显示</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Starting MySQL\n<span class="token builtin class-name">.</span> SUCCESS<span class="token operator">!</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>启动成功</p><p>配置 启动后，需要对mysql进行一些配置，可以通过以下命令进行初始化：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/usr/local/opt/mysql/bin/mysql_secure_installation\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="关闭" tabindex="-1"><a class="header-anchor" href="#关闭" aria-hidden="true">#</a> 关闭</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> mysql.server stop\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="重启" tabindex="-1"><a class="header-anchor" href="#重启" aria-hidden="true">#</a> 重启</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> mysql.server restart\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="连接navicat报错" tabindex="-1"><a class="header-anchor" href="#连接navicat报错" aria-hidden="true">#</a> 连接navicat报错</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Client does not support authentication protocol\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>解决</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;password&#39;</span> PASSWORD EXPIRE NEVER<span class="token punctuation">;</span> <span class="token comment">#修改加密规则 （这行我没有写，不过貌似也可以）</span>\n\nALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;password&#39;</span><span class="token punctuation">;</span> <span class="token comment">#更新一下用户的密码 </span>\n\nFLUSH PRIVILEGES<span class="token punctuation">;</span> <span class="token comment">#刷新权限</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>报错 <code>1130 - Host XXX is not allowed to connect to this MySQL server</code></p><p>解决</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql -u root -p\nuse mysq<span class="token punctuation">;</span>\n<span class="token keyword">select</span> <span class="token function">host</span> from user where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>\nupdate user <span class="token builtin class-name">set</span> <span class="token function">host</span> <span class="token operator">=</span> <span class="token string">&#39;%&#39;</span> where user <span class="token operator">=</span><span class="token string">&#39;root&#39;</span> <span class="token comment">#将Host设置为通配符%</span>\nflush privilegs <span class="token comment">#刷新权限</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="安装java" tabindex="-1"><a class="header-anchor" href="#安装java" aria-hidden="true">#</a> 安装java</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew cask <span class="token function">install</span> java\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="maven" tabindex="-1"><a class="header-anchor" href="#maven" aria-hidden="true">#</a> maven</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew search maven\nbrew info maven\nbrew <span class="token function">install</span> maven\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h2><p>1.安装redis</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> redis\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>2.启动redis服务</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew services start redis 或 redis-server /usr/local/etc/redis.conf\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>3.关闭redis服务</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew services stop redis\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>4.重启redis服务</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew services restart redis\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>5.打开图形化界面</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>redis-cli\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat" aria-hidden="true">#</a> tomcat</h2><p>搜索<code>tomcat</code>是否存在：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew search tomcat\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装<code>tomcat：</code><code>brew install tomcat</code> 检查是否安装成功： <code>catalina -h</code> 运行<code>tomcat</code>： <code>catalina run</code></p><p><code>Tomcat</code>的默认端口是8080，如果运行成功可通过http://localhost:8080访问 <code>webapp</code>的根目录<code>(CATALINA_HOME)为:/usr/local/Cellar/tomcat/7.0.33/libexec/webapps/ROOT/</code></p><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h2><p><code>brew install nginx</code></p><ul><li><p>启动<code>nginx</code>服务 <code>sudo brew services start nginx</code> 利用<code>http://localhost:8080</code>进行访问, 如果出现如下界面，说明启动成功.</p></li><li><p>重启<code>nginx</code>服务 <code>sudo brew services restart nginx</code></p></li><li><p>查看<code>nginx</code>版本 <code>nginx -v</code></p></li><li><p>关闭<code>nginx</code>服务 <code>sudo brew services stop nginx</code> 另外几个比较方便的指令</p></li><li><p>重新加载<code>nginx</code></p></li><li><p>停止<code>nginx</code><code>nginx -s stop</code></p></li><li><p>文件说明</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/usr/local/etc/nginx/nginx.conf <span class="token comment">#（配置文件路径）</span>\n\n/usr/local/var/www <span class="token comment">#（服务器默认路径）</span>\n\n/usr/local/Cellar/nginx/1.8.0 <span class="token comment">#（安装路径)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> python</h2><h3 id="管理-python-版本工具-pyenv" tabindex="-1"><a class="header-anchor" href="#管理-python-版本工具-pyenv" aria-hidden="true">#</a> 管理 python 版本工具 pyenv</h3><p><code>brew install pyenv</code></p><ul><li><p>安装pyenv <code>brew install pyenv</code></p></li><li><p>修改<code>~/.zshrc</code>，在尾部追加 注：这一点很重要</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export PYENV_ROOT=&quot;$HOME/.pyenv&quot;\nexport PATH=&quot;$PYENV_ROOT/bin:$PATH&quot;\neval &quot;$(pyenv init -)&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>在当前shell进程中执行<code>~/.zshrc</code>，使修改生效 <code>source ~/.zshrc</code></p></li><li><p>安装Python <code>pyenv install &lt;version&gt; # version为版本号</code></p></li><li><p>使用pyenv安装指定版本的python <code>pyenv install 3.6.1</code></p></li><li><p>查看已安装Python版本 <code>pyenv versions</code></p></li><li><p>查看可安装的Python版本 <code>pyenv install -l</code></p></li><li><p>切换并查看版本 shell &gt; local &gt; global</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pyenv global &lt;version&gt;  # 全局设置python版本为指定版本，设置全局的 Python 版本，通过将版本号写入 ~/.pyenv/version 文件的方式。\npyenv local &lt;version&gt;   # 设置当前路径下python版本为指定版本，设置 Python 本地版本，通过将版本号写入当前目录下的 .python-version 文件的方式。通过这种方式设置的 Python 版本优先级较 global 高。\npyenv shell &lt;version&gt;   # 设置当前shell窗口使用的python版本为指定版本，设置面向 shell 的 Python 版本，通过设置当前 shell 的 PYENV_VERSION 环境变量的方式。这个版本的优先级比 local 和 global 都要高。–unset 参数可以用于取消当前 shell 设定的版本。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="今日图-前端真是越来越简单了啊" tabindex="-1"><a class="header-anchor" href="#今日图-前端真是越来越简单了啊" aria-hidden="true">#</a> 今日图 - 前端真是越来越简单了啊</h2><p><img src="'+l+'" alt="16b9358b7d5d09b1.png"></p>',63),r={},c=(0,n(3744).Z)(r,[["render",function(e,s){return i}]])}}]);