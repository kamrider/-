"use strict";(self.webpackChunkxzs_docs=self.webpackChunkxzs_docs||[]).push([[803],{9252:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-745beb88",path:"/guide/develop.html",title:"5. 项目开发",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"5.1 开发说明",slug:"_5-1-开发说明",children:[]},{level:3,title:"5.2 后端开发",slug:"_5-2-后端开发",children:[]},{level:3,title:"5.3 前端开发",slug:"_5-3-前端开发",children:[]},{level:3,title:"5.4 小程序开发",slug:"_5-4-小程序开发",children:[]},{level:3,title:"5.5 代码结构简介",slug:"_5-5-代码结构简介",children:[]}],filePathRelative:"guide/develop.md",git:{updatedTime:1635816285e3}}},5452:(n,e,s)=>{s.r(e),s.d(e,{default:()=>v});var a=s(6252);const l=(0,a.uE)('<h1 id="_5-项目开发" tabindex="-1"><a class="header-anchor" href="#_5-项目开发" aria-hidden="true">#</a> 5. 项目开发</h1><h3 id="_5-1-开发说明" tabindex="-1"><a class="header-anchor" href="#_5-1-开发说明" aria-hidden="true">#</a> 5.1 开发说明</h3><ul><li>进群获取到数据库脚本，创建表初始化数据，数据库名称为xzs</li><li>代码下载 postgresql 版本，配合相应的数据库使用</li><li>安装postgresql ，导入xzx-postgresql.sql脚本</li><li>学生端默认账号：student / 123456</li><li>管理端默认账号：admin / 123456</li></ul><h3 id="_5-2-后端开发" tabindex="-1"><a class="header-anchor" href="#_5-2-后端开发" aria-hidden="true">#</a> 5.2 后端开发</h3>',4),r=(0,a._)("li",null,"/uexam/source/xzs为后台代码，建议使用IntelliJ IDEA打开",-1),i=(0,a._)("li",null,"打开application-dev.yml文件中，配置好postgesql的服务地址",-1),p=(0,a._)("li",null,"去七牛云官网申请好对象存储账号，修改application.yml中的qn相关的配置，七牛云主要用于文件存储。",-1),t=(0,a._)("li",null,"启动后台程序,默认端口为8000。",-1),u=(0,a.Uk)("学生系统地址："),d={href:"http://ip:8000/student",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("http://ip:8000/student"),b=(0,a.Uk)("管理端地址："),m={href:"http://ip:8000/admin",target:"_blank",rel:"noopener noreferrer"},o=(0,a.Uk)("http://ip:8000/admin"),h=(0,a.uE)('<h3 id="_5-3-前端开发" tabindex="-1"><a class="header-anchor" href="#_5-3-前端开发" aria-hidden="true">#</a> 5.3 前端开发</h3><ul><li>前端使用webstorm或者vscode，分别打开文件夹打开源代码\\source\\vue\\xzs-student和source\\vue\\xzs-admin</li><li>执行下面2个命令，安装node_module：</li></ul><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/\nnpm install --registry https://registry.npm.taobao.org  \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>执行下面命令，启动前端代码</li></ul><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npm run serve\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>打包命名</li></ul><div class="language-npm ext-npm line-numbers-mode"><pre class="language-npm"><code>npm run build\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_5-4-小程序开发" tabindex="-1"><a class="header-anchor" href="#_5-4-小程序开发" aria-hidden="true">#</a> 5.4 小程序开发</h3><ul><li>去腾讯小程序官网注册账号，拿到appid和secret信息</li><li>下载好微信小程序开发工具</li><li>打开工具，导入代码 \\source\\wx\\xzs-student</li><li>修改application.yml文件里的wx配置下面的appid和secret</li><li>启动小程序开发工具</li></ul><h3 id="_5-5-代码结构简介" tabindex="-1"><a class="header-anchor" href="#_5-5-代码结构简介" aria-hidden="true">#</a> 5.5 代码结构简介</h3><h4 id="_5-5-1-后端系统" tabindex="-1"><a class="header-anchor" href="#_5-5-1-后端系统" aria-hidden="true">#</a> 5.5.1 后端系统</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- source 代码文件夹\n - xzs 后端代码\n  - src \n   - main\n    - java\n      - xzs\n       - base   项目基础类\n       - configuration   springboot的基础配置\n       - context   项目上下文\n       - controller\n        - admin   管理端控制器\n        - student   学生端控制器\n        - wechat   小程序控制器\n       - domain   领域对象\n       - event   事件驱动模型，配合监听器一起使用\n       - exception   业务异常\n       - listener   监听器，配合event使用\n       - repository   数据仓储，mybaties的映射Mapper\n       - service   服务\n        - impl   服务实现\n       - utility   工具类\n       - viewmodel   视图、接口类\n        - admin   管理端视图类\n        - student   学生端视图类\n        - wx   微信端视图类\n      - resources\n       - mapper   数据仓库的sql文件\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h4 id="_5-5-2-学生端" tabindex="-1"><a class="header-anchor" href="#_5-5-2-学生端" aria-hidden="true">#</a> 5.5.2 学生端</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- source 代码文件夹\n - vue 后端代码\n  - xzs-student  学生端代码\n   - public 公共文件、主页\n   - src 前端代码\n    - api 接口地址\n    - assets 图片资源\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="_5-5-3-微信端" tabindex="-1"><a class="header-anchor" href="#_5-5-3-微信端" aria-hidden="true">#</a> 5.5.3 微信端</h4><h4 id="_5-5-4-管理端" tabindex="-1"><a class="header-anchor" href="#_5-5-4-管理端" aria-hidden="true">#</a> 5.5.4 管理端</h4>',16),g={},v=(0,s(3744).Z)(g,[["render",function(n,e){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,(0,a._)("ul",null,[r,i,p,t,(0,a._)("li",null,[u,(0,a._)("a",d,[c,(0,a.Wm)(s)])]),(0,a._)("li",null,[b,(0,a._)("a",m,[o,(0,a.Wm)(s)])])]),h],64)}]])},3744:(n,e)=>{e.Z=(n,e)=>{for(const[s,a]of e)n[s]=a;return n}}}]);