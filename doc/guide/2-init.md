-	pubdate: 2012-12-12
-	template: guide
-	type: 2-init
-	title: 初始化项目
-	asideType: 1
-	author: 却痕

---

-	[创建项目](#创建项目)
- [安装依赖](#安装依赖)
-	[运行和调试项目](#运行和调试项目)

#### 创建项目

在你的工作目录中，运行 `git clone git@github.com:m-develop/boilerplate.git`命令：

```bash
$ cd work
$ git clone git@github.com:m-develop/boilerplate.git
```

#### 安装依赖

在目录中，运行 `cnpm install` 安装必要的依赖

```bash
cnpm install
```

#### 运行和调试项目

在命令行中，复制并运行下面的命令，就可以开始运行了：

```js
cnpm run start
```

运行后，在浏览器中打开 `http://127.0.0.1:8001/` 会看到当前项目运行时的样子。你可以修改 `src/index/index.html` 以及 `index.js` 文件，查看和调试修改后的运行情况是否正常。

> **cnpm run 是什么意思**？cnpm run 执行时，会在项目的 package.json 文件中寻找 scripts 区域。我们可以发现这项 `"start": "NODE_ENV=development dora -p 8001 --plugins webpack"`，核心的意思是，运行 cnpm run start 后，执行 dora -p 8001 --plugins webpack 这个命令。也就是说，运行 dora 服务并且指定端口号为 8001，同时开启 webpack 的 plugin。
>
> 如果熟悉的话，你也可以自己定义属于你的 cnpm run start 任务。更多跟 cnpm/npm 任务相关的技巧，可以[点击这里查看](https://segmentfault.com/a/1190000000344102)。

一切顺利？那么恭喜你，你的项目已经完成了大半了，接下来的一节，就是学习如何通过“项目开发”来更加进一步地定制你的项目。

> **动动手**：尝试在 index.js 文件中，输出一段文本“hello world”到页面中。你会怎么写呢？试试看吧。
