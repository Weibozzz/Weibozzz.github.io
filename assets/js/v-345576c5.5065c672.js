"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[5648],{5223:(n,s,e)=>{e.r(s),e.d(s,{data:()=>l});const l={key:"v-345576c5",path:"/Utils/Linux/linux%E5%B8%B8%E7%94%A8%E6%93%8D%E4%BD%9C.html",title:"linux常用操作",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"进入 linux 服务器",slug:"进入-linux-服务器",children:[]},{level:2,title:"上传下载",slug:"上传下载",children:[]},{level:2,title:"文件操作",slug:"文件操作",children:[]},{level:2,title:"日期查看",slug:"日期查看",children:[]},{level:2,title:"输入输出",slug:"输入输出",children:[]},{level:2,title:"查看硬件信息",slug:"查看硬件信息",children:[]},{level:2,title:"关机，重启",slug:"关机-重启",children:[]},{level:2,title:"文件归档",slug:"文件归档",children:[]},{level:2,title:"文件查找",slug:"文件查找",children:[]},{level:2,title:"VIM模式  esc退出",slug:"vim模式-esc退出",children:[]},{level:2,title:"EX模式",slug:"ex模式",children:[]},{level:2,title:"关闭端口占用命令",slug:"关闭端口占用命令",children:[]},{level:2,title:"今日图 - 没有了他的总决赛",slug:"今日图-没有了他的总决赛",children:[]}],filePathRelative:"Utils/Linux/linux常用操作.md",git:{updatedTime:1630390062e3}}},878:(n,s,e)=>{e.r(s),e.d(s,{default:()=>B});var l=e(6252),a=e(3808);const r=(0,l._)("h1",{id:"linux常用操作",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#linux常用操作","aria-hidden":"true"},"#"),(0,l.Uk)(" linux常用操作")],-1),_=(0,l._)("h2",{id:"进入-linux-服务器",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#进入-linux-服务器","aria-hidden":"true"},"#"),(0,l.Uk)(" 进入 linux 服务器")],-1),b=(0,l._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token comment"},"# 用户名@ip地址"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token function"},"ssh"),(0,l.Uk)(" -p "),(0,l._)("span",{class:"token number"},"22"),(0,l.Uk)(" root@xx.xx.xx.xx\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br")])],-1),i=(0,l._)("h2",{id:"上传下载",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#上传下载","aria-hidden":"true"},"#"),(0,l.Uk)(" 上传下载")],-1),c=(0,l._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token comment"},"# 上传到服务器"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token function"},"scp"),(0,l.Uk)(" /Users/xx/xx.zip root@xx.xx.xx.xx:/opt/xx\n"),(0,l._)("span",{class:"token comment"},"# 从服务器下载文件到本地当前文件夹 并命名为test.sql"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token function"},"scp"),(0,l.Uk)(" -r root@xx.xx.xx.xx:/root/xx.sql test.sql\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br")])],-1),u=(0,l._)("h2",{id:"文件操作",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#文件操作","aria-hidden":"true"},"#"),(0,l.Uk)(" 文件操作")],-1),t=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"ren *.png *.jpg  重命名文件\n\ntouch nash 创建文件\n\ncp test test2    复制文件\n\ncp -rv textCopt testCopt2  复制文件夹 -r -v进度\n\nmv move testCopt/      移动文件\n\nmv test testCopt/movetest  移动文件并且重命名\n\nmv nash nash2  重命名\n\nrm shanchu   删除\n\nrm -r shanchu   删除文件夹\n\nrm -ri shanchu   交互式 带提示删除文件夹\n\nmkdir wenjiajia 创建文件夹\n\nrmdir wenjiajia 删除非空文件夹\n\npwd 当前文件路径\n\nrm -rf a 删除a文件夹\n\nll 列出文件详情\n\ncat 文件查看\n\nhead 文件的前面部分查看 或者  head -n 1 a.js 看前一行\n\ntail 文件的后面部分查看 或者  head -n 2 a.js 看后两行\n\ngrep ' 2' a.js  搜索带2的那一行\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"9"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"10"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"11"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"12"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"13"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"14"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"15"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"16"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"17"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"18"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"19"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"20"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"21"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"22"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"23"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"24"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"25"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"26"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"27"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"28"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"29"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"30"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"31"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"32"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"33"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"34"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"35"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"36"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"37"),(0,l._)("br")])],-1),m=(0,l._)("h2",{id:"日期查看",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#日期查看","aria-hidden":"true"},"#"),(0,l.Uk)(" 日期查看")],-1),p=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,'date 查看日期\n\ndate date +%Y--%m--%d    2017--07--16\n\ndate -s "11:26:00" 修改时间\n\nclock（hwclock）显示硬件时间\n\ncal 查看日期\n\nuptime 系统运行时间 负载\n')]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"9"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"10"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"11"),(0,l._)("br")])],-1),d=(0,l._)("h2",{id:"输入输出",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#输入输出","aria-hidden":"true"},"#"),(0,l.Uk)(" 输入输出")],-1),h=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"echo 输出一样的\n\ncat 输出文本内容\n\nmore 空格向下翻页\n\nless 上下翻页\n\nhead 显示文件默认头十行  -n指定几行\n\ntail 末尾几行    -n指定最后几行 -f追踪显示文件的更新（一般用于查看日志，命令不会退出）\n\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"9"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"10"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"11"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"12"),(0,l._)("br")])],-1),o=(0,l._)("h2",{id:"查看硬件信息",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#查看硬件信息","aria-hidden":"true"},"#"),(0,l.Uk)(" 查看硬件信息")],-1),x=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"lspci 查看PCI设备 -v查看详细信息\n\nlsusb 查看USB设备\n\nlsmod查看加载的模块（驱动）\n\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br")])],-1),g=(0,l._)("h2",{id:"关机-重启",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#关机-重启","aria-hidden":"true"},"#"),(0,l.Uk)(" 关机，重启")],-1),k=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"shutdown -h关机 -r重新启动\n\n-h  now\n\n-h  +10 10分钟后关机\n\n-h  23:30\n\n-r  now\n\npoweroff 立即关机\n\nreboot立即重启\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"9"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"10"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"11"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"12"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"13"),(0,l._)("br")])],-1),v=(0,l._)("h2",{id:"文件归档",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#文件归档","aria-hidden":"true"},"#"),(0,l.Uk)(" 文件归档")],-1),U=(0,l._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token comment"},"#安装unzip"),(0,l.Uk)("\nyum "),(0,l._)("span",{class:"token function"},"install"),(0,l.Uk)(" -y "),(0,l._)("span",{class:"token function"},"unzip"),(0,l.Uk)(),(0,l._)("span",{class:"token function"},"zip"),(0,l.Uk)("\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br")])],-1),f=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"zip test 文件名     压缩文件\n\nunzip test.zip  解压\n\ngzip\n\ntar -cvf 名字.tar  文件      创建归档\n\ntar -xvf 名字.tar\n\ntar -cvzf  名字.tar.gz   归档并压缩 调用了gzip\n\n\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"9"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"10"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"11"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"12"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"13"),(0,l._)("br")])],-1),w=(0,l._)("h2",{id:"文件查找",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#文件查找","aria-hidden":"true"},"#"),(0,l.Uk)(" 文件查找")],-1),j=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"locate 快速查找文件，文件夹\n\nupdatedb 手动更新数据库\n\nfind 查找位置 查找参数\n\nfind .-name *test* 包括\n\nfind / -name *.conf  找到结尾的\n\n-name\n\n-perm\n\n-user\n\n-group\n\n-ctime\n\n-type\n\n-size\n\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"9"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"10"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"11"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"12"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"13"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"14"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"15"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"16"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"17"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"18"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"19"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"20"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"21"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"22"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"23"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"24"),(0,l._)("br")])],-1),z=(0,l._)("h2",{id:"vim模式-esc退出",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#vim模式-esc退出","aria-hidden":"true"},"#"),(0,l.Uk)(" VIM模式 esc退出")],-1),I=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"-命令模式\n\n-插入模式 Y\n\n-ex模式  ：\n\n命令模式下：\n\ni 光标前插入\n\no 当前行下插入新行\n\ndd 删除整行\n\nyy 复制当前行\n\nn+yy 复制多行\n\np 将缓冲区的粘贴\n\nu 撤销上一个操作\n\nr 替换当前字符\n\n/ 查找关键字 n键移动\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"9"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"10"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"11"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"12"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"13"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"14"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"15"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"16"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"17"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"18"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"19"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"20"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"21"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"22"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"23"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"24"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"25"),(0,l._)("br")])],-1),y=(0,l._)("h2",{id:"ex模式",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#ex模式","aria-hidden":"true"},"#"),(0,l.Uk)(" EX模式")],-1),C=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"：w 保存当前模式\n\n：q 退出\n\n：q! 强制退出，不保存\n\n：x 保存并退出\n\n：set number 显示行号\n\n：！系统命令 执行一个系统命令显示结果\n\n：sh 切换到命令行，使用ctrl+d切换回vim\n\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"9"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"10"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"11"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"12"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"13"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"14"),(0,l._)("br")])],-1),D=(0,l._)("h2",{id:"关闭端口占用命令",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#关闭端口占用命令","aria-hidden":"true"},"#"),(0,l.Uk)(" 关闭端口占用命令")],-1),N=(0,l._)("p",null,"关闭端口占用命令 eg:",-1),P=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"1. netstat -nao | findstr “8080” 查询8080端口\n2. taskkill /pid 3017 /F 关闭pid为3017的进程\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br")])],-1),Y=(0,l._)("p",null,[(0,l.Uk)("详解 ↓ 但往往很多时候只需要查看某个端口的使用情况，它到底被那个进程（对应PID）占用了，或者你还需要把它"),(0,l._)("code",null,"Kill"),(0,l.Uk)("掉。")],-1),q=(0,l._)("p",null,[(0,l.Uk)("如果你在"),(0,l._)("code",null,"Windows"),(0,l.Uk)("操作系统，你可以使用"),(0,l._)("code",null,"netstat"),(0,l.Uk)("命令来查询"),(0,l._)("code",null,"PID"),(0,l.Uk)("，然后可以打开任务管理器，查看这个PID对应的进程名；如果PID没有显示，菜单》查看》选择列》选中PID即可；得知进程后，我们可以将进程杀掉。")],-1),E=(0,l._)("p",null,[(0,l.Uk)("下面我简单描述一下我所了解的在"),(0,l._)("code",null,"Windows"),(0,l.Uk)("和"),(0,l._)("code",null,"Linux"),(0,l.Uk)("系统下处理方式。（假如我们需要确定谁占用了我们的8080端口）")],-1),X=(0,l._)("p",null,[(0,l.Uk)("1、Windows平台 在windows控制台窗口下执行： 查询8080端口 "),(0,l._)("code",null,"netstat -nao | findstr “8080”")],-1),L=(0,l._)("p",null,[(0,l._)("code",null,"TCP 127.0.0.1:9010 0.0.0.0:0 LISTENING 3017"),(0,l.Uk)(" 你看到是PID为3017的进程占用了8080端口，如果进一步你想知道它的进程名称，你可以使用如下命令："),(0,l._)("code",null,"tasklist | findstr “3017” ")],-1),M=(0,l._)("p",null,[(0,l.Uk)("如果你想杀死这个进程，你当然可以用前面描述的那种方法，在任务管理器里把它"),(0,l._)("code",null,"KILL"),(0,l.Uk)("了，但如果你喜欢高效一点，那么用"),(0,l._)("code",null,"taskkill"),(0,l.Uk)("命令就可以了。"),(0,l._)("code",null,"taskkill /pid 3017 /F"),(0,l.Uk)("那么这个进程就灰灰湮灭了")],-1),W=(0,l._)("h2",{id:"今日图-没有了他的总决赛",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#今日图-没有了他的总决赛","aria-hidden":"true"},"#"),(0,l.Uk)(" 今日图 - 没有了他的总决赛")],-1),Z=(0,l._)("p",null,[(0,l._)("img",{src:a,alt:"weweew.gif"})],-1),B={render:function(n,s){return(0,l.wg)(),(0,l.iD)(l.HY,null,[r,_,b,i,c,u,t,m,p,d,h,o,x,g,k,v,U,f,w,j,z,I,y,C,D,N,P,Y,q,E,X,L,M,W,Z],64)}}},3808:n=>{n.exports="data:image/gif;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiOGVjOTJjNTUyNzRlMjM3M2ZiZWQ3NjY1NGNlODkyYjMuZ2lmIjs="}}]);