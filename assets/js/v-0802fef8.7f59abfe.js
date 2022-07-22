"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[5217],{3892:(e,a,d)=>{d.r(a),d.d(a,{data:()=>i});const i={key:"v-0802fef8",path:"/Utils/Mac/mac%E4%BD%BF%E7%94%A8.html",title:"mac使用",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"sh 进入服务器",slug:"sh-进入服务器",children:[]},{level:2,title:"mac下记一次教训－慎用rm －rf",slug:"mac下记一次教训-慎用rm-rf",children:[]},{level:2,title:"mac使用快捷键",slug:"mac使用快捷键",children:[]},{level:2,title:"从Terminal 中用 Finder 打开当前路径的文件夹",slug:"从terminal-中用-finder-打开当前路径的文件夹",children:[]},{level:2,title:"在mac中如何用命令行打开webstorm",slug:"在mac中如何用命令行打开webstorm",children:[]},{level:2,title:"在 Mac 上使用命令打开 VS Code",slug:"在-mac-上使用命令打开-vs-code",children:[]},{level:2,title:"finder显示隐藏文件",slug:"finder显示隐藏文件",children:[{level:3,title:"第一种:",slug:"第一种",children:[]},{level:3,title:"第二种:",slug:"第二种",children:[]}]},{level:2,title:"文件夹加权限",slug:"文件夹加权限",children:[]},{level:2,title:"linux命令使用",slug:"linux命令使用",children:[{level:3,title:"查看文件安装路径,比如：查看git安装路径",slug:"查看文件安装路径-比如-查看git安装路径",children:[]},{level:3,title:"文件操作",slug:"文件操作",children:[]}]},{level:2,title:"今日图 - margin-right: -5px",slug:"今日图-margin-right-5px",children:[]}],filePathRelative:"Utils/Mac/mac使用.md",git:{updatedTime:1627026748e3}}},8314:(e,a,d)=>{d.r(a),d.d(a,{default:()=>r});var i=d(6252);const c=d.p+"assets/img/16bcfa33dd0226d4.a8e2a96e.png",l=(0,i.uE)('<h1 id="mac使用" tabindex="-1"><a class="header-anchor" href="#mac使用" aria-hidden="true">#</a> mac使用</h1><h2 id="sh-进入服务器" tabindex="-1"><a class="header-anchor" href="#sh-进入服务器" aria-hidden="true">#</a> sh 进入服务器</h2><p>进入服务器 <code>ssh -p 端口号 服务器用户名@ip</code>例如： <code>ssh -p 22 liuweibo@111.11.11.11</code> 回车，到这会让你输入yes或者no来确认是否连接，输入yes回车,然后输入在服务器上的用户密码回车,到此进入的是你在服务器上的账户的目录，即为连接成功</p><h2 id="mac下记一次教训-慎用rm-rf" tabindex="-1"><a class="header-anchor" href="#mac下记一次教训-慎用rm-rf" aria-hidden="true">#</a> mac下记一次教训－慎用rm －rf</h2><p>使用 <code>rmtrash</code> 替代rm命令，<code>mac</code>下可用：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> rmtrash\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>用<code>rmtrash</code> 替代 <code>rm</code>，<code>rmtrash</code>有个好处，它不会立马把资料从你电脑上删除，而是移动到废纸篓，如果误删，可以在废纸篓中恢复。</p><h2 id="mac使用快捷键" tabindex="-1"><a class="header-anchor" href="#mac使用快捷键" aria-hidden="true">#</a> mac使用快捷键</h2><p><code>command+n</code> 快速打开当前</p><h2 id="从terminal-中用-finder-打开当前路径的文件夹" tabindex="-1"><a class="header-anchor" href="#从terminal-中用-finder-打开当前路径的文件夹" aria-hidden="true">#</a> 从<code>Terminal</code> 中用 <code>Finder</code> 打开当前路径的文件夹</h2><p><code>open .</code></p><h2 id="在mac中如何用命令行打开webstorm" tabindex="-1"><a class="header-anchor" href="#在mac中如何用命令行打开webstorm" aria-hidden="true">#</a> 在<code>mac</code>中如何用命令行打开<code>webstorm</code></h2><p>webstorm，在<code>”Tools” -&gt; “Create Command Line Launcher…” </code>设置命令</p><h2 id="在-mac-上使用命令打开-vs-code" tabindex="-1"><a class="header-anchor" href="#在-mac-上使用命令打开-vs-code" aria-hidden="true">#</a> 在 Mac 上使用命令打开 VS Code</h2><p>打开 <code>VS Code</code>，打开控制面板（<code>⇧⌘P</code>）,输入 <code>‘shell command’</code>，在提示里看到 <code>Shell Command: Install &#39;code&#39; command in PATH</code>，运行它就可以了。</p><p>之后就可以在终端中输入 <code>code .</code>，使用 <code>VS Code</code> 打开当前文件夹。 或者直接使用 <code>code filename </code>编辑文件。</p><h2 id="finder显示隐藏文件" tabindex="-1"><a class="header-anchor" href="#finder显示隐藏文件" aria-hidden="true">#</a> finder显示隐藏文件</h2><h3 id="第一种" tabindex="-1"><a class="header-anchor" href="#第一种" aria-hidden="true">#</a> 第一种:</h3><p>在 macOS Sierra及以上(Mojave)，我们可以使用快捷键 <code>⌘⇧.(Command + Shift + .)</code> 来快速（在 Finder 中）显示和隐藏隐藏文件了。</p><h3 id="第二种" tabindex="-1"><a class="header-anchor" href="#第二种" aria-hidden="true">#</a> 第二种:</h3><p>在终端使用:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//显示隐藏文件\ndefaults <span class="token function">write</span> com.apple.finder AppleShowAllFiles -bool <span class="token boolean">true</span>\n//不显示隐藏文件\ndefaults <span class="token function">write</span> com.apple.finder AppleShowAllFiles -bool <span class="token boolean">false</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>最后需要重启<code>Finder</code>:</p><p>重启Finder：窗口左上角的苹果标志--&gt;强制退出--&gt;Finder--&gt;重新启动</p><h2 id="文件夹加权限" tabindex="-1"><a class="header-anchor" href="#文件夹加权限" aria-hidden="true">#</a> 文件夹加权限</h2><ol><li>cd 你的文件夹路径的上一级目录。</li><li><code>sudo chmod -R 777</code> 你的文件夹名。</li><li>输入密码。</li><li>成功</li></ol><h2 id="linux命令使用" tabindex="-1"><a class="header-anchor" href="#linux命令使用" aria-hidden="true">#</a> linux命令使用</h2><h3 id="查看文件安装路径-比如-查看git安装路径" tabindex="-1"><a class="header-anchor" href="#查看文件安装路径-比如-查看git安装路径" aria-hidden="true">#</a> 查看文件安装路径,比如：查看git安装路径</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">which</span> <span class="token function">git</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h3><ul><li><p><code>ren *.png *.jpg</code> 重命名文件</p></li><li><p><code>touch nash</code> 创建文件</p></li><li><p><code>cp test test2</code> 复制文件</p></li><li><p><code>cp -rv textCopt testCopt2</code> 复制文件夹 <code>-r -v</code>进度</p></li><li><p><code>mv move testCopt/ </code> 移动文件</p></li><li><p><code>mv test testCopt/movetest</code> 移动文件并且重命名</p></li><li><p><code>mv nash nash2 </code> 重命名</p></li><li><p><code>rm shanchu</code> 删除</p></li><li><p><code>rm -r shanchu</code> 删除文件夹</p></li><li><p><code>rm -rf a</code> 删除a文件夹</p></li><li><p><code>rm -ri shanchu</code> 交互式 带提示删除文件夹</p></li><li><p><code>mkdir wenjiajia</code> 创建文件夹</p></li><li><p><code>rmdir wenjiajia</code> 删除非空文件夹</p></li><li><p><code>pwd</code> 当前文件路径</p></li><li><p><code>ll</code> 列出文件详情</p></li><li><p><code>ls -lh</code> 查看文件大小详情</p></li><li><p><code>cat</code> 文件查看</p></li><li><p><code>head</code> 文件的前面部分查看 或者 <code>head -n 1 a.js</code> 看前一行</p></li><li><p><code>tail</code> 文件的后面部分查看 或者 <code>head -n 2 a.js</code> 看后两行</p></li><li><p><code>grep &#39; 2&#39; a.js </code> 搜索带2的那一行</p></li></ul><h2 id="今日图-margin-right-5px" tabindex="-1"><a class="header-anchor" href="#今日图-margin-right-5px" aria-hidden="true">#</a> 今日图 - margin-right: -5px</h2><p><img src="'+c+'" alt="16bcfa33dd0226d4.png"></p>',33),n={},r=(0,d(3744).Z)(n,[["render",function(e,a){return l}]])}}]);