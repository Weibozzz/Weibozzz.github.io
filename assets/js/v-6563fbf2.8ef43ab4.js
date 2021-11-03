(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[1901],{1976:(n,a,e)=>{"use strict";e.r(a),e.d(a,{data:()=>t});const t={key:"v-6563fbf2",path:"/RegExp/%E5%85%88%E8%A1%8C%E6%96%AD%E8%A8%80%E5%92%8C%E5%90%8E%E8%A1%8C%E6%96%AD%E8%A8%80.html",title:"先行断言和后行断言",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"正则表达式的先行断言和后行断言一共有4种形式：",slug:"正则表达式的先行断言和后行断言一共有4种形式",children:[]},{level:2,title:"今日图 - DNS 劫持",slug:"今日图-dns-劫持",children:[]}],filePathRelative:"RegExp/先行断言和后行断言.md",git:{updatedTime:1627026748e3}}},4872:(n,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>$});var t=e(6252);const l=e.p+"assets/img/16a96f4b64f0ad8a.4cb14fd4.gif",s=(0,t.Wm)("h1",{id:"先行断言和后行断言",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#先行断言和后行断言","aria-hidden":"true"},"#"),(0,t.Uk)(" 先行断言和后行断言")],-1),o=(0,t.Wm)("blockquote",null,[(0,t.Wm)("p",null,"正则表达式的先行断言(lookahead)和后行断言(lookbehind)")],-1),m=(0,t.Wm)("h2",{id:"正则表达式的先行断言和后行断言一共有4种形式",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#正则表达式的先行断言和后行断言一共有4种形式","aria-hidden":"true"},"#"),(0,t.Uk)(" 正则表达式的先行断言和后行断言一共有4种形式：")],-1),c=(0,t.Wm)("ol",null,[(0,t.Wm)("li",null,[(0,t.Wm)("code",null," (?=pattern)"),(0,t.Uk)(" 零宽正向先行断言(zero-width positive lookahead assertion)")]),(0,t.Wm)("li",null,[(0,t.Wm)("code",null,"(?!pattern) "),(0,t.Uk)("零宽负向先行断言(zero-width negative lookahead assertion)")]),(0,t.Wm)("li",null,[(0,t.Wm)("code",null,"(?<=pattern)"),(0,t.Uk)(" 零宽正向后行断言(zero-width positive lookbehind assertion)")]),(0,t.Wm)("li",null,[(0,t.Wm)("code",null,"(?<!pattern)"),(0,t.Uk)(" 零宽负向后行断言(zero-width negative lookbehind assertion)")])],-1),p=(0,t.Wm)("p",null,[(0,t.Uk)("这里面的"),(0,t.Wm)("code",null,"pattern"),(0,t.Uk)("是一个正则表达式。")],-1),u=(0,t.Wm)("p",null,[(0,t.Uk)("如同"),(0,t.Wm)("code",null,"^"),(0,t.Uk)("代表开头，"),(0,t.Wm)("code",null,"$"),(0,t.Uk)("代表结尾，"),(0,t.Wm)("code",null,"\\b"),(0,t.Uk)("代表单词边界一样，先行断言和后行断言也有类似的作用，它们只匹配某些位置，在匹配过程中，不占用字符，所以被称为“零宽”。所谓位置，是指字符串中(每行)第一个字符的左边、最后一个字符的右边以及相邻字符的中间（假设文字方向是头左尾右）。下面分别举例来说明这4种断言的含义。")],-1),W=(0,t.Wm)("ol",null,[(0,t.Wm)("li",null,"关于先行(lookahead)和后行(lookbehind)：正则表达式引擎在执行字符串和表达式匹配时，会从头到尾（从前到后）连续扫描字符串中的字符，设想有一个扫描指针指向字符边界处并随匹配过程移动。先行断言，是当扫描指针位于某处时，引擎会尝试匹配指针还未扫过的字符，先于指针到达该字符，故称为先行。后行断言，引擎会尝试匹配指针已扫过的字符，后于指针到达该字符，故称为后行。"),(0,t.Wm)("li",null,"关于正向(positive)和负向(negative)：正向就表示匹配括号中的表达式，负向表示不匹配。")],-1),r=(0,t.Wm)("p",null,"对这4个断言形式的记忆：",-1),i=(0,t.Wm)("ol",null,[(0,t.Wm)("li",null,[(0,t.Uk)("先行和后行：后行断言"),(0,t.Wm)("code",null,"(?<=pattern)"),(0,t.Uk)("、"),(0,t.Wm)("code",null,"(?<!pattern)"),(0,t.Uk)("中，有个小于号，同时也是箭头，对于自左至右的文本方向，这个箭头是指向后的，这也比较符合我们的习惯。把小于号去掉，就是先行断言。")]),(0,t.Wm)("li",null,"正向和负向：不等于(!=)、逻辑非(!)都是用!号来表示，所以有!号的形式表示不匹配、负向；将!号换成=号，就表示匹配、正向。")],-1),k=(0,t.Wm)("p",null,"我们经常用正则表达式来检测一个字符串中包含某个子串，要表示一个字符串中不包含某个字符或某些字符也很容易，用[^...]形式就可以了。要表示一个字符串中不包含某个子串（由字符序列构成）呢？用[^...]这种形式就不行了，这时就要用到（负向）先行断言或后行断言、或同时使用。",-1),d=(0,t.Wm)("p",null,[(0,t.Uk)("例如判断一句话中包含"),(0,t.Wm)("code",null,"this"),(0,t.Uk)("，但不包含"),(0,t.Wm)("code",null,"that"),(0,t.Uk)("。")],-1),h=(0,t.Wm)("p",null,[(0,t.Uk)("包含"),(0,t.Wm)("code",null,"this"),(0,t.Uk)("比较好办，一句话中不包含"),(0,t.Wm)("code",null,"that"),(0,t.Uk)("，可以认为这句话中每个字符的前面都不是"),(0,t.Wm)("code",null,"that"),(0,t.Uk)("或每个字符的后面都不是"),(0,t.Wm)("code",null,"that"),(0,t.Uk)("。正则表达式如下："),(0,t.Wm)("code",null,"^((?<!that).)*this((?<!that).)*$ "),(0,t.Uk)("或 "),(0,t.Wm)("code",null,"^(.(?!that))*this(.(?!that))*$")],-1),U=(0,t.Wm)("p",null,[(0,t.Uk)("对于"),(0,t.Wm)("code",null,"this is the case"),(0,t.Uk)("这句话，两个表达式都能够匹配成功，而"),(0,t.Wm)("code",null,"note that this is the case"),(0,t.Uk)("都匹配失败。")],-1),b=(0,t.Wm)("p",null,[(0,t.Uk)("在一般情况下，这两个表达式基本上都能够满足要求了。考虑极端情况，如一句话以"),(0,t.Wm)("code",null,"that"),(0,t.Uk)("开头、以"),(0,t.Wm)("code",null,"that"),(0,t.Uk)("结尾、"),(0,t.Wm)("code",null,"that和this"),(0,t.Uk)("连在一起时，上述表达式就可能不胜任了。")],-1),g=(0,t.Wm)("p",null,[(0,t.Uk)("如"),(0,t.Wm)("code",null,"note thatthis is the case"),(0,t.Uk)("或者"),(0,t.Wm)("code",null,"this is the case, not that"),(0,t.Uk)("等。只要灵活运用这几个断言，就很容易解决：")],-1),f=(0,t.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-javascript"},[(0,t.Wm)("code",null,[(0,t.Wm)("span",{class:"token regex"},[(0,t.Wm)("span",{class:"token regex-delimiter"},"/"),(0,t.Wm)("span",{class:"token regex-source language-regex"},"^(.(?<!that))*this(.(?<!that))*$"),(0,t.Wm)("span",{class:"token regex-delimiter"},"/")]),(0,t.Uk)("\n\n"),(0,t.Wm)("span",{class:"token operator"},"/"),(0,t.Wm)("span",{class:"token operator"},"^"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token operator"},"?"),(0,t.Wm)("span",{class:"token operator"},"<"),(0,t.Wm)("span",{class:"token operator"},"!"),(0,t.Uk)("that"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token operator"},"*"),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token operator"},"?"),(0,t.Wm)("span",{class:"token operator"},"!"),(0,t.Uk)("that"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token operator"},"*"),(0,t.Uk)("$"),(0,t.Wm)("span",{class:"token operator"},"/"),(0,t.Uk)("\n\n"),(0,t.Wm)("span",{class:"token regex"},[(0,t.Wm)("span",{class:"token regex-delimiter"},"/"),(0,t.Wm)("span",{class:"token regex-source language-regex"},"^((?!that).)*this(.(?<!that))*$"),(0,t.Wm)("span",{class:"token regex-delimiter"},"/")]),(0,t.Uk)("\n\n"),(0,t.Wm)("span",{class:"token operator"},"/"),(0,t.Wm)("span",{class:"token operator"},"^"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token operator"},"?"),(0,t.Wm)("span",{class:"token operator"},"!"),(0,t.Uk)("that"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token operator"},"*"),(0,t.Wm)("span",{class:"token keyword"},"this"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token operator"},"?"),(0,t.Wm)("span",{class:"token operator"},"!"),(0,t.Uk)("that"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token operator"},"*"),(0,t.Uk)("$"),(0,t.Wm)("span",{class:"token operator"},"/"),(0,t.Uk)("\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"4"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"5"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"6"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"7"),(0,t.Wm)("br")])],-1),x=(0,t.Wm)("p",null,"这4个正则表达式测试上述的几句话，结果都能够满足要求。",-1),v=(0,t.Wm)("p",null,[(0,t.Uk)("上述4种断言，括号里的"),(0,t.Wm)("code",null,"pattern"),(0,t.Uk)("本身是一个正则表达式。但对2种后行断言有所限制，在"),(0,t.Wm)("code",null,"Perl和Python"),(0,t.Uk)("中，这个表达式必须是定长(fixed length)的，即不能使用"),(0,t.Wm)("code",null,"*、+、?"),(0,t.Uk)("等元字符，如"),(0,t.Wm)("code",null,"(?<=abc)"),(0,t.Uk)("没有问题，但"),(0,t.Wm)("code",null,"(?<=a*bc)"),(0,t.Uk)("是不被支持的，特别是当表达式中含有|连接的分支时，各个分支的长度必须相同。之所以不支持变长表达式，是因为当引擎检查后行断言时，无法确定要回溯多少步。Java支持"),(0,t.Wm)("code",null,"?、{m}、{n,m}"),(0,t.Uk)("等符号，但同样不支持"),(0,t.Wm)("code",null,"*、+"),(0,t.Uk)("字符。"),(0,t.Wm)("code",null,"Javascript"),(0,t.Uk)("ES6+支持后行断言，")],-1),E=(0,t.Wm)("h2",{id:"今日图-dns-劫持",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#今日图-dns-劫持","aria-hidden":"true"},"#"),(0,t.Uk)(" 今日图 - DNS 劫持")],-1),w=(0,t.Wm)("p",null,[(0,t.Wm)("img",{src:l,alt:"16a96f4b64f0ad8a.gif"})],-1),$={render:function(n,a){return(0,t.wg)(),(0,t.j4)(t.HY,null,[s,o,m,c,p,u,W,r,i,k,d,h,U,b,g,f,x,v,E,w],64)}}}}]);