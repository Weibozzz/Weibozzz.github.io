(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[1330],{6186:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-6355e247",path:"/Vue/vue-%E9%85%8D%E7%BD%AE%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD.html",title:"vue-配置按需加载",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"版本",slug:"版本",children:[]},{level:2,title:"babel.config.js",slug:"babel-config-js",children:[]},{level:2,title:"打包分析",slug:"打包分析",children:[]}],filePathRelative:"Vue/vue-配置按需加载.md",git:{updatedTime:1626843914e3}}},9243:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="vue-配置按需加载" tabindex="-1"><a class="header-anchor" href="#vue-配置按需加载" aria-hidden="true">#</a> vue-配置按需加载</h1><h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h2><p>vue-cli 4.x</p><h2 id="babel-config-js" tabindex="-1"><a class="header-anchor" href="#babel-config-js" aria-hidden="true">#</a> babel.config.js</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> babel-plugin-component -D\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>多个同时配置 <code>lodash element-ui mini-ui</code>,另外 <code>lodash</code> 需要增加插件</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// lodash 要增加的</span>\n<span class="token keyword">const</span> LodashModuleReplacementPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash-webpack-plugin&#39;</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  configureWebpack<span class="token operator">:</span> <span class="token punctuation">{</span>\n    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token keyword">new</span> <span class="token class-name">LodashModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// babel.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  presets<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">&#39;@vue/cli-plugin-babel/preset&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&#39;modules&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;plugins&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&#39;lodash&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token string">&#39;component&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token string">&#39;libraryName&#39;</span><span class="token operator">:</span> <span class="token string">&#39;mint-ui&#39;</span><span class="token punctuation">,</span>\n        <span class="token string">&#39;style&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token string">&#39;mint-ui&#39;</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token string">&#39;component&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> <span class="token string">&#39;libraryName&#39;</span><span class="token operator">:</span> <span class="token string">&#39;element-ui&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;styleLibraryName&#39;</span><span class="token operator">:</span> <span class="token string">&#39;theme-chalk&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token string">&#39;element-ui&#39;</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="打包分析" tabindex="-1"><a class="header-anchor" href="#打包分析" aria-hidden="true">#</a> 打包分析</h2><ul><li>配置环境</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// .env.report\nVUE_APP_REPORT=true\nNODE_ENV=production\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>增加插件</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// babel.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_REPORT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      config\n        <span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-bundle-analyzer&#39;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>BundleAnalyzerPlugin<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token parameter">Plugin</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Plugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>package.json</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n   <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;analyze&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build --report --mode report&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',15),e={render:function(n,s){return p}}}}]);