-	pubdate: 2012-12-12
-	template: guide
-	type: 3-develop
-	title: 项目开发
-	asideType: 1
-	author: 却痕

---

-	[前言](#前言)
-	[增加新页面](#增加新页面)
-	[拆分出相应的公共代码](#拆分出相应的公共代码)
-	[使用、搜索组件](#使用、搜索组件)

#### 前言

> 首先恭喜完成了所有的准备工作，终于要进入真正开发的阶段了，下面来带你体验真正的业务开发及流程

开始前建议先了解下项目的其本结构与目录，详见 http://github.com/m-develop/boilerplate/tree/master

下面以开发一个新需求为例。我们以开发一个`hello world`的需求为例

#### 增加新页面

-	1. 在`src`目录下面新建`hello`目录
-	2. 在`hello`目录下面添加`hello.html、hello.js、hello.less`文件
-	3. 在`package.json`的`entry`中新增入口文件`"hello": "./src/hello/hello.js"`
-	4. 接下来就可以在入口文件中添加相应的逻辑代码了

下面是`package.json`里的部分内容

```json
{
  ...
  "entry": {
    "index": "./src/index/index.js",
    "hello": "./src/hello/hello.js"
  }
}
```

下面是`hello.html`的初始化代码

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>anima</title>
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
  <meta name="format-detection" content="telephone=no"/>
  <meta name="format-detection" content="email=no"/>
  <meta name="viewport" content="width=device-width,initial-scale=0.5,maximum-scale=0.5,minimum-scale=0.5,user-scalable=no">
  <script src="common.js"></script>
  <script>!function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=window;t["default"]=i.vl=function(e,t){var n=e||100,r=t||750,a=i.document,d=navigator.userAgent,o=d.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),l=d.match(/U3\/((\d+|\.){5,})/i),s=l&&parseInt(l[1].split(".").join(""),10)>=80,u=a.documentElement,c=1;if(o&&o[1]>534||s){u.style.fontSize=n+"px";var p=a.createElement("div");p.setAttribute("style","width: 1rem;display:none"),u.appendChild(p);var m=i.getComputedStyle(p).width;if(u.removeChild(p),m!==u.style.fontSize){var v=parseInt(m,10);c=100/v}}var f=a.querySelector('meta[name="viewport"]');f||(f=a.createElement("meta"),f.setAttribute("name","viewport"),a.head.appendChild(f)),f.setAttribute("content","width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1");var h=function(){u.style.fontSize=n/r*u.clientWidth*c+"px"};h(),i.addEventListener("resize",h)},e.exports=t["default"]}]);
  vl(100, 750);</script>
  <link rel="stylesheet" href="https://os.alipayobjects.com/rmsportal/YJHOBQTADnUotqX.css"/>
  <link rel="stylesheet" href="common.css"/>
  <link rel="stylesheet" href="./index.css"/>
  <script type="text/javascript" src="https://a.alipayobjects.com/publichome-static/antBridge/antBridge.min.js"></script>
</head>
<body>
<div class="title" id="main">页面主要内容，3s后变mock内容</div>
<script src="./index.js"></script>
</body>
</html>

```

> 根据webpack打包规范，这里需要加入common.js 以及 hello.js

下面是`hello.js`示例代码

```js
import '../common/base';
import './hello.less';
// 这里把html也当成一个资源文件看，也需要import进来，否则webpack在打包时不会输出html文件
import './hello.html';
import util from '../common/util';

const page = {
  init() {
  },
};

page.init();

```

在这里，我们使用了[移动高清方案](/solution/hd.html)进行布局。我们这里限制你的设计稿为***750***的宽度，也就是说你设计稿100px的宽度，这我们这你写的就是 1rem，所有的px的宽度除以100，变成rem的大小。

#### 拆分出相应的公共代码

在开发中，会逐步发现有一些功能的是相同的，你可以直接把他拆分出来放入`common`的目录中，然后再放入业务代码中引入。提高代码的复用性。

在开发的过程中，谁都不可能保证不出现bug，所以本地的调试是非常重要。下一节，我们将告诉你，如何进行本地调试，一步步解决开发过程中的问题。

#### 使用、搜索组件

在实际业务中，肯定需要使用各种各样的组件，来完成工作。我们提供了轻盈、简单、易用的组件库`anima`和基于支付宝APP视觉交互规范[AMUI](https://doc.open.alipay.com/doc2/detail.htm?treeId=128&articleId=104330&docType=1)的UI库`antd-mobile-h5`.

> 在开始使用`antd-mobile-h5`前需安装`npm`，了解蚂蚁金服新一代构建和调试工具[atool](http://ant-tool.github.io/index.html)，以及[移动高清方案](/solution/hd.html)

#### 使用antd-mobile

第一步: 安装

```bash
$ npm install antd-mobile-h5 --save
```

第二步: 使用组件

-	对于单个页面的业务推荐如下使用,组件默认包含样式

```js 
var Dialog = require('antd-mobile-h5/components/dialog');
var dialog = new Dialog({
            content : '辅助说明文字辅助说明文字辅助说明文字辅助说明文字',
            title : '标题文字',
            mask: true
        });
 dialog.show(); 
```

-	对于项目级别的业务,我们建议你在页面直接引入`AMUI`基础样式文件.

```html
<link rel="stylesheet" href="https://os.alipayobjects.com/rmsportal/YJHOBQTADnUotqX.css"/>
```

想了解更多`antd-mobile`的信息可以查看[相关示例](https://m-develop.github.io/antd-mobile-h5/), 阅读[UI库介绍](/ui/antd-mobile.html)文档.

#### 使用anima功能组件

你可以在`npm`上搜索我们提供的[官方可靠组件](https://www.npmjs.com/search?q=anima)。

比如你想做一个倒计时的功能，你可以搜索到有一个`anima-countdown`组件，在`npm`上可以看到官方的[文档](https://www.npmjs.com/package/anima-countdown)

在使用的时候,先要安装

```bash
npm install anima-countdown --save
```

然后在你的业务代码中，将组件引入，然后使用

```js
var CountDown = require('anima-countdown');
// use CountDown

new CountDown({
    count: 0, // 时间差，单位为毫秒
    el: 'body', // 显示倒计时的容器选择符
    tpl: '<%=hour%>时<%=minute%>分<%=second%>秒', //倒计时模板，支持day,hour,minute,second占位符
    cbk: function(){} // 倒计时结束回调函数
})
```
