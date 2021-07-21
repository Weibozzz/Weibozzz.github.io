(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[325],{6990:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>t});const t={key:"v-33983758",path:"/JS/%E5%88%86%E4%BA%AB%E5%A5%BD%E7%94%A8%E7%9A%84js%E6%96%B9%E6%B3%95.html",title:"分享好用的js方法",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"new URLSearchParams",slug:"new-urlsearchparams",children:[]},{level:2,title:"new FormData(form)",slug:"new-formdata-form",children:[]},{level:2,title:"js浮点数解决办法",slug:"js浮点数解决办法",children:[]},{level:2,title:"今日图 - 一波操作后",slug:"今日图-一波操作后",children:[]}],filePathRelative:"JS/分享好用的js方法.md",git:{updatedTime:1626843914e3}}},3875:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>q});var t=s(6252);const e=s.p+"assets/img/16b55dd6cf188092.4489222d.gif",c=(0,t.Wm)("h1",{id:"分享好用的js方法",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#分享好用的js方法","aria-hidden":"true"},"#"),(0,t.Uk)(" 分享好用的js方法")],-1),o=(0,t.Wm)("h2",{id:"new-urlsearchparams",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#new-urlsearchparams","aria-hidden":"true"},"#"),(0,t.Uk)(" new URLSearchParams")],-1),m=(0,t.Wm)("p",null,[(0,t.Wm)("code",null,"URLSearchParams"),(0,t.Uk)(" 接口定义了一些实用的方法来处理 URL 的查询字符串。")],-1),p=(0,t.Wm)("p",null,[(0,t.Uk)("一个实现了 "),(0,t.Wm)("code",null,"URLSearchParams"),(0,t.Uk)(" 的对象可以直接用在 "),(0,t.Wm)("code",null,"for...of"),(0,t.Uk)(" 结构中")],-1),l=(0,t.Wm)("p",null,"示例",-1),u=(0,t.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-javascript"},[(0,t.Wm)("code",null,[(0,t.Wm)("span",{class:"token keyword"},"var"),(0,t.Uk)(" paramsString "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token string"},'"q=URLUtils.searchParams&topic=api"'),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token keyword"},"var"),(0,t.Uk)(" searchParams "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token class-name"},"URLSearchParams"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("paramsString"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t.Wm)("span",{class:"token keyword"},"for"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token keyword"},"let"),(0,t.Uk)(" p "),(0,t.Wm)("span",{class:"token keyword"},"of"),(0,t.Uk)(" searchParams"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  console"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"log"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("p"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\nsearchParams"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"has"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},'"topic"'),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"==="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token boolean"},"true"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token comment"},"// true"),(0,t.Uk)("\nsearchParams"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"get"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},'"topic"'),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"==="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token string"},'"api"'),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token comment"},"// true"),(0,t.Uk)("\nsearchParams"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"getAll"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},'"topic"'),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token comment"},'// ["api"]'),(0,t.Uk)("\nsearchParams"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"get"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},'"foo"'),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"==="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token string"},'""'),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token comment"},"// true"),(0,t.Uk)("\nsearchParams"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"append"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},'"topic"'),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t.Wm)("span",{class:"token string"},'"webdev"'),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\nsearchParams"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"toString"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token comment"},'// "q=URLUtils.searchParams&topic=api&topic=webdev"'),(0,t.Uk)("\nsearchParams"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"set"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},'"topic"'),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t.Wm)("span",{class:"token string"},'"More webdev"'),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\nsearchParams"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"toString"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token comment"},'// "q=URLUtils.searchParams&topic=More+webdev"'),(0,t.Uk)("\nsearchParams"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"delete"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},'"topic"'),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\nsearchParams"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"toString"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token comment"},'// "q=URLUtils.searchParams"'),(0,t.Uk)("\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"4"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"5"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"6"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"7"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"8"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"9"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"10"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"11"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"12"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"13"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"14"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"15"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"16"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"17"),(0,t.Wm)("br")])],-1),k=(0,t.Wm)("p",null,[(0,t.Wm)("strong",null,"缺点：不支持IE")],-1),W=(0,t.Wm)("p",null,"摘自 https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams",-1),r=(0,t.Wm)("h2",{id:"new-formdata-form",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#new-formdata-form","aria-hidden":"true"},"#"),(0,t.Uk)(" new FormData(form)")],-1),i=(0,t.Wm)("p",null,[(0,t.Wm)("code",null,"FormData()"),(0,t.Uk)("构造函数用于创建一个新的"),(0,t.Wm)("code",null,"FormData"),(0,t.Uk)("对象。")],-1),U=(0,t.Wm)("p",null,"示例",-1),b=(0,t.Wm)("div",{class:"language-html ext-html line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-html"},[(0,t.Wm)("code",null,[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"<"),(0,t.Uk)("form")]),(0,t.Uk)(),(0,t.Wm)("span",{class:"token attr-name"},"id"),(0,t.Wm)("span",{class:"token attr-value"},[(0,t.Wm)("span",{class:"token punctuation attr-equals"},"="),(0,t.Wm)("span",{class:"token punctuation"},'"'),(0,t.Uk)("myForm"),(0,t.Wm)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t.Wm)("span",{class:"token attr-name"},"name"),(0,t.Wm)("span",{class:"token attr-value"},[(0,t.Wm)("span",{class:"token punctuation attr-equals"},"="),(0,t.Wm)("span",{class:"token punctuation"},'"'),(0,t.Uk)("myForm"),(0,t.Wm)("span",{class:"token punctuation"},'"')]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"<"),(0,t.Uk)("label")]),(0,t.Uk)(),(0,t.Wm)("span",{class:"token attr-name"},"for"),(0,t.Wm)("span",{class:"token attr-value"},[(0,t.Wm)("span",{class:"token punctuation attr-equals"},"="),(0,t.Wm)("span",{class:"token punctuation"},'"'),(0,t.Uk)("username"),(0,t.Wm)("span",{class:"token punctuation"},'"')]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("Enter name:"),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"</"),(0,t.Uk)("label")]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"<"),(0,t.Uk)("input")]),(0,t.Uk)(),(0,t.Wm)("span",{class:"token attr-name"},"type"),(0,t.Wm)("span",{class:"token attr-value"},[(0,t.Wm)("span",{class:"token punctuation attr-equals"},"="),(0,t.Wm)("span",{class:"token punctuation"},'"'),(0,t.Uk)("text"),(0,t.Wm)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t.Wm)("span",{class:"token attr-name"},"id"),(0,t.Wm)("span",{class:"token attr-value"},[(0,t.Wm)("span",{class:"token punctuation attr-equals"},"="),(0,t.Wm)("span",{class:"token punctuation"},'"'),(0,t.Uk)("username"),(0,t.Wm)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t.Wm)("span",{class:"token attr-name"},"name"),(0,t.Wm)("span",{class:"token attr-value"},[(0,t.Wm)("span",{class:"token punctuation attr-equals"},"="),(0,t.Wm)("span",{class:"token punctuation"},'"'),(0,t.Uk)("username"),(0,t.Wm)("span",{class:"token punctuation"},'"')]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"<"),(0,t.Uk)("label")]),(0,t.Uk)(),(0,t.Wm)("span",{class:"token attr-name"},"for"),(0,t.Wm)("span",{class:"token attr-value"},[(0,t.Wm)("span",{class:"token punctuation attr-equals"},"="),(0,t.Wm)("span",{class:"token punctuation"},'"'),(0,t.Uk)("useracc"),(0,t.Wm)("span",{class:"token punctuation"},'"')]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("Enter account number:"),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"</"),(0,t.Uk)("label")]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"<"),(0,t.Uk)("input")]),(0,t.Uk)(),(0,t.Wm)("span",{class:"token attr-name"},"type"),(0,t.Wm)("span",{class:"token attr-value"},[(0,t.Wm)("span",{class:"token punctuation attr-equals"},"="),(0,t.Wm)("span",{class:"token punctuation"},'"'),(0,t.Uk)("text"),(0,t.Wm)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t.Wm)("span",{class:"token attr-name"},"id"),(0,t.Wm)("span",{class:"token attr-value"},[(0,t.Wm)("span",{class:"token punctuation attr-equals"},"="),(0,t.Wm)("span",{class:"token punctuation"},'"'),(0,t.Uk)("useracc"),(0,t.Wm)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t.Wm)("span",{class:"token attr-name"},"name"),(0,t.Wm)("span",{class:"token attr-value"},[(0,t.Wm)("span",{class:"token punctuation attr-equals"},"="),(0,t.Wm)("span",{class:"token punctuation"},'"'),(0,t.Uk)("useracc"),(0,t.Wm)("span",{class:"token punctuation"},'"')]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"<"),(0,t.Uk)("label")]),(0,t.Uk)(),(0,t.Wm)("span",{class:"token attr-name"},"for"),(0,t.Wm)("span",{class:"token attr-value"},[(0,t.Wm)("span",{class:"token punctuation attr-equals"},"="),(0,t.Wm)("span",{class:"token punctuation"},'"'),(0,t.Uk)("userfile"),(0,t.Wm)("span",{class:"token punctuation"},'"')]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("Upload file:"),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"</"),(0,t.Uk)("label")]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"<"),(0,t.Uk)("input")]),(0,t.Uk)(),(0,t.Wm)("span",{class:"token attr-name"},"type"),(0,t.Wm)("span",{class:"token attr-value"},[(0,t.Wm)("span",{class:"token punctuation attr-equals"},"="),(0,t.Wm)("span",{class:"token punctuation"},'"'),(0,t.Uk)("file"),(0,t.Wm)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t.Wm)("span",{class:"token attr-name"},"id"),(0,t.Wm)("span",{class:"token attr-value"},[(0,t.Wm)("span",{class:"token punctuation attr-equals"},"="),(0,t.Wm)("span",{class:"token punctuation"},'"'),(0,t.Uk)("userfile"),(0,t.Wm)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t.Wm)("span",{class:"token attr-name"},"name"),(0,t.Wm)("span",{class:"token attr-value"},[(0,t.Wm)("span",{class:"token punctuation attr-equals"},"="),(0,t.Wm)("span",{class:"token punctuation"},'"'),(0,t.Uk)("userfile"),(0,t.Wm)("span",{class:"token punctuation"},'"')]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"<"),(0,t.Uk)("input")]),(0,t.Uk)(),(0,t.Wm)("span",{class:"token attr-name"},"type"),(0,t.Wm)("span",{class:"token attr-value"},[(0,t.Wm)("span",{class:"token punctuation attr-equals"},"="),(0,t.Wm)("span",{class:"token punctuation"},'"'),(0,t.Uk)("submit"),(0,t.Wm)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t.Wm)("span",{class:"token attr-name"},"value"),(0,t.Wm)("span",{class:"token attr-value"},[(0,t.Wm)("span",{class:"token punctuation attr-equals"},"="),(0,t.Wm)("span",{class:"token punctuation"},'"'),(0,t.Uk)("Submit!"),(0,t.Wm)("span",{class:"token punctuation"},'"')]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token tag"},[(0,t.Wm)("span",{class:"token punctuation"},"</"),(0,t.Uk)("form")]),(0,t.Wm)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n//注意: 所有的输入元素都需要有name属性，否则无法访问到值。\n\nvar myForm = document.getElementById('myForm');\nformData = new FormData(myForm);\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"4"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"5"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"6"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"7"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"8"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"9"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"10"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"11"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"12"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"13"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"14"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"15"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"16"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"17"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"18"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"19"),(0,t.Wm)("br")])],-1),d=(0,t.Wm)("p",null,[(0,t.Wm)("strong",null,"缺点：兼容ie10+")],-1),g=(0,t.Wm)("p",null,"摘自：https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/FormData",-1),h=(0,t.Wm)("h2",{id:"js浮点数解决办法",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#js浮点数解决办法","aria-hidden":"true"},"#"),(0,t.Uk)(" js浮点数解决办法")],-1),f=(0,t.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-javascript"},[(0,t.Wm)("code",null,[(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"strip"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Uk)("num"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" precision "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"12")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"+"),(0,t.Wm)("span",{class:"token function"},"parseFloat"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("num"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"toPrecision"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("precision"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br")])],-1),v=(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,"https://github.com/camsong/blog/issues/9")],-1),w=(0,t.Wm)("h2",{id:"今日图-一波操作后",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#今日图-一波操作后","aria-hidden":"true"},"#"),(0,t.Uk)(" 今日图 - 一波操作后")],-1),P=(0,t.Wm)("p",null,[(0,t.Wm)("img",{src:e,alt:"16b55dd6cf188092.gif"})],-1),q={render:function(n,a){return(0,t.wg)(),(0,t.j4)(t.HY,null,[c,o,m,p,l,u,k,W,r,i,U,b,d,g,h,f,v,w,P],64)}}}}]);