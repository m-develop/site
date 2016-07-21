- pubdate: 2012-12-12
- template: guide
- type: 5-test
- title: 测试
- asideType: 1
- author: 却痕

---

- [我们为什么要写测试
](#我们为什么要写测试
)
- [单元测试](#单元测试)
- [功能测试](#功能测试)

我们为什么要写测试
--------------
写测试常常是程序员不太喜欢做的工作，因为其琐碎很容易令人厌倦，却往往低估了写测试的重要性。

测试能给我们带来什么？了解这些是非常重要的，测试不可能保证一个程序是完全正确的，但是测试却可以增强我们对程序完整的信心，测试可以让我们相信程序做了我们期望它做的事情。一个 bug 被隐藏的时间越长，修复这个 bug 的代价就越大，测试能够使我们尽早的发现程序的 bug 和不足。

开发任务是包括业务代码和测试用例的，评估开发用时的时候请务必权衡好两者，为写测试预留足够的时间。

单元测试
-----------
单元测试的对象是软件设计的最小单位：函数。

我们强烈建议你使用 [atool-test](https://github.com/ant-tool/atool-test) 来自动化运行单元测试。`atool-test` 已经集合了 [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), [Sinon](http://sinonjs.org/) 这些 JavaScript 单元测试基本工具，并且简化了配置，让你可以专注写单测代码本身。

Mocha 是一个 JavaScript 测试框架，可以用来运行测试代码，它没有内置的断言库和模拟数据的功能。我们用 Chai 来为它提供断言，用 Sinon 为它提供模拟接口数据功能。更多基础知识请阅读 [用 Mocha/Chai/Sinon 测试 JavaScript 代码](http://codethoughts.info/javascript/2015/07/18/javascript-bdd-with-mocha-chai-sinon/)。

一个简单的单元测试如下：
```js
const expect = require('chai').expect;

describe('first test', function() {
  it('should be eql' , function() {
    expect(1).to.not.be.true;
    expect(sinon).to.not.be.null;
    expect(expect).to.not.be.null;
    expect(should).to.not.be.null;
  });
});
```

如果你想要为页面写 JavaScript 单测，可以参考 [anima-yocto-lite 单元测试用例](http://gitlab.alibaba-inc.com/animajs/yocto-lite/blob/master/tests/anima-yocto-lite-spec.js)。

### 如何用 atool-test 执行单元测试？

- 在根目录 `test` 文件夹下新建 `-test.js` 后缀的测试文件。
- 执行 `cnpm run test`。

没错，就是这么简单！

### 相关文章
* [测试框架 Mocha 实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)

功能测试
-----------
单元测试可以保证函数本身的逻辑正确，确保软件功能（可以认为是函数的组合）的正确性测试就需要我们写功能测试。

页面级别的单元测试无法覆盖到界面的交互（比如点击、拖动等手势，页面之间的跳转等等），所以写好一个页面功能后往往需要手动与页面交互进行功能验证。

 [Macaca 平台](http://macacajs.github.io/macaca/)提供了自动化功能测试的解决方案，旨在解决研发阶段测试、持续集成阶段测试、用户环境监控等需求。如何使用 Macaca 请继续阅读 [Macaca 快速上手指南](http://macacajs.github.io/macaca/getting-started.html)。
