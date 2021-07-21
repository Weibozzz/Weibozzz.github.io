(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[5999],{6656:(e,l,n)=>{"use strict";n.r(l),n.d(l,{data:()=>r});const r={key:"v-025ea688",path:"/HTTP/url%E9%95%BF%E5%BA%A6%E7%9A%84%E8%AF%AF%E5%8C%BA.html",title:"url长度的误区",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"GET传参最大长度的理解误区",slug:"get传参最大长度的理解误区",children:[]},{level:2,title:"总结",slug:"总结",children:[]},{level:2,title:"误解",slug:"误解",children:[]},{level:2,title:"各个浏览器和web服务器的最大长度总结",slug:"各个浏览器和web服务器的最大长度总结",children:[{level:3,title:"浏览器",slug:"浏览器",children:[]},{level:3,title:"服务器",slug:"服务器",children:[]}]},{level:2,title:"参考",slug:"参考",children:[]},{level:2,title:"配图 521-扎心了 老铁",slug:"配图-521-扎心了-老铁",children:[]}],filePathRelative:"HTTP/url长度的误区.md",git:{updatedTime:1626843914e3}}},7232:(e,l,n)=>{"use strict";n.r(l),n.d(l,{default:()=>V});var r=n(6252);const t=n.p+"assets/img/111_20190521103105.b0540054.jpg",a=(0,r.Wm)("h1",{id:"url长度的误区",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#url长度的误区","aria-hidden":"true"},"#"),(0,r.Uk)(" url长度的误区")],-1),o=(0,r.Wm)("h2",{id:"get传参最大长度的理解误区",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#get传参最大长度的理解误区","aria-hidden":"true"},"#"),(0,r.Uk)(" GET传参最大长度的理解误区")],-1),i=(0,r.Wm)("h2",{id:"总结",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),(0,r.Uk)(" 总结")],-1),u=(0,r.Wm)("ol",null,[(0,r.Wm)("li",null,[(0,r.Wm)("code",null,"HTTP"),(0,r.Uk)(" 协议 未规定 "),(0,r.Wm)("code",null,"GET"),(0,r.Uk)(),(0,r.Wm)("code",null,"和POST的长度限制")]),(0,r.Wm)("li",null,[(0,r.Wm)("code",null,"GET"),(0,r.Uk)("的最大长度显示是因为 浏览器和"),(0,r.Wm)("code",null," web"),(0,r.Uk)("服务器限制了 "),(0,r.Wm)("code",null,"URI"),(0,r.Uk)("的长度")]),(0,r.Wm)("li",null,[(0,r.Uk)("不同的浏览器和"),(0,r.Wm)("code",null,"WEB"),(0,r.Uk)("服务器，限制的最大长度不一样")]),(0,r.Wm)("li",null,[(0,r.Uk)("要支持"),(0,r.Wm)("code",null,"IE"),(0,r.Uk)("，则最大长度为"),(0,r.Wm)("code",null,"2083byte"),(0,r.Uk)("，若只支持"),(0,r.Wm)("code",null,"Chrome"),(0,r.Uk)("，则最大长度 "),(0,r.Wm)("code",null,"8182byte")])],-1),m=(0,r.Wm)("h2",{id:"误解",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#误解","aria-hidden":"true"},"#"),(0,r.Uk)(" 误解")],-1),s=(0,r.Wm)("p",null,[(0,r.Uk)("大家都知道"),(0,r.Wm)("code",null,"http"),(0,r.Uk)(" 中 存在"),(0,r.Wm)("code",null," GET"),(0,r.Uk)(" 和 "),(0,r.Wm)("code",null,"POST "),(0,r.Uk)("这两种最常用的请求方式。（PUT，DELETE不在本文讨论范围之内）")],-1),h=(0,r.Wm)("p",null,[(0,r.Wm)("strong",null,"误解：HTTP 协议下的 Get 请求参数长度是有大小限制的，最大不能超过XX，而 Post 是无限制的")],-1),d=(0,r.Wm)("ol",null,[(0,r.Wm)("li",null,"首先即使有长度限制，也是限制的是整个 URI 长度，而不仅仅是你的参数值数据长度。"),(0,r.Wm)("li",null,"HTTP 协议从未规定 GET/POST 的请求长度限制是多少。")],-1),c=(0,r.Uk)("详细可以看 "),W={href:"https://tools.ietf.org/html/rfc2616",target:"_blank",rel:"noopener noreferrer"},p=(0,r.Uk)("RFC2616 3.2.1 General Syntax"),f=(0,r.Wm)("blockquote",null,[(0,r.Wm)("p",null,'URIs in HTTP can be represented in absolute form or relative to some known base URI [11], depending upon the context of their use. The two forms are differentiated by the fact that absolute URIs always begin with a scheme name followed by a colon. For definitive information on URL syntax and semantics, see "Uniform Resource Identifiers (URI): Generic Syntax and Semantics," RFC 2396 [42] (which replaces RFCs 1738 [4] and RFC 1808 [11]). This specification adopts the definitions of "URI-reference", "absoluteURI", "relativeURI", "port", "host","abs_path", "rel_path", and "authority" from that specification.')],-1),b=(0,r.Wm)("blockquote",null,[(0,r.Wm)("p",null,"The HTTP protocol does not place any a priori limit on the length of a URI. Servers MUST be able to handle the URI of any resource they serve, and SHOULD be able to handle URIs of unbounded length if they provide GET-based forms that could generate such URIs. A server SHOULD return 414 (Request-URI Too Long) status if a URI is longer than the server can handle (see section 10.4.15).")],-1),U=(0,r.Wm)("blockquote",null,[(0,r.Wm)("p",null,"Note: Servers ought to be cautious about depending on URI lengths above 255 bytes, because some older client or proxy implementations might not properly support these lengths.")],-1),g=(0,r.Wm)("p",null,"2019-05-21摘",-1),k=(0,r.Wm)("h2",{id:"各个浏览器和web服务器的最大长度总结",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#各个浏览器和web服务器的最大长度总结","aria-hidden":"true"},"#"),(0,r.Uk)(" 各个浏览器和web服务器的最大长度总结")],-1),T=(0,r.Wm)("h3",{id:"浏览器",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#浏览器","aria-hidden":"true"},"#"),(0,r.Uk)(" 浏览器")],-1),I=(0,r.Wm)("p",null,"1、IE",-1),R=(0,r.Wm)("p",null,"IE浏览器（Microsoft Internet Explorer） 对url长度限制是2083（2K+53），超过这个限制，则自动截断（若是form提交则提交按钮不起作用）。",-1),v=(0,r.Wm)("p",null,"2、firefox",-1),x=(0,r.Wm)("p",null,"firefox（火狐浏览器）的url长度限制为 65 536字符，但实际上有效的URL最大长度不少于100,000个字符。",-1),E=(0,r.Wm)("p",null,"3、chrome",-1),y=(0,r.Wm)("p",null,"chrome（谷歌）的url长度限制超过8182个字符返回本文开头时列出的错误。",-1),P=(0,r.Wm)("p",null,"4、Safari",-1),S=(0,r.Wm)("p",null,"Safari的url长度限制至少为 80 000 字符。",-1),_=(0,r.Wm)("p",null,"5、Opera",-1),w=(0,r.Wm)("p",null,"Opera 浏览器的url长度限制为190 000 字符。Opera 9 地址栏中输入190 000字符时依然能正常编辑。",-1),H=(0,r.Wm)("h3",{id:"服务器",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#服务器","aria-hidden":"true"},"#"),(0,r.Uk)(" 服务器")],-1),q=(0,r.Wm)("p",null,"1、Apache",-1),G=(0,r.Wm)("p",null,"Apache能接受url长度限制为8 192 字符",-1),C=(0,r.Wm)("p",null,"2、IIS",-1),A=(0,r.Wm)("p",null,[(0,r.Wm)("code",null,"Microsoft Internet Information Server(IIS)"),(0,r.Uk)("能接受"),(0,r.Wm)("code",null,"url"),(0,r.Uk)("长度限制为16 384个字符。 这个是可以通过修改的（IIS7） "),(0,r.Wm)("code",null,'configuration/system.webServer/security/requestFiltering/requestLimits@maxQueryStringsetting.<requestLimits maxQueryString="length"/>')],-1),F=(0,r.Wm)("p",null,"3、Perl HTTP::Daemon",-1),L=(0,r.Wm)("p",null,"Perl HTTP::Daemon 至少可以接受url长度限制为8000字符。Perl HTTP::Daemon中限制HTTP request headers的总长度不超过16 384字节(不包括post,file uploads等)。但当url超过8000字符时会返回413错误。 这个限制可以被修改，在Daemon.pm查找16×1024并更改成更大的值。",-1),O=(0,r.Wm)("p",null,"4、ngnix",-1),D=(0,r.Wm)("p",null,"可以通过修改配置来改变url请求串的url长度限制。",-1),j=(0,r.Wm)("p",null,"client_header_buffer_size 默认值：client_header_buffer_size 1k",-1),z=(0,r.Wm)("p",null,"large_client_header_buffers默认值 ：large_client_header_buffers 4 4k/8k",-1),B=(0,r.Wm)("blockquote",null,[(0,r.Wm)("p",null,"由于jsonp跨域请求只能通过get请求，url长度根据浏览器及服务器的不同而有不同限制。 若要支持IE的话，url长度限制为2083字符，若是中文字符的话只有2083/9=231个字符。 若是Chrome浏览器支持的最大中文字符只有8182/9=909个。")],-1),M=(0,r.Wm)("h2",{id:"参考",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),(0,r.Uk)(" 参考")],-1),N={href:"https://github.com/zhongxia245/blog/issues/35",target:"_blank",rel:"noopener noreferrer"},Q=(0,r.Uk)("GET传参最大长度的理解误区"),X={href:"https://tools.ietf.org/html/rfc2616",target:"_blank",rel:"noopener noreferrer"},K=(0,r.Uk)("rfc2616"),Y=(0,r.Wm)("h2",{id:"配图-521-扎心了-老铁",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#配图-521-扎心了-老铁","aria-hidden":"true"},"#"),(0,r.Uk)(" 配图 521-扎心了 老铁")],-1),J=(0,r.Wm)("p",null,[(0,r.Wm)("img",{src:t,alt:"111_20190521103105.jpg"})],-1),V={render:function(e,l){const n=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.j4)(r.HY,null,[a,o,i,u,m,s,h,d,(0,r.Wm)("p",null,[c,(0,r.Wm)("a",W,[p,(0,r.Wm)(n)])]),f,b,U,g,k,T,I,R,v,x,E,y,P,S,_,w,H,q,G,C,A,F,L,O,D,j,z,B,M,(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)("a",N,[Q,(0,r.Wm)(n)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",X,[K,(0,r.Wm)(n)])])]),Y,J],64)}}}}]);