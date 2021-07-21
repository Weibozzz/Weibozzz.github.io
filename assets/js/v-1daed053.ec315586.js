(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[1766],{1497:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-1daed053",path:"/JS/RAF%E6%9B%BF%E4%BB%A3setTimeout_setInterval.html",title:"RAF替代setTimeout_setInterval",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"前言",slug:"前言",children:[]},{level:2,title:"requestAnimationFrame",slug:"requestanimationframe",children:[{level:3,title:"语法",slug:"语法",children:[]}]},{level:2,title:"了解微任务、宏任务与Event-Loop",slug:"了解微任务、宏任务与event-loop",children:[]},{level:2,title:"运行机制",slug:"运行机制",children:[{level:3,title:"setTimeout",slug:"settimeout",children:[]},{level:3,title:"setInterval",slug:"setinterval",children:[]}]},{level:2,title:"迭代setTimeout实现setInterval",slug:"迭代settimeout实现setinterval",children:[]},{level:2,title:"模拟setInterval/setTimeout的基本使用",slug:"模拟setinterval-settimeout的基本使用",children:[{level:3,title:"RAF",slug:"raf",children:[]},{level:3,title:"使用",slug:"使用",children:[]}]},{level:2,title:"引用",slug:"引用",children:[]}],filePathRelative:"JS/RAF替代setTimeout_setInterval.md",git:{updatedTime:162684715e4}}},8527:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>O});var t=a(6252);const e=a.p+"assets/img/setinterval.252dffff.jpg",o=(0,t.Wm)("h2",{id:"前言",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),(0,t.Uk)(" 前言")],-1),l=(0,t.Wm)("p",null,[(0,t.Uk)("为什么用 "),(0,t.Wm)("code",null,"requestAnimationFrame"),(0,t.Uk)("代替 "),(0,t.Wm)("code",null,"setInterval"),(0,t.Uk)(" 和 "),(0,t.Wm)("code",null,"setTimeout"),(0,t.Uk)("？那得先了解微任务、宏任务与"),(0,t.Wm)("code",null,"Event-Loop"),(0,t.Uk)("， 还有 "),(0,t.Wm)("code",null,"setInterval"),(0,t.Uk)(" 存在的问题")],-1),m=(0,t.Wm)("h2",{id:"requestanimationframe",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#requestanimationframe","aria-hidden":"true"},"#"),(0,t.Uk)(" requestAnimationFrame")],-1),c=(0,t.Wm)("blockquote",null,[(0,t.Wm)("p",null,"window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画， 并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行")],-1),u=(0,t.Wm)("p",null,[(0,t.Wm)("strong",null,"若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用window.requestAnimationFrame()")],-1),p=(0,t.Wm)("h3",{id:"语法",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#语法","aria-hidden":"true"},"#"),(0,t.Uk)(" 语法")],-1),i=(0,t.Wm)("p",null,[(0,t.Wm)("code",null,"window.requestAnimationFrame(callback);")],-1),k=(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Uk)("callback 下一次重绘之前更新动画帧所调用的函数(即上面所说的回调函数)。该回调函数会被传 入"),(0,t.Wm)("code",null,"DOMHighResTimeStamp"),(0,t.Uk)("参数，该参数与"),(0,t.Wm)("code",null,"performance.now()"),(0,t.Uk)("的返回值相同，它表示"),(0,t.Wm)("code",null,"requestAnimationFrame() "),(0,t.Uk)("开 始去执行回调函数的时刻。")]),(0,t.Wm)("li",null,[(0,t.Uk)("返回值 一个 "),(0,t.Wm)("code",null,"long"),(0,t.Uk)(" 整数，请求 "),(0,t.Wm)("code",null,"ID"),(0,t.Uk)(" ，是回调列表中唯一的标识。是个非零值，没别的意义。你可以传这个值给 "),(0,t.Wm)("code",null,"window.cancelAnimationFrame()"),(0,t.Uk)(" 以取消回调函数。")])],-1),W=(0,t.Wm)("h2",{id:"了解微任务、宏任务与event-loop",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#了解微任务、宏任务与event-loop","aria-hidden":"true"},"#"),(0,t.Uk)(" 了解微任务、宏任务与Event-Loop")],-1),r=(0,t.Uk)("微任务_宏任务与Event-Loop"),U=(0,t.Wm)("h2",{id:"运行机制",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#运行机制","aria-hidden":"true"},"#"),(0,t.Uk)(" 运行机制")],-1),b=(0,t.Wm)("h3",{id:"settimeout",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#settimeout","aria-hidden":"true"},"#"),(0,t.Uk)(" setTimeout")],-1),d=(0,t.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-javascript"},[(0,t.Wm)("code",null,[(0,t.Wm)("span",{class:"token function"},"setTimeout"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    console"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"log"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token number"},"1"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\nconsole"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"log"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token number"},"0"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"4"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"5"),(0,t.Wm)("br")])],-1),h=(0,t.Wm)("p",null,[(0,t.Uk)("实际上，把"),(0,t.Wm)("code",null,"setTimeout"),(0,t.Uk)("的第二个参数设置为"),(0,t.Wm)("code",null,"0s"),(0,t.Uk)("，并不是立即执行函数的意思，只是把函数放入异步队列。浏览器先执行完同步队列里的任务，才会去执行异步队列中的任务")],-1),v=(0,t.Wm)("p",null,[(0,t.Uk)("在下面这个例子中，给一个按钮"),(0,t.Wm)("code",null,"btn"),(0,t.Uk)("设置了一个事件处理程序。事件处理程序设置了一个"),(0,t.Wm)("code",null,"250ms"),(0,t.Uk)("后调用的定时器。点击该按钮后， 首先将"),(0,t.Wm)("code",null,"onclick"),(0,t.Uk)("事件处理程序加入队列。该程序执行后才设置定时器，再有250ms后，指定的代码才被添加到队列中等待执行")],-1),f=(0,t.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-javascript"},[(0,t.Wm)("code",null,[(0,t.Uk)("\nbtn"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function-variable function"},"onclick"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token function"},"setTimeout"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        console"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"log"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token number"},"1"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Wm)("span",{class:"token number"},"250"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"4"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"5"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"6"),(0,t.Wm)("br")])],-1),g=(0,t.Wm)("p",null,[(0,t.Uk)("如果上面代码中的"),(0,t.Wm)("code",null,"onclick"),(0,t.Uk)("事件处理程序执行了"),(0,t.Wm)("code",null,"300ms"),(0,t.Uk)("，那么定时器的代码至少要在定时器设置之后的"),(0,t.Wm)("code",null,"300ms"),(0,t.Uk)("后才会被执行。队列中所有 的代码都要等到"),(0,t.Wm)("code",null,"javascript"),(0,t.Uk)("进程空闲之后才能执行，而不管它们是如何添加到队列中的")],-1),w=(0,t.Wm)("h3",{id:"setinterval",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#setinterval","aria-hidden":"true"},"#"),(0,t.Uk)(" setInterval")],-1),y=(0,t.Wm)("p",null,[(0,t.Uk)("使用"),(0,t.Wm)("code",null,"setInterval()"),(0,t.Uk)("的问题在于，定时器代码可能在代码再次被添加到队列之前还没有完成执行，结果导致定时器代码连续运行好几次，而之间没有任何停顿。 而"),(0,t.Wm)("code",null,"javascript"),(0,t.Uk)("引擎对这个问题的解决是：当使用"),(0,t.Wm)("code",null,"setInterval()"),(0,t.Uk)("时，仅当没有该定时器的任何其他代码实例时，才将定时器代码添加到队列中。这确保了定时器代码 加入到队列中的最小时间间隔为指定间隔")],-1),I=(0,t.Wm)("p",null,[(0,t.Uk)("但是，这样会导致两个问题："),(0,t.Wm)("strong",null,"1、某些间隔被跳过；2、多个定时器的代码执行之间的间隔可能比预期的小")],-1),A=(0,t.Wm)("p",null,[(0,t.Uk)("假设，某个"),(0,t.Wm)("code",null,"onclick"),(0,t.Uk)("事件处理程序使用"),(0,t.Wm)("code",null,"setInterval()"),(0,t.Uk)("设置了"),(0,t.Wm)("code",null,"200ms"),(0,t.Uk)("间隔的定时器。如果事件处理程序花了"),(0,t.Wm)("code",null,"300ms"),(0,t.Uk)("多一点时间完成，同时定时器代码也花了差不 多的时间，就会同时出现跳过某间隔的情况")],-1),T=(0,t.Wm)("p",null,[(0,t.Wm)("img",{src:e,alt:""})],-1),F=(0,t.Wm)("p",null,[(0,t.Uk)("例子中的第一个定时器是在"),(0,t.Wm)("code",null,"205ms"),(0,t.Uk)("处添加到队列中的，但是直到过了"),(0,t.Wm)("code",null,"300ms"),(0,t.Uk)("处才能执行。当执行这个定时器代码时，在"),(0,t.Wm)("code",null,"405ms"),(0,t.Uk)("处又给队列 添加了另一个副本。在下一个间隔，即605ms处，第一个定时器代码仍在运行，同时在队列中已经有了一个定时 器代码的实例。结果是，在这个时间点上的定时器代码不会被添加到队列中")],-1),x=(0,t.Wm)("h1",{id:"raf替代settimeout-setinterval",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#raf替代settimeout-setinterval","aria-hidden":"true"},"#"),(0,t.Uk)(" RAF替代setTimeout_setInterval")],-1),j=(0,t.Wm)("h2",{id:"迭代settimeout实现setinterval",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#迭代settimeout实现setinterval","aria-hidden":"true"},"#"),(0,t.Uk)(" 迭代setTimeout实现setInterval")],-1),E=(0,t.Wm)("p",null,[(0,t.Uk)("某些公司会禁用 "),(0,t.Wm)("code",null,"setInterval"),(0,t.Uk)(" 为了避免"),(0,t.Wm)("code",null,"setInterval()"),(0,t.Uk)("定时器的问题，可以使用链式"),(0,t.Wm)("code",null,"setTimeout()"),(0,t.Uk)("调用")],-1),q=(0,t.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-javascript"},[(0,t.Wm)("code",null,[(0,t.Wm)("span",{class:"token function"},"setTimeout"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"fn"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token function"},"setTimeout"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("fn"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)("interval"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)("interval"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br")])],-1),B=(0,t.Wm)("h2",{id:"模拟setinterval-settimeout的基本使用",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#模拟setinterval-settimeout的基本使用","aria-hidden":"true"},"#"),(0,t.Uk)(" 模拟setInterval/setTimeout的基本使用")],-1),S=(0,t.Wm)("h3",{id:"raf",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#raf","aria-hidden":"true"},"#"),(0,t.Uk)(" RAF")],-1),_=(0,t.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-javascript"},[(0,t.Wm)("code",null,[(0,t.Wm)("span",{class:"token keyword"},"class"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token class-name"},"RAF"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token function"},"constructor"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"init"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token function"},"init"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("_timerIdMap "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      timeout"),(0,t.Wm)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      interval"),(0,t.Wm)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token function"},"run"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("type "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token string"},"'interval'"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" cb"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" interval "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"16.7"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"const"),(0,t.Uk)(" now "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(" Date"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("now\n    "),(0,t.Wm)("span",{class:"token keyword"},"let"),(0,t.Uk)(" stime "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"now"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"let"),(0,t.Uk)(" etime "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(" stime\n    "),(0,t.Wm)("span",{class:"token comment"},"//创建Symbol类型作为key值，保证返回值的唯一性，用于清除定时器使用"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"const"),(0,t.Uk)(" timerSymbol "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"Symbol"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"const"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function-variable function"},"loop"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"setIdMap"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("timerSymbol"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" type"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" loop"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n      etime "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"now"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n      "),(0,t.Wm)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("etime "),(0,t.Wm)("span",{class:"token operator"},"-"),(0,t.Uk)(" stime "),(0,t.Wm)("span",{class:"token operator"},">="),(0,t.Uk)(" interval"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t.Wm)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("type "),(0,t.Wm)("span",{class:"token operator"},"==="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token string"},"'interval'"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n          stime "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"now"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n          etime "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(" stime\n        "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n        "),(0,t.Wm)("span",{class:"token function"},"cb"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n        type "),(0,t.Wm)("span",{class:"token operator"},"==="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token string"},"'timeout'"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"&&"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"clearTimeout"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("timerSymbol"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n      "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"setIdMap"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("timerSymbol"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" type"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" loop"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(" timerSymbol "),(0,t.Wm)("span",{class:"token comment"},"// 返回Symbol保证每次调用setTimeout/setInterval返回值的唯一性"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token function"},"setIdMap"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Uk)("timerSymbol"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" type"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" loop")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"const"),(0,t.Uk)(" id "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"requestAnimationFrame"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("loop"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("_timerIdMap"),(0,t.Wm)("span",{class:"token punctuation"},"["),(0,t.Uk)("type"),(0,t.Wm)("span",{class:"token punctuation"},"]"),(0,t.Wm)("span",{class:"token punctuation"},"["),(0,t.Uk)("timerSymbol"),(0,t.Wm)("span",{class:"token punctuation"},"]"),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(" id\n  "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token function"},"setTimeout"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Uk)("cb"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" interval")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("  "),(0,t.Wm)("span",{class:"token comment"},"// 实现setTimeout 功能"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"run"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},"'timeout'"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" cb"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" interval"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token function"},"clearTimeout"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},"timer"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token function"},"cancelAnimationFrame"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("_timerIdMap"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("timeout"),(0,t.Wm)("span",{class:"token punctuation"},"["),(0,t.Uk)("timer"),(0,t.Wm)("span",{class:"token punctuation"},"]"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token function"},"setInterval"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Uk)("cb"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" interval")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token comment"},"// 实现setInterval功能"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"run"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token string"},"'interval'"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" cb"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" interval"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token function"},"clearInterval"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},"timer"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t.Wm)("span",{class:"token function"},"cancelAnimationFrame"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("_timerIdMap"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("interval"),(0,t.Wm)("span",{class:"token punctuation"},"["),(0,t.Uk)("timer"),(0,t.Wm)("span",{class:"token punctuation"},"]"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  "),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"4"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"5"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"6"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"7"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"8"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"9"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"10"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"11"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"12"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"13"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"14"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"15"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"16"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"17"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"18"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"19"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"20"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"21"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"22"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"23"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"24"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"25"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"26"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"27"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"28"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"29"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"30"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"31"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"32"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"33"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"34"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"35"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"36"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"37"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"38"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"39"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"40"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"41"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"42"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"43"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"44"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"45"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"46"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"47"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"48"),(0,t.Wm)("br")])],-1),R=(0,t.Wm)("h3",{id:"使用",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),(0,t.Uk)(" 使用")],-1),M=(0,t.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-javascript"},[(0,t.Wm)("code",null,[(0,t.Wm)("span",{class:"token keyword"},"var"),(0,t.Uk)(" raf "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token class-name"},"RAF"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token keyword"},"var"),(0,t.Uk)(" timer1 "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(" raf"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"setInterval"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"=>"),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  console"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"log"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token number"},"1000"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"1000"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n"),(0,t.Wm)("span",{class:"token keyword"},"var"),(0,t.Uk)(" timer2 "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(" raf"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"setInterval"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"=>"),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  console"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"log"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token number"},"1500"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"1500"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\nraf"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"setTimeout"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  raf"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"clearInterval"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("timer1"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n  raf"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"clearInterval"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("timer2"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"6000"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"4"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"5"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"6"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"7"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"8"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"9"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"10"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"11"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"12"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"13"),(0,t.Wm)("br")])],-1),L=(0,t.Wm)("h2",{id:"引用",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#引用","aria-hidden":"true"},"#"),(0,t.Uk)(" 引用")],-1),z={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/window/requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"},C=(0,t.Uk)("requestAnimationFrame"),D={href:"https://www.cnblogs.com/xiaohuochai/p/5773183.html",target:"_blank",rel:"noopener noreferrer"},J=(0,t.Uk)("深入理解定时器系列第一篇——理解setTimeout和setInterval"),H={href:"https://zhuanlan.zhihu.com/p/34868095",target:"_blank",rel:"noopener noreferrer"},N=(0,t.Uk)("RAF替代setTimeout/setInterval"),O={render:function(n,s){const a=(0,t.up)("RouterLink"),e=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[o,l,m,c,u,p,i,k,W,(0,t.Wm)("p",null,[(0,t.Wm)(a,{to:"/JS/%E5%BE%AE%E4%BB%BB%E5%8A%A1_%E5%AE%8F%E4%BB%BB%E5%8A%A1%E4%B8%8EEvent-Loop.html"},{default:(0,t.w5)((()=>[r])),_:1})]),U,b,d,h,v,f,g,w,y,I,A,T,F,x,j,E,q,B,S,_,R,M,L,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",z,[C,(0,t.Wm)(e)])]),(0,t.Wm)("li",null,[(0,t.Wm)("a",D,[J,(0,t.Wm)(e)])]),(0,t.Wm)("li",null,[(0,t.Wm)("a",H,[N,(0,t.Wm)(e)])])])],64)}}}}]);