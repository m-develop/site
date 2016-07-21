- pubdate: 2012-12-12
- template: guide
- type: 6-build
- title: 打包构建
- asideType: 1
- author: 却痕

---

- [安装 atool-build](#安装 atool-build)
- [执行构建](#执行构建)
- [参数](#参数)

#### 安装 atool-build

在控制台里全局安装

```bash
cnpm install -g atool-build
```

#### 执行构建

```bash
atool-build
```

执行完成后，会在项目根目录的 `dist` 目录里生成 `index.js`, `antoher.js`, `index.css`, `another.css` 以及 `common.js` 和 `common.css` 文件。其中，`common.js` 和 `common.css` 文件是多个入口 `entry` 公用的模块；其它文件是由 `entry` 的名称决定的最终打包文件。

#### 参数

* -o, --output-path <path> 指定构建后的输出路径。
* -w, --watch [delpay] 是否监控文件变化，默认为不监控。
* --no-compress 不压缩代码。
* --config [userConfigFile] 指定用户配置文件。默认为根目录下的 webpack.config.js 文件。这个配置文件不是必须的。
* --devtool <devtool> 生成 sourcemap 的方法，默认为空，这个参数和 webpack 的配置一致。
* --hash 使用 hash 模式的构建, 并生成映射表 map.json。

[更多详细的配置，请参考atool-build官网](https://ant-tool.github.io/atool-build.html)
