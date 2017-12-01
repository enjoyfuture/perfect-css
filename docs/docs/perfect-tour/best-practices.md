---
layout: docs
title: Perfect 之旅-最佳实践
description: 最佳实践可以看作是 <code>Perfect CSS</code> 的高级用法，在最佳实践中，可以学会怎样高效的使用
             组件库，定制组件，更改主题等。
group: perfect-tour
toc: true
---

## 直接导入 sass 文件
使用 `Perfect CSS` 最好的方式是导入已有的 scss 文件，而非在页面中通过 link 引入编译压缩好的 css 文件。
使用导入方式的好处有以下几点

* 可以根据项目是在 pc 端还是手机端运行来重新设置兼容的浏览器和设备，使编译后的 CSS 能更好的运行在这些浏览器和设备中，比如项目只在移动端上运行，我们就可以省去 PC 端上 IE 的支持，通常设置为 `browsers: ['Android >= 4.4', 'iOS >=9.3']`
* 项目开发过程中可以设置 `sourceMap: true`，方便查看源代码来调试样式
* 项目整体编译，优化样式代码结构，去掉没有用到的样式
* 可以覆盖已定义的 scss 变量，来定制主题，修改配置选项值以及组件大小、间距等，比如设置变量 `$enable-responsive` 为 false 来禁用响应式布局

### 一次性全部导入
一次性全部导入比较简单，只需在 js 入口文件中加入以下代码即可

```javascript
import from 'perfect';
```
如果是想使用 CSS Module，则
```javascript
import perfect from 'perfect';
// 在 React 中用法
const div1 = (<div className={perfect.container}></div>);
```

### 按需导入 Perfect 组件库

根据是 pc 端项目还是 mobile 项目的不同，导入需要用到的组件，
一般在项目 scss 目录中创建一文件 `perfect-custom.scss` 来设置要导入的组件库，下面给出样板文件，
`~` 表示 perfect-css 所在的 node_modules，需要借助于 Webpack 来打包编译成 CSS

```scss
// 根据页面需要，自定义需要导入的 Perfect css 样式

// 变量、mixin 和函数
@import "~perfect-css/components/base/variables";
@import "~perfect-css/components/base/mixins";
@import "~perfect-css/components/base/functions";
@import "~perfect-css/components/base/base";

// Theme 主题
@import "~perfect-css/components/theme/theme";

// Normalize 重置样式
@import "~perfect-css/components/normalize/normalize";

// Animation 动画
@import "~perfect-css/components/animation/animation";

// Ripple 波纹效果
@import "~perfect-css/components/ripple/ripple";

// Shadow 阴影效果
@import "~perfect-css/components/shadow/shadow";

// Typography 排版
@import "~perfect-css/components/typography/typography";

// 纯 css 图标
@import "~perfect-css/components/icon-pure-css/icon-pure-css";

// Layout 布局
@import "~perfect-css/components/layout/box/box"; // Box 盒子布局
@import "~perfect-css/components/layout/drawer/drawer"; // Drawer 抽屉布局
@import "~perfect-css/components/layout/container/container"; // Container 容器
@import "~perfect-css/components/layout/grid/grid"; // Grid 栅格

// 表单组件
@import "~perfect-css/components/forms/input/input"; // Input 输入框
@import "~perfect-css/components/forms/select/select"; // Select 下拉选择框
@import "~perfect-css/components/forms/dropdown/dropdown"; // Dropdown 下拉菜单
@import "~perfect-css/components/forms/radio/radio"; // Radio 单选框
@import "~perfect-css/components/forms/checkbox/checkbox"; // Checkbox 复选框
@import "~perfect-css/components/forms/upload/upload"; // Upload 文件上传
@import "~perfect-css/components/forms/switch/switch"; // Switch 开关
@import "~perfect-css/components/forms/slider/slider"; // Slider 滑块
@import "~perfect-css/components/forms/button/button"; // Button 按钮
@import "~perfect-css/components/forms/form-field/form-field"; // Form Field 表单域

// 元素组件
@import "~perfect-css/components/elements/menu/menu"; // Menu 菜单
@import "~perfect-css/components/elements/menu/list-menu"; // List Menu 列表菜单
@import "~perfect-css/components/elements/tree/tree"; // Tree 树形组件
@import "~perfect-css/components/elements/page/page"; // Page 分页
@import "~perfect-css/components/elements/loading/loading"; // Loading 加载
@import "~perfect-css/components/elements/toast/toast"; // Toast 吐司提示
@import "~perfect-css/components/elements/tooltip/tooltip"; // Tooltip 提示
@import "~perfect-css/components/elements/image/image"; // Image 图像
@import "~perfect-css/components/elements/callout/callout"; // Callout 引线式标注
@import "~perfect-css/components/elements/progress/progress"; // Progress 进度条
@import "~perfect-css/components/elements/tag/tag"; // Tag 标签
@import "~perfect-css/components/elements/badge/badge"; // Badge 角标
@import "~perfect-css/components/elements/back-top/back-top"; // Back Top 返回顶部
@import "~perfect-css/components/elements/date-picker/date-picker"; // Date Picker 日期选择器
@import "~perfect-css/components/elements/color-picker/color-picker"; // Color Picker 颜色选择器
@import "~perfect-css/components/elements/timeline/timeline"; // Timeline 时间轴

// navigation 导航样式
@import "~perfect-css/components/navigation/crumb/crumb"; // Crumb 面包屑
@import "~perfect-css/components/navigation/navbar/navbar"; // Navbar 导航栏
@import "~perfect-css/components/navigation/steps/steps"; // Steps 步骤条
@import "~perfect-css/components/navigation/tabs/tabs"; // Tabs 标签页
@import "~perfect-css/components/navigation/tabs/tab-bar-scroller"; // 可滑动的 Tabs 标签页

// container 容器样式
@import "~perfect-css/components/container/list/list"; // List 列表
@import "~perfect-css/components/container/table/table"; // Table 表格
@import "~perfect-css/components/container/card/card"; // Card 卡片
@import "~perfect-css/components/container/panel/panel"; // Panel 面板
@import "~perfect-css/components/container/dialog/dialog"; // Dialog 对话框
@import "~perfect-css/components/container/accordion/accordion"; // Accordion 手风琴
@import "~perfect-css/components/container/carousel/carousel"; // Carousel 轮播图

// 工具类 classes
@import "~perfect-css/components/utils/align"; // 文本对齐方式
@import "~perfect-css/components/utils/border"; // 边框和圆角
@import "~perfect-css/components/utils/display"; // display 相关属性值样式
@import "~perfect-css/components/utils/flex"; // 弹性布局样式
@import "~perfect-css/components/utils/float"; // 浮层和清空浮层
@import "~perfect-css/components/utils/position"; // 定位
@import "~perfect-css/components/utils/sizing"; // 元素大小
@import "~perfect-css/components/utils/spacing"; // 间距
@import "~perfect-css/components/utils/text"; // 文本修饰

```

