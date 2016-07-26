-	pubdate: 2012-12-12
-	template: ui
-	type: antd-mobile
-	title: AntD Mobile

---

![](https://os.alipayobjects.com/rmsportal/lZSYaCczfUZwdFK.png)


- [antd-mobile-h5](#antd-mobile-h5)
- [如何使用](#如何使用)
- [组件列表](#组件列表)
- [相关文档](#相关文档)

### antd-mobile-h5

`antd-mobile-h5`是基于支付宝APP视觉交互规范[AMUI](https://doc.open.alipay.com/doc2/detail.htm?treeId=128&articleId=104330&docType=1)封装的javascript UI组件库。   

* 在支付宝APP内提供给用户一致的体验。
* 使用简单无需关注组件样式和html片段。
* 基于 npm + [atool](http://ant-tool.github.io/index.html)工作流，并支持 ES6。


### 如何使用
> 在开始使用`antd-mobile-h5`前需了解蚂蚁金服新一代构建和调试工具[atool](http://ant-tool.github.io/index.html)，以及[移动高清方案](/solution/hd.html)

第一步: 安装 

```bash
$ npm install antd-mobile-h5 --save
```

第二步: 使用组件

- 单个页面的业务推荐如下使用,组件默认包含样式


```js 
var Dialog = require('antd-mobile-h5/components/dialog');
var dialog = new Dialog({
            content : '辅助说明文字辅助说明文字辅助说明文字辅助说明文字',
            title : '标题文字',
            mask: true
        });
 dialog.show(); 
```

- 项目级别的业务,我们建议你在页面直接引入`AMUI`基础样式文件. 

```html
<link rel="stylesheet" href="https://os.alipayobjects.com/rmsportal/YJHOBQTADnUotqX.css"/>
```

### 组件列表

- carousel
- dialog
- loading
- notice
- page-result
- tab
- toast
- ...

### 相关文档
- [文档地址](https://github.com/m-develop/antd-mobile-h5/tree/gh-pages/doc)
- [demo示例](https://m-develop.github.io/antd-mobile-h5/)
- 建议和反馈：[issues](https://github.com/m-develop/antd-mobile-h5/issues)

