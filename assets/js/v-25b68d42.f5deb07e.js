(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[8501],{1644:(l,e,n)=>{"use strict";n.r(e),n.d(e,{data:()=>u});const u={key:"v-25b68d42",path:"/HTTP/HTTP%E5%8D%8F%E8%AE%AE.html",title:"HTTP协议",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"特点",slug:"特点",children:[]},{level:2,title:"报文",slug:"报文",children:[]},{level:2,title:"请求方法",slug:"请求方法",children:[{level:3,title:"get和post的区别",slug:"get和post的区别",children:[]},{level:3,title:"状态码",slug:"状态码",children:[]}]},{level:2,title:"持久连接",slug:"持久连接",children:[]},{level:2,title:"管线化",slug:"管线化",children:[]},{level:2,title:"今日图 520扎心了",slug:"今日图-520扎心了",children:[]}],filePathRelative:"HTTP/HTTP协议.md",git:{updatedTime:162684715e4}}},661:(l,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>O});var u=n(6252);const d=n.p+"assets/img/123_20190521095200.d6137d5c.jpg",m=(0,u.Wm)("h1",{id:"http协议",tabindex:"-1"},[(0,u.Wm)("a",{class:"header-anchor",href:"#http协议","aria-hidden":"true"},"#"),(0,u.Uk)(" HTTP协议")],-1),W=(0,u.Wm)("h2",{id:"特点",tabindex:"-1"},[(0,u.Wm)("a",{class:"header-anchor",href:"#特点","aria-hidden":"true"},"#"),(0,u.Uk)(" 特点")],-1),i=(0,u.Wm)("ol",null,[(0,u.Wm)("li",null,[(0,u.Uk)("简单快速 ：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有"),(0,u.Wm)("code",null,"GET"),(0,u.Uk)("、"),(0,u.Wm)("code",null,"HEAD"),(0,u.Uk)("、"),(0,u.Wm)("code",null,"POST"),(0,u.Uk)("。每种方法规定了客户与服务器联系的类型不同。由于"),(0,u.Wm)("code",null,"HTTP"),(0,u.Uk)("协议简单，使得"),(0,u.Wm)("code",null,"HTTP"),(0,u.Uk)("服务器的程序规模小，因而通信速度很快。")]),(0,u.Wm)("li",null,"灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记"),(0,u.Wm)("li",null,"连接： 无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。"),(0,u.Wm)("li",null,[(0,u.Uk)("无状态："),(0,u.Wm)("code",null,"HTTP"),(0,u.Uk)("协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。")])],-1),t=(0,u.Wm)("h2",{id:"报文",tabindex:"-1"},[(0,u.Wm)("a",{class:"header-anchor",href:"#报文","aria-hidden":"true"},"#"),(0,u.Uk)(" 报文")],-1),o=(0,u.Wm)("ul",null,[(0,u.Wm)("li",null,"请求报文：请求行，请求头，空行，请求体"),(0,u.Wm)("li",null,"响应报文：状态行，响应头，空行，响应体")],-1),c=(0,u.Wm)("h2",{id:"请求方法",tabindex:"-1"},[(0,u.Wm)("a",{class:"header-anchor",href:"#请求方法","aria-hidden":"true"},"#"),(0,u.Uk)(" 请求方法")],-1),a=(0,u.Wm)("ol",null,[(0,u.Wm)("li",null,[(0,u.Wm)("code",null,"GET"),(0,u.Uk)(" 请求指定的页面信息，并返回实体主体。")]),(0,u.Wm)("li",null,[(0,u.Wm)("code",null,"HEAD"),(0,u.Uk)(" 类似于"),(0,u.Wm)("code",null,"get"),(0,u.Uk)("请求，只不过返回的响应中没有具体的内容，用于获取报头")]),(0,u.Wm)("li",null,[(0,u.Wm)("code",null,"POST"),(0,u.Uk)(" 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。"),(0,u.Wm)("code",null,"POST"),(0,u.Uk)("请求可能会导致新的资源的建立和/或已有资源的修改。")]),(0,u.Wm)("li",null,[(0,u.Wm)("code",null,"PUT"),(0,u.Uk)(" 从客户端向服务器传送的数据取代指定的文档的内容。")]),(0,u.Wm)("li",null,[(0,u.Wm)("code",null,"DELETE"),(0,u.Uk)(" 请求服务器删除指定的页面。")]),(0,u.Wm)("li",null,[(0,u.Wm)("code",null,"CONNECT"),(0,u.Uk)(),(0,u.Wm)("code",null,"HTTP/1.1"),(0,u.Uk)("协议中预留给能够将连接改为管道方式的代理服务器。")]),(0,u.Wm)("li",null,[(0,u.Wm)("code",null,"OPTIONS"),(0,u.Uk)(" 允许客户端查看服务器的性能。")]),(0,u.Wm)("li",null,[(0,u.Wm)("code",null,"TRACE"),(0,u.Uk)(" 回显服务器收到的请求，主要用于测试或诊断。")])],-1),r=(0,u.Wm)("h3",{id:"get和post的区别",tabindex:"-1"},[(0,u.Wm)("a",{class:"header-anchor",href:"#get和post的区别","aria-hidden":"true"},"#"),(0,u.Uk)(" get和post的区别")],-1),k=(0,u.Wm)("ol",null,[(0,u.Wm)("li",null,[(0,u.Wm)("code",null,"get"),(0,u.Uk)("在浏览器回退时是无害的，"),(0,u.Wm)("code",null,"post"),(0,u.Uk)("会再次提交请求")]),(0,u.Wm)("li",null,[(0,u.Wm)("code",null,"get"),(0,u.Uk)("的url可以收藏，"),(0,u.Wm)("code",null,"post"),(0,u.Uk)("不可以")]),(0,u.Wm)("li",null,[(0,u.Wm)("code",null,"get"),(0,u.Uk)("请求会主动缓存，"),(0,u.Wm)("code",null,"post"),(0,u.Uk)("不会，除非手动设置")])],-1),U=(0,u.Wm)("h3",{id:"状态码",tabindex:"-1"},[(0,u.Wm)("a",{class:"header-anchor",href:"#状态码","aria-hidden":"true"},"#"),(0,u.Uk)(" 状态码")],-1),h=(0,u.Wm)("ul",null,[(0,u.Wm)("li",null,"1xx：指示信息--表示请求已接收，继续处理"),(0,u.Wm)("li",null,"2xx：成功--表示请求已被成功接收、理解、接受"),(0,u.Wm)("li",null,"3xx：重定向--要完成请求必须进行更进一步的操作"),(0,u.Wm)("li",null,"4xx：客户端错误--请求有语法错误或请求无法实现"),(0,u.Wm)("li",null,"5xx：服务器端错误--服务器未能实现合法的请求")],-1),T={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/206",target:"_blank",rel:"noopener noreferrer"},s=(0,u.Uk)("more"),p=(0,u.Wm)("h2",{id:"持久连接",tabindex:"-1"},[(0,u.Wm)("a",{class:"header-anchor",href:"#持久连接","aria-hidden":"true"},"#"),(0,u.Uk)(" 持久连接")],-1),P=(0,u.Wm)("p",null,[(0,u.Uk)("什么是持久连接？对于"),(0,u.Wm)("code",null,"HTTP"),(0,u.Uk)("协议而言，它是基于请求响应模型，"),(0,u.Wm)("code",null,"Client"),(0,u.Uk)("向"),(0,u.Wm)("code",null,"Server"),(0,u.Uk)("发请求时，先建立一条"),(0,u.Wm)("code",null,"HTTP"),(0,u.Uk)("连接，"),(0,u.Wm)("code",null,"Server"),(0,u.Uk)("给"),(0,u.Wm)("code",null,"Client"),(0,u.Uk)("响应数据后，连接关闭。")],-1),g=(0,u.Wm)("p",null,[(0,u.Uk)("当"),(0,u.Wm)("code",null,"Client"),(0,u.Uk)("发送下一个请求时，需要重新再建立"),(0,u.Wm)("code",null,"HTTP"),(0,u.Uk)("连接，这种方式就是：一个请求响应需要占用一条HTTP连接。而持久连接就是：只需要建立一条连接，然后在这条连接上 传输多个请求和响应。")],-1),H=(0,u.Wm)("p",null,[(0,u.Uk)("与持久连接相关的字段 "),(0,u.Wm)("code",null,"HTTP1.0"),(0,u.Uk)("中有一个"),(0,u.Wm)("code",null,"Connection"),(0,u.Uk)("首部字段，它是一个逐跳首部字段。"),(0,u.Wm)("code",null,"Connection:Keep-Alive"),(0,u.Uk)("，表示希望将此条连接作为持久连接。 "),(0,u.Wm)("code",null,"HTTP1.1"),(0,u.Uk)("中，建立的"),(0,u.Wm)("code",null,"HTTP"),(0,u.Uk)("请求默认是持久连接的。当"),(0,u.Wm)("code",null,"Client"),(0,u.Uk)("确定不再需要向"),(0,u.Wm)("code",null,"Server"),(0,u.Uk)("发送数据时，它可以关闭连接，即在发送首部中添加"),(0,u.Wm)("code",null,"Connection:Closed"),(0,u.Uk)("字段。")],-1),x=(0,u.Wm)("h2",{id:"管线化",tabindex:"-1"},[(0,u.Wm)("a",{class:"header-anchor",href:"#管线化","aria-hidden":"true"},"#"),(0,u.Uk)(" 管线化")],-1),b=(0,u.Wm)("ul",null,[(0,u.Wm)("li",null,[(0,u.Uk)("①管线化机制通过持久连接完成，仅"),(0,u.Wm)("code",null,"HTTP/1.1"),(0,u.Uk)("支持此技术")]),(0,u.Wm)("li",null,[(0,u.Uk)("②只有"),(0,u.Wm)("code",null,"GET"),(0,u.Uk)("和"),(0,u.Wm)("code",null,"HEAD"),(0,u.Uk)("请求可以进行管线化，而"),(0,u.Wm)("code",null,"POST"),(0,u.Uk)("会有所限制")]),(0,u.Wm)("li",null,[(0,u.Uk)("③初次创建连接时不应启动管线机制，因为对方服务器不一定支持"),(0,u.Wm)("code",null,"HTTP/1.1"),(0,u.Uk)("版本的协议")])],-1),f=(0,u.Wm)("p",null,[(0,u.Uk)("持久连接的时候，某个连接消息传递类似于 持久连接的一个最大的好处是：大大减少了连接的建立以及关闭时延。 “缺点”，请求响应是顺序执行的。只有在请求1的响应收到之后，才会发送请求2，这就是持久连接与管道化连接不同的地方。 "),(0,u.Wm)("code",null,"请求1=>响应1=>请求2=>响应2")],-1),C=(0,u.Wm)("p",null,[(0,u.Uk)("管线化后 "),(0,u.Wm)("code",null,"请求1=>请求2=>响应1=>响应2")],-1),v=(0,u.Wm)("p",null,[(0,u.Uk)("管道化连接是需要持久连接支持的。管道化连接是在持久连接的基础上，以“流水线”的方式发送请求：不需要等到请求1的响应到达"),(0,u.Wm)("code",null,"Client"),(0,u.Uk)("，就可以发送请求2....")],-1),E=(0,u.Wm)("h2",{id:"今日图-520扎心了",tabindex:"-1"},[(0,u.Wm)("a",{class:"header-anchor",href:"#今日图-520扎心了","aria-hidden":"true"},"#"),(0,u.Uk)(" 今日图 520扎心了")],-1),S=(0,u.Wm)("p",null,[(0,u.Wm)("img",{src:d,alt:"123_20190521095200.jpg"})],-1),O={render:function(l,e){const n=(0,u.up)("OutboundLink");return(0,u.wg)(),(0,u.j4)(u.HY,null,[m,W,i,t,o,c,a,r,k,U,h,(0,u.Wm)("p",null,[(0,u.Wm)("a",T,[s,(0,u.Wm)(n)])]),p,P,g,H,x,b,f,C,v,E,S],64)}}}}]);