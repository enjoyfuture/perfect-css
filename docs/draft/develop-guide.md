# 开发指南与说明
该文档记录开发过程中参考资料、知识点总结等。前期可以先不归类，如果整理的多了，后期再归类罗列。

## jekyll 相关

*[liquid 语法](https://liquid.bootcss.com/)

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
* https://patrickhlauke.github.io/touch/tests/results/#suppressing-300ms-delay
* [整理各大公司用到的颜色值](https://brandcolors.net/)

## 参考 css 框架

* [Bootstrap](https://v4-alpha.getbootstrap.com/)
* [Semantic UI](https://semantic-ui.com/)
* [foundation](http://foundation.zurb.com/)
* [Material Design](https://material.io/)
* [animate.css](https://daneden.github.io/animate.css/)
* [anijs 动画库](http://anijs.github.io/)
* [muse-ui](http://www.muse-ui.org/)
* [Loaders.css](https://connoratherton.com/loaders)
* [Pure.css](http://purecss.io/)
* [Uikit](http://getuikit.com/index.html)
* [矢量图标上传](http://iconfont.cn/)


## 开发说明

* 关于打印机的样式，待写

## 自己整理的问题

* 不要在 tbody thead 或 tr 上设置字体大小，尽量设置在 td 上，因为 ie11会有躲猫猫的显现发生，其表现就是
  渲染的内部不可见，鼠标移上去才能显示出来，又是 ie，万恶的 ie
* sass 中定义变量时，可以用修饰符 !global 或 !default 来声明，!global 表示全局变量，不论定义在何处，都可以被调用，
  定义为 !global 的值，可以在其他地方覆盖该变量重新定义新值。
  !default 表示定义变量的初始值，可以重新定义来覆盖其值，不论重新定义的位置是在定义初始值的前或后面，但如果重新定义为 null
  则使用定义的初始值
    ```scss
      $content: "First content";
      $content: "Second content?" !default;
      $new_content: "First time reference" !default;
      
      #main {
        content: $content;
        new-content: $new_content;
      }
    ```
    编译结果为
    ```scss
      #main {
        content: "First content";
        new-content: "First time reference"; 
      }
    ```
    变量是空值的时候
    ```scss
      $content: null;
      $content: "Non-null content" !default;
    
      #main {
        content: $content;
      }
    ```
    编译结果为
    ```scss
      #main {
        content: "Non-null content"; 
      }
    ```

## CSS 点滴整理

### appearance 
Property appearance 可以改变元素的默认表现，比如设为 none，元素不显示任何默认的表现，设为 button 
元素表现出跟 button 一样的效果，等等。可设置的值有如下：
none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized

## viewport

参考 https://bitsofco.de/ios-safari-and-shrink-to-fit/

<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

默认情况下，即不设置 shrink-to-fit=no，当内容溢出时，会缩小内容来适应整个浏览器宽度，
有时我们不想缩小而是让溢出的内容隐藏，这时通过设置 shrink-to-fit=no 来禁用默认的行为

Subresource Integrity 介绍

https://imququ.com/post/subresource-integrity.html

可以使用 sha256 算法生成摘要签名，并进行 Base64 编码

curl https://imququ.com/static/js/other/zepto.js | openssl dgst -sha256 -binary | openssl enc -base64 -A

<script crossorigin="anonymous" integrity="sha256-b/TAR5GfYbbQ3gWQCA3fxESsvgU4AbP4rZ+qu1d9CuQ=" src="https://imququ.com/static/js/other/zepto.js"></script> 

crossorigin 属性的解答，看以下链接

https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_settings_attributes

网页头部声明lang=”zh-cn”、lang=“zh”、lang=“zh-cmn-Hans”区别

http://www.cnblogs.com/mayicao/articles/lang.html


## 用 sass-lint 来检测 scss 代码

* https://www.npmjs.com/package/sass-lint
* WebStorm plugin   https://github.com/idok/sass-lint-plugin
* Convert your SCSS-Lint Config File to Sass-Lint  http://sasstools.github.io/make-sass-lint-config/

## 使用 stylelint 来检测 scss 代码


