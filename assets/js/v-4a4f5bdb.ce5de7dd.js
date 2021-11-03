(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[7219],{7657:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-4a4f5bdb",path:"/JS/socket/js%E5%AE%9E%E7%8E%B0webSocket%E5%AE%A2%E6%88%B7%E7%AB%AF.html",title:"js实现webSocket客户端",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"websocket",slug:"websocket",children:[]},{level:2,title:"简单示例",slug:"简单示例",children:[{level:3,title:"node服务端",slug:"node服务端",children:[]}]},{level:2,title:"api",slug:"api",children:[]},{level:2,title:"相关推荐",slug:"相关推荐",children:[]},{level:2,title:"今日图",slug:"今日图",children:[]}],filePathRelative:"JS/socket/js实现webSocket客户端.md",git:{updatedTime:1627026748e3}}},3609:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>O});var e=a(6252);const t=a.p+"assets/img/16b1c4ddef5d24dc.43e58948.gif",l=(0,e.Wm)("h1",{id:"js实现websocket客户端",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#js实现websocket客户端","aria-hidden":"true"},"#"),(0,e.Uk)(" js实现webSocket客户端")],-1),o=(0,e.Wm)("h2",{id:"websocket",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#websocket","aria-hidden":"true"},"#"),(0,e.Uk)(" websocket")],-1),c=(0,e.Wm)("p",null,"由于http请求只能由客户端发起，所有当服务器资源有变化时，客户端只能通过轮询的方式。非常浪费资源。 websocket的特点：",-1),m=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,"服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种"),(0,e.Wm)("li",null,[(0,e.Uk)("建立在 "),(0,e.Wm)("code",null,"TCP"),(0,e.Uk)(" 协议之上，服务器端的实现比较容易")]),(0,e.Wm)("li",null,"可以发送文本，也可以发送二进制数据"),(0,e.Wm)("li",null,"没有同源限制，客户端可以与任意服务器通信"),(0,e.Wm)("li",null,[(0,e.Uk)("协议标识符是"),(0,e.Wm)("code",null,"ws"),(0,e.Uk)("（如果加密，则为"),(0,e.Wm)("code",null,"wss"),(0,e.Uk)("），服务器网址就是 URL。如"),(0,e.Wm)("code",null,"ws:localhost:8080/msg")])],-1),u=(0,e.Wm)("h2",{id:"简单示例",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#简单示例","aria-hidden":"true"},"#"),(0,e.Uk)(" 简单示例")],-1),p=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" ws "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"new"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token class-name"},"WebSocket"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token string"},'"ws://localhost:8080/msg"'),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\nws"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function-variable function"},"onopen"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"function"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token parameter"},"evt"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n\tconsole"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token string"},'"Connection open ..."'),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\tws"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"send"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token string"},'"Hello WebSockets!"'),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\nws"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function-variable function"},"onmessage"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"function"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token parameter"},"evt"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n\tconsole"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token string"},'"Received Message: "'),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(" evt"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Uk)("data"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\tws"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"close"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\nws"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function-variable function"},"onclose"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"function"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token parameter"},"evt"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n\tconsole"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token string"},'"Connection closed."'),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"9"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"10"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"11"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"12"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"13"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"14"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"15"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"16"),(0,e.Wm)("br")])],-1),W=(0,e.Wm)("h3",{id:"node服务端",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#node服务端","aria-hidden":"true"},"#"),(0,e.Uk)(" node服务端")],-1),k=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"const"),(0,e.Uk)(" WebSocket "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"require"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token string"},"'ws'"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token keyword"},"const"),(0,e.Uk)(" WebSocketServer "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" WebSocket"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Uk)("Server\n"),(0,e.Wm)("span",{class:"token keyword"},"const"),(0,e.Uk)(" wss "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"new"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token class-name"},"WebSocketServer"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  port"),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token number"},"8080"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("\nwss"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"on"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token string"},"'connection'"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"function"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token parameter"},"ws"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  ws"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"on"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token string"},"'message'"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"function"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token parameter"},"message"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"token comment"},"// message 接收到的参数"),(0,e.Uk)("\n    ws"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"send"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token string"},"'已接受到'"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"9"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"10"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"11"),(0,e.Wm)("br")])],-1),i=(0,e.Wm)("h2",{id:"api",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#api","aria-hidden":"true"},"#"),(0,e.Uk)(" api")],-1),r=(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,"websocket构造函数")],-1),b=(0,e.Wm)("p",null,[(0,e.Uk)("用于创建一个"),(0,e.Wm)("code",null,"webSocket"),(0,e.Uk)("实例，执行后，客户端就会与服务端连接")],-1),d=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" ws "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"new"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token class-name"},"WebSocket"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token string"},'"ws://localhost:8080/msg"'),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br")])],-1),U=(0,e.Wm)("ol",{start:"2"},[(0,e.Wm)("li",null,"webSocket.readyState")],-1),h=(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"readyState"),(0,e.Uk)("属性返回实例对象的当前状态，共有四种。")],-1),w=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,"CONNECTING：值为0，表示正在连接。"),(0,e.Wm)("li",null,"OPEN：值为1，表示连接成功，可以通信了。"),(0,e.Wm)("li",null,"CLOSING：值为2，表示连接正在关闭。"),(0,e.Wm)("li",null,"CLOSED：值为3，表示连接已经关闭，或者打开连接失败")],-1),g=(0,e.Wm)("p",null,[(0,e.Uk)("例如："),(0,e.Wm)("code",null,"if(ws.readyState ==WebSocket.CONNECTING){}")],-1),f=(0,e.Wm)("ol",{start:"3"},[(0,e.Wm)("li",null,"其他属性")],-1),S={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket",target:"_blank",rel:"noopener noreferrer"},v=(0,e.Uk)("https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket"),E=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,"WebSocket.binaryType"),(0,e.Wm)("li",null,"WebSocket.onerror"),(0,e.Wm)("li",null,"WebSocket.onclose"),(0,e.Wm)("li",null,"WebSocket.onmessage")],-1),y=(0,e.Wm)("p",null,[(0,e.Wm)("strong",null,"方法")],-1),j=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,"WebSocket.close([code[, reason]]) 关闭当前链接"),(0,e.Wm)("li",null,"WebSocket.send(data) 向服务器发送数据")],-1),C=(0,e.Wm)("h2",{id:"相关推荐",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#相关推荐","aria-hidden":"true"},"#"),(0,e.Uk)(" 相关推荐")],-1),A=(0,e.Uk)("SSE服务端推送"),x=(0,e.Wm)("h2",{id:"今日图",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#今日图","aria-hidden":"true"},"#"),(0,e.Uk)(" 今日图")],-1),N=(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:t,alt:"16b1c4ddef5d24dc.gif"})],-1),O={render:function(n,s){const a=(0,e.up)("OutboundLink"),t=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[l,o,c,m,u,p,W,k,i,r,b,d,U,h,w,g,f,(0,e.Wm)("p",null,[(0,e.Wm)("a",S,[v,(0,e.Wm)(a)])]),E,y,j,C,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)(t,{to:"/JS/socket/SSE%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8E%A8%E9%80%81.html"},{default:(0,e.w5)((()=>[A])),_:1})])]),x,N],64)}}}}]);