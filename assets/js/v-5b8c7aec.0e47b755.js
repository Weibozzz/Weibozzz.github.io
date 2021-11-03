(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[4040],{3919:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-5b8c7aec",path:"/JS/bind%E5%92%8Cnew%E7%9A%84%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0.html",title:"bind和new的模拟实现",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"bind",slug:"bind",children:[{level:3,title:"最终代码",slug:"最终代码",children:[]}]},{level:2,title:"New",slug:"new",children:[{level:3,title:"实现",slug:"实现",children:[]}]},{level:2,title:"参考",slug:"参考",children:[]},{level:2,title:"今日图 - 安慰程序员的方法",slug:"今日图-安慰程序员的方法",children:[]}],filePathRelative:"JS/bind和new的模拟实现.md",git:{updatedTime:1626767622e3}}},3796:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>y});var t=a(6252);const e=a.p+"assets/img/16b39c3e0a3096fa.0585d866.jpg",o=(0,t.Wm)("h1",{id:"bind和new的模拟实现",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#bind和new的模拟实现","aria-hidden":"true"},"#"),(0,t.Uk)(" bind和new的模拟实现")],-1),c=(0,t.Wm)("h2",{id:"bind",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#bind","aria-hidden":"true"},"#"),(0,t.Uk)(" bind")],-1),m=(0,t.Wm)("p",null,[(0,t.Wm)("code",null,"bind"),(0,t.Uk)(" 应用 举个例子：")],-1),p=(0,t.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-javascript"},[(0,t.Wm)("code",null,[(0,t.Wm)("span",{class:"token keyword"},"var"),(0,t.Uk)(" foo "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    value"),(0,t.Wm)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"1"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"bar"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    console"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"log"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("value"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t.Wm)("span",{class:"token comment"},"// 返回了一个函数"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token keyword"},"var"),(0,t.Uk)(" bindFoo "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"bar"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"bind"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("foo"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t.Wm)("span",{class:"token function"},"bindFoo"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token comment"},"// 1"),(0,t.Uk)("\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"4"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"5"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"6"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"7"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"8"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"9"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"10"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"11"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"12"),(0,t.Wm)("br")])],-1),l=(0,t.Wm)("h3",{id:"最终代码",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#最终代码","aria-hidden":"true"},"#"),(0,t.Uk)(" 最终代码")],-1),k=(0,t.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-javascript"},[(0,t.Wm)("code",null,[(0,t.Wm)("span",{class:"token class-name"},"Function"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("prototype"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function-variable function"},"bind2"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Uk)("context"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Wm)("span",{class:"token operator"},"..."),(0,t.Uk)("args")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token keyword"},"typeof"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"!=="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token string"},'"function"'),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t.Wm)("span",{class:"token keyword"},"throw"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token class-name"},"Error"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},'"Function.prototype.bind - what is trying to be bound is not callable"'),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"var"),(0,t.Uk)(" self "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"var"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function-variable function"},"fNOP"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"var"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function-variable function"},"fBound"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Wm)("span",{class:"token operator"},"..."),(0,t.Uk)("bindArgs")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n            "),(0,t.Wm)("span",{class:"token comment"},"// 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值"),(0,t.Uk)("\n            "),(0,t.Wm)("span",{class:"token comment"},"// 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性"),(0,t.Uk)("\n            "),(0,t.Wm)("span",{class:"token comment"},"// 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context"),(0,t.Uk)("\n        "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"self"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"apply"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"instanceof"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token class-name"},"fNOP"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"?"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},":"),(0,t.Uk)(" context"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" args"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"concat"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("bindArgs"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    fNOP"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("prototype "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("prototype"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token comment"},"// 避免修改fBound的原型，通过一个空函数来进行中转"),(0,t.Uk)("\n    fBound"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("prototype "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token class-name"},"fNOP"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(" fBound"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"4"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"5"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"6"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"7"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"8"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"9"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"10"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"11"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"12"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"13"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"14"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"15"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"16"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"17"),(0,t.Wm)("br")])],-1),u=(0,t.Wm)("h2",{id:"new",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#new","aria-hidden":"true"},"#"),(0,t.Uk)(" New")],-1),W=(0,t.Wm)("blockquote",null,[(0,t.Wm)("p",null,"new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一")],-1),i=(0,t.Wm)("p",null,"举个例子：",-1),r=(0,t.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-javascript"},[(0,t.Wm)("code",null,[(0,t.Wm)("span",{class:"token comment"},"// Otaku 御宅族，简称宅"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"Otaku"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Uk)("name"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" age")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("name "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(" name"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("age "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(" age"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("habit "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token string"},"'Games'"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token comment"},"// 因为缺乏锻炼的缘故，身体强度让人担忧"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token class-name"},"Otaku"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("prototype"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("strength "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"60"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token class-name"},"Otaku"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("prototype"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function-variable function"},"sayYourName"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    console"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"log"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},"'I am '"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"+"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("name"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token keyword"},"var"),(0,t.Uk)(" person "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token class-name"},"Otaku"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},"'Kevin'"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t.Wm)("span",{class:"token string"},"'18'"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\nconsole"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"log"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("person"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("name"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token comment"},"// Kevin"),(0,t.Uk)("\nconsole"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"log"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("person"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("habit"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token comment"},"// Games"),(0,t.Uk)("\nconsole"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"log"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("person"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("strength"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token comment"},"// 60"),(0,t.Uk)("\n\nperson"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"sayYourName"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token comment"},"// I am Kevin"),(0,t.Uk)("\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"4"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"5"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"6"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"7"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"8"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"9"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"10"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"11"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"12"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"13"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"14"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"15"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"16"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"17"),(0,t.Wm)("br")])],-1),b=(0,t.Wm)("p",null,[(0,t.Uk)("因为 "),(0,t.Wm)("code",null,"new"),(0,t.Uk)(" 是关键字，所以无法像 "),(0,t.Wm)("code",null,"bind"),(0,t.Uk)(" 函数一样直接覆盖，所以我们写一个函数，命名为 "),(0,t.Wm)("code",null,"objectFactory"),(0,t.Uk)("，来模拟 "),(0,t.Wm)("code",null,"new"),(0,t.Uk)(" 的效果。用的时候是这样的：")],-1),U=(0,t.Wm)("h3",{id:"实现",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#实现","aria-hidden":"true"},"#"),(0,t.Uk)(" 实现")],-1),d=(0,t.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-javascript"},[(0,t.Wm)("code",null,[(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"objectFactory"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"var"),(0,t.Uk)(" obj "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token class-name"},"Object"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    Constructor "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"["),(0,t.Wm)("span",{class:"token punctuation"},"]"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"shift"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"call"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("arguments"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    obj"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("__proto__ "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token class-name"},"Constructor"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("prototype"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"var"),(0,t.Uk)(" ret "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"Constructor"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"apply"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("obj"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" arguments"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token comment"},"//判断返回的值是不是一个对象，如果是一个对象，我们就返回这个对象，如果没有，我们该返回什么就返回什么"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"typeof"),(0,t.Uk)(" ret "),(0,t.Wm)("span",{class:"token operator"},"==="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token string"},"'object'"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"?"),(0,t.Uk)(" ret "),(0,t.Wm)("span",{class:"token operator"},":"),(0,t.Uk)(" obj"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"4"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"5"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"6"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"7"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"8"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"9"),(0,t.Wm)("br")])],-1),h=(0,t.Wm)("h2",{id:"参考",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),(0,t.Uk)(" 参考")],-1),f=(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,"https://github.com/mqyqingfeng/Blog/issues/12"),(0,t.Wm)("li",null,"https://github.com/mqyqingfeng/Blog/issues/13")],-1),w=(0,t.Wm)("h2",{id:"今日图-安慰程序员的方法",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#今日图-安慰程序员的方法","aria-hidden":"true"},"#"),(0,t.Uk)(" 今日图 - 安慰程序员的方法")],-1),g=(0,t.Wm)("p",null,[(0,t.Wm)("img",{src:e,alt:"16b39c3e0a3096fa.jpg"})],-1),y={render:function(n,s){return(0,t.wg)(),(0,t.j4)(t.HY,null,[o,c,m,p,l,k,u,W,i,r,b,U,d,h,f,w,g],64)}}}}]);