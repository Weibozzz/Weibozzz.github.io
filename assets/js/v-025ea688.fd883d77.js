"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[5999],{6656:(e,t,r)=>{r.r(t),r.d(t,{data:()=>o});const o={key:"v-025ea688",path:"/HTTP/url%E9%95%BF%E5%BA%A6%E7%9A%84%E8%AF%AF%E5%8C%BA.html",title:"url长度的误区",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"GET传参最大长度的理解误区",slug:"get传参最大长度的理解误区",children:[]},{level:2,title:"总结",slug:"总结",children:[]},{level:2,title:"误解",slug:"误解",children:[]},{level:2,title:"各个浏览器和web服务器的最大长度总结",slug:"各个浏览器和web服务器的最大长度总结",children:[{level:3,title:"浏览器",slug:"浏览器",children:[]},{level:3,title:"服务器",slug:"服务器",children:[]}]},{level:2,title:"参考",slug:"参考",children:[]},{level:2,title:"配图 521-扎心了 老铁",slug:"配图-521-扎心了-老铁",children:[]}],filePathRelative:"HTTP/url长度的误区.md",git:{updatedTime:1626831226e3}}},8216:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var o=r(6252);const a=r.p+"assets/img/111_20190521103105.b0540054.jpg",l=(0,o.uE)('<h1 id="url长度的误区" tabindex="-1"><a class="header-anchor" href="#url长度的误区" aria-hidden="true">#</a> url长度的误区</h1><h2 id="get传参最大长度的理解误区" tabindex="-1"><a class="header-anchor" href="#get传参最大长度的理解误区" aria-hidden="true">#</a> GET传参最大长度的理解误区</h2><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ol><li><code>HTTP</code> 协议 未规定 <code>GET</code> <code>和POST的长度限制</code></li><li><code>GET</code>的最大长度显示是因为 浏览器和<code> web</code>服务器限制了 <code>URI</code>的长度</li><li>不同的浏览器和<code>WEB</code>服务器，限制的最大长度不一样</li><li>要支持<code>IE</code>，则最大长度为<code>2083byte</code>，若只支持<code>Chrome</code>，则最大长度 <code>8182byte</code></li></ol><h2 id="误解" tabindex="-1"><a class="header-anchor" href="#误解" aria-hidden="true">#</a> 误解</h2><p>大家都知道<code>http</code> 中 存在<code> GET</code> 和 <code>POST </code>这两种最常用的请求方式。（PUT，DELETE不在本文讨论范围之内）</p><p><strong>误解：HTTP 协议下的 Get 请求参数长度是有大小限制的，最大不能超过XX，而 Post 是无限制的</strong></p><ol><li>首先即使有长度限制，也是限制的是整个 URI 长度，而不仅仅是你的参数值数据长度。</li><li>HTTP 协议从未规定 GET/POST 的请求长度限制是多少。</li></ol>',8),i=(0,o.Uk)("详细可以看 "),n={href:"https://tools.ietf.org/html/rfc2616",target:"_blank",rel:"noopener noreferrer"},d=(0,o.Uk)("RFC2616 3.2.1 General Syntax"),h=(0,o.uE)('<blockquote><p>URIs in HTTP can be represented in absolute form or relative to some known base URI [11], depending upon the context of their use. The two forms are differentiated by the fact that absolute URIs always begin with a scheme name followed by a colon. For definitive information on URL syntax and semantics, see &quot;Uniform Resource Identifiers (URI): Generic Syntax and Semantics,&quot; RFC 2396 [42] (which replaces RFCs 1738 [4] and RFC 1808 [11]). This specification adopts the definitions of &quot;URI-reference&quot;, &quot;absoluteURI&quot;, &quot;relativeURI&quot;, &quot;port&quot;, &quot;host&quot;,&quot;abs_path&quot;, &quot;rel_path&quot;, and &quot;authority&quot; from that specification.</p></blockquote><blockquote><p>The HTTP protocol does not place any a priori limit on the length of a URI. Servers MUST be able to handle the URI of any resource they serve, and SHOULD be able to handle URIs of unbounded length if they provide GET-based forms that could generate such URIs. A server SHOULD return 414 (Request-URI Too Long) status if a URI is longer than the server can handle (see section 10.4.15).</p></blockquote><blockquote><p>Note: Servers ought to be cautious about depending on URI lengths above 255 bytes, because some older client or proxy implementations might not properly support these lengths.</p></blockquote><p>2019-05-21摘</p><h2 id="各个浏览器和web服务器的最大长度总结" tabindex="-1"><a class="header-anchor" href="#各个浏览器和web服务器的最大长度总结" aria-hidden="true">#</a> 各个浏览器和web服务器的最大长度总结</h2><h3 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器" aria-hidden="true">#</a> 浏览器</h3><p>1、IE</p><p>IE浏览器（Microsoft Internet Explorer） 对url长度限制是2083（2K+53），超过这个限制，则自动截断（若是form提交则提交按钮不起作用）。</p><p>2、firefox</p><p>firefox（火狐浏览器）的url长度限制为 65 536字符，但实际上有效的URL最大长度不少于100,000个字符。</p><p>3、chrome</p><p>chrome（谷歌）的url长度限制超过8182个字符返回本文开头时列出的错误。</p><p>4、Safari</p><p>Safari的url长度限制至少为 80 000 字符。</p><p>5、Opera</p><p>Opera 浏览器的url长度限制为190 000 字符。Opera 9 地址栏中输入190 000字符时依然能正常编辑。</p><h3 id="服务器" tabindex="-1"><a class="header-anchor" href="#服务器" aria-hidden="true">#</a> 服务器</h3><p>1、Apache</p><p>Apache能接受url长度限制为8 192 字符</p><p>2、IIS</p><p><code>Microsoft Internet Information Server(IIS)</code>能接受<code>url</code>长度限制为16 384个字符。 这个是可以通过修改的（IIS7） <code>configuration/system.webServer/security/requestFiltering/requestLimits@maxQueryStringsetting.&lt;requestLimits maxQueryString=&quot;length&quot;/&gt;</code></p><p>3、Perl HTTP::Daemon</p><p>Perl HTTP::Daemon 至少可以接受url长度限制为8000字符。Perl HTTP::Daemon中限制HTTP request headers的总长度不超过16 384字节(不包括post,file uploads等)。但当url超过8000字符时会返回413错误。 这个限制可以被修改，在Daemon.pm查找16×1024并更改成更大的值。</p><p>4、ngnix</p><p>可以通过修改配置来改变url请求串的url长度限制。</p><p>client_header_buffer_size 默认值：client_header_buffer_size 1k</p><p>large_client_header_buffers默认值 ：large_client_header_buffers 4 4k/8k</p><blockquote><p>由于jsonp跨域请求只能通过get请求，url长度根据浏览器及服务器的不同而有不同限制。 若要支持IE的话，url长度限制为2083字符，若是中文字符的话只有2083/9=231个字符。 若是Chrome浏览器支持的最大中文字符只有8182/9=909个。</p></blockquote><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',29),s={href:"https://github.com/zhongxia245/blog/issues/35",target:"_blank",rel:"noopener noreferrer"},u=(0,o.Uk)("GET传参最大长度的理解误区"),c={href:"https://tools.ietf.org/html/rfc2616",target:"_blank",rel:"noopener noreferrer"},p=(0,o.Uk)("rfc2616"),f=(0,o._)("h2",{id:"配图-521-扎心了-老铁",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#配图-521-扎心了-老铁","aria-hidden":"true"},"#"),(0,o.Uk)(" 配图 521-扎心了 老铁")],-1),b=(0,o._)("p",null,[(0,o._)("img",{src:a,alt:"111_20190521103105.jpg"})],-1),g={},m=(0,r(3744).Z)(g,[["render",function(e,t){const r=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[l,(0,o._)("p",null,[i,(0,o._)("a",n,[d,(0,o.Wm)(r)])]),h,(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("a",s,[u,(0,o.Wm)(r)])]),(0,o._)("li",null,[(0,o._)("a",c,[p,(0,o.Wm)(r)])])]),f,b],64)}]])}}]);