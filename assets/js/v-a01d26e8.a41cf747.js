(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[7015],{3155:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-a01d26e8",path:"/JS/%E6%B7%B1%E6%B5%85%E6%8B%B7%E8%B4%9D.html",title:"深浅拷贝",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"对象的浅拷贝",slug:"对象的浅拷贝",children:[{level:3,title:"浅拷贝实现",slug:"浅拷贝实现",children:[]},{level:3,title:"正则对象拷贝",slug:"正则对象拷贝",children:[]},{level:3,title:"其他对象拷贝",slug:"其他对象拷贝",children:[]},{level:3,title:"函数拷贝",slug:"函数拷贝",children:[]}]},{level:2,title:"深拷贝的实现",slug:"深拷贝的实现",children:[]},{level:2,title:"循环引用拷贝",slug:"循环引用拷贝",children:[]},{level:2,title:"性能问题",slug:"性能问题",children:[]},{level:2,title:"总结",slug:"总结",children:[]},{level:2,title:"参考",slug:"参考",children:[]},{level:2,title:"今日图 - 灵魂一米八",slug:"今日图-灵魂一米八",children:[]}],filePathRelative:"JS/深浅拷贝.md",git:{updatedTime:1626767622e3}}},861:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>Q});var e=a(6252);const t=a.p+"assets/img/16b4040ec7c834f6.fc7728b0.gif",o=(0,e.Wm)("h1",{id:"深浅拷贝",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#深浅拷贝","aria-hidden":"true"},"#"),(0,e.Uk)(" 深浅拷贝")],-1),c=(0,e.Wm)("h2",{id:"对象的浅拷贝",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#对象的浅拷贝","aria-hidden":"true"},"#"),(0,e.Uk)(" 对象的浅拷贝")],-1),l=(0,e.Wm)("p",null,[(0,e.Uk)("如果是数组，我们可以利用数组的一些方法比如："),(0,e.Wm)("code",null,"slice"),(0,e.Uk)("、"),(0,e.Wm)("code",null,"concat"),(0,e.Uk)(" 返回一个新数组的特性来实现拷贝。")],-1),p=(0,e.Wm)("p",null,"比如：",-1),m=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" arr "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Wm)("span",{class:"token string"},"'old'"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token number"},"1"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token boolean"},"true"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"null"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"undefined"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" new_arr "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" arr"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"concat"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\nnew_arr"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Wm)("span",{class:"token number"},"0"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'new'"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\nconsole"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("arr"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token comment"},'// ["old", 1, true, null, undefined]'),(0,e.Uk)("\nconsole"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("new_arr"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token comment"},'// ["new", 1, true, null, undefined]'),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br")])],-1),k=(0,e.Wm)("p",null,[(0,e.Uk)("用 "),(0,e.Wm)("code",null,"slice"),(0,e.Uk)(" 可以这样做：")],-1),u=(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"var new_arr = arr.slice();")],-1),W=(0,e.Wm)("p",null,"但是如果数组嵌套了对象或者数组的话，比如：",-1),r=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" arr "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("old"),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'old'"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Wm)("span",{class:"token string"},"'old'"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n"),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" new_arr "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" arr"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"concat"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\narr"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Wm)("span",{class:"token number"},"0"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Uk)("old "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'new'"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\narr"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Wm)("span",{class:"token number"},"1"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Wm)("span",{class:"token number"},"0"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'new'"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\nconsole"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("arr"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token comment"},"// [{old: 'new'}, ['new']]"),(0,e.Uk)("\nconsole"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("new_arr"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token comment"},"// [{old: 'new'}, ['new']]"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"9"),(0,e.Wm)("br")])],-1),i=(0,e.Wm)("p",null,[(0,e.Uk)("我们会发现，无论是新数组还是旧数组都发生了变化，也就是说使用 concat 方法，克隆的并不彻底。 如果数组元素是基本类型，就会拷贝一份，互不影响，而如果是对象或者数组，就会只拷贝对象和数组的引用，这样我们无论在新旧数组进行了修改，两者都会发生变化。 我们把这种复制引用的拷贝方法称之为浅拷贝，与之对应的就是深拷贝，深拷贝就是指完全的拷贝一个对象，即使嵌套了对象，两者也相互分离，修改一个对象的属性，也不会影响另一个。 所以我们可以看出使用 "),(0,e.Wm)("code",null,"concat"),(0,e.Uk)(" 和 "),(0,e.Wm)("code",null,"slice"),(0,e.Uk)(" 是一种浅拷贝。")],-1),U=(0,e.Wm)("p",null,[(0,e.Uk)("另外对象 "),(0,e.Wm)("code",null,"Object.assign({})"),(0,e.Uk)(" ，扩展运算符也是浅拷贝")],-1),b=(0,e.Wm)("h3",{id:"浅拷贝实现",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#浅拷贝实现","aria-hidden":"true"},"#"),(0,e.Uk)(" 浅拷贝实现")],-1),d=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function-variable function"},"shallowCopy"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"function"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token parameter"},"obj"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token comment"},"// 只拷贝对象"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"if"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token keyword"},"typeof"),(0,e.Uk)(" obj "),(0,e.Wm)("span",{class:"token operator"},"!=="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'object'"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"return"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token comment"},"// 根据obj的类型判断是新建一个数组还是对象"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" newObj "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" obj "),(0,e.Wm)("span",{class:"token keyword"},"instanceof"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token class-name"},"Array"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"?"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token comment"},"// 遍历obj，并且判断是obj的属性才拷贝"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"for"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" key "),(0,e.Wm)("span",{class:"token keyword"},"in"),(0,e.Uk)(" obj"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token keyword"},"if"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("obj"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"hasOwnProperty"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("key"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n            newObj"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)("key"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" obj"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)("key"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"return"),(0,e.Uk)(" newObj"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"9"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"10"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"11"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"12"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"13"),(0,e.Wm)("br")])],-1),g=(0,e.Wm)("h3",{id:"正则对象拷贝",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#正则对象拷贝","aria-hidden":"true"},"#"),(0,e.Uk)(" 正则对象拷贝")],-1),w=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token keyword"},"function"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"isRegExp"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token parameter"},"pattern"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" flags "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"''"),(0,e.Uk)("\n  flags "),(0,e.Wm)("span",{class:"token operator"},"+="),(0,e.Uk)(" pattern"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Uk)("global "),(0,e.Wm)("span",{class:"token operator"},"?"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'g'"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"''"),(0,e.Uk)("\n  flags "),(0,e.Wm)("span",{class:"token operator"},"+="),(0,e.Uk)(" pattern"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Uk)("ignoreCase "),(0,e.Wm)("span",{class:"token operator"},"?"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'i'"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"''"),(0,e.Uk)("\n  flags "),(0,e.Wm)("span",{class:"token operator"},"+="),(0,e.Uk)(" pattern"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Uk)("multiline "),(0,e.Wm)("span",{class:"token operator"},"?"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'m'"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"''"),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"token keyword"},"return"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"new"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token class-name"},"RegExp"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("pattern"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Uk)("source"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(" flags"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n\n"),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" reg"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token keyword"},"new"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token class-name"},"RegExp"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token string"},"'/111/'"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" newReg"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token function"},"isRegExp"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("reg"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"9"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"10"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"11"),(0,e.Wm)("br")])],-1),y=(0,e.Wm)("h3",{id:"其他对象拷贝",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#其他对象拷贝","aria-hidden":"true"},"#"),(0,e.Uk)(" 其他对象拷贝")],-1),f=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"function"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"getRawType"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token parameter"},"value"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"return"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token class-name"},"Object"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Uk)("prototype"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"toString"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"call"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("value"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"slice"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token number"},"8"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"-"),(0,e.Wm)("span",{class:"token number"},"1"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n "),(0,e.Wm)("span",{class:"token keyword"},"let"),(0,e.Uk)(" type "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"getRawType"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("value"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n    \n    "),(0,e.Wm)("span",{class:"token keyword"},"switch"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("type"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token keyword"},"case"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'Date'"),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token keyword"},"case"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'RegExp'"),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(" \n        "),(0,e.Wm)("span",{class:"token keyword"},"case"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'Error'"),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(" value "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"new"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token class-name"},"window"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)("type"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("value"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"break"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"return"),(0,e.Uk)(" value\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"9"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"10"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"11"),(0,e.Wm)("br")])],-1),h=(0,e.Wm)("h3",{id:"函数拷贝",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#函数拷贝","aria-hidden":"true"},"#"),(0,e.Uk)(" 函数拷贝")],-1),v=(0,e.Wm)("p",null,[(0,e.Uk)("复制函数似乎没有太大意义，"),(0,e.Wm)("code",null,"JS"),(0,e.Uk)(" 里函数的身份比较特殊，由于闭包的关系，每个函数在声明时处于独立的执行环境。所以你简单复制一个函数，比如 "),(0,e.Wm)("code",null,"funcA = new Function(funcB.toString)"),(0,e.Uk)("，无法进入原先的执行环境，运行结果肯定是不同的。")],-1),j=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function-variable function"},"fn"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token keyword"},"function"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token template-string"},[(0,e.Wm)("span",{class:"token template-punctuation string"},"`"),(0,e.Wm)("span",{class:"token string"},"eval('(' + fn.toString() + ')');"),(0,e.Wm)("span",{class:"token template-punctuation string"},"`")]),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br")])],-1),x=(0,e.Wm)("h2",{id:"深拷贝的实现",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#深拷贝的实现","aria-hidden":"true"},"#"),(0,e.Uk)(" 深拷贝的实现")],-1),_=(0,e.Wm)("p",null,[(0,e.Uk)("第一种就是 "),(0,e.Wm)("code",null,"JSON.stringify"),(0,e.Uk)(" 这个对于，函数就不适用了。")],-1),O=(0,e.Wm)("p",null,"那如何实现一个深拷贝呢？说起来也好简单，我们在拷贝的时候判断一下属性值的类型，如果是对象，我们递归调用深拷贝函数不就好了~",-1),C=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function-variable function"},"deepCopy"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"function"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token parameter"},"obj"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"if"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token keyword"},"typeof"),(0,e.Uk)(" obj "),(0,e.Wm)("span",{class:"token operator"},"!=="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'object'"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"return"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" newObj "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" obj "),(0,e.Wm)("span",{class:"token keyword"},"instanceof"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token class-name"},"Array"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"?"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"for"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" key "),(0,e.Wm)("span",{class:"token keyword"},"in"),(0,e.Uk)(" obj"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token keyword"},"if"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("obj"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"hasOwnProperty"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("key"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n            newObj"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)("key"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"typeof"),(0,e.Uk)(" obj"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)("key"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"==="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'object'"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"?"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"deepCopy"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("obj"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)("key"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(" obj"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)("key"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"return"),(0,e.Uk)(" newObj"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"9"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"10"),(0,e.Wm)("br")])],-1),R=(0,e.Wm)("h2",{id:"循环引用拷贝",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#循环引用拷贝","aria-hidden":"true"},"#"),(0,e.Uk)(" 循环引用拷贝")],-1),E=(0,e.Wm)("p",null,"循环引用。",-1),B=(0,e.Wm)("p",null,"例如：",-1),P=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" man "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    name"),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'aepkill'"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)("\n    sex"),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'male'"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\nman"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Wm)("span",{class:"token string"},"'deefRef'"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" man"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br")])],-1),S=(0,e.Wm)("p",null,[(0,e.Uk)("此时如果调用刚才的"),(0,e.Wm)("code",null,"deepCopy"),(0,e.Uk)("函数的话，会陷入一个循环的递归过程，从而导致爆栈：")],-1),q=(0,e.Wm)("p",null,"解决这个问题也非常简单，只需要判断一个对象的字段是否引用了这个对象或这个对象的任意父级即可，修改一下代码：",-1),J=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function-variable function"},"deepCopy"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"function"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token parameter"},[(0,e.Uk)("obj"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)("parent")]),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"if"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token keyword"},"typeof"),(0,e.Uk)(" obj "),(0,e.Wm)("span",{class:"token operator"},"!=="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'object'"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"return"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" newObj "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" obj "),(0,e.Wm)("span",{class:"token keyword"},"instanceof"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token class-name"},"Array"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"?"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\t"),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" _parent "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" parent"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\t   _parent "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" parent"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n            "),(0,e.Wm)("span",{class:"token comment"},"// 该字段有父级则需要追溯该字段的父级"),(0,e.Uk)("\n            "),(0,e.Wm)("span",{class:"token keyword"},"while"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("_parent"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n                "),(0,e.Wm)("span",{class:"token comment"},"// 如果该字段引用了它的父级则为循环引用"),(0,e.Uk)("\n                "),(0,e.Wm)("span",{class:"token keyword"},"if"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("_parent"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Uk)("originalParent "),(0,e.Wm)("span",{class:"token operator"},"==="),(0,e.Uk)(" obj"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n                    "),(0,e.Wm)("span",{class:"token comment"},"// 循环引用直接返回同级的新对象"),(0,e.Uk)("\n                    "),(0,e.Wm)("span",{class:"token keyword"},"return"),(0,e.Uk)(" _parent"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Uk)("currentParent"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n                "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n                _parent "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" _parent"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Uk)("parent"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n            "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"for"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" key "),(0,e.Wm)("span",{class:"token keyword"},"in"),(0,e.Uk)(" obj"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token keyword"},"if"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("obj"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"hasOwnProperty"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("key"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n            newObj"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)("key"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token keyword"},"typeof"),(0,e.Uk)(" obj"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)("key"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"==="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'object'"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},"?"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token function"},"deepCopy"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("obj"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)("key"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n                        originalParent"),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(" obj"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)("\n                        currentParent"),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(" newObj"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)("\n                        parent"),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(" _parent\n                    "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token operator"},":"),(0,e.Uk)(" obj"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Uk)("key"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n        "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n    "),(0,e.Wm)("span",{class:"token keyword"},"return"),(0,e.Uk)(" newObj"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"9"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"10"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"11"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"12"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"13"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"14"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"15"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"16"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"17"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"18"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"19"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"20"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"21"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"22"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"23"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"24"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"25"),(0,e.Wm)("br")])],-1),A=(0,e.Wm)("h2",{id:"性能问题",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#性能问题","aria-hidden":"true"},"#"),(0,e.Uk)(" 性能问题")],-1),z=(0,e.Wm)("p",null,"尽管使用深拷贝会完全的克隆一个新对象，不会产生副作用，但是深拷贝因为使用递归，性能会不如浅拷贝，在开发中，还是要根据实际情况进行选择。",-1),L=(0,e.Wm)("h2",{id:"总结",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),(0,e.Uk)(" 总结")],-1),N=(0,e.Uk)("另外在掘金看到有这么一篇总结的不错，推荐一下 "),T={href:"https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1",target:"_blank",rel:"noopener noreferrer"},D=(0,e.Uk)("如何写出一个惊艳面试官的深拷贝?"),F=(0,e.Uk)(" 源码"),G={href:"https://github.com/ConardLi/ConardLi.github.io/blob/master/demo/deepClone/src/clone_6.js",target:"_blank",rel:"noopener noreferrer"},H=(0,e.Uk)("点这里"),Y=(0,e.Wm)("h2",{id:"参考",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),(0,e.Uk)(" 参考")],-1),I=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,"https://github.com/mqyqingfeng/Blog/issues/32"),(0,e.Wm)("li",null,"https://blog.csdn.net/liwusen/article/details/78759373"),(0,e.Wm)("li",null,"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp"),(0,e.Wm)("li",null,"https://segmentfault.com/q/1010000019806573?_ea=15209539"),(0,e.Wm)("li",null,"https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1")],-1),K=(0,e.Wm)("h2",{id:"今日图-灵魂一米八",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#今日图-灵魂一米八","aria-hidden":"true"},"#"),(0,e.Uk)(" 今日图 - 灵魂一米八")],-1),M=(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:t,alt:"16b4040ec7c834f6.gif"})],-1),Q={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[o,c,l,p,m,k,u,W,r,i,U,b,d,g,w,y,f,h,v,j,x,_,O,C,R,E,B,P,S,q,J,A,z,L,(0,e.Wm)("p",null,[N,(0,e.Wm)("a",T,[D,(0,e.Wm)(a)]),F,(0,e.Wm)("a",G,[H,(0,e.Wm)(a)])]),Y,I,K,M],64)}}}}]);