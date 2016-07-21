-	pubdate: 2012-12-12
-	template: guide
-	type: bridge
-	title: Bridge
-	asideType: 4

---

-	[什么是 jsBridge](#jsBridge)
-	[如何使用](#如何使用)
-	[jsBridge 列表](#jsBridge 列表)
-	[相关文档](#相关文档)

#### jsBridge

H5作为移动端应用开发非常灵活和重要的方式，始终面临着终端的性能的瓶颈，而在蚂蚁的移动端开发H5应用开发，有两个核心的诉求，一个是极致用户体验、一个是完善的功能。由于纯粹依赖h5技术，是无法达到，我们将一些必要的交互效果和设备功能用Native来实现，并通过封装将这些功能提供给JS来使用，而这个封装好的接口的集合就是 jsBridge。

#### 如何使用

在蚂蚁， jsBridge 是这样的：

```javascript
AlipayJSBridge.call('getNetworkType', function (result) {
  console.log(result.networkType);
});
```

可以看到，容器提供了原生的bridge接口 `getNetworkType`，使用的时候只需要通过AlipayJSBridge.call()调用对应接口，并提供回调函数。

当页面在支付宝的App中的时候，我们就直接直接调用jsBridge来调取native的方案。

例如你想要做一个`pushwindow`的操作，你可以直接这么来写你的代码

```js
AlipayJSBridge.call('pushWindow', {
  url: 'http://www.baidu.com/',
  param: {
    readTitle: true,
    defaultTitle: true,
    showToolBar: false
    // ...
  }
});

```

#### jsBridge 列表

通过上面简单得方式你就可以迅速使用功能强大的jsBridge扩展了，所有的bridge见：[参考这里](https://doc.open.alipay.com/doc2/detail.htm?treeId=53&articleId=103537&docType=1)

#### 相关文档

-	[jsBridge接口列表](https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7629140.0.0.BdAusg&treeId=53&articleId=103538&docType=1)
-	[jsBridge接口demo实例](http://am-team.github.io/h5container/jsapi-doc.html?spm=a219a.7629140.0.0.T5LiuK#alipayjsbridgeready)
