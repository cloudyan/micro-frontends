# 方案

- [方案](#方案)
  - [思路](#思路)
  - [实现方式](#实现方式)
  - [框架](#框架)
    - [single-spa: 最早的前端微服务 Javascript 框架，兼容多种前端技术栈](#single-spa-最早的前端微服务-javascript-框架兼容多种前端技术栈)
    - [qiankun](#qiankun)
    - [Module Federation：是 Zack Jackson 发明的 JavaScript 架构，Zack Jackson 随后提出为其创建一个 Webpack 插件。](#module-federation是-zack-jackson-发明的-javascript-架构zack-jackson-随后提出为其创建一个-webpack-插件)
    - [Bit：将独立的组件构建、集成和组合到一起和管理前端](#bit将独立的组件构建集成和组合到一起和管理前端)
    - [MicroApp：是京东零售推出的基于类WebComponent进行渲染，从组件化的思维实现的微前端技术](#microapp是京东零售推出的基于类webcomponent进行渲染从组件化的思维实现的微前端技术)
    - [无界：腾讯推出的基于 Web Components + iframe 微前端框架，具备成本低、速度快、原生隔离、功能强等一系列优点](#无界腾讯推出的基于-web-components--iframe-微前端框架具备成本低速度快原生隔离功能强等一系列优点)
  - [选择考量](#选择考量)


## 思路

- 基于接口协议：子应用按照协议导出几个接口，主应用在运行过程中调用子应用导出的这几个接口
- 基于沙箱隔离：主应用创建一个隔离环境，让子应用基本不用考虑自己是在什么环境下运营，按照普通的开发思路进行开发即可
- 基于模块协议：主应用把子应用当作一个模块，和模块的使用方式无异

## 实现方式

- 路由分发
- iframe
- 应用微服务化
- 微件化
- 微应用化
- 纯 Web Components
- 结合 Web Components

## 框架

### single-spa: 最早的前端微服务 Javascript 框架，兼容多种前端技术栈

是一个将多个单页面应用聚合为一个整体应用的 JavaScript 微前端框架，
在同一页面上使用多个前端框架，而不用刷新页面，
不限技术栈，
支持独立部署每一个单页面应用，
新功能使用新框架，旧的单页应用不用重写可以共存，
有效改善初始加载时间，延迟加载代码，
文档：https://github.com/single-spa/single-spa

### qiankun

📦 基于 [single-spa](https://github.com/CanopyTax/single-spa) 封装，提供了更加开箱即用的 API。
📱 技术栈无关，任意技术栈的应用均可 使用/接入，不论是 React/Vue/Angular/JQuery 还是其他等框架。
💪 HTML Entry 接入方式，让你接入微应用像使用 iframe 一样简单。
🛡​ 样式隔离，确保微应用之间样式互相不干扰。
🧳 JS 沙箱，确保微应用之间 全局变量/事件 不冲突。
⚡️ 资源预加载，在浏览器空闲时间预加载未打开的微应用资源，加速微应用打开速度。
🔌 umi 插件，提供了 @umijs/plugin-qiankun 供 umi 应用一键切换成微前端架构系统。
文档: https://qiankun.umijs.org/zh/guide

### Module Federation：是 Zack Jackson 发明的 JavaScript 架构，Zack Jackson 随后提出为其创建一个 Webpack 插件。

是webpack给出的微前端方案，
使 JavaScript 应用可以动态运行另一个 JavaScript 应用中的代码，同时可以共享依赖，
依赖自动管理，可以共享 Host 中的依赖，版本不满足要求时自动 fallback 到 Remote 中依赖，
共享模块粒度自由掌控，小到一个单独组件，大到一个完整应用。既实现了组件级别的复用，又实现了微服务的基本功能，
共享模块非常灵活，模块中所有组件都可以通过异步加载调用，
文档：https://webpack.js.org/concepts/module-federation/

### Bit：将独立的组件构建、集成和组合到一起和管理前端

具有传统单体式前端的安全性和健壮性，
介接入方式简单、可伸缩性强，
通过 简单的解耦代码库、自治团队、小型定义良好的 API、独立的发布管道 和 持续增量升级，增强工作流程，
文档地址：https://bit.dev/docs/quick-start

### MicroApp：是京东零售推出的基于类WebComponent进行渲染，从组件化的思维实现的微前端技术

使用简单，接入微前端成本低，
零依赖，
兼容所有框架（不需要提供脚手架工具），
提供了JS沙箱、样式隔离、元素隔离、预加载、资源地址补全、插件系统、数据通信等一系列完善的功能，
文档：https://zeroing.jd.com/

### 无界：腾讯推出的基于 Web Components + iframe 微前端框架，具备成本低、速度快、原生隔离、功能强等一系列优点

成本低
速度快
原生隔离
功能强大
文档：https://wujie-micro.github.io/doc/

## 选择考量

选择微前端方案的时候需要考虑能否解决好以下10个问题

微应用的注册、异步加载和生命周期管理；
微应用之间、主从之间的消息机制；
微应用之间的安全隔离措施；
微应用的框架无关、版本无关；
微应用之间、主从之间的公共依赖的库、业务逻辑(utils)以及版本怎么管理；
微应用独立调试、和主应用联调的方式，快速定位报错（发射问题）；
微应用的发布流程；
微应用打包优化问题；
微应用专有云场景的出包方案；
渐进式升级：用微应用方案平滑重构老项目。

