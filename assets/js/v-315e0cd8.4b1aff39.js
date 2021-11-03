(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[2838],{7222:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-315e0cd8",path:"/Redux/redux%E6%BA%90%E7%A0%81%E7%BB%86%E8%AF%BBcompose.html",title:"redux源码细读compose",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"上代码看效果",slug:"上代码看效果",children:[{level:3,title:"同步",slug:"同步",children:[]},{level:3,title:"异步",slug:"异步",children:[]}]},{level:2,title:"借鉴",slug:"借鉴",children:[]},{level:2,title:"今日图",slug:"今日图",children:[]}],filePathRelative:"Redux/redux源码细读compose.md",git:{updatedTime:1627976922e3}}},6084:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>d});var t=a(6252);const e=a.p+"assets/img/16d7bd644e2332d9.60c68fff.png",o=(0,t.Wm)("h1",{id:"redux源码细读compose",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#redux源码细读compose","aria-hidden":"true"},"#"),(0,t.Uk)(" redux源码细读compose")],-1),c=(0,t.Wm)("h2",{id:"上代码看效果",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#上代码看效果","aria-hidden":"true"},"#"),(0,t.Uk)(" 上代码看效果")],-1),p=(0,t.Wm)("h3",{id:"同步",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#同步","aria-hidden":"true"},"#"),(0,t.Uk)(" 同步")],-1),m=(0,t.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-javascript"},[(0,t.Wm)("code",null,[(0,t.Uk)("  "),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"compose"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Wm)("span",{class:"token operator"},"..."),(0,t.Uk)("funcs")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("funcs"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("length "),(0,t.Wm)("span",{class:"token operator"},"==="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"0"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token parameter"},"args"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"=>"),(0,t.Uk)(" args\n    "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("funcs"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("length "),(0,t.Wm)("span",{class:"token operator"},"==="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"1"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(" funcs"),(0,t.Wm)("span",{class:"token punctuation"},"["),(0,t.Wm)("span",{class:"token number"},"0"),(0,t.Wm)("span",{class:"token punctuation"},"]"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(" funcs"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"reduce"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Uk)("a"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" b")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Wm)("span",{class:"token operator"},"..."),(0,t.Uk)("args")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"b"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token function"},"a"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token operator"},"..."),(0,t.Uk)("args"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token comment"},"// 千分符号"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"thousandSplit"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},"num"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"String"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("num"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n      "),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"replace"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token regex"},[(0,t.Wm)("span",{class:"token regex-delimiter"},"/"),(0,t.Wm)("span",{class:"token regex-source language-regex"},"(?=\\B(?:\\d{3})+\\b)(\\d{3}(\\.\\d+$)?)"),(0,t.Wm)("span",{class:"token regex-delimiter"},"/"),(0,t.Wm)("span",{class:"token regex-flags"},"g")]),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t.Wm)("span",{class:"token string"},"',$1'"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token comment"},"// 保留两位数字向下取整"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"floor"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},"num"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("Math"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"floor"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("num "),(0,t.Wm)("span",{class:"token operator"},"*"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"100"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"/"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"100"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"toFixed"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token number"},"2"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n  "),(0,t.Wm)("span",{class:"token keyword"},"var"),(0,t.Uk)(" conts "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"125885.365"),(0,t.Uk)("\n  console"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"log"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},"'正常我们的做法'"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"thousandSplit"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token function"},"floor"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("conts"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  console"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"log"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},"'compose'"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"compose"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("\n    floor"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    thousandSplit\n  "),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("conts"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"4"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"5"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"6"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"7"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"8"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"9"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"10"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"11"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"12"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"13"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"14"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"15"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"16"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"17"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"18"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"19"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"20"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"21"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"22"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"23"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"24"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"25"),(0,t.Wm)("br")])],-1),u=(0,t.Wm)("h3",{id:"异步",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#异步","aria-hidden":"true"},"#"),(0,t.Uk)(" 异步")],-1),l=(0,t.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-javascript"},[(0,t.Wm)("code",null,[(0,t.Uk)("  "),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token keyword"},"async"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"compose"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Wm)("span",{class:"token operator"},"..."),(0,t.Uk)("funcs")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t.Wm)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("funcs"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("length "),(0,t.Wm)("span",{class:"token operator"},"==="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"0"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token parameter"},"args"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"=>"),(0,t.Uk)(" args\n      "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n      "),(0,t.Wm)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("funcs"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("length "),(0,t.Wm)("span",{class:"token operator"},"==="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"1"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(" funcs"),(0,t.Wm)("span",{class:"token punctuation"},"["),(0,t.Wm)("span",{class:"token number"},"0"),(0,t.Wm)("span",{class:"token punctuation"},"]"),(0,t.Uk)("\n      "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n      "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(" funcs"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"reduce"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Uk)("a"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" b")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"async"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Wm)("span",{class:"token operator"},"..."),(0,t.Uk)("args")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"b"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token keyword"},"await"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"a"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token operator"},"..."),(0,t.Uk)("args"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"fn1"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},"arg"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token class-name"},"Promise"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Uk)("resolve"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" reject")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t.Wm)("span",{class:"token function"},"setTimeout"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n          arg "),(0,t.Wm)("span",{class:"token operator"},"+="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token string"},"'_Promise_fn1'"),(0,t.Uk)("\n          console"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"log"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},"'fn1'"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n          "),(0,t.Wm)("span",{class:"token function"},"resolve"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("arg"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n        "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"1000"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n      "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"fn2"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},"arg"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token class-name"},"Promise"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Uk)("resolve"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" reject")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t.Wm)("span",{class:"token function"},"setTimeout"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n          arg "),(0,t.Wm)("span",{class:"token operator"},"+="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token string"},"'_Promise_fn2'"),(0,t.Uk)("\n          console"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"log"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},"'fn2'"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n          "),(0,t.Wm)("span",{class:"token function"},"resolve"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("arg"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n        "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"1000"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n      "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"fn3"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},"arg"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      arg "),(0,t.Wm)("span",{class:"token operator"},"+="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token string"},"'_fn3'"),(0,t.Uk)("\n      "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(" arg"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"const"),(0,t.Uk)(" result "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"compose"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("fn1"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" fn3"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" fn2"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token function"},"result"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token number"},"1"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"then"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},"res"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      console"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"log"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},"'异步返回'"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" res"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"4"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"5"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"6"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"7"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"8"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"9"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"10"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"11"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"12"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"13"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"14"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"15"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"16"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"17"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"18"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"19"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"20"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"21"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"22"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"23"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"24"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"25"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"26"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"27"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"28"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"29"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"30"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"31"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"32"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"33"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"34"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"35"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"36"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"37"),(0,t.Wm)("br")])],-1),k=(0,t.Wm)("p",null,"只有运用才能真正掌握！",-1),W=(0,t.Wm)("h2",{id:"借鉴",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#借鉴","aria-hidden":"true"},"#"),(0,t.Uk)(" 借鉴")],-1),r=(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,"https://github.com/reduxjs/redux/blob/master/src/compose.ts")],-1),i=(0,t.Wm)("h2",{id:"今日图",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#今日图","aria-hidden":"true"},"#"),(0,t.Uk)(" 今日图")],-1),U=(0,t.Wm)("blockquote",null,[(0,t.Wm)("p",null,"我以为我变秃了，也会变强的。后来我找到原因了，越洗越少")],-1),b=(0,t.Wm)("p",null,[(0,t.Wm)("img",{src:e,alt:"16d7bd644e2332d9.png"})],-1),d={render:function(n,s){return(0,t.wg)(),(0,t.j4)(t.HY,null,[o,c,p,m,u,l,k,W,r,i,U,b],64)}}}}]);