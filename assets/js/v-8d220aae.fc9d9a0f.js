"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[122],{600:(i,l,e)=>{e.r(l),e.d(l,{data:()=>a});const a={key:"v-8d220aae",path:"/CodeHobby/%E8%87%AA%E6%88%91%E6%80%BB%E7%BB%93%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83.html",title:"自我总结代码规范",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"代码规范和不规范举例",slug:"代码规范和不规范举例",children:[{level:3,title:"函数块不要太长，太长影响阅读，一个函数做一件事",slug:"函数块不要太长-太长影响阅读-一个函数做一件事",children:[]},{level:3,title:"避免冗余代码和重复代码",slug:"避免冗余代码和重复代码",children:[]},{level:3,title:"一个文件做一件事， 整个文件代码不能太长，保持在300~500行以内",slug:"一个文件做一件事-整个文件代码不能太长-保持在300-500行以内",children:[]},{level:3,title:"不要提交直接执行的console.log信息，影响它人调试",slug:"不要提交直接执行的console-log信息-影响它人调试",children:[]},{level:3,title:"不要提交没用的注释代码，影响阅读和开发，如果要查看可以进行版本历史",slug:"不要提交没用的注释代码-影响阅读和开发-如果要查看可以进行版本历史",children:[]}]},{level:2,title:"一起努力吧",slug:"一起努力吧",children:[]}],filePathRelative:"CodeHobby/自我总结代码规范.md",git:{updatedTime:1627026748e3}}},67:(i,l,e)=>{e.r(l),e.d(l,{default:()=>m});const a=(0,e(6252).uE)('<h1 id="自我总结代码规范"><a class="header-anchor" href="#自我总结代码规范">#</a> 自我总结代码规范</h1><p><img src="http://images.liuweibo.cn/image/common/4e98d4964bba4bf8a142d78ae0f561ed_1556502144975_91876_1556502218526.jpg" alt="http://images.liuweibo.cn/image/common/4e98d4964bba4bf8a142d78ae0f561ed_1556502144975_91876_1556502218526.jpg"></p><blockquote><ol><li>函数块不要太长，太长影响阅读，一个函数做一件事</li></ol></blockquote><ol start="2"><li>避免冗余代码和重复代码</li><li>一个文件做一件事， 整个文件代码不能太长，保持在300~500行以内</li><li>不要提交直接执行的console.log信息，影响它人调试</li><li>不要提交没用的注释代码，影响阅读和开发，如果要查看可以进行版本历史</li></ol><h1 id="我的代码规范原则"><a class="header-anchor" href="#我的代码规范原则">#</a> 我的代码规范原则</h1><ul><li>影响阅读的代码，那就是不好代码</li><li>很多很相似的代码，那一定是重复冗余了</li></ul><p>以下是最近在某代码仓库js中发现不规范的代码，当然还有css规范了，有兴趣的可以自己上网搜索</p><h2 id="代码规范和不规范举例"><a class="header-anchor" href="#代码规范和不规范举例">#</a> 代码规范和不规范举例</h2><h3 id="函数块不要太长-太长影响阅读-一个函数做一件事"><a class="header-anchor" href="#函数块不要太长-太长影响阅读-一个函数做一件事">#</a> 函数块不要太长，太长影响阅读，一个函数做一件事</h3><ul><li><code>太长的函数块</code>:建议函数块以编辑器的一屏为准，几乎不用滚动条可以看完整个函数</li><li>可以看到这里的函数每行30行至更多。打开后必须滚动条才能看清楚这个函数</li></ul><p><img src="http://images.liuweibo.cn/image/common/%E5%A4%AA%E9%95%BF%E7%9A%84%E5%87%BD%E6%95%B0%E5%9D%97_1556500541041_80408_1556500607102.png" alt="http://images.liuweibo.cn/image/common/太长的函数块_1556500541041_80408_1556500607102.png"></p><ul><li>改良后的函数块</li><li>一个函数平均10-20行之间</li></ul><p><img src="http://images.liuweibo.cn/image/common/%E6%94%B9%E8%89%AF%E5%90%8E%E7%9A%84%E5%87%BD%E6%95%B0%E5%9D%97_1556500599756_60882_1556500629150.png" alt="http://images.liuweibo.cn/image/common/改良后的函数块_1556500599756_60882_1556500629150.png"></p><h3 id="避免冗余代码和重复代码"><a class="header-anchor" href="#避免冗余代码和重复代码">#</a> 避免冗余代码和重复代码</h3><ul><li>冗余代码示例</li><li>如果你发现了很多地方代码很相似，那肯定是代码重复冗余了</li></ul><p><img src="http://images.liuweibo.cn/image/common/%E5%86%97%E4%BD%99%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B_1556500214979_105654_1556500322420.png" alt="http://images.liuweibo.cn/image/common/冗余代码示例_1556500214979_105654_1556500322420.png"></p><ul><li>改良后冗余代码示例</li><li>发现重复和冗余的规律，统一用函数封装起来</li></ul><p><img src="http://images.liuweibo.cn/image/common/%E6%94%B9%E8%89%AF%E5%90%8E%E5%86%97%E4%BD%99%E4%BB%A3%E7%A0%81%E7%A4%BA%E4%BE%8B_1556500312094_61448_1556500342435.png" alt="http://images.liuweibo.cn/image/common/改良后冗余代码示例_1556500312094_61448_1556500342435.png"></p><h3 id="一个文件做一件事-整个文件代码不能太长-保持在300-500行以内"><a class="header-anchor" href="#一个文件做一件事-整个文件代码不能太长-保持在300-500行以内">#</a> 一个文件做一件事， 整个文件代码不能太长，保持在300~500行以内</h3><ul><li>文件代码结构划分</li><li>一个method可以拆分成文件夹，通过index入口导入</li><li>一个文件做一件事，可以看到一个文件才不到200行</li><li>还有文件顺序问题，比如vue钩子函数，建议不用把created写在最后</li></ul><p><img src="http://images.liuweibo.cn/image/common/%E6%96%87%E4%BB%B6%E4%BB%A3%E7%A0%81%E7%BB%93%E6%9E%84%E5%88%92%E5%88%86_1556500884307_81721_1556500891031.png" alt="http://images.liuweibo.cn/image/common/文件代码结构划分_1556500884307_81721_1556500891031.png"></p><ul><li>文件夹结构</li><li>公共的css提出来</li><li>公共的方法用mixin提出来</li></ul><p><img src="http://images.liuweibo.cn/image/common/%E6%96%87%E4%BB%B6%E5%A4%B9%E7%BB%93%E6%9E%84_1556501878761_9193_1556502019717.png" alt="http://images.liuweibo.cn/image/common/文件夹结构_1556501878761_9193_1556502019717.png"></p><h3 id="不要提交直接执行的console-log信息-影响它人调试"><a class="header-anchor" href="#不要提交直接执行的console-log信息-影响它人调试">#</a> 不要提交直接执行的console.log信息，影响它人调试</h3><ul><li>及时运行的log信息</li><li>写代码的时候可以用，提交尽量不要提交console.*信息</li></ul><p><img src="http://images.liuweibo.cn/image/common/%E5%8F%8A%E6%97%B6%E8%BF%90%E8%A1%8C%E7%9A%84log%E4%BF%A1%E6%81%AF_1556501040318_34890_1556501054303.png" alt="http://images.liuweibo.cn/image/common/及时运行的log信息_1556501040318_34890_1556501054303.png"></p><ul><li>杂乱的log控制台</li></ul><p><img src="http://images.liuweibo.cn/image/common/%E6%9D%82%E4%B9%B1%E7%9A%84log%E6%8E%A7%E5%88%B6%E5%8F%B0_1556501187781_68635_1556501198020.png" alt="http://images.liuweibo.cn/image/common/杂乱的log控制台_1556501187781_68635_1556501198020.png"></p><h3 id="不要提交没用的注释代码-影响阅读和开发-如果要查看可以进行版本历史"><a class="header-anchor" href="#不要提交没用的注释代码-影响阅读和开发-如果要查看可以进行版本历史">#</a> 不要提交没用的注释代码，影响阅读和开发，如果要查看可以进行版本历史</h3><ul><li>不要提交注释代码可在版本历史查看</li></ul><p><img src="http://images.liuweibo.cn/image/common/%E4%B8%8D%E8%A6%81%E6%8F%90%E4%BA%A4%E6%B3%A8%E9%87%8A%E4%BB%A3%E7%A0%81%E5%8F%AF%E5%9C%A8%E7%89%88%E6%9C%AC%E5%8E%86%E5%8F%B2%E6%9F%A5%E7%9C%8B_1556501356291_47046_1556501396795.png" alt="http://images.liuweibo.cn/image/common/不要提交注释代码可在版本历史查看_1556501356291_47046_1556501396795.png"></p><ul><li>版本历史</li></ul><p><img src="http://images.liuweibo.cn/image/common/%E7%89%88%E6%9C%AC%E5%8E%86%E5%8F%B2_1556501389366_62492_1556501504690.png" alt="http://images.liuweibo.cn/image/common/版本历史_1556501389366_62492_1556501504690.png"><img src="http://images.liuweibo.cn/image/common/vue%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83xmind%E5%9B%BE_1556614478517_220565_1556614506131.png" alt="http://images.liuweibo.cn/image/common/vue代码规范xmind图_1556614478517_220565_1556614506131.png"></p><h2 id="一起努力吧"><a class="header-anchor" href="#一起努力吧">#</a> 一起努力吧</h2><p><img src="http://images.liuweibo.cn/image/common/eef8cd777db65a7dd58d59c73c818ea4_1556502183522_30795_1556502235662.jpg" alt="http://images.liuweibo.cn/image/common/eef8cd777db65a7dd58d59c73c818ea4_1556502183522_30795_1556502235662.jpg"></p>',35),o={},m=(0,e(3744).Z)(o,[["render",function(i,l){return a}]])}}]);