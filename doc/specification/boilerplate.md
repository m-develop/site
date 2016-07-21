-	pubdate: 2012-12-12
-	template: guide
-	type: boilerplate
-	title: Boilerplate
-	asideType: 5

---

`anima-boilerplate`是面向**移动端H5**开发的项目结构最佳实践。

包含以下特性：

-	拥抱社区：`npm`、`webpack`、`babel`、`ES2015`、`less`

### 项目基本结构

```js
├── README.md
├── package.json
├── src // 项目源码
├── test // 测试代码目录
└── webpack.config.js // webpack配置文件
```

#### src目录说明

```js
├── common // 通用代码
│   ├── base.js // 基础的功能，可以包含`打点`、`监控`等功能
│   ├── base.less // 一些基础样式
│   ├── util.js // 一些通用的方法，
│   └── util.less //  基本的less工具，常见的`mixin`、`variable`
├── detail // 业务逻辑
│   ├── detail.html
│   ├── detail.js
│   └── detail.less
└── index // 首页业务
    ├── index.atpl
    ├── index.html // 访问入口
    ├── index.js
    ├── index.less
    └── subIndex
```

### 开发&构建

项目[ant-tool](http://ant-tool.github.io/) 作为开发工具，通过`npm scripts` 作为命令入口，如：

```bash
cnpm run start : 本地浏览器调试

cnpm run test : 本地跑单元测试
```

### 打包 & 部署

执行 `npm run build`命令，会通过`atool-build`打包出`dist`目录。所有的代码都在里面

### 其他

-	[调试构建工具ant-tool官网](http://ant-tool.github.io/)
