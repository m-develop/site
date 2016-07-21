-	pubdate: 2016-04-18
-	template: guide
-	type: performance
-	title: 性能
-	asideType: 5

---

> 这一章节主要给出了高性能的移动应用开发原则 Checklist，主要包含 网络性能、处理性能、离线包性能 等一些关键性能优化注意点，这些大都是经过项目实践证明的对性能有实际帮助的开发原则。需要在项目关键阶段进行复查和 Code Review，以保障性能的最优化。

### 高性能移动应用开发实践 checklist

#### 网络性能：

-	在适合的场景下，首页使用本地数据模块进行业务层的数据缓存
-	首屏无阻渲染，尽量避免JS。否则优先考虑将JS内联，或将JS引用移到底部
-	在线资源的请求数量尽可能地少，能内联优先考虑内联
-	小图片或 icon，考虑 svg、base64 内联、或 CSS3 实现，尽量减少请求（但同时也要避免`大规模`的使用 CSS3 特效）
-	超过一屏的动态图，务必使用 lazyload
-	蜂窝网络（2G/3G/4G）/WIFI网络业务区分处理（图片质量切换）

#### H5 类库性能：

-	基础框架/组件统一，避免引私库
-	组件开发优先使用 yocto-lite
-	使用 npm ls 检查依赖，避免冗余版本的组件
-	组件扁平化，减少依赖层级
-	点击操作，优先使用 yocto 提供的 tap

#### 处理性能：

-	慎重利用`touchmove`实时处理 DOM 渲染，例如 iScroll 以及相关类似实现，要慎重使用。下拉刷新尽量避免。优先考虑使用原生 scroll（overflow:auto） 代替。
-	`谨慎大量使用的几个 CSS3 属性`：
	-	box shadow
	-	text indent
	-	gradients
	-	translate3d
-	减少`转场特效`（大规模 reflow）
-	避免或减少 `reflow、repaint` 的触发：
-	动画：
	-	优先 tansition+translate2D
	-	避免 transition+left/top
	-	避免 js 动态更新 left/top
-	多事件绑定优先考虑`事件代理`
-	优先使用`ES5方法`代替原始方法（[ES5兼容性表格](http://kangax.github.io/compat-table/es5/)）

> 参考：
>
> -	[Anima 规范指南](http://animajs.org/#standard/)
> -	[移动 H5 前端性能优化指南（腾讯）](http://isux.tencent.com/h5-performance.html)
