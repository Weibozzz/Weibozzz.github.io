(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[3882],{7049:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-a1e5116c",path:"/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F/%E5%B8%B8%E7%94%A8%E6%AD%A3%E5%88%99%E6%95%B4%E7%90%86.html",title:"常用正则整理",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"正则预测",slug:"正则预测",children:[]},{level:2,title:"字符串不确定空格分割js",slug:"字符串不确定空格分割js",children:[]},{level:2,title:"匹配包括换行符在内的任意字符",slug:"匹配包括换行符在内的任意字符",children:[]},{level:2,title:"正则查找字符串",slug:"正则查找字符串",children:[]},{level:2,title:"match",slug:"match",children:[]},{level:2,title:"分组",slug:"分组",children:[]},{level:2,title:"正则断言",slug:"正则断言",children:[]},{level:2,title:"jsonp转化json实战遇到的问题",slug:"jsonp转化json实战遇到的问题",children:[]},{level:2,title:"正则贪婪",slug:"正则贪婪",children:[]},{level:2,title:"今日图 - 全栈工程师的日常",slug:"今日图-全栈工程师的日常",children:[]}],filePathRelative:"正则表达式/常用正则整理.md",git:{updatedTime:1626843914e3}}},9253:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>en});var e=a(6252);const t=a.p+"assets/img/16a763d28be4b200.885f0feb.gif",l=(0,e.Wm)("h1",{id:"常用正则整理",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#常用正则整理","aria-hidden":"true"},"#"),(0,e.Uk)(" 常用正则整理")],-1),c=(0,e.Wm)("h2",{id:"正则预测",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#正则预测","aria-hidden":"true"},"#"),(0,e.Uk)(" 正则预测")],-1),m=(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"^"),(0,e.Uk)(" 匹配一行的开头位置")],-1),o=(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"(?![0-9]+$)"),(0,e.Uk)(" 预测该位置后面不全是数字")],-1),p=(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"(?![a-zA-Z]+$)"),(0,e.Uk)(" 预测该位置后面不全是字母")],-1),W=(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"[0-9A-Za-z] {6,10}"),(0,e.Uk)(" 由6-10位数字或这字母组成")],-1),r=(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"$"),(0,e.Uk)(" 匹配行结尾位置")],-1),u=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Uk)("$pattern "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/'"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n    "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" reg"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token regex"},[(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-source language-regex"},"(\\d{3})\\d{4}(\\d{4})"),(0,e.Wm)("span",{class:"token regex-delimiter"},"/")]),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n    "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" phone"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token string"},'"13423874592"'),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n   console"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)(" phone"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"replace"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("reg"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token string"},'"$1****$2"'),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Wm)("span",{class:"token comment"},"//134****4592"),(0,e.Uk)("\n\n    "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" reg"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token regex"},[(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-source language-regex"},"w.rar|zip|gz"),(0,e.Wm)("span",{class:"token regex-delimiter"},"/")]),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n    "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" file"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token string"},'"test.rar"'),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n    console"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("reg"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"test"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("file"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n    "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" reg"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token regex"},[(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-source language-regex"},"^[a-zA-Z_0-9.-] @[a-zA-Z_0-9.-] .[a-zA-Z] $"),(0,e.Wm)("span",{class:"token regex-delimiter"},"/")]),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n    "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" email"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token string"},'"xiaoming.he-he@163.com"'),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n    console"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("reg"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"test"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("email"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"9"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"10"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"11"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"12"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"13"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"14"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"15"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"16"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"17"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"18"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"19"),(0,e.Wm)("br")])],-1),k=(0,e.Wm)("h2",{id:"字符串不确定空格分割js",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#字符串不确定空格分割js","aria-hidden":"true"},"#"),(0,e.Uk)(" 字符串不确定空格分割js")],-1),i=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Uk)("   "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" str"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token string"},'"fdsfsdf dfsf dfsf    dsfasf"'),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n    console"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("str"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"split"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token regex"},[(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-source language-regex"},"[  ]+ "),(0,e.Wm)("span",{class:"token regex-delimiter"},"/")]),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n    console"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("str"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"split"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token regex"},[(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-source language-regex"},"\\s+ "),(0,e.Wm)("span",{class:"token regex-delimiter"},"/")]),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\n   "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" str"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token string"},'"aaa_big.img"'),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n   console"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("str"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"replace"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token regex"},[(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-source language-regex"},"_big"),(0,e.Wm)("span",{class:"token regex-delimiter"},"/")]),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Wm)("span",{class:"token string"},'""'),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Wm)("span",{class:"token comment"},"//aaa.img"),(0,e.Uk)("\n\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br")])],-1),g=(0,e.Wm)("h2",{id:"匹配包括换行符在内的任意字符",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#匹配包括换行符在内的任意字符","aria-hidden":"true"},"#"),(0,e.Uk)(" 匹配包括换行符在内的任意字符")],-1),d=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,"([\\s\\S]*)")],-1),b=(0,e.Wm)("h2",{id:"正则查找字符串",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#正则查找字符串","aria-hidden":"true"},"#"),(0,e.Uk)(" 正则查找字符串")],-1),U=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"let"),(0,e.Uk)(" reg"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token keyword"},"new"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token class-name"},"RegExp"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token string"},'"project"'),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Wm)("span",{class:"token string"},'"g"'),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token keyword"},"let"),(0,e.Uk)(" str"),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token string"},"'http://localhost:63342/project/test.html?_ijt=7eg35ek3pq5s7f4dgecpc89n4h;'"),(0,e.Uk)("\n\nconsole"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("reg"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"test"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("str"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n"),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" str "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'abcdef'"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" re "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token regex"},[(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-source language-regex"},"B"),(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-flags"},"i")]),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token comment"},"//var re = new RegExp('B','i'); 也可以这样写"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token function"},"alert"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)(" str"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"search"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("re"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token comment"},"// 1"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"9"),(0,e.Wm)("br")])],-1),x=(0,e.Wm)("h2",{id:"match",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#match","aria-hidden":"true"},"#"),(0,e.Uk)(" match")],-1),h=(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,"在字符串中搜索复合规则的内容，搜索成功就返回内容，格式为数组，失败就返回null")],-1),f=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"用法： 字符串.match(正则)")]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"量词： 至少出现一次 匹配不确定的次数（匹配就是搜索查找的意思）")]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,"全局匹配：g——global（正则中默认，只要搜索到复合规则的内容就会结束搜索 ）")])],-1),v=(0,e.Wm)("p",null,"例子：找出指定格式的所有数字，如下找到 123，54，33，879",-1),j=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" str "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'haj123sdk54hask33dkhalsd879'"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])],-1),w=(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"var re = /\\d+/g; "),(0,e.Uk)("// 每次匹配至少一个数字 且全局匹配 如果不是全局匹配，当找到数字123，它就会停止了。就只会弹出123.加上全局匹配，就会从开始到结束一直去搜索符合规则的。如果没有加号，匹配的结果就是1，2，3，5，4，3，3，879并不是我们想要的，有了加号，每次匹配的数字就是至少一个了")],-1),y=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"alert"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)(" str"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"match"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("re"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token comment"},"// [123，54，33，879]"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])],-1),$=(0,e.Wm)("h2",{id:"分组",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#分组","aria-hidden":"true"},"#"),(0,e.Uk)(" 分组")],-1),S=(0,e.Wm)("p",null,[(0,e.Uk)("写一个时间字符串 "),(0,e.Wm)("code",null,"'2017-03-05'"),(0,e.Uk)(", 正则表达式 "),(0,e.Wm)("code",null,"/\\d{4}-\\d{2}-\\d{2}/g"),(0,e.Uk)(" 可以匹配它，如下，")],-1),E=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"let"),(0,e.Uk)(" reg "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token regex"},[(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-source language-regex"},"\\d{4}-\\d{2}-\\d{2}"),(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-flags"},"g")]),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token keyword"},"let"),(0,e.Uk)(" string "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'2017-03-20'"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token keyword"},"let"),(0,e.Uk)(" replaceString "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" string"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"replace"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("reg"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Wm)("span",{class:"token string"},'"X"'),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\nconsole"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("replaceString"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("  "),(0,e.Wm)("span",{class:"token comment"},"//X"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br")])],-1),A=(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"$1"),(0,e.Uk)(", "),(0,e.Wm)("code",null,"$2"),(0,e.Uk)("，"),(0,e.Wm)("code",null,"$3"),(0,e.Uk)("都是字符串，可以进行任意组合，我们就可以得到想要的结果, '$2/$3/$1', 我们就可以把一种日期格式，转化成另外一种日期格式")],-1),z=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"let"),(0,e.Uk)(" reg "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token regex"},[(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-source language-regex"},"(\\d{4})-(\\d{2})-(\\d{2})"),(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-flags"},"g")]),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token keyword"},"let"),(0,e.Uk)(" string "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'2017-03-20'"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token keyword"},"let"),(0,e.Uk)(" replaceString "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" string"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"replace"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("reg"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Wm)("span",{class:"token string"},'"$2/$3/$1"'),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\nconsole"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("replaceString"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("  "),(0,e.Wm)("span",{class:"token comment"},"//  03/20/2017"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br")])],-1),B=(0,e.Wm)("p",null,[(0,e.Uk)("忽略分组："),(0,e.Wm)("code",null,"$n"),(0,e.Uk)("获取分组的内容和正则表达式中的分组是一一对应的，正则表达式中有几个分组，它从左向右就会对应几个"),(0,e.Wm)("code",null,"$n"),(0,e.Uk)("， "),(0,e.Wm)("code",null,"$1"),(0,e.Uk)(" 永远获取的是第一个分组内容，"),(0,e.Wm)("code",null,"$2"),(0,e.Uk)(" 永远获取的都是第二个分组的内容，但有时候，我们想跳过某个分组，获取它下一个分组，比如"),(0,e.Wm)("code",null,"$2"),(0,e.Uk)(" 获取第三个分组的内容，这时正则表达式中的第二个分组前面要加 "),(0,e.Wm)("code",null,"?："),(0,e.Uk)("， 表示获取内容的时候可以忽略这个分组")],-1),X=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"let"),(0,e.Uk)(" reg "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token regex"},[(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-source language-regex"},"(\\d{4})-(?:\\d{2})-(\\d{2})"),(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-flags"},"g")]),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token keyword"},"let"),(0,e.Uk)(" string "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'2017-03-20'"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token keyword"},"let"),(0,e.Uk)(" replaceString "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" string"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"replace"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("reg"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Wm)("span",{class:"token string"},"'$2'"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token comment"},"// $2"),(0,e.Uk)("\nconsole"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("replaceString"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("  "),(0,e.Wm)("span",{class:"token comment"},"//20"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br")])],-1),Z=(0,e.Wm)("p",null,[(0,e.Uk)("在上面的代码中，我们在第二个分组前面加了 "),(0,e.Wm)("code",null,"?："),(0,e.Uk)("进行了忽略了，所以"),(0,e.Wm)("code",null,"$2"),(0,e.Uk)(" 获取的是第三个分组的内容。")],-1),q=(0,e.Wm)("p",null,[(0,e.Uk)("分组还有一个概念，就是重复子项，它用"),(0,e.Wm)("code",null,"1,2"),(0,e.Uk)("来表示，它们只用在正则表达式中，"),(0,e.Wm)("code",null," 1"),(0,e.Uk)(" 代表的也是第一个分组，"),(0,e.Wm)("code",null,"2"),(0,e.Uk)("代表的是第二个分组，它们主要的作用是匹配以下这种字符串，")],-1),C=(0,e.Wm)("p",null,[(0,e.Wm)("code",null,"121, 222, 323, 424"),(0,e.Uk)(", 第一个数字和第三个数字相等，但又是不确定的数字， 所以在书写正则表达式时，必须保证第一项和第三项相等，第三项是第一项的复制，"),(0,e.Wm)("code",null,"1"),(0,e.Uk)(", 就是正则表达式中第一个分组的复制。")],-1),L=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"let"),(0,e.Uk)(" reg "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token regex"},[(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-source language-regex"},"(\\d)2\\1"),(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-flags"},"g")]),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token keyword"},"let"),(0,e.Uk)(" string "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'121 222 323 424'"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token keyword"},"let"),(0,e.Uk)(" replaceString "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" string"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"replace"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("reg"),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Wm)("span",{class:"token string"},"'X'"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\nconsole"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"log"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("replaceString"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("  "),(0,e.Wm)("span",{class:"token comment"},"// X X X X"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br")])],-1),R=(0,e.Wm)("p",null,[(0,e.Uk)("还有一个或的概念，符号表示为"),(0,e.Wm)("code",null,"|"),(0,e.Uk)(", "),(0,e.Wm)("code",null,"/ab|ac/"),(0,e.Uk)(", 当它们去匹配字符串时，只要出现其中的一个就算成功")],-1),_=(0,e.Wm)("p",null,[(0,e.Uk)("将 "),(0,e.Wm)("code",null,"ip"),(0,e.Uk)(" 地址变为三位数")],-1),N=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" str "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},'"12.34.23.23 4.4.4.4 45.456.456.453"'),(0,e.Uk)(),(0,e.Wm)("span",{class:"token comment"},"// 假设这是三个ip"),(0,e.Uk)("\nstr"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"replace"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token regex"},[(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-source language-regex"},"(\\d+)"),(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-flags"},"g")]),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Wm)("span",{class:"token string"},'"00$1"'),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"replace"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token regex"},[(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-source language-regex"},"0*(\\d{3})"),(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-flags"},"g")]),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Wm)("span",{class:"token string"},'"$1"'),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token comment"},"// 012.034.023.023 004.004.004.004 045.456.456.453"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br")])],-1),O=(0,e.Wm)("h2",{id:"正则断言",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#正则断言","aria-hidden":"true"},"#"),(0,e.Uk)(" 正则断言")],-1),F=(0,e.Wm)("p",null,"语法如下：",-1),D=(0,e.Wm)("p",null,[(0,e.Wm)("code",null,'String(Number).replace(/(\\d)(?=(\\d{3})+$)/g, "$1,");'),(0,e.Uk)(" 举例：")],-1),J=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token function"},"String"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token number"},"123456789"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"replace"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token regex"},[(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-source language-regex"},"(\\d)(?=(\\d{3})+$)"),(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-flags"},"g")]),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},'"$1,"'),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n"),(0,e.Wm)("span",{class:"token comment"},"// or"),(0,e.Uk)("\n\n"),(0,e.Wm)("span",{class:"token string"},"'123456789'"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"replace"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token regex"},[(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-source language-regex"},"\\B(?=(\\d{3})+(?!\\d))"),(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-flags"},"g")]),(0,e.Wm)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"','"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\n\n"),(0,e.Wm)("span",{class:"token comment"},"//结果是：123,456,789"),(0,e.Uk)("\n\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"8"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"9"),(0,e.Wm)("br")])],-1),H=(0,e.Wm)("p",null,[(0,e.Uk)("如果为小数则为： "),(0,e.Wm)("code",null,"'1234567890030.7890'.replace(/(?=\\B(?:\\d{3})+\\b)(\\d{3}(\\.\\d+$)?)/g,',$1');"),(0,e.Uk)(" // 整数小数都兼容 方法二：使用"),(0,e.Wm)("code",null,"toLocaleString()"),(0,e.Uk)("方法 语法如下：")],-1),K=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Uk)("Number"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"toLocaleString"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token string"},"'en-US'"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token comment"},"//举例："),(0,e.Uk)("\n\n"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token number"},"123456789"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"toLocaleString"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token string"},"'en-US'"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Wm)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token comment"},"//结果是：123,456,789"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br")])],-1),M=(0,e.Wm)("p",null,[(0,e.Uk)("对于中文场景下，"),(0,e.Wm)("code",null,"toLocaleString('en-US')"),(0,e.Uk)("中的"),(0,e.Wm)("code",null,"'en-US'"),(0,e.Uk)("理论上是可以缺省的，也就是直接"),(0,e.Wm)("code",null,"(123456789).toLocaleString()"),(0,e.Uk)("也是可以得到"),(0,e.Wm)("code",null,"123,456,789"),(0,e.Uk)("。但是如果你的产品可能海外用户使用，则保险起见，还是保留"),(0,e.Wm)("code",null,"'en-US'"),(0,e.Uk)("。")],-1),P=(0,e.Wm)("h2",{id:"jsonp转化json实战遇到的问题",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#jsonp转化json实战遇到的问题","aria-hidden":"true"},"#"),(0,e.Uk)(" jsonp转化json实战遇到的问题")],-1),T=(0,e.Wm)("p",null,"qq音乐返回的jsonp数据，但是我们需要json数据，需要正则匹配",-1),Y=(0,e.Wm)("p",null,[(0,e.Wm)("code",null,'jsonp:"MusicJsonCallback({"retcode":0,"code":0,"subcode":0,"lyric":"W3RpOua8lOWRmF0KW2FyO……')],-1),G=(0,e.Wm)("p",null,"我们需要大括号的内容，所以",-1),I=(0,e.Wm)("p",null,"// 其实我们不需要这个jsonp数据，这里我们做处理",-1),Q=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"language-javascript"},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"token keyword"},"if"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Wm)("span",{class:"token keyword"},"typeof"),(0,e.Uk)(" ret "),(0,e.Wm)("span",{class:"token operator"},"==="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token string"},"'string'"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" reg "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Wm)("span",{class:"token regex"},[(0,e.Wm)("span",{class:"token regex-delimiter"},"/"),(0,e.Wm)("span",{class:"token regex-source language-regex"},"^\\w+\\(({[^()]+})\\)$"),(0,e.Wm)("span",{class:"token regex-delimiter"},"/")]),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"token keyword"},"var"),(0,e.Uk)(" matches "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(" ret"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"match"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("reg"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"token keyword"},"if"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("matches"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)(),(0,e.Wm)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    ret "),(0,e.Wm)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e.Wm)("span",{class:"token constant"},"JSON"),(0,e.Wm)("span",{class:"token punctuation"},"."),(0,e.Wm)("span",{class:"token function"},"parse"),(0,e.Wm)("span",{class:"token punctuation"},"("),(0,e.Uk)("matches"),(0,e.Wm)("span",{class:"token punctuation"},"["),(0,e.Wm)("span",{class:"token number"},"1"),(0,e.Wm)("span",{class:"token punctuation"},"]"),(0,e.Wm)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n  "),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"7"),(0,e.Wm)("br")])],-1),V=(0,e.Wm)("h2",{id:"正则贪婪",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#正则贪婪","aria-hidden":"true"},"#"),(0,e.Uk)(" 正则贪婪")],-1),nn=(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,"*? 重复任意次，但尽可能少重复"),(0,e.Wm)("li",null,"? 重复1次或更多次，但尽可能少重复"),(0,e.Wm)("li",null,"?? 重复0次或1次，但尽可能少重复"),(0,e.Wm)("li",null,"{n,m}? 重复n到m次，但尽可能少重复"),(0,e.Wm)("li",null,"{n,}? 重复n次以上，但尽可能少重复")],-1),sn=(0,e.Wm)("h2",{id:"今日图-全栈工程师的日常",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#今日图-全栈工程师的日常","aria-hidden":"true"},"#"),(0,e.Uk)(" 今日图 - 全栈工程师的日常")],-1),an=(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:t,alt:"16a763d28be4b200.gif"})],-1),en={render:function(n,s){return(0,e.wg)(),(0,e.j4)(e.HY,null,[l,c,m,o,p,W,r,u,k,i,g,d,b,U,x,h,f,v,j,w,y,$,S,E,A,z,B,X,Z,q,C,L,R,_,N,O,F,D,J,H,K,M,P,T,Y,G,I,Q,V,nn,sn,an],64)}}}}]);