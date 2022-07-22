"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[5648],{5223:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-345576c5",path:"/Utils/Linux/linux%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html",title:"linux常用操作",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"进入 linux 服务器",slug:"进入-linux-服务器",children:[]},{level:2,title:"上传下载",slug:"上传下载",children:[]},{level:2,title:"文件操作",slug:"文件操作",children:[]},{level:2,title:"日期查看",slug:"日期查看",children:[]},{level:2,title:"输入输出",slug:"输入输出",children:[]},{level:2,title:"查看硬件信息",slug:"查看硬件信息",children:[]},{level:2,title:"关机，重启",slug:"关机-重启",children:[]},{level:2,title:"文件归档",slug:"文件归档",children:[]},{level:2,title:"文件查找",slug:"文件查找",children:[]},{level:2,title:"VIM模式  esc退出",slug:"vim模式-esc退出",children:[]},{level:2,title:"EX模式",slug:"ex模式",children:[]},{level:2,title:"关闭端口占用命令",slug:"关闭端口占用命令",children:[]},{level:2,title:"今日图 - 没有了他的总决赛",slug:"今日图-没有了他的总决赛",children:[]}],filePathRelative:"Utils/Linux/linux常用操作.md",git:{updatedTime:1627026748e3}}},9498:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var e=a(6252);const l=a.p+"assets/img/weweew.8ec92c55.gif",r=(0,e.uE)('<h1 id="linux常用操作" tabindex="-1"><a class="header-anchor" href="#linux常用操作" aria-hidden="true">#</a> linux常用操作</h1><h2 id="进入-linux-服务器" tabindex="-1"><a class="header-anchor" href="#进入-linux-服务器" aria-hidden="true">#</a> 进入 linux 服务器</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 用户名@ip地址</span>\n<span class="token function">ssh</span> -p <span class="token number">22</span> root@xx.xx.xx.xx\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="上传下载" tabindex="-1"><a class="header-anchor" href="#上传下载" aria-hidden="true">#</a> 上传下载</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 上传到服务器</span>\n<span class="token function">scp</span> /Users/xx/xx.zip root@xx.xx.xx.xx:/opt/xx\n<span class="token comment"># 从服务器下载文件到本地当前文件夹 并命名为test.sql</span>\n<span class="token function">scp</span> -r root@xx.xx.xx.xx:/root/xx.sql test.sql\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ren *.png *.jpg  重命名文件\n\ntouch nash 创建文件\n\ncp test test2    复制文件\n\ncp -rv textCopt testCopt2  复制文件夹 -r -v进度\n\nmv move testCopt/      移动文件\n\nmv test testCopt/movetest  移动文件并且重命名\n\nmv nash nash2  重命名\n\nrm shanchu   删除\n\nrm -r shanchu   删除文件夹\n\nrm -ri shanchu   交互式 带提示删除文件夹\n\nmkdir wenjiajia 创建文件夹\n\nrmdir wenjiajia 删除非空文件夹\n\npwd 当前文件路径\n\nrm -rf a 删除a文件夹\n\nll 列出文件详情\n\ncat 文件查看\n\nhead 文件的前面部分查看 或者  head -n 1 a.js 看前一行\n\ntail 文件的后面部分查看 或者  head -n 2 a.js 看后两行\n\ngrep &#39; 2&#39; a.js  搜索带2的那一行\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="日期查看" tabindex="-1"><a class="header-anchor" href="#日期查看" aria-hidden="true">#</a> 日期查看</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>date 查看日期\n\ndate date +%Y--%m--%d    2017--07--16\n\ndate -s &quot;11:26:00&quot; 修改时间\n\nclock（hwclock）显示硬件时间\n\ncal 查看日期\n\nuptime 系统运行时间 负载\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="输入输出" tabindex="-1"><a class="header-anchor" href="#输入输出" aria-hidden="true">#</a> 输入输出</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>echo 输出一样的\n\ncat 输出文本内容\n\nmore 空格向下翻页\n\nless 上下翻页\n\nhead 显示文件默认头十行  -n指定几行\n\ntail 末尾几行    -n指定最后几行 -f追踪显示文件的更新（一般用于查看日志，命令不会退出）\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="查看硬件信息" tabindex="-1"><a class="header-anchor" href="#查看硬件信息" aria-hidden="true">#</a> 查看硬件信息</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>lspci 查看PCI设备 -v查看详细信息\n\nlsusb 查看USB设备\n\nlsmod查看加载的模块（驱动）\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="关机-重启" tabindex="-1"><a class="header-anchor" href="#关机-重启" aria-hidden="true">#</a> 关机，重启</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>shutdown -h关机 -r重新启动\n\n-h  now\n\n-h  +10 10分钟后关机\n\n-h  23:30\n\n-r  now\n\npoweroff 立即关机\n\nreboot立即重启\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="文件归档" tabindex="-1"><a class="header-anchor" href="#文件归档" aria-hidden="true">#</a> 文件归档</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#安装unzip</span>\nyum <span class="token function">install</span> -y <span class="token function">unzip</span> <span class="token function">zip</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>zip test 文件名     压缩文件\n\nunzip test.zip  解压\n\ngzip\n\ntar -cvf 名字.tar  文件      创建归档\n\ntar -xvf 名字.tar\n\ntar -cvzf  名字.tar.gz   归档并压缩 调用了gzip\n\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="文件查找" tabindex="-1"><a class="header-anchor" href="#文件查找" aria-hidden="true">#</a> 文件查找</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>locate 快速查找文件，文件夹\n\nupdatedb 手动更新数据库\n\nfind 查找位置 查找参数\n\nfind .-name *test* 包括\n\nfind / -name *.conf  找到结尾的\n\n-name\n\n-perm\n\n-user\n\n-group\n\n-ctime\n\n-type\n\n-size\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="vim模式-esc退出" tabindex="-1"><a class="header-anchor" href="#vim模式-esc退出" aria-hidden="true">#</a> VIM模式 esc退出</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-命令模式\n\n-插入模式 Y\n\n-ex模式  ：\n\n命令模式下：\n\ni 光标前插入\n\no 当前行下插入新行\n\ndd 删除整行\n\nyy 复制当前行\n\nn+yy 复制多行\n\np 将缓冲区的粘贴\n\nu 撤销上一个操作\n\nr 替换当前字符\n\n/ 查找关键字 n键移动\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="ex模式" tabindex="-1"><a class="header-anchor" href="#ex模式" aria-hidden="true">#</a> EX模式</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>：w 保存当前模式\n\n：q 退出\n\n：q! 强制退出，不保存\n\n：x 保存并退出\n\n：set number 显示行号\n\n：！系统命令 执行一个系统命令显示结果\n\n：sh 切换到命令行，使用ctrl+d切换回vim\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="关闭端口占用命令" tabindex="-1"><a class="header-anchor" href="#关闭端口占用命令" aria-hidden="true">#</a> 关闭端口占用命令</h2><p>关闭端口占用命令 eg:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. netstat -nao | findstr “8080” 查询8080端口\n2. taskkill /pid 3017 /F 关闭pid为3017的进程\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>详解 ↓ 但往往很多时候只需要查看某个端口的使用情况，它到底被那个进程（对应PID）占用了，或者你还需要把它<code>Kill</code>掉。</p><p>如果你在<code>Windows</code>操作系统，你可以使用<code>netstat</code>命令来查询<code>PID</code>，然后可以打开任务管理器，查看这个PID对应的进程名；如果PID没有显示，菜单》查看》选择列》选中PID即可；得知进程后，我们可以将进程杀掉。</p><p>下面我简单描述一下我所了解的在<code>Windows</code>和<code>Linux</code>系统下处理方式。（假如我们需要确定谁占用了我们的8080端口）</p><p>1、Windows平台 在windows控制台窗口下执行： 查询8080端口 <code>netstat -nao | findstr “8080”</code></p><p><code>TCP 127.0.0.1:9010 0.0.0.0:0 LISTENING 3017</code> 你看到是PID为3017的进程占用了8080端口，如果进一步你想知道它的进程名称，你可以使用如下命令：<code>tasklist | findstr “3017” </code></p><p>如果你想杀死这个进程，你当然可以用前面描述的那种方法，在任务管理器里把它<code>KILL</code>了，但如果你喜欢高效一点，那么用<code>taskkill</code>命令就可以了。<code>taskkill /pid 3017 /F</code>那么这个进程就灰灰湮灭了</p><h2 id="今日图-没有了他的总决赛" tabindex="-1"><a class="header-anchor" href="#今日图-没有了他的总决赛" aria-hidden="true">#</a> 今日图 - 没有了他的总决赛</h2><p><img src="'+l+'" alt="weweew.gif"></p>',35),p={},i=(0,a(3744).Z)(p,[["render",function(n,s){return r}]])}}]);