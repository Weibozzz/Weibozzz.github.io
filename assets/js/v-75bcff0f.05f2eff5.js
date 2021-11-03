(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[2597],{8358:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-75bcff0f",path:"/JS/%E5%87%BD%E6%95%B0%E8%AE%B0%E5%BF%86.html",title:"函数记忆",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"定义",slug:"定义",children:[]},{level:2,title:"原理",slug:"原理",children:[]},{level:2,title:"实现",slug:"实现",children:[]},{level:2,title:"注意",slug:"注意",children:[]},{level:2,title:"使用的场景",slug:"使用的场景",children:[]},{level:2,title:"参考",slug:"参考",children:[]},{level:2,title:"今日图 - 工作的我 VS 下班的我",slug:"今日图-工作的我-vs-下班的我",children:[]}],filePathRelative:"JS/函数记忆.md",git:{updatedTime:1626767622e3}}},6241:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>S});var e=a(6252);const t=a.p+"assets/img/16b4ae46b859bdbf.fa4e2c26.png",c=(0,e.Wm)("h1",{id:"函数记忆",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#函数记忆","aria-hidden":"true"},"#"),(0,e.Uk)(" 函数记忆")],-1),o=(0,e.Wm)("h2",{id:"定义",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#定义","aria-hidden":"true"},"#"),(0,e.Uk)(" 定义")],-1),m=(0,e.Wm)("p",null,"函数记忆是指将上次的计算结果缓存起来，当下次调用时，如果遇到相同的参数，就直接返回缓存中的数据。",-1),l=(0,e.Wm)("p",null,"举个例子：",-1),p=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"function"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"add"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token parameter"},[(0,e.Uk)("a"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(" b")]),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"return"),(0,e.Uk)(" a "),(0,e.Wm)("span",{class:"token operator"},"+"),(0,e.Uk)(" b"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n\n"),(0,e.Wm)("span",{class:"token comment"},"// 假设 memoize 可以实现函数记忆"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" memoizedAdd "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"memoize"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("add"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n"),(0,e.Wm)("span",{class:"token function"},"memoizedAdd"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token number"},"1"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token number"},"2"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token comment"},"// 3"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token function"},"memoizedAdd"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token number"},"1"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token number"},"2"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token comment"},"// 相同的参数，第二次调用时，从缓存中取出数据，而非重新计算一次"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"9"),(0,e.Wm)("br")])],-1),u=(0,e.Wm)("h2",{id:"原理",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#原理","aria-hidden":"true"},"#"),(0,e.Uk)(" 原理")],-1),k=(0,e.Wm)("p",null,[(0,e.Uk)("实现这样一个 "),(0,e.Wm)("code",null,"memoize"),(0,e.Uk)(" 函数很简单，原理上只用把参数和对应的结果数据存到一个对象中，调用时，判断参数对应的数据是否存在，存在就返回对应的结果数据。")],-1),W=(0,e.Wm)("h2",{id:"实现",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#实现","aria-hidden":"true"},"#"),(0,e.Uk)(" 实现")],-1),i=(0,e.Wm)("p",null,[(0,e.Uk)("看看 "),(0,e.Wm)("code",null,"underscore"),(0,e.Uk)(" 的 "),(0,e.Wm)("code",null,"memoize"),(0,e.Uk)(" 函数是如何实现的：")],-1),r=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function-variable function"},"memoize"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"function"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token parameter"},[(0,e.Uk)("func"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(" hasher")]),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function-variable function"},"memoize"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"function"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token parameter"},"key"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" cache "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" memoize"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Uk)("cache"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" address "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"''"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"+"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("hasher "),(0,e.Wm)("span",{class:"token operator"},"?"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"hasher"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"apply"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token keyword"},"this"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(" arguments"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(" key"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token keyword"},"if"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token operator"},"!"),(0,e.Uk)("cache"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)("address"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n            cache"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)("address"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"func"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"apply"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token keyword"},"this"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(" arguments"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token keyword"},"return"),(0,e.Uk)(" cache"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)("address"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    memoize"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Uk)("cache "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"return"),(0,e.Uk)(" memoize"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"9"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"10"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"11"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"12"),(0,e.Wm)("br")])],-1),d=(0,e.Wm)("p",null,[(0,e.Uk)("从这个实现可以看出，"),(0,e.Wm)("code",null,"underscore"),(0,e.Uk)(" 默认使用 "),(0,e.Wm)("code",null,"function"),(0,e.Uk)(" 的第一个参数作为 key，所以如果直接使用")],-1),U=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function-variable function"},"add"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"function"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token parameter"},[(0,e.Uk)("a"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(" b"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(" c")]),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"token keyword"},"return"),(0,e.Uk)(" a "),(0,e.Wm)("span",{class:"token operator"},"+"),(0,e.Uk)(" b "),(0,e.Wm)("span",{class:"token operator"},"+"),(0,e.Uk)(" c\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n\n"),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" memoizedAdd "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"memoize"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("add"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\n"),(0,e.Wm)("span",{class:"token function"},"memoizedAdd"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token number"},"1"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token number"},"2"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token number"},"3"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token comment"},"// 6"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token function"},"memoizedAdd"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token number"},"1"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token number"},"2"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token number"},"4"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token comment"},"// 6"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br")])],-1),b=(0,e.Wm)("p",null,[(0,e.Uk)("肯定是有问题的，如果要支持多参数，我们就需要传入 "),(0,e.Wm)("code",null,"hasher"),(0,e.Uk)(" 函数，自定义存储的 "),(0,e.Wm)("code",null,"key"),(0,e.Uk)(" 值。所以我们考虑使用 "),(0,e.Wm)("code",null,"JSON.stringify"),(0,e.Uk)("：")],-1),h=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" memoizedAdd "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"memoize"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("add"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"function"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" args "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token class-name"},"Array"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Uk)("prototype"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"slice"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"call"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("arguments"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"return"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token constant"},"JSON"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"stringify"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("args"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\nconsole"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token function"},"memoizedAdd"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token number"},"1"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token number"},"2"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token number"},"3"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token comment"},"// 6"),(0,e.Uk)("\nconsole"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token function"},"memoizedAdd"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token number"},"1"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token number"},"2"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token number"},"4"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token comment"},"// 7"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br")])],-1),f=(0,e.Wm)("p",null,[(0,e.Uk)("如果使用 "),(0,e.Wm)("code",null,"JSON.stringify"),(0,e.Uk)("，参数是对象的问题也可以得到解决，因为存储的是对象序列化后的字符串。")],-1),g=(0,e.Wm)("h2",{id:"注意",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#注意","aria-hidden":"true"},"#"),(0,e.Uk)(" 注意")],-1),v=(0,e.Wm)("p",null,"函数记忆只是一种编程技巧，本质上是牺牲算法的空间复杂度以换取更优的时间复杂度，在客户端 JavaScript 中代码的执行时间复杂度往往成为瓶颈，因此在大多数场景下，这种牺牲空间换取时间的做法以提升程序执行效率的做法是非常可取的。",-1),y=(0,e.Wm)("h2",{id:"使用的场景",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#使用的场景","aria-hidden":"true"},"#"),(0,e.Uk)(" 使用的场景")],-1),w=(0,e.Wm)("p",null,"如果需要大量重复的计算，或者大量计算又依赖于之前的结果，便可以考虑使用函数记忆。而这种场景，当你遇到的时候，你就会知道的。",-1),z=(0,e.Wm)("h2",{id:"参考",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),(0,e.Uk)(" 参考")],-1),j=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,"https://github.com/mqyqingfeng/Blog/issues/46")],-1),x=(0,e.Wm)("h2",{id:"今日图-工作的我-vs-下班的我",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#今日图-工作的我-vs-下班的我","aria-hidden":"true"},"#"),(0,e.Uk)(" 今日图 - 工作的我 VS 下班的我")],-1),A=(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:t,alt:"16b4ae46b859bdbf.png"})],-1),S={render:function(n,s){return(0,e.wg)(),(0,e.j4)(e.HY,null,[c,o,m,l,p,u,k,W,i,r,d,U,b,h,f,g,v,y,w,z,j,x,A],64)}}}}]);