"use strict";(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[2885],{5954:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-5831eb3c",path:"/Utils/Node/node%E7%89%88%E6%9C%AC%E5%88%87%E6%8D%A2.html",title:"node版本切换",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"node版本切换：nvm",slug:"node版本切换-nvm",children:[{level:3,title:"mac",slug:"mac",children:[]},{level:3,title:"window",slug:"window",children:[]}]},{level:2,title:"node版本切换：nvs",slug:"node版本切换-nvs",children:[{level:3,title:"安装",slug:"安装",children:[]},{level:3,title:"使用",slug:"使用",children:[]}]}],filePathRelative:"Utils/Node/node版本切换.md",git:{updatedTime:165235825e4}}},6855:(n,e,s)=>{s.r(e),s.d(e,{default:()=>t});var a=s(6252);const l=(0,a.uE)('<h1 id="node版本切换" tabindex="-1"><a class="header-anchor" href="#node版本切换" aria-hidden="true">#</a> node版本切换</h1><h2 id="node版本切换-nvm" tabindex="-1"><a class="header-anchor" href="#node版本切换-nvm" aria-hidden="true">#</a> node版本切换：nvm</h2><h3 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> mac</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 安装方式有两种：\n$ curl https://raw.github.com/creationix/nvm/v0.4.0/install.sh | sh\n//或者\n$ wget -qO- https://raw.github.com/creationix/nvm/v0.4.0/install.sh | sh\n\n以上脚本会把nvm库clone到~/.nvm，然后会在~/.bash_profile, ~/.zshrc或`~/.profile末尾添加source，安装完成之后，你可以用以下命令来安装node\n$ nvm install x.x.x\n\n// 使用指定的版本\n$ nvm use x.x.x\n\n// 查看当前已经安装的版本\n$ nvm ls\n.nvm\n-&gt;  vx.x.x\n\n// 查看正在使用的版本\n$ nvm current\nvx.x.x\n\n// 指定某个版本来执行文件\n$ nvm run x.x.x some.js\n\n// 卸载nvm\n$ rm -rf ~/.nvm\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> window</h3><p>下载地址：https://github.com/coreybutler/nvm-windows/releases</p><h2 id="node版本切换-nvs" tabindex="-1"><a class="header-anchor" href="#node版本切换-nvs" aria-hidden="true">#</a> node版本切换：nvs</h2><blockquote><p>跨平台</p></blockquote><p>用 <code>nvm</code> 安装 <code>node</code> 之后，如果每次启动终端的时候都要使用固定的版本 则使用输入命令 <code>nvm alias default stable</code> 就不需要每次 <code>nvm use v16.14.1</code></p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>',10),r={href:"https://github.com/jasongin/nvs/releases",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("nvs/releases"),d=(0,a.uE)('<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 安装镜像\nnvs remote node https://npm.taobao.org/mirrors/node/\n\nnvs --help\n\n# 查看已安装的版本\nnvs ls\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',2),c={},t=(0,s(3744).Z)(c,[["render",function(n,e){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",r,[i,(0,a.Wm)(s)])])]),d],64)}]])}}]);