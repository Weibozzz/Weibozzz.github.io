# nginx使用
## nginx 使用



Nginx 是一个免费的，开源的，高性能的HTTP服务器和反向代理，以及IMAP / POP3代理服务器。 Nginx 以其高性能，稳定性，丰富的功能，简单的配置和低资源消耗而闻名。很多高知名度的网站都使用 Nginx，如：Netflix，GitHub，SoundCloud，MaxCDN 等。

![img](https://static.lufficc.com/image/3a1b447093d27fc0dc299558189764bb.png)

Nginx 有一个主线程（ master process）和几个工作线程（worker process）。主线程的目的是**加载**和**验证**配置文件、**维护**工作线程。

工作线程处理实际的请求，Nginx 采用**基于事件**的模型和**依赖操作系统**的机制在工作线程之间高效地分发请求。工作线程的数量可配置，也可自动调整为服务器CPU的数量。

Nginx 及其模块的工作方式由配置文件确定。 默认情况下，配置文件名为 `nginx.conf`，放在 `/usr/local/nginx/conf` 、`/etc/nginx` 或者 `/usr/local/etc/nginx` 文件夹中。

## 基本命令

Nginx 启动之后，可以使用以下命令控制:

```
Copynginx -s <signal>
```

其中`-s`意思是向主进程发送信号，`signal`可以为以下四个中的一个:

1. `stop` — 快速关闭
2. `quit` — 优雅关闭
3. `reload` — 重新加载配置文件
4. `reopen` — 重新打开日志文件

当运行`nginx -s quit`时，Nginx 会等待工作进程处理完成当前请求，然后将其关闭。当你修改配置文件后，并不会立即生效，而是等待重启或者收到`nginx -s reload`信号。

当 Nginx 收到 `nginx -s reload` 信号后，首先检查配置文件的语法。语法正确后，主线程会开启新的工作线程并向旧的工作线程发送关闭信号，如果语法不正确，则主线程回滚变化并继续使用旧的配置。当工作进程收到主进程的关闭信号后，会在处理完当前请求之后退出。

## 配置文件

Nginx 配置的核心是定义要处理的 `URL` 以及如何响应这些 `URL` 请求，即定义一系列的**虚拟服务器（Virtual Servers）**控制对来自特定域名或者 IP 的请求的处理。

每一个虚拟服务器定义一系列的 `location` 控制处理特定的 URI 集合。每一个`location`定义了对映射到自己的请求的处理场景，可以返回一个文件或者代理此请求。

Nginx 由不同的模块组成，这些模块由配置文件中指定的指令控制。 指令分为**简单指令**和**块指令**。

一个简单指令包含**指令名称**和**指令参数**，以空格分隔，以分号（`;`）结尾。 块指令与简单指令类似，但是由大括号（`{`和`}`）包围。 如果块指令大括号中包含其他指令，则称该指令为上下文（如： `events`, `http`, `server` 和 `location`）。

配置文件中的放在上下文之外的指令默认放在**主配置文件**中（类似继承主配置文件）。 `events` 和 `http` 放置在主配置文件中，`server` 放置在`http`块指令中，`location`放置在`server`块指令中。

配置文件的注释以 `#` 开始。

## 静态内容

Web 服务器一个重要的功能是服务静态文件（图像或静态HTML页面）。例如，Nginx 可以很方便的让服务器从`/data/www` 获取 html 文件，从`/data/images`获取图片来返回给客户端，这只需要在`http`块指令中的`server`块指令中设置两个`location`块指令。

首先，创建 `/data/www` 目录，并放入 `index.html`，创建 `/data/images` 目录并在其中放置一些图片。

接下来，打开配置文件。 创建一个 `server` 块：

```
Copyhttp {
    server {
    }
}
```

通常，配置文件可以包括多个 `server` 块，它们以**端口**和**服务器名称**来区分。当 Nginx 决定某一个 `server` 处理请求后，它将请求头中的 `URI` 和 `server` 块中的 `location` 块进行对比。
加入 `location` 块指令到 `server` 中：

将以下位置块添加到服务器块：

```
Copylocation / {
    root /data/www;
}
```

上面的 `location` 块指定 `/` 前缀与请求中的 `URI` 对比。对于匹配的请求，`URI` 将被添加到 `root` 指令中指定的路径，即 `/data/www`，以此形成本地文件系统的路径，如访问`http://localhost/bog/welcome.html`，对应服务器文件路径为`/data/www/bog/welcome.html`。 如果 `URI` 匹配多个 `location` 块，Nginx 采用**最长前缀匹配原则**（类似计算机网络里面的IP匹配）， 上面的 `location` 块前缀长度为 1，因此只有当所有其他 `location` 块匹配时，才使用该块。

接下来，添加第二个位置块：

```
Copylocation /images/ {
    root /data;
}
```

它将匹配以`/images/`（`/` 也匹配这样的请求，但具有较短的前缀）开始的请求。

`server` 块的最终配置如下：

```
Copyserver {
    location / {
        root /data/www;
    }

    location /images/ {
        root /data;
    }
}
```

到目前为止，这已经是一个可以正常运行的服务器，它监听端口80，并且可以在本地计算机上访问 `http://localhost/`。 对于 `/images/` 开头的请求，服务器将从 `/data/images` 目录发送文件。 如，对于 `http://localhost/images/example.png` 请求，nginx 将响应 `/data/images/example.png`文件。 如果不存在，nginx 将返回404。`URI` 不以 `/images/` 开头的请求将映射到 `/data/www` 目录。 例如，对于 `http://localhost/some/example.html` 请求，nginx 将响应 `/data/www/some/example.html` 文件。

## 代理服务器

Nginx 的一个常见应用是将其设置为代理服务器（Proxy Server），即接受客户端的请求并将其转发给代理服务器，再接受代理服务器发来的响应，将它们发送到客户端。

比如我们可以用一个 Nginx 实例实现对图片文件的请求使用本地文件系统，而其他请求转发到代理服务器。

首先，向 Nginx 的配置文件中添加一个 `server` 块来定义代理服务器：

```
Copyserver {
    listen 8080;
    root /data/up1;

    location / {
    }
}
```

此服务器侦听端口8080，并将所有请求映射到本地文件系统上的 `/data/up1` 目录。 创建此目录并将 `index.html` 放入其中。 注意，`root` 指令放在 `server` 上下文中，这样 当 `location` 块中不含 `root` 指令时将使用所属 `server` 的 `root` 指令。

接下来，使用上一节中的服务器配置，并将其修改为代理服务器配置。 在第一个位置块中，加上`proxy_pass`指令：

```
Copyserver {
    location / {
           # proxy_pass指令的参数为：协议+主机名+端口号
        proxy_pass http://localhost:8080;
    }

    location /images/ {
        root /data;
    }
}
```

修改第二个 匹配 `/images/` 前缀的 `location` 块，使其与请求图像文件的扩展名相匹配：

```
Copylocation ~ \.(gif|jpg|png)$ {
    root /data/images;
}
```

该参数是一个正则表达式，匹配以.gif，.jpg或.png结尾的所有URI。 正则表达式应该以 `~` 开头。 相应的请求将映射到 `/data/images` 目录。

当 Nginx 选择一个 `location` 块来处理请求时，它首先检查指定 `location` 块的前缀，记住具有最长前缀的 `location` 块，然后检查正则表达式。 如果与正则表达式匹配， Nginx 选择此 `location` 块，否则，选择先前记住的 `location` 块。

代理服务器的最终配置如下：

```
Copyserver {
    location / {
        proxy_pass http://localhost:8080/;
    }

    location ~ \.(gif|jpg|png)$ {
        root /data/images;
    }
}
```

此服务器将过滤以.gif，.jpg或.png结尾的请求，并将它们映射到 `/data/images` 目录（通过向 `root` 指令的参数添加请求的URI），并将所有其他请求发送给上面配置的代理服务器。

这样，图片和其他请求就可以使用不同的服务器来处理。

## FastCGI代理

Nginx 可用于将请求路由到 FastCGI 服务器。快速通用网关接口（Fast Common Gateway Interface／FastCGI）是一种让交互程序与Web服务器通信的协议。因此 Nginx 可以将请求路由到 FastCGI 运行的应用程序，如 PHP 程序。

使用 FastCGI 服务器的最基本的 Nginx 配置包括使用 `fastcgi_pass` 指令而不是 `proxy_pass` 指令，以及使用 `fastcgi_param` 指令来设置传递给 FastCGI 服务器的参数。 假设FastCGI服务器可在 `localhost:9000` 上访问。 以上一节中的代理服务器配置为基础，使用`fastcgi_pass`指令替换`proxy_pass`指令，并将参数更改为 `localhost:9000` 。 在 PHP 中， `SCRIPT_FILENAME` 参数用于确定脚本名称，而 `QUERY_STRING` 参数用于传递请求参数。 生成的配置将是：

```
Copyserver {
    location / {
        fastcgi_pass  localhost:9000;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param QUERY_STRING    $query_string;
    }

    location ~ \.(gif|jpg|png)$ {
        root /data/images;
    }
}
```

这将设置一个服务器，将路由除静态图像以外的所有请求到运行在 `localhost:9000` 的 FastCGI 服务器。

## gzip压缩

- gzip配置的常用参数
- gzip on|off;  #是否开启gzip
- gzip_buffers 32 4K| 16 8K #缓冲(压缩在内存中缓冲几块? 每块多大?)
- gzip_comp_level [1-9] #推荐6 压缩级别(级别越高,压的越小,越浪费CPU计算资源)
- gzip_disable #正则匹配UA 什么样的Uri不进行gzip
- gzip_min_length 200 # 开始压缩的最小长度(再小就不要压缩了,意义不在)
- gzip_http_version 1.0|1.1 # 开始压缩的http协议版本(可以不设置,目前几乎全是1.1协议)
- gzip_proxied          # 设置请求者代理服务器,该如何缓存内容
- gzip_types text/plain application/xml # 对哪些类型的文件用压缩 如txt,xml,html ,css
- gzip_vary on|off  # 是否传输gzip压缩标志

例如 以下是配置

```
  gzip on;
	gzip_buffers 32 4K;
	gzip_comp_level 6;
  gzip_min_length 100;
	gzip_types application/javascript text/css text/xml;
	gzip_disable "MSIE [1-6]\."; #配置禁用gzip条件，支持正则。此处表示ie6及以下不启用gzip（因为ie低版本不支持）
  gzip_vary on;
```

## 查看安装
查看软件安装路径
`whereis nginx`

查询运行文件所在路径
`which nginx`


`nginx -t` 检查配置文件

## 引用
- https://lufficc.com/blog/nginx-for-beginners
- https://www.cnblogs.com/qianpangzi/p/10922420.html
## 今日图 - 自测代码后要上线了
![16ac3747430c8cd7.gif](../../images/acf524670274cfa46627b5d1afc8c23f.gif)
