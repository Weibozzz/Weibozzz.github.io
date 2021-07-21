(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[4875],{4287:(e,a,l)=>{"use strict";l.r(a),l.d(a,{data:()=>r});const r={key:"v-348d655c",path:"/%E5%B7%A5%E5%85%B7/babel%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91.html",title:"babel插件开发",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"AST 是什么",slug:"ast-是什么",children:[]},{level:2,title:"AST 有什么用",slug:"ast-有什么用",children:[]},{level:2,title:"AST 转化过程",slug:"ast-转化过程",children:[]},{level:2,title:"例子 实战",slug:"例子-实战",children:[]},{level:2,title:"引用",slug:"引用",children:[]},{level:2,title:"babel官网例子",slug:"babel官网例子",children:[]}],filePathRelative:"工具/babel插件开发.md",git:{updatedTime:162684715e4}}},2438:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>j});var r=l(6252);const t=(0,r.uE)('<h1 id="babel插件开发" tabindex="-1"><a class="header-anchor" href="#babel插件开发" aria-hidden="true">#</a> babel插件开发</h1><h2 id="ast-是什么" tabindex="-1"><a class="header-anchor" href="#ast-是什么" aria-hidden="true">#</a> AST 是什么</h2><p>抽象语法树 <code>(Abstract Syntax Tree)</code>，简称 <code>AST</code>，它是源代码语法结 构的一种抽象表示。 它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。</p><h2 id="ast-有什么用" tabindex="-1"><a class="header-anchor" href="#ast-有什么用" aria-hidden="true">#</a> AST 有什么用</h2><p><code>AST</code> 运用广泛，比如：</p><p>编辑器的错误提示、代码格式化、代码高亮、代码自动补全； <code>elint</code>、<code>pretiier</code> 对代码错误或风格的检查； <code>webpack</code> 通过 <code>babel</code> 转译 <code>javascript</code> 语法；</p><p>并且如果你想了解 js 编译执行的原理，那么你就得了解 AST。</p><h2 id="ast-转化过程" tabindex="-1"><a class="header-anchor" href="#ast-转化过程" aria-hidden="true">#</a> AST 转化过程</h2><ul><li>@babel/parser : 将 js 代码 -------&gt;&gt;&gt; AST 抽象语法树；</li><li>@babel/traverse 对 AST 节点进行递归遍历；</li><li>@babel/types 对具体的 AST 节点进行进行修改；</li><li>@babel/generator : AST 抽象语法树 -------&gt;&gt;&gt; 新的 js 代码；</li></ul><h2 id="例子-实战" tabindex="-1"><a class="header-anchor" href="#例子-实战" aria-hidden="true">#</a> 例子 实战</h2>',10),n={href:"https://juejin.im/post/5e0a245df265da33cf1aea91",target:"_blank",rel:"noopener noreferrer"},i=(0,r.Uk)("手把手带你入门 AST 抽象语法树"),d=(0,r.Wm)("h2",{id:"引用",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#引用","aria-hidden":"true"},"#"),(0,r.Uk)(" 引用")],-1),b={href:"https://juejin.im/post/5e0a245df265da33cf1aea91",target:"_blank",rel:"noopener noreferrer"},h=(0,r.Uk)("手把手带你入门 AST 抽象语法树"),o={href:"http://www.goyth.com/2018/12/23/AST/#ExpressionStatement",target:"_blank",rel:"noopener noreferrer"},s=(0,r.Uk)("AST中文"),c={href:"https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#toc-basics",target:"_blank",rel:"noopener noreferrer"},u=(0,r.Uk)("Babel 插件手册"),m={href:"https://juejin.im/post/5b15f43fe51d4506b26e9638",target:"_blank",rel:"noopener noreferrer"},p=(0,r.Uk)("babel插件开发心得"),f={href:"https://github.com/yeyan1996/async-catch-loader",target:"_blank",rel:"noopener noreferrer"},g=(0,r.Uk)("一个自动给 async 函数注入 try/catch 的 webpack loader"),W=(0,r.Wm)("h2",{id:"babel官网例子",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#babel官网例子","aria-hidden":"true"},"#"),(0,r.Uk)(" babel官网例子")],-1),k=(0,r.Wm)("p",null,"由容易到难，从别人写的例子去学习",-1),A={href:"https://github.com/babel/minify/blob/master/packages/babel-plugin-transform-remove-debugger/src/index.js",target:"_blank",rel:"noopener noreferrer"},S=(0,r.Uk)("babel-plugin-transform-remove-debugger"),T=(0,r.Wm)("li",null,"https://github.com/babel/minify/tree/master/packages",-1),j={render:function(e,a){const l=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.j4)(r.HY,null,[t,(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)("a",n,[i,(0,r.Wm)(l)])])]),d,(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)("a",b,[h,(0,r.Wm)(l)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",o,[s,(0,r.Wm)(l)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",c,[u,(0,r.Wm)(l)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",m,[p,(0,r.Wm)(l)])]),(0,r.Wm)("li",null,[(0,r.Wm)("a",f,[g,(0,r.Wm)(l)])])]),W,k,(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)("a",A,[S,(0,r.Wm)(l)])]),T])],64)}}}}]);