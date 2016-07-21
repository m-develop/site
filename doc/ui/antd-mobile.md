-	pubdate: 2012-12-12
-	template: ui
-	type: antd-mobile
-	title: AntD Mobile

---

![](https://os.alipayobjects.com/rmsportal/lZSYaCczfUZwdFK.png)


-	仓库地址：
	-	[AntD Mobile]()
-	建议和反馈：[issues]()
-	[文档地址]()

## antd-mobile特性
基于支付宝APP视觉交互规范[AMUI](https://doc.open.alipay.com/doc2/detail.htm?treeId=128&articleId=104330&docType=1)的javascript组件库。   

* 提供给用户在支付宝APP内的一致体验。
* 精心封装的高质量 UI 库。
* 基于 npm + [atool](http://ant-tool.github.io/index.html) 的工作流，支持 ES6。

> 在开始使用`antd-mobile`前需安装`npm`，了解蚂蚁金服新一代构建和调试工具[atool](http://ant-tool.github.io/index.html)，以及[移动高清方案](/solution/hd.html)

## 示例

```bash
$ npm install antui-h5 --save
```


```js
var Dialog = require 'antui-h5/dialog/';
var dialog = new Dialog({
    content : '辅助说明文字辅助说明文字辅助说明文字辅助说明文字',
    title : '标题文字',
    mask: true,
    effect: 'none'
});
```


