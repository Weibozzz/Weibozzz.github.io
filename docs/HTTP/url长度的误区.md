# GET传参最大长度的理解误区

## 总结

1. `HTTP` 协议 未规定 `GET` `和POST的长度限制`
2. `GET`的最大长度显示是因为 浏览器和` web`服务器限制了 `URI`的长度
3. 不同的浏览器和`WEB`服务器，限制的最大长度不一样
4. 要支持`IE`，则最大长度为`2083byte`，若只支持`Chrome`，则最大长度 `8182byte`

## 误解

大家都知道`http` 中 存在` GET` 和 `POST `这两种最常用的请求方式。（PUT，DELETE不在本文讨论范围之内）

**误解：HTTP 协议下的 Get 请求参数长度是有大小限制的，最大不能超过XX，而 Post 是无限制的**

1. 首先即使有长度限制，也是限制的是整个 URI 长度，而不仅仅是你的参数值数据长度。
2. HTTP 协议从未规定 GET/POST 的请求长度限制是多少。

详细可以看 [RFC2616 3.2.1 General Syntax](https://tools.ietf.org/html/rfc2616)
>  URIs in HTTP can be represented in absolute form or relative to some
     known base URI [11], depending upon the context of their use. The two
     forms are differentiated by the fact that absolute URIs always begin
     with a scheme name followed by a colon. For definitive information on
     URL syntax and semantics, see "Uniform Resource Identifiers (URI):
     Generic Syntax and Semantics," RFC 2396 [42] (which replaces RFCs
     1738 [4] and RFC 1808 [11]). This specification adopts the
     definitions of "URI-reference", "absoluteURI", "relativeURI", "port",
     "host","abs_path", "rel_path", and "authority" from that
     specification.

> The HTTP protocol does not place any a priori limit on the length of
     a URI. Servers MUST be able to handle the URI of any resource they
     serve, and SHOULD be able to handle URIs of unbounded length if they
     provide GET-based forms that could generate such URIs. A server
     SHOULD return 414 (Request-URI Too Long) status if a URI is longer
     than the server can handle (see section 10.4.15).

> Note: Servers ought to be cautious about depending on URI lengths
        above 255 bytes, because some older client or proxy
        implementations might not properly support these lengths.

2019-05-21摘

## 各个浏览器和web服务器的最大长度总结

### 浏览器

1、IE

IE浏览器（Microsoft Internet Explorer） 对url长度限制是2083（2K+53），超过这个限制，则自动截断（若是form提交则提交按钮不起作用）。

2、firefox

firefox（火狐浏览器）的url长度限制为 65 536字符，但实际上有效的URL最大长度不少于100,000个字符。

3、chrome

chrome（谷歌）的url长度限制超过8182个字符返回本文开头时列出的错误。

4、Safari

Safari的url长度限制至少为 80 000 字符。

5、Opera

Opera 浏览器的url长度限制为190 000 字符。Opera 9 地址栏中输入190 000字符时依然能正常编辑。

### 服务器

1、Apache

Apache能接受url长度限制为8 192 字符

2、IIS

Microsoft Internet Information Server(IIS)能接受url长度限制为16 384个字符。
这个是可以通过修改的（IIS7）
configuration/system.webServer/security/requestFiltering/requestLimits@maxQueryStringsetting.<requestLimits maxQueryString="length"/>

3、Perl HTTP::Daemon

Perl HTTP::Daemon 至少可以接受url长度限制为8000字符。Perl HTTP::Daemon中限制HTTP request headers的总长度不超过16 384字节(不包括post,file uploads等)。但当url超过8000字符时会返回413错误。
这个限制可以被修改，在Daemon.pm查找16×1024并更改成更大的值。

4、ngnix

可以通过修改配置来改变url请求串的url长度限制。

client_header_buffer_size 默认值：client_header_buffer_size 1k

large_client_header_buffers默认值 ：large_client_header_buffers 4 4k/8k

> 由于jsonp跨域请求只能通过get请求，url长度根据浏览器及服务器的不同而有不同限制。
若要支持IE的话，url长度限制为2083字符，若是中文字符的话只有2083/9=231个字符。
若是Chrome浏览器支持的最大中文字符只有8182/9=909个。

## 参考

- [GET传参最大长度的理解误区](https://github.com/zhongxia245/blog/issues/35)
- [rfc2616](https://tools.ietf.org/html/rfc2616)

## 配图 521-扎心了 老铁

![111_20190521103105.jpg](../images/111_20190521103105.jpg)
