---
layout: docs
title: Perfect 之旅-最佳实践
description: 最佳实践可以看作是 <code>Perfect CSS</code> 的高级用法。可以帮助你优化项目、
             提高开发效率、定制化组件等。
group: perfect-tour
toc: true
---

## 直接导入 sass 文件
使用 `Perfect CSS` 最好的方式是导入 sass 文件，而非在页面通过 link 引入编译压缩好的 css 文件。
使用导入方式的好处有以下几点

* 可以根据项目是在 pc 端还是手机端运行来重新设置编译浏览器支持性，比如 `browsers: ['Android >= 4.4', 'iOS >=9.3']`
* 项目开发过程中设置 `sourceMap: true`，方便查看源代码
* 项目整体编译，优化样式代码结构，去掉没有用到的样式
* CSS Module 支持

### 一次性全部导入
全部导入比较简单，只需在 js 入口文件中加入以下代码即可

```javascript
import from 'perfect';
```
如果是想使用 CSS Module，则
```javascript
import perfect from 'perfect';
// 在 React 中用法
const div1 = (<div className={perfect.container}></div>);
```

### 按需导入组件

根据是 pc 端项目还是 mobile 项目的不同，导入需要用到的组件，一般在项目 scss 目录中创建一文件 `perfect-custom.scss`
文件中导入需要用到的样式，下面给出样板文件

```scss
// 根据页面需要，自定义需要导入的 Perfect css 样式

// 变量、mixin 和函数
@import "../../node_modules/perfect-css/scss/base/variables";
@import "../../node_modules/perfect-css/scss/base/mixins";
@import "../../node_modules/perfect-css/scss/base/functions";

// theme
@import "../../node_modules/perfect-css/scss/theme/theme";

// ripple 波纹效果
@import "../../node_modules/perfect-css/scss/ripple/ripple";

// shadow 效果
@import "../../node_modules/perfect-css/scss/shadow/shadow";

// normalize
@import "../../node_modules/perfect-css/scss/normalize/normalize";

// typography 排版样式
@import "../../node_modules/perfect-css/scss/typography/typography";

// layout 布局
@import "../../node_modules/perfect-css/scss/layout/box/box";
@import "../../node_modules/perfect-css/scss/layout/container/container";
@import "../../node_modules/perfect-css/scss/layout/grid/grid";

// navigation 导航样式
@import "../../node_modules/perfect-css/scss/navigation/crumb/crumb";
@import "../../node_modules/perfect-css/scss/navigation/menu/menu";
@import "../../node_modules/perfect-css/scss/navigation/navbar/navbar";
@import "../../node_modules/perfect-css/scss/navigation/tabs/tabs";
@import "../../node_modules/perfect-css/scss/navigation/tree/tree";

// container 容器样式
@import "../../node_modules/perfect-css/scss/container/accordion/accordion";
@import "../../node_modules/perfect-css/scss/container/callout/callout";
@import "../../node_modules/perfect-css/scss/container/card/card";
@import "../../node_modules/perfect-css/scss/container/carousel/carousel";
@import "../../node_modules/perfect-css/scss/container/dialog/dialog";
@import "../../node_modules/perfect-css/scss/container/drawer/drawer";
@import "../../node_modules/perfect-css/scss/container/list/list";
@import "../../node_modules/perfect-css/scss/container/panel/panel";
@import "../../node_modules/perfect-css/scss/container/table/table";

// 表单组件
@import "../../node_modules/perfect-css/scss/components/form-field/form-field";
@import "../../node_modules/perfect-css/scss/components/button/button";
@import "../../node_modules/perfect-css/scss/components/checkbox/checkbox";
@import "../../node_modules/perfect-css/scss/components/input/input";
@import "../../node_modules/perfect-css/scss/components/radio/radio";
@import "../../node_modules/perfect-css/scss/components/select/select";

// 其他组件
//@import "../../node_modules/perfect-css/scss/components/badge/badge";
//@import "../../node_modules/perfect-css/scss/components/image/image";
@import "../../node_modules/perfect-css/scss/components/progress/progress";
@import "../../node_modules/perfect-css/scss/components/toast/toast";
//@import "../../node_modules/perfect-css/scss/components/tooltip/tooltip";

// 工具类 classes
@import "../../node_modules/perfect-css/scss/utils/utils";

// 纯 css 图标
@import "../../node_modules/perfect-css/scss/icon-pure-css/icon-pure-css";
```

以上样板文件对应到 Perfect CSS 源文件 `/scss/perfect.scss`  我们根据需要去掉或注释掉用不到的组件，建议使用注释方式，因为后续业务可能会用到该组件。

## 定制变量和主题

## 使用定制化 `@mixin` 来生成需要的组件样式

## 换肤（换主题）功能

### 利用 CSS 变量（自定义属性）

### 多套主题样式库

## 自定义样式组件
