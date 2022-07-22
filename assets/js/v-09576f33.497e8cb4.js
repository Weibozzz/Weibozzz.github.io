"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[4722],{2538:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-09576f33",path:"/Utils/%E7%94%A8docker%E9%83%A8%E7%BD%B2%E4%B8%80%E4%B8%AA%E9%A1%B9%E7%9B%AE.html",title:"用docker部署一个项目",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"用docker部署一个项目",slug:"用docker部署一个项目-1",children:[]},{level:2,title:"安装",slug:"安装",children:[]},{level:2,title:"image 文件",slug:"image-文件",children:[]},{level:2,title:"容器文件",slug:"容器文件",children:[]},{level:2,title:"Dockerfile 文件",slug:"dockerfile-文件",children:[]},{level:2,title:"十、实例：制作自己的 Docker 容器",slug:"十、实例-制作自己的-docker-容器",children:[{level:3,title:"编写 Dockerfile 文件",slug:"编写-dockerfile-文件",children:[]},{level:3,title:"10.2 创建 image 文件",slug:"_10-2-创建-image-文件",children:[]},{level:3,title:"10.3 生成容器",slug:"_10-3-生成容器",children:[]},{level:3,title:"10.4 CMD 命令",slug:"_10-4-cmd-命令",children:[]},{level:3,title:"10.5 发布 image 文件",slug:"_10-5-发布-image-文件",children:[]}]},{level:2,title:"引用",slug:"引用",children:[]},{level:2,title:"今日图 - 有的时候我的代码会像这样",slug:"今日图-有的时候我的代码会像这样",children:[]}],filePathRelative:"Utils/用docker部署一个项目.md",git:{updatedTime:1627026748e3}}},2477:(n,e,a)=>{a.r(e),a.d(e,{default:()=>H});var s=a(6252);const o=a.p+"assets/img/16c3616c85ea4e5e.b10d0212.png",l=(0,s.uE)('<h1 id="用docker部署一个项目" tabindex="-1"><a class="header-anchor" href="#用docker部署一个项目" aria-hidden="true">#</a> 用docker部署一个项目</h1><h2 id="用docker部署一个项目-1" tabindex="-1"><a class="header-anchor" href="#用docker部署一个项目-1" aria-hidden="true">#</a> 用docker部署一个项目</h2><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>mac下 <code>brew cask install docker</code></p><p>安装完成后，运行下面的命令，验证是否安装成功。</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> version\n<span class="token comment"># 或者</span>\n$ <span class="token function">docker</span> info\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></blockquote><h2 id="image-文件" tabindex="-1"><a class="header-anchor" href="#image-文件" aria-hidden="true">#</a> image 文件</h2><p>**Docker 把应用程序及其依赖，打包在 image 文件里面。**只有通过这个文件，才能生成 Docker 容器。image 文件可以看作是容器的模板。Docker 根据 image 文件生成容器的实例。同一个 image 文件，可以生成多个同时运行的容器实例。</p><p>image 是二进制文件。实际开发中，一个 image 文件往往通过继承另一个 image 文件，加上一些个性化设置而生成。举例来说，你可以在 Ubuntu 的 image 基础上，往里面加入 Apache 服务器，形成你的 image。</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 列出本机的所有 image 文件。</span>\n$ <span class="token function">docker</span> image <span class="token function">ls</span>\n\n<span class="token comment"># 删除 image 文件</span>\n$ <span class="token function">docker</span> image <span class="token function">rm</span> <span class="token punctuation">[</span>imageName<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></blockquote><h2 id="容器文件" tabindex="-1"><a class="header-anchor" href="#容器文件" aria-hidden="true">#</a> 容器文件</h2><p>**image 文件生成的容器实例，本身也是一个文件，称为容器文件。**也就是说，一旦容器生成，就会同时存在两个文件： image 文件和容器文件。而且关闭容器并不会删除容器文件，只是容器停止运行而已。</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 列出本机正在运行的容器</span>\n$ <span class="token function">docker</span> container <span class="token function">ls</span>\n\n<span class="token comment"># 列出本机所有容器，包括终止运行的容器</span>\n$ <span class="token function">docker</span> container <span class="token function">ls</span> --all\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></blockquote><p>上面命令的输出结果之中，包括容器的 ID。很多地方都需要提供这个 ID，比如上一节终止容器运行的<code>docker container kill</code>命令。</p>',14),c=(0,s.Uk)("终止运行的容器文件，依然会占据硬盘空间，可以使用"),r={href:"https://docs.docker.com/engine/reference/commandline/container_rm/",target:"_blank",rel:"noopener noreferrer"},i=(0,s._)("code",null,"docker container rm",-1),p=(0,s.Uk)("命令删除。"),t=(0,s.uE)('<blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> container <span class="token function">rm</span> <span class="token punctuation">[</span>containerID<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote><p>运行上面的命令之后，再使用<code>docker container ls --all</code>命令，就会发现被删除的容器文件已经消失了。</p><h2 id="dockerfile-文件" tabindex="-1"><a class="header-anchor" href="#dockerfile-文件" aria-hidden="true">#</a> Dockerfile 文件</h2><p>学会使用 image 文件以后，接下来的问题就是，如何可以生成 image 文件？如果你要推广自己的软件，势必要自己制作 image 文件。</p><p>这就需要用到 Dockerfile 文件。它是一个文本文件，用来配置 image。Docker 根据 该文件生成二进制的 image 文件。</p><p>下面通过一个实例，演示如何编写 Dockerfile 文件。</p><h2 id="十、实例-制作自己的-docker-容器" tabindex="-1"><a class="header-anchor" href="#十、实例-制作自己的-docker-容器" aria-hidden="true">#</a> 十、实例：制作自己的 Docker 容器</h2>',7),d=(0,s.Uk)("下面我以 "),u={href:"http://www.ruanyifeng.com/blog/2017/08/koa.html",target:"_blank",rel:"noopener noreferrer"},b=(0,s.Uk)("koa-demos"),m=(0,s.Uk)(" 项目为例，介绍怎么写 Dockerfile 文件，实现让用户在 Docker 容器里面运行 Koa 框架。"),k=(0,s.Uk)("作为准备工作，请先"),h={href:"https://github.com/ruanyf/koa-demos/archive/master.zip",target:"_blank",rel:"noopener noreferrer"},g=(0,s.Uk)("下载源码"),f=(0,s.Uk)("。"),v=(0,s.uE)('<blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> clone https://github.com/ruanyf/koa-demos.git\n$ <span class="token builtin class-name">cd</span> koa-demos\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote><h3 id="编写-dockerfile-文件" tabindex="-1"><a class="header-anchor" href="#编写-dockerfile-文件" aria-hidden="true">#</a> 编写 Dockerfile 文件</h3>',2),q=(0,s.Uk)("首先，在项目的根目录下，新建一个文本文件"),D=(0,s._)("code",null,".dockerignore",-1),_=(0,s.Uk)("，写入下面的"),x={href:"https://github.com/ruanyf/koa-demos/blob/master/.dockerignore",target:"_blank",rel:"noopener noreferrer"},U=(0,s.Uk)("内容"),$=(0,s.Uk)("。"),E=(0,s.uE)('<blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>.git\nnode_modules\nnpm-debug.log\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></blockquote><p>上面代码表示，这三个路径要排除，不要打包进入 image 文件。如果你没有路径要排除，这个文件可以不新建。</p>',2),C=(0,s.Uk)("然后，在项目的根目录下，新建一个文本文件 Dockerfile，写入下面的"),y={href:"https://github.com/ruanyf/koa-demos/blob/master/Dockerfile",target:"_blank",rel:"noopener noreferrer"},R=(0,s.Uk)("内容"),O=(0,s.Uk)("。"),w=(0,s.uE)('<blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FROM node:8.4\nCOPY <span class="token builtin class-name">.</span> /app\nWORKDIR /app\nRUN <span class="token function">npm</span> <span class="token function">install</span> --registry<span class="token operator">=</span>https://registry.npm.taobao.org\nEXPOSE <span class="token number">3000</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></blockquote><p>上面代码一共五行，含义如下。</p><blockquote><ul><li><code>FROM node:8.4</code>：该 image 文件继承官方的 node image，冒号表示标签，这里标签是<code>8.4</code>，即8.4版本的 node。</li><li><code>COPY . /app</code>：将当前目录下的所有文件（除了<code>.dockerignore</code>排除的路径），都拷贝进入 image 文件的<code>/app</code>目录。</li><li><code>WORKDIR /app</code>：指定接下来的工作路径为<code>/app</code>。</li><li><code>RUN npm install</code>：在<code>/app</code>目录下，运行<code>npm install</code>命令安装依赖。注意，安装后所有的依赖，都将打包进入 image 文件。</li><li><code>EXPOSE 3000</code>：将容器 3000 端口暴露出来， 允许外部连接这个端口。</li></ul></blockquote><h3 id="_10-2-创建-image-文件" tabindex="-1"><a class="header-anchor" href="#_10-2-创建-image-文件" aria-hidden="true">#</a> 10.2 创建 image 文件</h3><p>有了 Dockerfile 文件以后，就可以使用<code>docker image build</code>命令创建 image 文件了。</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> image build -t koa-demo <span class="token builtin class-name">.</span>\n<span class="token comment"># 或者</span>\n$ <span class="token function">docker</span> image build -t koa-demo:0.0.1 <span class="token builtin class-name">.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></blockquote><p>上面代码中，<code>-t</code>参数用来指定 image 文件的名字，后面还可以用冒号指定标签。如果不指定，默认的标签就是<code>latest</code>。最后的那个点表示 Dockerfile 文件所在的路径，上例是当前路径，所以是一个点。</p><p>如果运行成功，就可以看到新生成的 image 文件<code>koa-demo</code>了。</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> image <span class="token function">ls</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote><h3 id="_10-3-生成容器" tabindex="-1"><a class="header-anchor" href="#_10-3-生成容器" aria-hidden="true">#</a> 10.3 生成容器</h3><p><code>docker container run</code>命令会从 image 文件生成容器。</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> container run -p <span class="token number">8000</span>:3000 -it koa-demo /bin/bash\n<span class="token comment"># 或者</span>\n$ <span class="token function">docker</span> container run -p <span class="token number">8000</span>:3000 -it koa-demo:0.0.1 /bin/bash\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></blockquote><p>上面命令的各个参数含义如下：</p><blockquote><ul><li><code>-p</code>参数：容器的 3000 端口映射到本机的 8000 端口。</li><li><code>-it</code>参数：容器的 Shell 映射到当前的 Shell，然后你在本机窗口输入的命令，就会传入容器。</li><li><code>koa-demo:0.0.1</code>：image 文件的名字（如果有标签，还需要提供标签，默认是 latest 标签）。</li><li><code>/bin/bash</code>：容器启动以后，内部第一个执行的命令。这里是启动 Bash，保证用户可以使用 Shell。</li></ul></blockquote><p>如果一切正常，运行上面的命令以后，就会返回一个命令行提示符。</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>root@66d80f4aaf1e:/app<span class="token comment">#</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote><p>这表示你已经在容器里面了，返回的提示符就是容器内部的 Shell 提示符。执行下面的命令。</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>root@66d80f4aaf1e:/app<span class="token comment"># node demos/01.js</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote>',18),M=(0,s.Uk)('这时，Koa 框架已经运行起来了。打开本机的浏览器，访问 http://127.0.0.1:8000，网页显示"Not Found"，这是因为这个 '),N={href:"https://github.com/ruanyf/koa-demos/blob/master/demos/01.js",target:"_blank",rel:"noopener noreferrer"},W=(0,s.Uk)("demo"),I=(0,s.Uk)(" 没有写路由。"),A=(0,s.uE)('<p>这个例子中，Node 进程运行在 Docker 容器的虚拟环境里面，进程接触到的文件系统和网络接口都是虚拟的，与本机的文件系统和网络接口是隔离的，因此需要定义容器与物理机的端口映射（map）。</p><p>现在，在容器的命令行，按下 Ctrl + c 停止 Node 进程，然后按下 Ctrl + d （或者输入 exit）退出容器。此外，也可以用<code>docker container kill</code>终止容器运行。</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 在本机的另一个终端窗口，查出容器的 ID</span>\n$ <span class="token function">docker</span> container <span class="token function">ls</span>\n\n<span class="token comment"># 停止指定的容器运行</span>\n$ <span class="token function">docker</span> container <span class="token function">kill</span> <span class="token punctuation">[</span>containerID<span class="token punctuation">]</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></blockquote><p>容器停止运行之后，并不会消失，用下面的命令删除容器文件。</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 查出容器的 ID</span>\n$ <span class="token function">docker</span> container <span class="token function">ls</span> --all\n\n<span class="token comment"># 删除指定的容器文件</span>\n$ <span class="token function">docker</span> container <span class="token function">rm</span> <span class="token punctuation">[</span>containerID<span class="token punctuation">]</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></blockquote><p>也可以使用<code>docker container run</code>命令的<code>--rm</code>参数，在容器终止运行后自动删除容器文件。</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> container run --rm -p <span class="token number">8000</span>:3000 -it koa-demo /bin/bash\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote><h3 id="_10-4-cmd-命令" tabindex="-1"><a class="header-anchor" href="#_10-4-cmd-命令" aria-hidden="true">#</a> 10.4 CMD 命令</h3><p>上一节的例子里面，容器启动以后，需要手动输入命令<code>node demos/01.js</code>。我们可以把这个命令写在 Dockerfile 里面，这样容器启动以后，这个命令就已经执行了，不用再手动输入了。</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FROM node:8.4\nCOPY <span class="token builtin class-name">.</span> /app\nWORKDIR /app\nRUN <span class="token function">npm</span> <span class="token function">install</span> --registry<span class="token operator">=</span>https://registry.npm.taobao.org\nEXPOSE <span class="token number">3000</span>\nCMD <span class="token function">node</span> demos/01.js\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></blockquote><p>上面的 Dockerfile 里面，多了最后一行<code>CMD node demos/01.js</code>，它表示容器启动后自动执行<code>node demos/01.js</code>。</p><p>你可能会问，<code>RUN</code>命令与<code>CMD</code>命令的区别在哪里？简单说，<code>RUN</code>命令在 image 文件的构建阶段执行，执行结果都会打包进入 image 文件；<code>CMD</code>命令则是在容器启动后执行。另外，一个 Dockerfile 可以包含多个<code>RUN</code>命令，但是只能有一个<code>CMD</code>命令。</p><p>注意，指定了<code>CMD</code>命令以后，<code>docker container run</code>命令就不能附加命令了（比如前面的<code>/bin/bash</code>），否则它会覆盖<code>CMD</code>命令。现在，启动容器可以使用下面的命令。</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> container run --rm -p <span class="token number">8000</span>:3000 -it koa-demo:0.0.1\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote><h3 id="_10-5-发布-image-文件" tabindex="-1"><a class="header-anchor" href="#_10-5-发布-image-文件" aria-hidden="true">#</a> 10.5 发布 image 文件</h3><p>容器运行成功后，就确认了 image 文件的有效性。这时，我们就可以考虑把 image 文件分享到网上，让其他人使用。</p>',16),B=(0,s.Uk)("首先，去 "),P={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},S=(0,s.Uk)("hub.docker.com"),j=(0,s.Uk)(" 或 "),K={href:"https://cloud.docker.com/",target:"_blank",rel:"noopener noreferrer"},F=(0,s.Uk)("cloud.docker.com"),Y=(0,s.Uk)(" 注册一个账户。然后，用下面的命令登录。"),X=(0,s.uE)('<blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> login\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote><p>接着，为本地的 image 标注用户名和版本。</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> image tag <span class="token punctuation">[</span>imageName<span class="token punctuation">]</span> <span class="token punctuation">[</span>username<span class="token punctuation">]</span>/<span class="token punctuation">[</span>repository<span class="token punctuation">]</span>:<span class="token punctuation">[</span>tag<span class="token punctuation">]</span>\n<span class="token comment"># 实例</span>\n$ <span class="token function">docker</span> image tag koa-demos:0.0.1 ruanyf/koa-demos:0.0.1\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></blockquote><p>也可以不标注用户名，重新构建一下 image 文件。</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> image build -t <span class="token punctuation">[</span>username<span class="token punctuation">]</span>/<span class="token punctuation">[</span>repository<span class="token punctuation">]</span>:<span class="token punctuation">[</span>tag<span class="token punctuation">]</span> <span class="token builtin class-name">.</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote><p>最后，发布 image 文件。</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> image push <span class="token punctuation">[</span>username<span class="token punctuation">]</span>/<span class="token punctuation">[</span>repository<span class="token punctuation">]</span>:<span class="token punctuation">[</span>tag<span class="token punctuation">]</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote><p>发布成功以后，登录 hub.docker.com，就可以看到已经发布的 image 文件。</p><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><ul><li>http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html</li></ul><h2 id="今日图-有的时候我的代码会像这样" tabindex="-1"><a class="header-anchor" href="#今日图-有的时候我的代码会像这样" aria-hidden="true">#</a> 今日图 - 有的时候我的代码会像这样</h2><p><img src="'+o+'" alt="16c3616c85ea4e5e.png"></p>',12),z={},H=(0,a(3744).Z)(z,[["render",function(n,e){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[l,(0,s._)("p",null,[c,(0,s._)("a",r,[i,(0,s.Wm)(a)]),p]),t,(0,s._)("p",null,[d,(0,s._)("a",u,[b,(0,s.Wm)(a)]),m]),(0,s._)("p",null,[k,(0,s._)("a",h,[g,(0,s.Wm)(a)]),f]),v,(0,s._)("p",null,[q,D,_,(0,s._)("a",x,[U,(0,s.Wm)(a)]),$]),E,(0,s._)("p",null,[C,(0,s._)("a",y,[R,(0,s.Wm)(a)]),O]),w,(0,s._)("p",null,[M,(0,s._)("a",N,[W,(0,s.Wm)(a)]),I]),A,(0,s._)("p",null,[B,(0,s._)("a",P,[S,(0,s.Wm)(a)]),j,(0,s._)("a",K,[F,(0,s.Wm)(a)]),Y]),X],64)}]])}}]);