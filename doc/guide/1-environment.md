-	pubdate: 2012-12-12
-	template: guide
-	type: 1-environment
-	title: 环境搭建
-	asideType: 1
-	author: 却痕

---

-	[安装-node-js](#安装-node-js)
-	[安装 cnpm](#安装-cnpm)
-	[安装git](#安装-git)

> 俗话说得好： 工欲善其事，必先利其器。在开始之前，我们**强烈建议**您使用 **macOS 系统**作为运行环境，这可以避免很多问题的出现。

#### 安装 Node.js

进入官网，点击[下载](https://nodejs.org/en/download/)

安装好后，在控制台中输入

```bash
$ node -v

输出: v4.4.3 表示安装成功 (取决于您安装的最新版本，不一定跟本示例相同)
```

#### 安装 cnpm

由于`npm`在国内访问过慢，我们这边建议你使用`cnpm`来进行安装各种模块

```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
$ cnpm -v

输出: 3.4.0 表示安装成功 (取决于您安装的最新版本，不一定跟本示例相同)
```

#### 安装 Git

-	[点击这里](https://git-scm.com/download/mac)，去 git 官网下载 git pkg 包安装
-	mac 用户，app store 里安装`xcode`，会自动安装 git
-	你也可以尝试用 Homebrew 来安装：`$ sudo brew install git`

```bash
$ git --version

git version 2.6.4 (Apple Git-63)

输出: 2.6.4 表示安装成功 (取决于您安装的最新版本，不一定跟本示例相同)
```

恭喜你，目前为止已经完成了所有前期准备工作，可以进入下一步 “初始化” 来构建你的代码了！
