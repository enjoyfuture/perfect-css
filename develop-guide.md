# 开发指南与说明
该文档记录开发过程中参考资料、知识点总结等。前期可以先不归类，如果整理的多了，后期再归类罗列。

## 参考资料

* [How to add a Table of Contents to markdown](http://www.seanbuscay.com/blog/jekyll-toc-markdown/)
* [sass 参考](http://www.sass.hk/docs/)
* [在线 sass 转换为 css](http://www.sassmeister.com/)

## 开发说明

* 关于打印机的样式，待写

## 自己整理的问题

* 不要在 tbody thead 或 tr 上设置字体大小，尽量设置在 td 上，因为 ie11会有躲猫猫的显现发生，其表现就是
  渲染的内部不可见，鼠标移上去才能显示出来，又是 ie，万恶的 ie
