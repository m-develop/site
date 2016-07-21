-	pubdate: 2012-12-12
-	template: guide
-	type: hd
-	title: 移动高清方案
-	asideType: 4

---

-	[介绍](#介绍)
-	[使用示例](#使用示例)

### 介绍

`高清` 英文为High Definition，意思是高分辨率。相同尺寸范围内 ，把更多的像素点压缩至这一块屏幕里，从而达到更高的分辨率， 更高色彩和对比度 ，使得屏幕显示的更细腻的一种技术。具有代表性的产品是苹果公司推出的高清屏Retina  
`移动高清方案原理`: 以iphone6物理尺寸作为视觉稿标准尺寸,使用相对单位[rem]()。基于rem的原理，针对不同手机屏幕尺寸和dpr动态的改变根节点html的font-size大小(基准值)实现高清适配。

可以通过[anima-hd文档](https://www.npmjs.com/package/anima-hd)了解更多`移动高清方案`的信息.

### 使用示例

在`移动前端指引平台中`项目脚手架中已经默认通过内联的方式引入了移动高清方案脚本,我们只需关注css部分;视觉稿尺寸要求默认宽度为750px, 在css中以rem作为基本单位1rem=100px.

`示例1`: 一张铺满屏幕的背景图片

```css
.img-box{
    width: 7.5rem;
    height: 2rem
    background: url(xxx) no-repeat;
    background-size: 7.5rem 2rem;
}
```

`示例2`: 实现Retina下1px物理像素边框

```css
.box{
  border-top: 0.5px solid #ddd;
  padding-top: 0.5px;
}
```
