## 用docker部署一个项目

## 安装

mac下 `brew cask install docker`

安装完成后，运行下面的命令，验证是否安装成功。

> ```bash
> $ docker version
> # 或者
> $ docker info
> ```

## image 文件

**Docker 把应用程序及其依赖，打包在 image 文件里面。**只有通过这个文件，才能生成 Docker 容器。image 文件可以看作是容器的模板。Docker 根据 image 文件生成容器的实例。同一个 image 文件，可以生成多个同时运行的容器实例。

image 是二进制文件。实际开发中，一个 image 文件往往通过继承另一个 image 文件，加上一些个性化设置而生成。举例来说，你可以在 Ubuntu 的 image 基础上，往里面加入 Apache 服务器，形成你的 image。

> ```bash
> # 列出本机的所有 image 文件。
> $ docker image ls
> 
> # 删除 image 文件
> $ docker image rm [imageName]
> ```

## 容器文件

**image 文件生成的容器实例，本身也是一个文件，称为容器文件。**也就是说，一旦容器生成，就会同时存在两个文件： image 文件和容器文件。而且关闭容器并不会删除容器文件，只是容器停止运行而已。

> ```bash
> # 列出本机正在运行的容器
> $ docker container ls
> 
> # 列出本机所有容器，包括终止运行的容器
> $ docker container ls --all
> ```

上面命令的输出结果之中，包括容器的 ID。很多地方都需要提供这个 ID，比如上一节终止容器运行的`docker container kill`命令。

