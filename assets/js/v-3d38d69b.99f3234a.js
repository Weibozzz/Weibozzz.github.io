"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[8651],{6054:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-3d38d69b",path:"/JS/call%E5%92%8Capply%E7%9A%84%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0.html",title:"call和apply的模拟实现",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Call",slug:"call",children:[{level:3,title:"模拟实现",slug:"模拟实现",children:[]}]},{level:2,title:"apply",slug:"apply",children:[]},{level:2,title:"参考",slug:"参考",children:[]},{level:2,title:"今日图 - 掏 哎呦 难受！",slug:"今日图-掏-哎呦-难受",children:[]}],filePathRelative:"JS/call和apply的模拟实现.md",git:{updatedTime:1630390062e3}}},8984:(n,s,a)=>{a.r(s),a.d(s,{default:()=>v});var e=a(6252),t=a(7054);const l=(0,e._)("h1",{id:"call和apply的模拟实现",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#call和apply的模拟实现","aria-hidden":"true"},"#"),(0,e.Uk)(" call和apply的模拟实现")],-1),c=(0,e._)("h2",{id:"call",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#call","aria-hidden":"true"},"#"),(0,e.Uk)(" Call")],-1),o=(0,e._)("p",null,[(0,e._)("code",null,"call()"),(0,e.Uk)(" 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。")],-1),p=(0,e._)("p",null,"举个例子：",-1),u=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"language-javascript"},[(0,e._)("code",null,[(0,e._)("span",{class:"token keyword"},"var"),(0,e.Uk)(" foo "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    value"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token number"},"1"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token keyword"},"function"),(0,e.Uk)(),(0,e._)("span",{class:"token function"},"bar"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    console"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"log"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token keyword"},"this"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("value"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token function"},"bar"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"call"),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("foo"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)(),(0,e._)("span",{class:"token comment"},"// 1"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"8"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"9"),(0,e._)("br")])],-1),k=(0,e._)("p",null,"注意两点：",-1),_=(0,e._)("p",null,[(0,e._)("code",null,"call"),(0,e.Uk)(" 改变了 "),(0,e._)("code",null,"this"),(0,e.Uk)(" 的指向，指向到 "),(0,e._)("code",null,"foo")],-1),r=(0,e._)("p",null,[(0,e._)("code",null,"bar"),(0,e.Uk)(" 函数执行了")],-1),i=(0,e._)("h3",{id:"模拟实现",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#模拟实现","aria-hidden":"true"},"#"),(0,e.Uk)(" 模拟实现")],-1),b=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"language-javascript"},[(0,e._)("code",null,[(0,e._)("span",{class:"token comment"},"// 第三版"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token class-name"},"Function"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("prototype"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function-variable function"},"call2"),(0,e.Uk)(),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"function"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token parameter"},[(0,e.Uk)("context"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token operator"},"..."),(0,e.Uk)("rest")]),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token keyword"},"var"),(0,e.Uk)(" context "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(" context "),(0,e._)("span",{class:"token operator"},"||"),(0,e.Uk)(" window\n    context"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("fn "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"this"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token keyword"},"var"),(0,e.Uk)(" result "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(" context"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"fn"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token operator"},"..."),(0,e.Uk)("rest"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token keyword"},"delete"),(0,e.Uk)(" context"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("fn\n    "),(0,e._)("span",{class:"token keyword"},"return"),(0,e.Uk)(" result"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token comment"},"// 测试一下"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token keyword"},"var"),(0,e.Uk)(" value "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token number"},"2"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token keyword"},"var"),(0,e.Uk)(" obj "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    value"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token number"},"1"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token keyword"},"function"),(0,e.Uk)(),(0,e._)("span",{class:"token function"},"bar"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token parameter"},[(0,e.Uk)("name"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(" age")]),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    console"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"log"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token keyword"},"this"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("value"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token keyword"},"return"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n        value"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"this"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("value"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n        name"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(" name"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n        age"),(0,e._)("span",{class:"token operator"},":"),(0,e.Uk)(" age\n    "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n\nbar"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"call2"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token keyword"},"null"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)(),(0,e._)("span",{class:"token comment"},"// 2"),(0,e.Uk)("\n\nconsole"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"log"),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("bar"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"call2"),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("obj"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string"},"'kevin'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token number"},"18"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token comment"},"// 1"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token comment"},"// Object {"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token comment"},"//    value: 1,"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token comment"},"//    name: 'kevin',"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token comment"},"//    age: 18"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token comment"},"// }"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"8"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"9"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"10"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"11"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"12"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"13"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"14"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"15"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"16"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"17"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"18"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"19"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"20"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"21"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"22"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"23"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"24"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"25"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"26"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"27"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"28"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"29"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"30"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"31"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"32"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"33"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"34"),(0,e._)("br")])],-1),U=(0,e._)("h2",{id:"apply",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#apply","aria-hidden":"true"},"#"),(0,e.Uk)(" apply")],-1),m=(0,e._)("p",null,[(0,e._)("code",null,"apply"),(0,e.Uk)("的模拟实现 "),(0,e._)("code",null,"apply"),(0,e.Uk)(" 的实现跟 "),(0,e._)("code",null,"call"),(0,e.Uk)(" 类似，在这里直接给代码：")],-1),d=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"language-javascript"},[(0,e._)("code",null,[(0,e._)("span",{class:"token class-name"},"Function"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("prototype"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function-variable function"},"apply1"),(0,e.Uk)(),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"function"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token parameter"},[(0,e.Uk)("context"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token operator"},"..."),(0,e.Uk)("rest")]),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token keyword"},"var"),(0,e.Uk)(" context "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(" context "),(0,e._)("span",{class:"token operator"},"||"),(0,e.Uk)(" window"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    context"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("fn "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"this"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token keyword"},"var"),(0,e.Uk)(" result "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(" context"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"fn"),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("rest"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token keyword"},"delete"),(0,e.Uk)(" context"),(0,e._)("span",{class:"token punctuation"},"."),(0,e.Uk)("fn\n    "),(0,e._)("span",{class:"token keyword"},"return"),(0,e.Uk)(" result"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"8"),(0,e._)("br")])],-1),h=(0,e._)("h2",{id:"参考",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),(0,e.Uk)(" 参考")],-1),f=(0,e._)("ul",null,[(0,e._)("li",null,"https://github.com/mqyqingfeng/Blog/issues/11")],-1),y=(0,e._)("h2",{id:"今日图-掏-哎呦-难受",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#今日图-掏-哎呦-难受","aria-hidden":"true"},"#"),(0,e.Uk)(" 今日图 - 掏 哎呦 难受！")],-1),g=(0,e._)("p",null,[(0,e._)("img",{src:t,alt:"4a20e50778d1ec02fb7fe03a860310f2.jpg"})],-1),v={render:function(n,s){return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,c,o,p,u,k,_,r,i,b,U,m,d,h,f,y,g],64)}}},7054:n=>{n.exports="data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiNWExOTI0ZDgxNDRiNjU3YTVhZTMyNTNmZDMwZjI1NTUuanBnIjs="}}]);