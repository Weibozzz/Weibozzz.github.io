"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[5994],{6893:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-0cf91eb9",path:"/Utils/nginx%E4%BD%BF%E7%94%A8.html",title:"nginx使用",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"nginx 使用",slug:"nginx-使用",children:[]},{level:2,title:"基本命令",slug:"基本命令",children:[]},{level:2,title:"配置文件",slug:"配置文件",children:[]},{level:2,title:"静态内容",slug:"静态内容",children:[]},{level:2,title:"代理服务器",slug:"代理服务器",children:[]},{level:2,title:"FastCGI代理",slug:"fastcgi代理",children:[]},{level:2,title:"gzip压缩",slug:"gzip压缩",children:[]},{level:2,title:"查看安装",slug:"查看安装",children:[]},{level:2,title:"引用",slug:"引用",children:[]},{level:2,title:"今日图 - 自测代码后要上线了",slug:"今日图-自测代码后要上线了",children:[]}],filePathRelative:"Utils/nginx使用.md",git:{updatedTime:1627026748e3}}},9419:(e,n,s)=>{s.r(n),s.d(n,{default:()=>i});var a=s(6252);const c=s.p+"assets/img/acf524670274cfa46627b5d1afc8c23f.46cfaf89.gif",o=(0,a.uE)('<h1 id="nginx使用"><a class="header-anchor" href="#nginx使用">#</a> nginx使用</h1><h2 id="nginx-使用"><a class="header-anchor" href="#nginx-使用">#</a> nginx 使用</h2><p>Nginx 是一个免费的，开源的，高性能的HTTP服务器和反向代理，以及IMAP / POP3代理服务器。 Nginx 以其高性能，稳定性，丰富的功能，简单的配置和低资源消耗而闻名。很多高知名度的网站都使用 Nginx，如：Netflix，GitHub，SoundCloud，MaxCDN 等。</p><p><img src="https://static.lufficc.com/image/3a1b447093d27fc0dc299558189764bb.png" alt="img"></p><p>Nginx 有一个主线程（ master process）和几个工作线程（worker process）。主线程的目的是<strong>加载</strong>和<strong>验证</strong>配置文件、<strong>维护</strong>工作线程。</p><p>工作线程处理实际的请求，Nginx 采用<strong>基于事件</strong>的模型和<strong>依赖操作系统</strong>的机制在工作线程之间高效地分发请求。工作线程的数量可配置，也可自动调整为服务器CPU的数量。</p><p>Nginx 及其模块的工作方式由配置文件确定。 默认情况下，配置文件名为 <code>nginx.conf</code>，放在 <code>/usr/local/nginx/conf</code> 、<code>/etc/nginx</code> 或者 <code>/usr/local/etc/nginx</code> 文件夹中。</p><h2 id="基本命令"><a class="header-anchor" href="#基本命令">#</a> 基本命令</h2><p>Nginx 启动之后，可以使用以下命令控制:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Copynginx -s &lt;signal&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>其中<code>-s</code>意思是向主进程发送信号，<code>signal</code>可以为以下四个中的一个:</p><ol><li><code>stop</code> — 快速关闭</li><li><code>quit</code> — 优雅关闭</li><li><code>reload</code> — 重新加载配置文件</li><li><code>reopen</code> — 重新打开日志文件</li></ol><p>当运行<code>nginx -s quit</code>时，Nginx 会等待工作进程处理完成当前请求，然后将其关闭。当你修改配置文件后，并不会立即生效，而是等待重启或者收到<code>nginx -s reload</code>信号。</p><p>当 Nginx 收到 <code>nginx -s reload</code> 信号后，首先检查配置文件的语法。语法正确后，主线程会开启新的工作线程并向旧的工作线程发送关闭信号，如果语法不正确，则主线程回滚变化并继续使用旧的配置。当工作进程收到主进程的关闭信号后，会在处理完当前请求之后退出。</p><h2 id="配置文件"><a class="header-anchor" href="#配置文件">#</a> 配置文件</h2><p>Nginx 配置的核心是定义要处理的 <code>URL</code> 以及如何响应这些 <code>URL</code> 请求，即定义一系列的**虚拟服务器（Virtual Servers）**控制对来自特定域名或者 IP 的请求的处理。</p><p>每一个虚拟服务器定义一系列的 <code>location</code> 控制处理特定的 URI 集合。每一个<code>location</code>定义了对映射到自己的请求的处理场景，可以返回一个文件或者代理此请求。</p><p>Nginx 由不同的模块组成，这些模块由配置文件中指定的指令控制。 指令分为<strong>简单指令</strong>和<strong>块指令</strong>。</p><p>一个简单指令包含<strong>指令名称</strong>和<strong>指令参数</strong>，以空格分隔，以分号（<code>;</code>）结尾。 块指令与简单指令类似，但是由大括号（<code>{</code>和<code>}</code>）包围。 如果块指令大括号中包含其他指令，则称该指令为上下文（如： <code>events</code>, <code>http</code>, <code>server</code> 和 <code>location</code>）。</p><p>配置文件中的放在上下文之外的指令默认放在<strong>主配置文件</strong>中（类似继承主配置文件）。 <code>events</code> 和 <code>http</code> 放置在主配置文件中，<code>server</code> 放置在<code>http</code>块指令中，<code>location</code>放置在<code>server</code>块指令中。</p><p>配置文件的注释以 <code>#</code> 开始。</p><h2 id="静态内容"><a class="header-anchor" href="#静态内容">#</a> 静态内容</h2><p>Web 服务器一个重要的功能是服务静态文件（图像或静态HTML页面）。例如，Nginx 可以很方便的让服务器从<code>/data/www</code> 获取 html 文件，从<code>/data/images</code>获取图片来返回给客户端，这只需要在<code>http</code>块指令中的<code>server</code>块指令中设置两个<code>location</code>块指令。</p><p>首先，创建 <code>/data/www</code> 目录，并放入 <code>index.html</code>，创建 <code>/data/images</code> 目录并在其中放置一些图片。</p><p>接下来，打开配置文件。 创建一个 <code>server</code> 块：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Copyhttp {\n    server {\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>通常，配置文件可以包括多个 <code>server</code> 块，它们以<strong>端口</strong>和<strong>服务器名称</strong>来区分。当 Nginx 决定某一个 <code>server</code> 处理请求后，它将请求头中的 <code>URI</code> 和 <code>server</code> 块中的 <code>location</code> 块进行对比。 加入 <code>location</code> 块指令到 <code>server</code> 中：</p><p>将以下位置块添加到服务器块：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Copylocation / {\n    root /data/www;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>上面的 <code>location</code> 块指定 <code>/</code> 前缀与请求中的 <code>URI</code> 对比。对于匹配的请求，<code>URI</code> 将被添加到 <code>root</code> 指令中指定的路径，即 <code>/data/www</code>，以此形成本地文件系统的路径，如访问<code>http://localhost/bog/welcome.html</code>，对应服务器文件路径为<code>/data/www/bog/welcome.html</code>。 如果 <code>URI</code> 匹配多个 <code>location</code> 块，Nginx 采用<strong>最长前缀匹配原则</strong>（类似计算机网络里面的IP匹配）， 上面的 <code>location</code> 块前缀长度为 1，因此只有当所有其他 <code>location</code> 块匹配时，才使用该块。</p><p>接下来，添加第二个位置块：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Copylocation /images/ {\n    root /data;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>它将匹配以<code>/images/</code>（<code>/</code> 也匹配这样的请求，但具有较短的前缀）开始的请求。</p><p><code>server</code> 块的最终配置如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Copyserver {\n    location / {\n        root /data/www;\n    }\n\n    location /images/ {\n        root /data;\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>到目前为止，这已经是一个可以正常运行的服务器，它监听端口80，并且可以在本地计算机上访问 <code>http://localhost/</code>。 对于 <code>/images/</code> 开头的请求，服务器将从 <code>/data/images</code> 目录发送文件。 如，对于 <code>http://localhost/images/example.png</code> 请求，nginx 将响应 <code>/data/images/example.png</code>文件。 如果不存在，nginx 将返回404。<code>URI</code> 不以 <code>/images/</code> 开头的请求将映射到 <code>/data/www</code> 目录。 例如，对于 <code>http://localhost/some/example.html</code> 请求，nginx 将响应 <code>/data/www/some/example.html</code> 文件。</p><h2 id="代理服务器"><a class="header-anchor" href="#代理服务器">#</a> 代理服务器</h2><p>Nginx 的一个常见应用是将其设置为代理服务器（Proxy Server），即接受客户端的请求并将其转发给代理服务器，再接受代理服务器发来的响应，将它们发送到客户端。</p><p>比如我们可以用一个 Nginx 实例实现对图片文件的请求使用本地文件系统，而其他请求转发到代理服务器。</p><p>首先，向 Nginx 的配置文件中添加一个 <code>server</code> 块来定义代理服务器：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Copyserver {\n    listen 8080;\n    root /data/up1;\n\n    location / {\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>此服务器侦听端口8080，并将所有请求映射到本地文件系统上的 <code>/data/up1</code> 目录。 创建此目录并将 <code>index.html</code> 放入其中。 注意，<code>root</code> 指令放在 <code>server</code> 上下文中，这样 当 <code>location</code> 块中不含 <code>root</code> 指令时将使用所属 <code>server</code> 的 <code>root</code> 指令。</p><p>接下来，使用上一节中的服务器配置，并将其修改为代理服务器配置。 在第一个位置块中，加上<code>proxy_pass</code>指令：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Copyserver {\n    location / {\n           # proxy_pass指令的参数为：协议+主机名+端口号\n        proxy_pass http://localhost:8080;\n    }\n\n    location /images/ {\n        root /data;\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>修改第二个 匹配 <code>/images/</code> 前缀的 <code>location</code> 块，使其与请求图像文件的扩展名相匹配：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Copylocation ~ \\.(gif|jpg|png)$ {\n    root /data/images;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>该参数是一个正则表达式，匹配以.gif，.jpg或.png结尾的所有URI。 正则表达式应该以 <code>~</code> 开头。 相应的请求将映射到 <code>/data/images</code> 目录。</p><p>当 Nginx 选择一个 <code>location</code> 块来处理请求时，它首先检查指定 <code>location</code> 块的前缀，记住具有最长前缀的 <code>location</code> 块，然后检查正则表达式。 如果与正则表达式匹配， Nginx 选择此 <code>location</code> 块，否则，选择先前记住的 <code>location</code> 块。</p><p>代理服务器的最终配置如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Copyserver {\n    location / {\n        proxy_pass http://localhost:8080/;\n    }\n\n    location ~ \\.(gif|jpg|png)$ {\n        root /data/images;\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>此服务器将过滤以.gif，.jpg或.png结尾的请求，并将它们映射到 <code>/data/images</code> 目录（通过向 <code>root</code> 指令的参数添加请求的URI），并将所有其他请求发送给上面配置的代理服务器。</p><p>这样，图片和其他请求就可以使用不同的服务器来处理。</p><h2 id="fastcgi代理"><a class="header-anchor" href="#fastcgi代理">#</a> FastCGI代理</h2><p>Nginx 可用于将请求路由到 FastCGI 服务器。快速通用网关接口（Fast Common Gateway Interface／FastCGI）是一种让交互程序与Web服务器通信的协议。因此 Nginx 可以将请求路由到 FastCGI 运行的应用程序，如 PHP 程序。</p><p>使用 FastCGI 服务器的最基本的 Nginx 配置包括使用 <code>fastcgi_pass</code> 指令而不是 <code>proxy_pass</code> 指令，以及使用 <code>fastcgi_param</code> 指令来设置传递给 FastCGI 服务器的参数。 假设FastCGI服务器可在 <code>localhost:9000</code> 上访问。 以上一节中的代理服务器配置为基础，使用<code>fastcgi_pass</code>指令替换<code>proxy_pass</code>指令，并将参数更改为 <code>localhost:9000</code> 。 在 PHP 中， <code>SCRIPT_FILENAME</code> 参数用于确定脚本名称，而 <code>QUERY_STRING</code> 参数用于传递请求参数。 生成的配置将是：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Copyserver {\n    location / {\n        fastcgi_pass  localhost:9000;\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param QUERY_STRING    $query_string;\n    }\n\n    location ~ \\.(gif|jpg|png)$ {\n        root /data/images;\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>这将设置一个服务器，将路由除静态图像以外的所有请求到运行在 <code>localhost:9000</code> 的 FastCGI 服务器。</p><h2 id="gzip压缩"><a class="header-anchor" href="#gzip压缩">#</a> gzip压缩</h2><ul><li>gzip配置的常用参数</li><li>gzip on|off;  #是否开启gzip</li><li>gzip_buffers 32 4K| 16 8K #缓冲(压缩在内存中缓冲几块? 每块多大?)</li><li>gzip_comp_level [1-9] #推荐6 压缩级别(级别越高,压的越小,越浪费CPU计算资源)</li><li>gzip_disable #正则匹配UA 什么样的Uri不进行gzip</li><li>gzip_min_length 200 # 开始压缩的最小长度(再小就不要压缩了,意义不在)</li><li>gzip_http_version 1.0|1.1 # 开始压缩的http协议版本(可以不设置,目前几乎全是1.1协议)</li><li>gzip_proxied          # 设置请求者代理服务器,该如何缓存内容</li><li>gzip_types text/plain application/xml # 对哪些类型的文件用压缩 如txt,xml,html ,css</li><li>gzip_vary on|off  # 是否传输gzip压缩标志</li></ul><p>例如 以下是配置</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  gzip on;\n\tgzip_buffers 32 4K;\n\tgzip_comp_level 6;\n  gzip_min_length 100;\n\tgzip_types application/javascript text/css text/xml;\n\tgzip_disable &quot;MSIE [1-6]\\.&quot;; #配置禁用gzip条件，支持正则。此处表示ie6及以下不启用gzip（因为ie低版本不支持）\n  gzip_vary on;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="查看安装"><a class="header-anchor" href="#查看安装">#</a> 查看安装</h2><p>查看软件安装路径 <code>whereis nginx</code></p><p>查询运行文件所在路径 <code>which nginx</code></p><p><code>nginx -t</code> 检查配置文件</p><h2 id="引用"><a class="header-anchor" href="#引用">#</a> 引用</h2><ul><li>https://lufficc.com/blog/nginx-for-beginners</li><li>https://www.cnblogs.com/qianpangzi/p/10922420.html</li></ul><h2 id="今日图-自测代码后要上线了"><a class="header-anchor" href="#今日图-自测代码后要上线了">#</a> 今日图 - 自测代码后要上线了</h2><p><img src="'+c+'" alt="16ac3747430c8cd7.gif"></p>',69),l={},i=(0,s(3744).Z)(l,[["render",function(e,n){return o}]])}}]);