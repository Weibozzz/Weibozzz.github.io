(self.webpackChunkweiboqianduan=self.webpackChunkweiboqianduan||[]).push([[8588],{7451:(a,e,d)=>{"use strict";d.r(e),d.d(e,{data:()=>r});const r={key:"v-3ecf91f2",path:"/%E5%B7%A5%E5%85%B7/postman%E4%B8%ADform-data%E7%AD%89%E7%9A%84%E5%8C%BA%E5%88%AB.html",title:"postman中form-data等的区别",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"postman中 form-data、x-www-form-urlencoded、raw、binary的区别",slug:"postman中-form-data、x-www-form-urlencoded、raw、binary的区别",children:[]},{level:2,title:"form-data:",slug:"form-data",children:[]},{level:2,title:"x-www-form-urlencoded",slug:"x-www-form-urlencoded",children:[]},{level:2,title:"raw",slug:"raw",children:[]},{level:2,title:"binary",slug:"binary",children:[]},{level:2,title:"multipart/form-data与x-www-form-urlencoded区别",slug:"multipart-form-data与x-www-form-urlencoded区别",children:[]},{level:2,title:"来个美图",slug:"来个美图",children:[]}],filePathRelative:"工具/postman中form-data等的区别.md",git:{updatedTime:1626843914e3}}},6690:(a,e,d)=>{"use strict";d.r(e),d.d(e,{default:()=>t});const r=(0,d(6252).uE)('<h1 id="postman中form-data等的区别" tabindex="-1"><a class="header-anchor" href="#postman中form-data等的区别" aria-hidden="true">#</a> postman中form-data等的区别</h1><h2 id="postman中-form-data、x-www-form-urlencoded、raw、binary的区别" tabindex="-1"><a class="header-anchor" href="#postman中-form-data、x-www-form-urlencoded、raw、binary的区别" aria-hidden="true">#</a> postman中 form-data、x-www-form-urlencoded、raw、binary的区别</h2><h2 id="form-data" tabindex="-1"><a class="header-anchor" href="#form-data" aria-hidden="true">#</a> form-data:</h2><p>就是<code>http</code>请求中的<code>multipart/form-data</code>,它会将表单的数据处理为一条消息，以标签为单元，用分隔符分开。既可以上传键值对，也可以上传文件。当上传的字段是文件时，会有<code>Content-Type</code>来表名文件类型；<code>content-disposition</code>，用来说明字段的一些信息；</p><p>由于有<code>boundary</code>(边界)隔离，所以<code>multipart/form-data</code>既可以上传文件，也可以上传键值对，它采用了键值对的方式，所以可以上传多个文件。</p><h2 id="x-www-form-urlencoded" tabindex="-1"><a class="header-anchor" href="#x-www-form-urlencoded" aria-hidden="true">#</a> x-www-form-urlencoded</h2><p>就是<code>application/x-www-from-urlencoded</code>,会将表单内的数据转换为键值对，比如,<code>name=java&amp;age = 23</code></p><h2 id="raw" tabindex="-1"><a class="header-anchor" href="#raw" aria-hidden="true">#</a> raw</h2><p>可以上传任意格式的文本，可以上传<code>text、json、xml、html</code>等</p><h2 id="binary" tabindex="-1"><a class="header-anchor" href="#binary" aria-hidden="true">#</a> binary</h2><p>相当于<code>Content-Type:application/octet-stream</code>,从字面意思得知，只可以上传二进制数据，通常用来上传文件，由于没有键值，所以，一次只能上传一个文件。</p><h2 id="multipart-form-data与x-www-form-urlencoded区别" tabindex="-1"><a class="header-anchor" href="#multipart-form-data与x-www-form-urlencoded区别" aria-hidden="true">#</a> multipart/form-data与x-www-form-urlencoded区别</h2><p><code>multipart/form-data</code>：既可以上传文件等二进制数据，也可以上传表单键值对，只是最后会转化为一条信息；</p><p><code>x-www-form-urlencoded</code>：只能上传键值对，并且键值对都是间隔分开的。</p><h2 id="来个美图" tabindex="-1"><a class="header-anchor" href="#来个美图" aria-hidden="true">#</a> 来个美图</h2><p><img src="http://pd96wjt4m.bkt.clouddn.com/image/common/gaoyaunyaun_1536580019000_117916_1536580056783.jpg" alt="http://pd96wjt4m.bkt.clouddn.com/image/common/gaoyaunyaun_1536580019000_117916_1536580056783.jpg"></p>',16),t={render:function(a,e){return r}}}}]);