- pubdate: 2012-12-12
- template: guide
- type: 4-debugger
- title: 本地调试
- asideType: 1
- author: 却痕

---

- [iOS + Safari](#ios-safari)
- [Android + Chrome](#android-chrome)

### iOS + Safari

- 打开手机web检查器

  - 通过【设置】>【Safari】>【高级】>【Web检查器】打开。见下图（点击查看大图），并且你会看到该选项下面对电脑操作的相应描述，照做就好。 ![http://www.codingserf.com/wp-content/uploads/2014/05/QQ20140505-2@2x.png](http://www.codingserf.com/wp-content/uploads/2014/05/QQ20140505-2@2x.png)

- 链接电脑（Mac）

  - 先在手机Safari中打开你想调试的网页，并用数据线连接到Mac
  - 再在电脑上打开Safari点击【Develop】菜单，就会看到如下图所示 ![http://www.codingserf.com/wp-content/uploads/2014/05/QQ20140505-3@2x.png](http://www.codingserf.com/wp-content/uploads/2014/05/QQ20140505-3@2x.png)
  - 点击2.2中的网站名就会在电脑上打开Safari的控制台 ![http://www.codingserf.com/wp-content/uploads/2014/05/QQ20140505-4@2x.png](http://www.codingserf.com/wp-content/uploads/2014/05/QQ20140505-4@2x.png)

### Android + Chrome

- 设置手机
  - 【设置】>【关于手机】>【版本号（Build number）】，对版本号这一项连点7下（这是官方文档里的说法）就会提示“你已成为开发者”。
  - 再返回【设置】>【开发者选项】>【USB调试】打开手机USB调试。
- 链接电脑
  - 在手机上的Chrome里打开想要调试的网页，用数据线连接手机和电脑
  - 打开电脑上的Chrome，在地址栏里输入 about:inspect 选中 【Discover USB Devices】前面的复选框。出现下图画面（点击查看大图）： ![http://www.codingserf.com/wp-content/uploads/2014/05/QQ20140505-6@2x-300x123.png](http://www.codingserf.com/wp-content/uploads/2014/05/QQ20140505-6@2x-300x123.png)
- 调试网页
  - 在chrome中，输入地址[chrome://inspect/#devices](chrome://inspect/#devices) ![http://images.cnitblog.com/blog/494920/201411/130923544443367.jpg](http://images.cnitblog.com/blog/494920/201411/130923544443367.jpg)
