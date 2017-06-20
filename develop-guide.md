# 开发指南与说明
该文档记录开发过程中参考资料、知识点总结等。前期可以先不归类，如果整理的多了，后期再归类罗列。

## 参考资料

* [How to add a Table of Contents to markdown](http://www.seanbuscay.com/blog/jekyll-toc-markdown/)
* [sass 参考](http://www.sass.hk/docs/)
* [sass-lint](https://github.com/sasstools/sass-lint)
* [在线 sass 转换为 css](http://www.sassmeister.com/)
* [热部署，热加载](https://browsersync.io)
* [Sass 单元测试](http://oddbird.net/true/)
* [clipboard 复制到剪贴板插件](https://clipboardjs.com/)
* [2016年 CSS 库、框架和工具新生榜 TOP 50](https://my.oschina.net/u/2903254/blog/809874)
* [2016年 CSS 库、框架和工具新生榜 TOP 50-备份链接](https://zhuanlan.zhihu.com/p/24524155)
* [css hover](http://ianlunn.github.io/Hover/)
* [一款非常小巧的提示框组件](http://kazzkiq.github.io/balloon.css/)
* [媒体查询 css](http://elementqueries.com/)
* [Basscss](http://basscss.com/)
* [PostCSS 插件](http://postcss.parts/)
* [轻量级 3D CSS](http://www.voxelcss.com/)
* [text-spinners](http://tawian.io/text-spinners/)
* [imagehover](http://imagehover.io/)
* [CSS 渐变样式](http://evankarageorgos.github.io/hue/)
* [用 CSS filter 和 blend mode 来模拟 Instagram 风格的滤镜](https://una.im/CSSgram/)
* [CSS Purge](http://www.csspurge.com/)
* [styleguide](http://styleguide.devbproto.com/styleguide/)
* [基于 flex 布局的网格系统](http://flexboxgrid.com/)
* [纯 CSS3 效果资源收集整理](https://github.com/Zhangjd/awesome-pure-css-no-javascript)

## 参考 css 框架

* [Bootstrap](https://v4-alpha.getbootstrap.com/)
* [semantic](https://semantic-ui.com/)
* [foundation](http://foundation.zurb.com/)
* [Material Design](https://material.io/)
* [animate.css](https://daneden.github.io/animate.css/)
* [muse-ui](http://www.muse-ui.org/)
* [purecss](https://purecss.io/)


## 开发说明

* 关于打印机的样式，待写

## 自己整理的问题

* 不要在 tbody thead 或 tr 上设置字体大小，尽量设置在 td 上，因为 ie11会有躲猫猫的显现发生，其表现就是
  渲染的内部不可见，鼠标移上去才能显示出来，又是 ie，万恶的 ie
