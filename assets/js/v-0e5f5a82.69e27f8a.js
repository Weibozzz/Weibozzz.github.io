"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[2307],{8315:(e,s,a)=>{a.r(s),a.d(s,{data:()=>d});const d={key:"v-0e5f5a82",path:"/Utils/Linux/ssh%E6%98%AF%E4%BB%80%E4%B9%88.html",title:"ssh是什么",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. 什么是ssh",slug:"_1-什么是ssh",children:[]},{level:2,title:"2. 基本用法",slug:"_2-基本用法",children:[]},{level:2,title:"3. 中间人攻击",slug:"_3-中间人攻击",children:[]},{level:2,title:"4. ssh的安全验证",slug:"_4-ssh的安全验证",children:[{level:3,title:"4.1 ssh免密登录",slug:"_4-1-ssh免密登录",children:[]}]},{level:2,title:"5. 应用(github添加ssh免密提交pull)",slug:"_5-应用-github添加ssh免密提交pull",children:[{level:3,title:"5.1 window 添加 ssh",slug:"_5-1-window-添加-ssh",children:[]},{level:3,title:"5.2 linux",slug:"_5-2-linux",children:[]}]}],filePathRelative:"Utils/Linux/ssh是什么.md",git:{updatedTime:1627026748e3}}},8914:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var d=a(6252);const i=(0,d.uE)('<h1 id="ssh是什么" tabindex="-1"><a class="header-anchor" href="#ssh是什么" aria-hidden="true">#</a> ssh是什么</h1><h2 id="_1-什么是ssh" tabindex="-1"><a class="header-anchor" href="#_1-什么是ssh" aria-hidden="true">#</a> 1. 什么是ssh</h2><p>简单来说，<code>ssh</code> 是一种网络协议，用于计算机之间的加密登录。 如果一个用户从本地计算机，使用 <code>ssh</code> 协议登录另一台远程计算机，我们就可以认为，这种登录是安全的，即使被中途截获，密码也不会泄露。 需要指出的是，<code>ssh</code> 只有一种协议，存在多种实现，既有商业实现，也有开源实现。</p><h2 id="_2-基本用法" tabindex="-1"><a class="header-anchor" href="#_2-基本用法" aria-hidden="true">#</a> 2. 基本用法</h2><ul><li><p>使用某个用户（例如 <code>user</code>）登录远程主机 <code>host</code>, 命令：<code>ssh user@host</code></p></li><li><p>如果本地用户名和远程用户名一致，则登录时可以省略用户名, 命令：<code>ssh host</code></p></li><li><p><code>ssh</code> 的默认端口是22，也就是说， 你的登录请求会送进远程主机的22端口。使用 <code>-p</code> 参数，可以修改这个端口, 命令：<code>ssh –p 端口号 user@host</code>,例如：我经常会进入自己服务器 <code>ssh -p 22 root@xx.xx.xx.xx</code>,输入密码可以进入</p></li></ul><h2 id="_3-中间人攻击" tabindex="-1"><a class="header-anchor" href="#_3-中间人攻击" aria-hidden="true">#</a> 3. 中间人攻击</h2><p><code>SSH</code> 之所以能够保证安全，原因在于它采用了公钥加密。整个过程如下：</p><ul><li>远程主机收到用户的登录请求，把自己的公钥发给用户。</li><li>用户使用这个公钥，将登录密码加密后，发送回来。</li><li>远程主机用自己的私钥，解密登录密码，如果密码正确，就同意用户登录。</li></ul><p>这个过程本身是安全的，但是实施的时候存在一个风险：如果有人截获了登录请求，然后冒充远程主机， 将伪造的公钥发给用户，那么用户很难辨别真伪。因为不像 <code>https</code> 协议，SSH协议的公钥是没有证书 中心（CA）公证的，也就是说，都是自己签发的。可以设想，如果攻击者插在用户与远程主机之 间（比如在公共的wifi区域），用伪造的公钥，获取用户的登录密码。再用这个密码登录远程主 机，那么SSH的安全机制就荡然无存了。这种风险就是著名的&quot;中间人攻击&quot;。</p><h2 id="_4-ssh的安全验证" tabindex="-1"><a class="header-anchor" href="#_4-ssh的安全验证" aria-hidden="true">#</a> 4. ssh的安全验证</h2><p>SSH有自己的一套验证方式，可以阻拦大部分的攻击，当然如果有人想通过撞库来尝试密码的话，就只有设置防火墙或者做其它的安全措施了。</p><p>从客户端来看，SSH提供两种级别的安全验证。</p><ul><li>第一种级别（基于口令的安全验证）</li></ul><p>只要你知道自己帐号和口令，就可以登录到远程主机。所有传输的数据 都会被加密，但是不能保证你正在连接的服务器就是你想连接的服务器。可能会有别的服务器在冒充真正的服务器，也就是受到“中间人”这种方式的攻击。</p><ul><li>第二种级别（基于密匙的安全验证）</li></ul><p>需要依靠密匙，也就是你必须为自己创建一对密匙，并把公用密匙放在 需要访问的服务器上。如果你要连接到SSH服务器上，客户端软件就会向 服务器发出请求，请求用你的密匙进行安全验证。服务器收到请求之后，先在该 服务器上你的主目录下寻找你的公用密匙，然后把它和你发送过来的公用密匙 进行比较。如果两个密匙一致，服务器就用公用密匙加密“质询”（challenge）并把它 发送给客户端软件。客户端软件收到“质询”之后就可以用你的私人密匙解密再把它发送给服务器。</p><p>用这种方式，你必须知道自己密匙的口令。但是，与第一种级别相比，第二种级 别不需要在网络上传送口令。第二种级别不仅加密所有传送的数据，而且“中间 人”这种攻击方式也是不可能的（因为他没有你的私人密匙）。但是整个登录的过 程可能需要10秒。</p><h3 id="_4-1-ssh免密登录" tabindex="-1"><a class="header-anchor" href="#_4-1-ssh免密登录" aria-hidden="true">#</a> 4.1 ssh免密登录</h3><p>执行这条命令 <code>ssh-copy-id -i .ssh/id_rsa.pub root@xx.xx.xx.xx</code> 写到服务器上的ssh目录下去，服务端 <code>.ssh</code> 下就多了一个文件可查看 <code>vim authorized_keys</code></p><h2 id="_5-应用-github添加ssh免密提交pull" tabindex="-1"><a class="header-anchor" href="#_5-应用-github添加ssh免密提交pull" aria-hidden="true">#</a> 5. 应用(github添加ssh免密提交pull)</h2><h3 id="_5-1-window-添加-ssh" tabindex="-1"><a class="header-anchor" href="#_5-1-window-添加-ssh" aria-hidden="true">#</a> 5.1 window 添加 ssh</h3>',21),h={href:"https://juejin.im/post/5ac0a382f265da238533012d",target:"_blank",rel:"noopener noreferrer"},n=(0,d.Uk)("https://juejin.im/post/5ac0a382f265da238533012d"),l=(0,d.uE)('<p>输入 <code>ssh-keygen -t rsa</code>，然后连续按回车键三次（如果输入密码，每次登陆都需要密码）</p><p>生成 <code>id_rsa</code> 和 <code>id_rsa</code>.pub 两个文件 ，id_rsa.pub为公钥，id_rsa为私钥，它们都是隐藏文件。 这里说明下生成的公钥和私钥所在位置，<code>Linux</code> 和 <code>Mac</code> 系统在 下面，<code>Windows</code> 系统在C盘 <code>Documents and Settings/username/.ssh</code> 下面</p><p>输入 <code>cat id_rsa.pub</code> 会出现公钥，紧接着添加 <code>SSH Key</code> 到 <code>GitHub</code> 上，我的头像下的 <code>setting</code></p><h3 id="_5-2-linux" tabindex="-1"><a class="header-anchor" href="#_5-2-linux" aria-hidden="true">#</a> 5.2 linux</h3><p>一般在根目录有</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root \n<span class="token comment"># 查看是否已经存在SSH-Key【其实就是查看.ssh这个隐藏目录是否存在】</span>\n<span class="token function">ls</span> -al ~/.ssh\n<span class="token comment">#如果存在直接查看</span>\n<span class="token function">cat</span> id_rsa.pub\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',6),c={},o=(0,a(3744).Z)(c,[["render",function(e,s){const a=(0,d.up)("OutboundLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[i,(0,d._)("p",null,[(0,d._)("a",h,[n,(0,d.Wm)(a)])]),l],64)}]])}}]);