以上样板文件与 Perfect CSS 源文件[scss/perfect.scss]({{site.repo_root}}scss/perfect.scss){:target="_blank"}保持一致，我们根据需要去掉或注释掉暂时用不到的组件，
强力建议使用注释方式，因为后续业务可能会用到该组件。

## 定制变量和主题

`Perfect CSS` 提供了大量的 scss 变量，通过覆盖这些变量来开启或禁用某些功能、定制主题、修改组件大小和间距等。
组件库提供的变量可以分成以下三类
* 可配置选项变量
* 全局变量
* 每个组件内部变量

### 可配置选项变量
可配置选项变量主要用来开启或禁用某些功能，定义在文件[scss/base/variables/_options.scss]({{site.repo_root}}scss/base/variables/_options.scss){:target="_blank"}中

选项变量 | 默认值 | 说明
--- | --- | ---
$enable-responsive | false | 是否开启响应式布局
$enable-rounded | true | 是否开启圆角
$enable-shadows | true | 是否开启阴影效果
$enable-transparent | true | 是否使用透明色来处理灰色系列颜色值
$enable-print-styles | false | 是否开启打印样式
$enable-custom-theme | false | 是否开启定制的主题样式，即使关闭了该配置项，我们也可以调用组件中封装好的主题 mixin 来设置想要的主题样式
{: .doc-table}

### 全局变量
全局变量定义了[字体]({{site.repo_root}}scss/base/variables/_font.scss){:target="_blank"}、
[边框]({{site.repo_root}}scss/base/variables/_border.scss){:target="_blank"}、
[表单]({{site.repo_root}}scss/base/variables/_form.scss){:target="_blank"}、
[间距]({{site.repo_root}}scss/base/variables/_spacing.scss){:target="_blank"}、
[超链接]({{site.repo_root}}scss/base/variables/_link.scss){:target="_blank"}和
[z-index]({{site.repo_root}}scss/base/variables/_zindex.scss){:target="_blank"}

其中字体定义了全局字体 family 和字体大小，边框定义了边框颜色和圆角大小，表单给出了统一的表单元素默认行高、间距等，间距定义了组件统一的默认间距，超链接定义了超链接展现样式，z-index 定义了组件间层次关系。

### 每个组件内部变量
各个组件涉及到组件大小、间距和颜色的属性值，都定义成了变量，方便覆盖变量来定制化组件。

## 使用定制化 `@mixin` 来生成需要的组件样式

每个组件都额外提供了三个 `@mixin` ，分别为 `xxx-size` 、`xxx-theme` 和 `xxx-custom` ，
来自定义组件大小和主题，其中 `xxx-custom` 包含了 `xxx-size` 和 `xxx-theme`，`xxx` 表示组件名称，
比如按钮组件为 `btn`，单选框组件为 `radio` 等。

## 换肤（主题）功能

`Perfect CSS` 提供了强大的主题功能，默认提供了主色、次色和背景颜色（一般为白色或黑色）以及四种辅助颜色，
在搭建项目时，基本上采用这些默认的颜色即可。如果想实现多套主题颜色，`Perfect` 提供了两种解决方案，
一种是构建多套样式文件，另一种是利用 CSS 变量（自定义属性），前者会生成冗余的 CSS 文件，优点是兼容大部分常用浏览器；
后者只需设置几个 CSS 变量值即可，缺点是浏览器兼容性不太好，用户根据实际情况采用这两种方案。

### 多套主题样式库

### 利用 CSS 变量（自定义属性）

