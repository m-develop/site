-	pubdate: 2016-04-26
-	template: guide
-	type: 0-introduce
-	title: 简介
-	author: 完颜

---

-	[欢迎你](#欢迎你)
-	[初探](#初探)
-	[不同的开发模式介绍](#不同的开发模式介绍)
-	[行动](#行动)


![](https://zos.alipayobjects.com/rmsportal/cHbTTPiTMDovUPy.jpg@50p)



### 欢迎你

hi 亲爱的开发者，**欢迎来到移动前端开发的世界**！

如果你是第一次参与移动开发经验的同学，推荐你查看经典的 [Dive into HTML5](http://diveintohtml5.info/) 教程，以及 [无线 Web 开发指南](https://github.com/semious/guide/blob/master/mobile_exp.md)，同时，在实战中积累和刷新经验非常重要。如果你对移动领域基础知识已经有了基本掌握，那我们就开始吧。


### 初探

在指引正式开始之前，我们先看一张移动前端解决方案的架构图，对我们目前的方案有个直观的了解：

![image](https://zos.alipayobjects.com/rmsportal/ViIOlfDnSqUyQiY.png)

可以看到，分别有 `Container`（H5容器）、`Components`（组件）、`UI Library`（UI 库）、`App`（移动应用）几层，我们提供的解决方案主要集中在 Components 和 UI Library 这两层，构建出最终的 H5 App。

> 名词介绍：
>
> -	**Container** 意为 H5 容器，这里特指支付宝 App 提供的 webview 容器，支付宝 App 内的 H5 页面都将在这个容器中运行。同时，容器将会对外提供一些 Native 的能力输出，通过 JSBridge 暴露出来给页面调用。如果你是一位支付宝合作商户开发者，关于支付宝 H5 容器详细的 API，可以在 [开放平台官方文档-接口列表](https://doc.open.alipay.com/doc2/detail?treeId=53&articleId=103538&docType=1) 中了解更多信息。关于如何接入等信息，也可以直接访问[支付宝开放平台](https://openhome.alipay.com/platform/home.htm)了解更多。
> -	**Components** 为组件，它是一个前端应用架构中偏底层的部分，为 App 提供基础的行为特性，不提供业务级 UI 样式，但也可以被 UI Library 依赖使用。这里我们提供的方案叫做 Anima。如果 UI Library 无法满足你的项目需求，你可以从 Anima 的 Components 中寻找更多适合你的组件。一些基础框架（如 Dom 操作类库 [Yocto](../solution/yocto.html)）在这里也被视为一个 Component。想查看我们都提供了哪些 Components，可以通过本站“导航 - [组件库](../components/ui-components.html)”来详细查看。
> -	**UI Library** 是基于 Components 之上，提供了`特定样式`的一系列组合的 UI 库。这里我们提供的 UI 库叫做 antd mobile，antd 是 ant design 的简称。具体可以通过本站“导航 - [UI 库](../ui/ant-ui.html)”来详细查看。
> -	**App**，由上面这几层最终构建出来的应用，就是一个 H5 App。但它并不是一个独立应用，而是一个可运行在支付宝 H5 容器中或其他宿主容器中（webview 或 基于 webkit 内核的浏览器）运行的轻应用。


### 行动

如果你看完上面这些依然感觉云里雾里，那么你可以在接下来的章节尝试动手用我们提供的工具方法来初始化你的项目，它会把所有上面这些基础部分（基础目录、配置、Components 和 UI Library 层）自动生成完毕。这样，你只需要关心业务中都需要再安装哪些组件，需要在哪里开发业务代码即可。

来动手尝试吧。你需要做好的就是 —— Use your illusion！


> 注：在整个指引过程中，遇到任何问题或建议，可以选择以下几种方式反馈给我们：
>
>1. 提交 [github issue]()（推荐）
>2. 钉钉交流群：`1419242938`