终止运行的容器文件，依然会占据硬盘空间，可以使用[`docker container rm`](https://docs.docker.com/engine/reference/commandline/container_rm/)命令删除。

> ```bash
> $ docker container rm [containerID]
> ```

运行上面的命令之后，再使用`docker container ls --all`命令，就会发现被删除的容器文件已经消失了。



## Dockerfile 文件

学会使用 image 文件以后，接下来的问题就是，如何可以生成 image 文件？如果你要推广自己的软件，势必要自己制作 image 文件。

这就需要用到 Dockerfile 文件。它是一个文本文件，用来配置 image。Docker 根据 该文件生成二进制的 image 文件。

下面通过一个实例，演示如何编写 Dockerfile 文件。

## 十、实例：制作自己的 Docker 容器

下面我以 [koa-demos](http://www.ruanyifeng.com/blog/2017/08/koa.html) 项目为例，介绍怎么写 Dockerfile 文件，实现让用户在 Docker 容器里面运行 Koa 框架。

作为准备工作，请先[下载源码](https://github.com/ruanyf/koa-demos/archive/master.zip)。

> ```bash
> $ git clone https://github.com/ruanyf/koa-demos.git
> $ cd koa-demos
> ```

### 编写 Dockerfile 文件

首先，在项目的根目录下，新建一个文本文件`.dockerignore`，写入下面的[内容](https://github.com/ruanyf/koa-demos/blob/master/.dockerignore)。

> ```bash
> .git
> node_modules
> npm-debug.log
> ```

上面代码表示，这三个路径要排除，不要打包进入 image 文件。如果你没有路径要排除，这个文件可以不新建。

然后，在项目的根目录下，新建一个文本文件 Dockerfile，写入下面的[内容](https://github.com/ruanyf/koa-demos/blob/master/Dockerfile)。

> ```bash
> FROM node:8.4
> COPY . /app
> WORKDIR /app
> RUN npm install --registry=https://registry.npm.taobao.org
> EXPOSE 3000
> ```

上面代码一共五行，含义如下。

> - `FROM node:8.4`：该 image 文件继承官方的 node image，冒号表示标签，这里标签是`8.4`，即8.4版本的 node。
> - `COPY . /app`：将当前目录下的所有文件（除了`.dockerignore`排除的路径），都拷贝进入 image 文件的`/app`目录。
> - `WORKDIR /app`：指定接下来的工作路径为`/app`。
> - `RUN npm install`：在`/app`目录下，运行`npm install`命令安装依赖。注意，安装后所有的依赖，都将打包进入 image 文件。
> - `EXPOSE 3000`：将容器 3000 端口暴露出来， 允许外部连接这个端口。

### 10.2 创建 image 文件

有了 Dockerfile 文件以后，就可以使用`docker image build`命令创建 image 文件了。

> ```bash
> $ docker image build -t koa-demo .
> # 或者
> $ docker image build -t koa-demo:0.0.1 .
> ```

上面代码中，`-t`参数用来指定 image 文件的名字，后面还可以用冒号指定标签。如果不指定，默认的标签就是`latest`。最后的那个点表示 Dockerfile 文件所在的路径，上例是当前路径，所以是一个点。

如果运行成功，就可以看到新生成的 image 文件`koa-demo`了。

> ```bash
> $ docker image ls
> 
> ```

### 10.3 生成容器

`docker container run`命令会从 image 文件生成容器。

> ```bash
> $ docker container run -p 8000:3000 -it koa-demo /bin/bash
> # 或者
> $ docker container run -p 8000:3000 -it koa-demo:0.0.1 /bin/bash
> 
> ```

上面命令的各个参数含义如下：

> - `-p`参数：容器的 3000 端口映射到本机的 8000 端口。
> - `-it`参数：容器的 Shell 映射到当前的 Shell，然后你在本机窗口输入的命令，就会传入容器。
> - `koa-demo:0.0.1`：image 文件的名字（如果有标签，还需要提供标签，默认是 latest 标签）。
> - `/bin/bash`：容器启动以后，内部第一个执行的命令。这里是启动 Bash，保证用户可以使用 Shell。

如果一切正常，运行上面的命令以后，就会返回一个命令行提示符。

> ```bash
> root@66d80f4aaf1e:/app#
> 
> ```

这表示你已经在容器里面了，返回的提示符就是容器内部的 Shell 提示符。执行下面的命令。

> ```bash
> root@66d80f4aaf1e:/app# node demos/01.js
> 
> ```

这时，Koa 框架已经运行起来了。打开本机的浏览器，访问 http://127.0.0.1:8000，网页显示"Not Found"，这是因为这个 [demo](https://github.com/ruanyf/koa-demos/blob/master/demos/01.js) 没有写路由。

这个例子中，Node 进程运行在 Docker 容器的虚拟环境里面，进程接触到的文件系统和网络接口都是虚拟的，与本机的文件系统和网络接口是隔离的，因此需要定义容器与物理机的端口映射（map）。

现在，在容器的命令行，按下 Ctrl + c 停止 Node 进程，然后按下 Ctrl + d （或者输入 exit）退出容器。此外，也可以用`docker container kill`终止容器运行。

> ```bash
> # 在本机的另一个终端窗口，查出容器的 ID
> $ docker container ls
> 
> # 停止指定的容器运行
> $ docker container kill [containerID]
> 
> ```

容器停止运行之后，并不会消失，用下面的命令删除容器文件。

> ```bash
> # 查出容器的 ID
> $ docker container ls --all
> 
> # 删除指定的容器文件
> $ docker container rm [containerID]
> 
> ```

也可以使用`docker container run`命令的`--rm`参数，在容器终止运行后自动删除容器文件。

> ```bash
> $ docker container run --rm -p 8000:3000 -it koa-demo /bin/bash
> 
> ```

### 10.4 CMD 命令

上一节的例子里面，容器启动以后，需要手动输入命令`node demos/01.js`。我们可以把这个命令写在 Dockerfile 里面，这样容器启动以后，这个命令就已经执行了，不用再手动输入了。

> ```bash
> FROM node:8.4
> COPY . /app
> WORKDIR /app
> RUN npm install --registry=https://registry.npm.taobao.org
> EXPOSE 3000
> CMD node demos/01.js
> 
> ```

上面的 Dockerfile 里面，多了最后一行`CMD node demos/01.js`，它表示容器启动后自动执行`node demos/01.js`。

你可能会问，`RUN`命令与`CMD`命令的区别在哪里？简单说，`RUN`命令在 image 文件的构建阶段执行，执行结果都会打包进入 image 文件；`CMD`命令则是在容器启动后执行。另外，一个 Dockerfile 可以包含多个`RUN`命令，但是只能有一个`CMD`命令。

注意，指定了`CMD`命令以后，`docker container run`命令就不能附加命令了（比如前面的`/bin/bash`），否则它会覆盖`CMD`命令。现在，启动容器可以使用下面的命令。

> ```bash
> $ docker container run --rm -p 8000:3000 -it koa-demo:0.0.1
> 
> ```

### 10.5 发布 image 文件

容器运行成功后，就确认了 image 文件的有效性。这时，我们就可以考虑把 image 文件分享到网上，让其他人使用。

首先，去 [hub.docker.com](https://hub.docker.com/) 或 [cloud.docker.com](https://cloud.docker.com/) 注册一个账户。然后，用下面的命令登录。

> ```bash
> $ docker login
> 
> ```

接着，为本地的 image 标注用户名和版本。

> ```bash
> $ docker image tag [imageName] [username]/[repository]:[tag]
> # 实例
> $ docker image tag koa-demos:0.0.1 ruanyf/koa-demos:0.0.1
> 
> ```

也可以不标注用户名，重新构建一下 image 文件。

> ```bash
> $ docker image build -t [username]/[repository]:[tag] .
> 
> ```

最后，发布 image 文件。

> ```bash
> $ docker image push [username]/[repository]:[tag]
> 
> ```

发布成功以后，登录 hub.docker.com，就可以看到已经发布的 image 文件。







## 引用

- http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html

## 今日图 - 有的时候我的代码会像这样
![16c3616c85ea4e5e.png](../../images/16c3616c85ea4e5e.png)
