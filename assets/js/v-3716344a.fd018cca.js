(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[8729],{2579:(n,s,e)=>{"use strict";e.r(s),e.d(s,{data:()=>a});const a={key:"v-3716344a",path:"/Utils/Node/npm%E5%92%8Cnpx%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97.html",title:"npm和npx使用指南",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"npx使用",slug:"npx使用",children:[]},{level:2,title:"npm使用",slug:"npm使用",children:[]},{level:2,title:"查看webpack所有版本号",slug:"查看webpack所有版本号",children:[]},{level:2,title:"查看源并设置",slug:"查看源并设置",children:[]},{level:2,title:"安装指定版本",slug:"安装指定版本",children:[]},{level:2,title:"update",slug:"update",children:[]},{level:2,title:"卸载",slug:"卸载",children:[]},{level:2,title:"npm scripts",slug:"npm-scripts",children:[]},{level:2,title:"原理",slug:"原理",children:[]},{level:2,title:"通配符",slug:"通配符",children:[]},{level:2,title:"传参",slug:"传参",children:[]},{level:2,title:"执行顺序",slug:"执行顺序",children:[]},{level:2,title:"钩子",slug:"钩子",children:[]},{level:2,title:"变量",slug:"变量",children:[]},{level:2,title:"其他",slug:"其他",children:[{level:3,title:"node_modules",slug:"node-modules",children:[]}]},{level:2,title:"今日图 - 老板画饼",slug:"今日图-老板画饼",children:[]}],filePathRelative:"Utils/Node/npm和npx使用指南.md",git:{updatedTime:1627026748e3}}},628:(n,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>Pn});var a=e(6252);const l=e.p+"assets/img/16ac3747430c8cd7.366130f1.gif",m=(0,a.Wm)("h1",{id:"npm和npx使用指南",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#npm和npx使用指南","aria-hidden":"true"},"#"),(0,a.Uk)(" npm和npx使用指南")],-1),t=(0,a.Wm)("h2",{id:"npx使用",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#npx使用","aria-hidden":"true"},"#"),(0,a.Uk)(" npx使用")],-1),c=(0,a.Wm)("p",null,[(0,a.Uk)("npm v5.2.0引入的一条命令（npx），引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验。 举例：使用"),(0,a.Wm)("code",null,"create-react-app"),(0,a.Uk)("创建一个react项目。 老方法：")],-1),p=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token function"},"install"),(0,a.Uk)(" -g create-react-app\ncreate-react-app my-app\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br")])],-1),u=(0,a.Wm)("p",null,[(0,a.Wm)("code",null,"npx"),(0,a.Uk)("方式：")],-1),i=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"npx create-react-app my-app\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),o=(0,a.Wm)("p",null,"这条命令会临时安装 create-react-app 包，命令完成后create-react-app 会删掉，不会出现在 global 中。下次再执行，还是会重新临时安装。",-1),W=(0,a.Wm)("p",null,[(0,a.Wm)("code",null,"npx"),(0,a.Uk)(" 会帮你执行依赖包里的二进制文件。 举例来说，之前我们可能会写这样的命令：")],-1),r=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" i -D webpack\n./node_modules/.bin/webpack -v\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br")])],-1),k=(0,a.Wm)("p",null,"如果你对 bash 比较熟，可能会写成这样：",-1),d=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" i -D webpack\n"),(0,a.Wm)("span",{class:"token variable"},[(0,a.Wm)("span",{class:"token variable"},"`"),(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" bin"),(0,a.Wm)("span",{class:"token variable"},"`")]),(0,a.Uk)("/webpack -v\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br")])],-1),b=(0,a.Wm)("p",null,"有了 npx，你只需要这样：",-1),h=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" i -D webpack\nnpx webpack -v\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br")])],-1),U=(0,a.Wm)("p",null,[(0,a.Uk)("也就是说"),(0,a.Wm)("code",null,"npx"),(0,a.Uk)("会自动查找当前依赖包中的可执行文件，如果找不到，就会去"),(0,a.Wm)("code",null,"PATH"),(0,a.Uk)("里找。如果依然找不到，就会帮你安装！ "),(0,a.Wm)("code",null,"npx"),(0,a.Uk)(" 甚至支持运行远程仓库的可执行文件： npx github:piuccio/cowsay hello")],-1),g=(0,a.Wm)("p",null,[(0,a.Uk)("再比如"),(0,a.Wm)("code",null," npx http-server"),(0,a.Uk)(" 可以一句话帮你开启一个静态服务器！（第一次运行会稍微慢一些） "),(0,a.Wm)("code",null,"npx http-server")],-1),v=(0,a.Wm)("p",null,[(0,a.Uk)("指定"),(0,a.Wm)("code",null,"node"),(0,a.Uk)("版本来运行"),(0,a.Wm)("code",null,"npm scripts"),(0,a.Uk)("：")],-1),f=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Uk)("npx -p node@8 "),(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" run build\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),x=(0,a.Wm)("p",null,"主要特点：",-1),w=(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,"临时安装可执行依赖包，不用全局安装，不用担心长期的污染。"),(0,a.Wm)("li",null,"可以执行依赖包中的命令，安装完成自动运行。"),(0,a.Wm)("li",null,"自动加载node_modules中依赖包，不用指定$PATH。"),(0,a.Wm)("li",null,"可以指定node版本、命令的版本，解决了不同项目使用不同版本的命令的问题。")],-1),j=(0,a.Wm)("h2",{id:"npm使用",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#npm使用","aria-hidden":"true"},"#"),(0,a.Uk)(" npm使用")],-1),_=(0,a.Wm)("h2",{id:"查看webpack所有版本号",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#查看webpack所有版本号","aria-hidden":"true"},"#"),(0,a.Uk)(" 查看"),(0,a.Wm)("code",null,"webpack"),(0,a.Uk)("所有版本号")],-1),y=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" view webpack versions  --json\n\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br")])],-1),E=(0,a.Wm)("h2",{id:"查看源并设置",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#查看源并设置","aria-hidden":"true"},"#"),(0,a.Uk)(" 查看源并设置")],-1),T=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" config get registry\n"),(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" config "),(0,a.Wm)("span",{class:"token builtin class-name"},"set"),(0,a.Uk)(" registry https://registry.npm.taobao.org\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br")])],-1),A=(0,a.Wm)("h2",{id:"安装指定版本",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#安装指定版本","aria-hidden":"true"},"#"),(0,a.Uk)(" 安装指定版本")],-1),R=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" i vue-cli@2.9.6 -g\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),D=(0,a.Wm)("h2",{id:"update",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#update","aria-hidden":"true"},"#"),(0,a.Uk)(" update")],-1),N=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Uk)(),(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" update 模块名\n //当然你也可以update 该模块到指定版本\n "),(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" update 模块名 @版本号\n //如果安装到最新版本可以使用以下命令\n "),(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token function"},"install"),(0,a.Uk)(" 模块名@latest\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"3"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"4"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"5"),(0,a.Wm)("br")])],-1),S=(0,a.Wm)("h2",{id:"卸载",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#卸载","aria-hidden":"true"},"#"),(0,a.Uk)(" 卸载")],-1),$=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" uninstall vue-cli -g\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),C=(0,a.Wm)("h2",{id:"npm-scripts",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#npm-scripts","aria-hidden":"true"},"#"),(0,a.Uk)(" npm scripts")],-1),H=(0,a.Wm)("h2",{id:"原理",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#原理","aria-hidden":"true"},"#"),(0,a.Uk)(" 原理")],-1),P=(0,a.Wm)("p",null,[(0,a.Wm)("code",null,"npm"),(0,a.Uk)(" 脚本的原理非常简单。每当执行"),(0,a.Wm)("code",null,"npm run"),(0,a.Uk)("，就会自动新建一个 "),(0,a.Wm)("code",null,"Shell"),(0,a.Uk)("，在这个 "),(0,a.Wm)("code",null,"Shell "),(0,a.Uk)("里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。")],-1),B=(0,a.Wm)("p",null,[(0,a.Uk)("比较特别的是，"),(0,a.Wm)("code",null,"npm run"),(0,a.Uk)("新建的这个 Shell，会将当前目录的"),(0,a.Wm)("code",null,"node_modules/.bin"),(0,a.Uk)("子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。")],-1),G=(0,a.Wm)("p",null,[(0,a.Uk)("这意味着，当前目录的node_modules/.bin子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写"),(0,a.Wm)("code",null,"mocha test"),(0,a.Uk)("就可以了。")],-1),O=(0,a.Wm)("h2",{id:"通配符",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#通配符","aria-hidden":"true"},"#"),(0,a.Uk)(" 通配符")],-1),q=(0,a.Wm)("p",null,"由于 npm 脚本就是 Shell 脚本，因为可以使用 Shell 通配符。",-1),I=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token string"},'"lint"'),(0,a.Wm)("span",{class:"token builtin class-name"},":"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},'"jshint *.js"'),(0,a.Uk)("\n"),(0,a.Wm)("span",{class:"token string"},'"lint"'),(0,a.Wm)("span",{class:"token builtin class-name"},":"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},'"jshint **/*.js"'),(0,a.Uk)("\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br")])],-1),V=(0,a.Wm)("p",null,[(0,a.Uk)("上面代码中，"),(0,a.Wm)("code",null,"*"),(0,a.Uk)("表示任意文件名，"),(0,a.Wm)("code",null,"**"),(0,a.Uk)("表示任意一层子目录。")],-1),z=(0,a.Wm)("p",null,"如果要将通配符传入原始命令，防止被 Shell 转义，要将星号转义。",-1),F=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token string"},'"test"'),(0,a.Wm)("span",{class:"token builtin class-name"},":"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},'"tap test/\\*.js"'),(0,a.Uk)("\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),L=(0,a.Wm)("h2",{id:"传参",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#传参","aria-hidden":"true"},"#"),(0,a.Uk)(" 传参")],-1),M=(0,a.Wm)("p",null,[(0,a.Uk)("向 "),(0,a.Wm)("code",null,"npm"),(0,a.Uk)(" 脚本传入参数，要使用"),(0,a.Wm)("code",null,"--"),(0,a.Uk)("标明。")],-1),Y=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token string"},'"lint"'),(0,a.Wm)("span",{class:"token builtin class-name"},":"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},'"jshint **.js"'),(0,a.Uk)("\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),J=(0,a.Wm)("p",null,[(0,a.Uk)("向上面的"),(0,a.Wm)("code",null,"npm run lint"),(0,a.Uk)("命令传入参数，必须写成下面这样。")],-1),K=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Uk)("$ "),(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" run lint --  --reporter checkstyle "),(0,a.Wm)("span",{class:"token operator"},">"),(0,a.Uk)(" checkstyle.xml\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),Q=(0,a.Wm)("p",null,[(0,a.Uk)("也可以在"),(0,a.Wm)("code",null,"package.json"),(0,a.Uk)("里面再封装一个命令。")],-1),X=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token string"},'"lint"'),(0,a.Wm)("span",{class:"token builtin class-name"},":"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},'"jshint **.js"'),(0,a.Uk)(",\n"),(0,a.Wm)("span",{class:"token string"},'"lint:checkstyle"'),(0,a.Wm)("span",{class:"token builtin class-name"},":"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},'"npm run lint -- --reporter checkstyle > checkstyle.xml"'),(0,a.Uk)("\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br")])],-1),Z=(0,a.Wm)("h2",{id:"执行顺序",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#执行顺序","aria-hidden":"true"},"#"),(0,a.Uk)(" 执行顺序")],-1),nn=(0,a.Wm)("p",null,"如果 npm 脚本里面需要执行多个任务，那么需要明确它们的执行顺序。",-1),sn=(0,a.Wm)("p",null,[(0,a.Uk)("如果是并行执行（即同时的平行执行），可以使用"),(0,a.Wm)("code",null,"&"),(0,a.Uk)("符号。")],-1),en=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Uk)("$ "),(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" run script1.js "),(0,a.Wm)("span",{class:"token operator"},"&"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" run script2.js\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),an=(0,a.Wm)("p",null,[(0,a.Uk)("如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用"),(0,a.Wm)("code",null,"&&"),(0,a.Uk)("符号。")],-1),ln=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Uk)("$ "),(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" run script1.js "),(0,a.Wm)("span",{class:"token operator"},"&&"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" run script2.js\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),mn=(0,a.Wm)("h2",{id:"钩子",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#钩子","aria-hidden":"true"},"#"),(0,a.Uk)(" 钩子")],-1),tn=(0,a.Wm)("p",null,[(0,a.Uk)("npm 脚本有"),(0,a.Wm)("code",null,"pre和post"),(0,a.Uk)("两个钩子。举例来说，build脚本命令的钩子就是"),(0,a.Wm)("code",null,"prebuild和postbuild"),(0,a.Uk)("。")],-1),cn=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token string"},'"prebuild"'),(0,a.Wm)("span",{class:"token builtin class-name"},":"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},'"echo I run before the build script"'),(0,a.Uk)(",\n"),(0,a.Wm)("span",{class:"token string"},'"build"'),(0,a.Wm)("span",{class:"token builtin class-name"},":"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},'"cross-env NODE_ENV=production webpack"'),(0,a.Uk)(",\n"),(0,a.Wm)("span",{class:"token string"},'"postbuild"'),(0,a.Wm)("span",{class:"token builtin class-name"},":"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},'"echo I run after the build script"'),(0,a.Uk)("\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"3"),(0,a.Wm)("br")])],-1),pn=(0,a.Wm)("p",null,[(0,a.Uk)("用户执行"),(0,a.Wm)("code",null,"npm run build"),(0,a.Uk)("的时候，会自动按照下面的顺序执行。")],-1),un=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" run prebuild "),(0,a.Wm)("span",{class:"token operator"},"&&"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" run build "),(0,a.Wm)("span",{class:"token operator"},"&&"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" run postbuild\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),on=(0,a.Wm)("p",null,"因此，可以在这两个钩子里面，完成一些准备工作和清理工作。下面是一个例子。",-1),Wn=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token string"},'"clean"'),(0,a.Wm)("span",{class:"token builtin class-name"},":"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},'"rimraf ./dist && mkdir dist"'),(0,a.Uk)(",\n"),(0,a.Wm)("span",{class:"token string"},'"prebuild"'),(0,a.Wm)("span",{class:"token builtin class-name"},":"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},'"npm run clean"'),(0,a.Uk)(",\n"),(0,a.Wm)("span",{class:"token string"},'"build"'),(0,a.Wm)("span",{class:"token builtin class-name"},":"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},'"cross-env NODE_ENV=production webpack"'),(0,a.Uk)("\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"3"),(0,a.Wm)("br")])],-1),rn=(0,a.Wm)("p",null,"npm 默认提供下面这些钩子。",-1),kn=(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,"prepublish，postpublish"),(0,a.Wm)("li",null,"preinstall，postinstall"),(0,a.Wm)("li",null,"preuninstall，postuninstall"),(0,a.Wm)("li",null,"preversion，postversion"),(0,a.Wm)("li",null,"pretest，posttest"),(0,a.Wm)("li",null,"prestop，poststop"),(0,a.Wm)("li",null,"prestart，poststart"),(0,a.Wm)("li",null,"prerestart，postrestart")],-1),dn=(0,a.Wm)("p",null,[(0,a.Uk)("自定义的脚本命令也可以加上"),(0,a.Wm)("code",null,"pre和post"),(0,a.Uk)("钩子。比如，"),(0,a.Wm)("code",null,"myscript"),(0,a.Uk)("这个脚本命令，也有"),(0,a.Wm)("code",null,"premyscript和postmyscript"),(0,a.Uk)("钩子。不过，双重的"),(0,a.Wm)("code",null,"pre和post"),(0,a.Uk)("无效，比如"),(0,a.Wm)("code",null,"prepretest和postposttest"),(0,a.Uk)("是无效的。")],-1),bn=(0,a.Wm)("p",null,[(0,a.Uk)("npm 提供一个"),(0,a.Wm)("code",null,"npm_lifecycle_event"),(0,a.Uk)("变量，返回当前正在运行的脚本名称，比如"),(0,a.Wm)("code",null,"pretest、test、posttest"),(0,a.Uk)("等等。所以，可以利用这个变量，在同一个脚本文件里面，为不同的"),(0,a.Wm)("code",null,"npm scripts"),(0,a.Uk)("命令编写代码。请看下面的例子。")],-1),hn=(0,a.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-javascript"},[(0,a.Wm)("code",null,[(0,a.Uk)("\n"),(0,a.Wm)("span",{class:"token keyword"},"const"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token constant"},"TARGET"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token operator"},"="),(0,a.Uk)(" process"),(0,a.Wm)("span",{class:"token punctuation"},"."),(0,a.Uk)("env"),(0,a.Wm)("span",{class:"token punctuation"},"."),(0,a.Uk)("npm_lifecycle_event"),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n\n"),(0,a.Wm)("span",{class:"token keyword"},"if"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token punctuation"},"("),(0,a.Wm)("span",{class:"token constant"},"TARGET"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token operator"},"==="),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},"'test'"),(0,a.Wm)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  console"),(0,a.Wm)("span",{class:"token punctuation"},"."),(0,a.Wm)("span",{class:"token function"},"log"),(0,a.Wm)("span",{class:"token punctuation"},"("),(0,a.Wm)("span",{class:"token template-string"},[(0,a.Wm)("span",{class:"token template-punctuation string"},"`"),(0,a.Wm)("span",{class:"token string"},"Running the test task!"),(0,a.Wm)("span",{class:"token template-punctuation string"},"`")]),(0,a.Wm)("span",{class:"token punctuation"},")"),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n"),(0,a.Wm)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n\n"),(0,a.Wm)("span",{class:"token keyword"},"if"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token punctuation"},"("),(0,a.Wm)("span",{class:"token constant"},"TARGET"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token operator"},"==="),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},"'pretest'"),(0,a.Wm)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  console"),(0,a.Wm)("span",{class:"token punctuation"},"."),(0,a.Wm)("span",{class:"token function"},"log"),(0,a.Wm)("span",{class:"token punctuation"},"("),(0,a.Wm)("span",{class:"token template-string"},[(0,a.Wm)("span",{class:"token template-punctuation string"},"`"),(0,a.Wm)("span",{class:"token string"},"Running the pretest task!"),(0,a.Wm)("span",{class:"token template-punctuation string"},"`")]),(0,a.Wm)("span",{class:"token punctuation"},")"),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n"),(0,a.Wm)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n\n"),(0,a.Wm)("span",{class:"token keyword"},"if"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token punctuation"},"("),(0,a.Wm)("span",{class:"token constant"},"TARGET"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token operator"},"==="),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},"'posttest'"),(0,a.Wm)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  console"),(0,a.Wm)("span",{class:"token punctuation"},"."),(0,a.Wm)("span",{class:"token function"},"log"),(0,a.Wm)("span",{class:"token punctuation"},"("),(0,a.Wm)("span",{class:"token template-string"},[(0,a.Wm)("span",{class:"token template-punctuation string"},"`"),(0,a.Wm)("span",{class:"token string"},"Running the posttest task!"),(0,a.Wm)("span",{class:"token template-punctuation string"},"`")]),(0,a.Wm)("span",{class:"token punctuation"},")"),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n"),(0,a.Wm)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"3"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"4"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"5"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"6"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"7"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"8"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"9"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"10"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"11"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"12"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"13"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"14"),(0,a.Wm)("br")])],-1),Un=(0,a.Wm)("p",null,[(0,a.Uk)("注意，"),(0,a.Wm)("code",null,"prepublish"),(0,a.Uk)("这个钩子不仅会在"),(0,a.Wm)("code",null,"npm publish"),(0,a.Uk)("命令之前运行，还会在"),(0,a.Wm)("code",null,"npm install"),(0,a.Uk)("（不带任何参数）命令之前运行。这种行为很容易让用户感到困惑，所以 npm 4 引入了一个新的钩子"),(0,a.Wm)("code",null,"prepare"),(0,a.Uk)("，行为等同于"),(0,a.Wm)("code",null,"prepublish"),(0,a.Uk)("，而从 "),(0,a.Wm)("code",null,"npm 5"),(0,a.Uk)(" 开始，"),(0,a.Wm)("code",null,"prepublish"),(0,a.Uk)("将只在"),(0,a.Wm)("code",null,"npm publish"),(0,a.Uk)("命令之前运行。")],-1),gn=(0,a.Wm)("h2",{id:"变量",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#变量","aria-hidden":"true"},"#"),(0,a.Uk)(" 变量")],-1),vn=(0,a.Wm)("p",null,"npm 脚本有一个非常强大的功能，就是可以使用 npm 的内部变量。",-1),fn=(0,a.Wm)("p",null,[(0,a.Uk)("首先，通过"),(0,a.Wm)("code",null,"npm_package_"),(0,a.Uk)("前缀，npm 脚本可以拿到"),(0,a.Wm)("code",null,"package.json"),(0,a.Uk)("里面的字段。比如，下面是一个package.json。")],-1),xn=(0,a.Wm)("div",{class:"language-json ext-json line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-json"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a.Wm)("span",{class:"token property"},'"name"'),(0,a.Wm)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},'"foo"'),(0,a.Wm)("span",{class:"token punctuation"},","),(0,a.Uk)("\n  "),(0,a.Wm)("span",{class:"token property"},'"version"'),(0,a.Wm)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},'"1.2.5"'),(0,a.Wm)("span",{class:"token punctuation"},","),(0,a.Uk)("\n  "),(0,a.Wm)("span",{class:"token property"},'"scripts"'),(0,a.Wm)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a.Wm)("span",{class:"token property"},'"view"'),(0,a.Wm)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},'"node view.js"'),(0,a.Uk)("\n  "),(0,a.Wm)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n"),(0,a.Wm)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"3"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"4"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"5"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"6"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"7"),(0,a.Wm)("br")])],-1),wn=(0,a.Wm)("p",null,[(0,a.Uk)("那么，变量"),(0,a.Wm)("code",null,"npm_package_name"),(0,a.Uk)("返回"),(0,a.Wm)("code",null,"foo"),(0,a.Uk)("，变量"),(0,a.Wm)("code",null,"npm_package_version"),(0,a.Uk)("返回"),(0,a.Wm)("code",null,"1.2.5"),(0,a.Uk)("。")],-1),jn=(0,a.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-javascript"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token comment"},"// view.js"),(0,a.Uk)("\nconsole"),(0,a.Wm)("span",{class:"token punctuation"},"."),(0,a.Wm)("span",{class:"token function"},"log"),(0,a.Wm)("span",{class:"token punctuation"},"("),(0,a.Uk)("process"),(0,a.Wm)("span",{class:"token punctuation"},"."),(0,a.Uk)("env"),(0,a.Wm)("span",{class:"token punctuation"},"."),(0,a.Uk)("npm_package_name"),(0,a.Wm)("span",{class:"token punctuation"},")"),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token comment"},"// foo"),(0,a.Uk)("\nconsole"),(0,a.Wm)("span",{class:"token punctuation"},"."),(0,a.Wm)("span",{class:"token function"},"log"),(0,a.Wm)("span",{class:"token punctuation"},"("),(0,a.Uk)("process"),(0,a.Wm)("span",{class:"token punctuation"},"."),(0,a.Uk)("env"),(0,a.Wm)("span",{class:"token punctuation"},"."),(0,a.Uk)("npm_package_version"),(0,a.Wm)("span",{class:"token punctuation"},")"),(0,a.Wm)("span",{class:"token punctuation"},";"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token comment"},"// 1.2.5"),(0,a.Uk)("\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"3"),(0,a.Wm)("br")])],-1),_n=(0,a.Wm)("p",null,[(0,a.Uk)("上面代码中，我们通过环境变量"),(0,a.Wm)("code",null,"process.env"),(0,a.Uk)("对象，拿到"),(0,a.Wm)("code",null,"package.json"),(0,a.Uk)("的字段值。如果是"),(0,a.Wm)("code",null,"Bash"),(0,a.Uk)("脚本，可以用"),(0,a.Wm)("code",null,"$npm_package_name和$npm_package_version"),(0,a.Uk)("取到这两个值。")],-1),yn=(0,a.Uk)("摘自："),En={href:"http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html",target:"_blank",rel:"noopener noreferrer"},Tn=(0,a.Uk)("http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html"),An=(0,a.Wm)("h2",{id:"其他",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#其他","aria-hidden":"true"},"#"),(0,a.Uk)(" 其他")],-1),Rn=(0,a.Wm)("p",null,[(0,a.Uk)("有时候我们 "),(0,a.Wm)("code",null,"npm install"),(0,a.Uk)(" 安装报错信息奇怪，已经找过原因，我们可以试试清楚缓存")],-1),Dn=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" cache clean --force\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),Nn=(0,a.Wm)("h3",{id:"node-modules",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#node-modules","aria-hidden":"true"},"#"),(0,a.Uk)(" node_modules")],-1),Sn=(0,a.Wm)("p",null,[(0,a.Uk)("有时候需要对 "),(0,a.Wm)("code",null,"npm(node_modules)"),(0,a.Uk)(" 包,做修改？ 如何做到修改了 "),(0,a.Wm)("code",null,"node_module"),(0,a.Uk)(" 中的包，却不受重新安装的影响, "),(0,a.Wm)("code",null,"patch-package"),(0,a.Uk)(" 这个 "),(0,a.Wm)("code",null,"npm"),(0,a.Uk)(" 是个好东西会帮到你。")],-1),$n=(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,"https://github.com/ds300/patch-package"),(0,a.Wm)("li",null,"https://juejin.cn/post/6955736879106883597")],-1),Cn=(0,a.Wm)("h2",{id:"今日图-老板画饼",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#今日图-老板画饼","aria-hidden":"true"},"#"),(0,a.Uk)(" 今日图 - 老板画饼")],-1),Hn=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:l,alt:"16ac3747430c8cd7.gif"})],-1),Pn={render:function(n,s){const e=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[m,t,c,p,u,i,o,W,r,k,d,b,h,U,g,v,f,x,w,j,_,y,E,T,A,R,D,N,S,$,C,H,P,B,G,O,q,I,V,z,F,L,M,Y,J,K,Q,X,Z,nn,sn,en,an,ln,mn,tn,cn,pn,un,on,Wn,rn,kn,dn,bn,hn,Un,gn,vn,fn,xn,wn,jn,_n,(0,a.Wm)("p",null,[yn,(0,a.Wm)("a",En,[Tn,(0,a.Wm)(e)])]),An,Rn,Dn,Nn,Sn,$n,Cn,Hn],64)}}}}]);