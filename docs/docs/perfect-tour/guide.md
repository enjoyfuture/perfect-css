---
layout: docs
title: Perfect 之旅-CSS 规范
description: CSS 规范
group: perfect-tour
toc: true
---

## 说明
首先我们必须遵循黄金法则(Golden Rule):
**不管有多少人参与，一定要确保每一行代码都像是同一个人编写的**
(**Every line of code should appear to be written by a single person, no matter the number of contributors**)。
这就需要我们永远遵循这套规范，每个项目成员按照这个规范来编写代码。

注：**以下规范主要以 CSS 来制定，同样也适用于 Sass**

本规范包含以下内容

* CSS 命名规范
* CSS 书写规范
* CSS 注释
* CSS 预编译器 Sass
* sass-lint 代码检测工具

## CSS 命名规范

1. 文件名使用英文小写，多个单词时，中间用中划线 (-) 连接，比如：`common.scss` `button-groups.scss` 等
2. class 命名使用英文小写，多个单词时，中间用中划线 (-) 连接，比如：`.panel{}`  `.panel-default{}` 等
3. class 命名注意缩写，但是不能盲目的过渡缩写，`.btn` 代表 `button`，但是 `.s` 不能表达任何意思
4. 基于最近的父 class 或基本 (base) class 作为新 class 的前缀
5. 文件必须用 `UTF-8` 编码，在HTML中指定 `UTF-8` 编码即可，在CSS中不需要再指定，只要保持其文件编码为 `UTF-8` 就可以了
6. 使用有意义的通用的英文单词或缩写来命名，class 的命名应反映该元素的功能，而不要用抽象晦涩的命名
7. 采用 scss 格式书写，变量按照第2条规范来命名，即全部小写，多个单词中间用中划线 (-) 连接，比如：`$btn-padding-x: 1rem !default;`
8. 常用 class 命名名称，以下列出 class 名称或其前缀

| class | 含义   |
| --------  | -------|
| alert |	提示信息 |
| badge |	徽章 |
| btn, button |	按钮 |
| wrapper |	容器，包，一般用于最外层 |
| container |	容器 |
| panel |	面板 |
| card |	卡片 |
| tree |	树 |
| tab |	tab 标签 |
| crumbs, breadcrumbs |	面包屑 |
| dropdown |	下拉框 |
| form-control |	表单 |
| row |	行 |
| col |	列 |
| img, figure |	图像样式 |
| input-group |	输入框分组 |
| list-group |	列表 |
| menu |	 菜单 |
| clearfix |	清除浮动 |
| nav |	导航 |
| navbar |	导航栏 |
| pagination, page |	 分页 |
| popover |	弹出框 |
| progress |	进度条 |
| table |	表格 |
| tooltip |	提示 |
| pos |	定位 |
| m-t, m-b, m-l, m-r |	外边距 |
| p-t, p-b, p-l, p-r |	内边距 |
| bg |	背景 |
| text |	文本 |
| error |	错误 |
| help |	帮助 |
| hide |	隐藏 |
| icon |	图标 |
| info |	信息 |
| modal, dialog |	模态窗口，对话框 |
| toast |	toast 提示信息 |
| primary |	主要 |
| secondary |	次要 |
| selected |	已选 |
| show |	显示 |
| success |	成功（提示） |
| thumbnail |	缩略图 |
| date | 日期 |
| time |	时间 |
{: .doc-table}

## CSS 书写规范

以下会列出部分书写规范，更多的规范，我们会使用 sass-lint 来限制，webStorm 中有对应的插件，开启 sass-lint 实时检测

### 语法和排版

1. 使用两个空格来代替制表符（tab）作为缩进，— 这是保证代码在各种环境下显示一致的唯一方式
2. 选择器规则应该采用多行书写，每条声明独占一行，排版美观、方便阅读、快速定位错误报告
3. 所有声明语句都应当以分号结尾。最后一条声明语句后面的分号是可选的，但是，如果省略这个分号，你的代码可能更易出错
4. 对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如：.5 代替 0.5；-.5px 代替 -0.5px）
5. 十六进制颜色值应该全部小写，例如，`#6ce26c`
6. 尽量使用简写形式的十六进制值，例如，用 `#fff` 代替 `#ffffff`
7. 避免为 0 值指定单位，例如，用 `margin: 0;` 代替 `margin: 0px;`
8. 如果需要，尽量不要写带有浏览器前缀的属性，我们利用 `autoprefixer` 自动补齐
9. 每行长度最多100个字符，对于超长的样式，在样式值的 `空格` 处或 `,` 后换行
   ```scss
   .guide {
     // 同一属性，多个属性值，以逗号换行
     box-shadow: 0 0 0 10px #655,
     0 0 0 15px deeppink,
     0 2px 5px 15px rgba(0, 0, 0, .6);
   
     // 函数属性值，适当时候以逗号来换行
     background: linear-gradient(45deg,
       #fb3 25%, #58a 0, #58a 50%,
       #fb3 0, #fb3 75%, #58a 0);
     background-size: 30px 30px;
   
     // 同一属性，多个属性值，以逗号换行
     background: #58a;
     background-image: linear-gradient(white 2px, transparent 0),
     linear-gradient(90deg, white 2px, transparent 0),
     linear-gradient(hsla(0, 0%, 100%, .3) 1px, transparent 0),
     linear-gradient(90deg, hsla(0, 0%, 100%, .3) 1px, transparent 0);
     background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;
   }
   ```
10. scss 嵌套中，嵌套与 CSS 属性之间空一行

### 属性声明顺序

相关的属性声明应当归为一组，并按照下面的顺序书写

1. 伪类内容
1. Layout 布局 (Positioning, Flex an Float)
1. Box model 盒模型 - 按 width height padding margin border 顺序书写
1. Overflow
1. Font 字体
1. Typographic 排版 
1. List 列表
1. Other 其他
1. animation 动画相关

具体每一个属性书写顺序请参考 [sass-lint.yml](链接待补充)

### scss 嵌套顺序

1. 当前选择器的样式属性
2. 父级选择器的伪类选择器 (:first-child, :hover, :active etc)
3. 伪类元素 (::before and ::after)
4. 父级选择器的扩展增强样式 (.selected, .active, .enlarged etc.)
5. Sass的上下文媒体查询
6. 兄弟选择器样式
7. 子选择器样式

```scss
.product-teaser {
  // 1. Style attributes
  display: inline-block;
  padding: 1rem;
  color: #00a8c6;
  background-color: #fff9ff;

  // 2. Pseudo selectors with parent selector
  &:hover {
    color: #00a8c6;
  }

  // 3. Pseudo elements with parent selector
  &::before {
    content: "";
    display: block;
    border-top: 1px solid #00c176;
  }

  &::after {
    content: "";
    display: block;
    border-top: 1px solid #00a8c6;
  }

  // 4. State classes with parent selector
  &.active {
    color: #ff003c;
    background-color: #ff8edf;

    // 4.2. Pseuso selector in state class selector
    &:hover {
      color: #d14;
    }
  }

  // 5. Contextual media queries
  @media screen and (max-width: 640px) {
    display: block;
    font-size: 2em;
  }

  // 6. Brother selectors
  + .main  {
    font-size: 1.2em;
  }

  // 7. Sub selectors
  > .content > .title {
    font-size: 1.2em;

    // 7.5. Contextual media queries in sub selector
    @media screen and (max-width: 640px) {
      text-transform: uppercase;
      letter-spacing: .2em;
    }
  }
}
```

### 简写形式的属性声明

在需要显式地设置属性值的情况下，应当尽量`限制`使用简写形式的属性声明，常见的滥用简写属性声明的情况如下
* padding
* margin
* font
* background
* border
* border-radius

大部分情况下，我们不需要为简写形式的属性声明指定所有值。例如，HTML 的头部元素只需要设置上、下边距（margin）的值，
因此，在必要的时候，只需覆盖这两个值就可以。过度使用简写形式的属性声明会导致代码混乱，
并且会对属性值带来不必要的覆盖从而引起意外的副作用

```scss
/* Bad example */
.element {
  margin: 0 0 10px;
  background: red;
  background: url("image.jpg");
  border-radius: 3px 3px 0 0;
}

/* Good example */
.element {
  margin-bottom: 10px;
  background-color: red;
  background-image: url("image.jpg");
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
```

### 超链接书写顺序
链接的样式请严格按照如下顺序添加： a:link -> a:visited -> a:hover -> a:active

### 选择器书写格式

* 避免使用多个属性选择器（例如，[class^="..."]），这会降低浏览器的性能
* 选择器嵌套要尽可能的短，最好不要超过3，太深的嵌套会降低浏览器的性能
* 只在必要的情况下才使用后代选择器 (例如，没有使用带前缀 class 的情况)
* 尽可能提高代码模块的复用，样式尽量用组合的方式
*. 为选择器中的属性值添加双引号，例如，`input[type="text"]`
*. 当一个 rule 包含多个 selector 时，每个选择器声明必须独占一行
   ```scss
    // good
    .post,
    .page,
    .comment {
      color: #00a8c6;
    }
    
    // bad
    .post, .page, .comment {
      color: #00a8c6;
    }
   ```

## 注释

请确保代码是描述性的、注释良好并且易于他人理解的。好的代码注释能够传达样式上下文关系和代码要实现的目的。

注释不要简单地重申组件或 class 名称，最好能以详细的说明。对于较长的注释，务必书写完整的句子；对于一般性注解，可以书写简洁的短语。

由于采用 Sass 来书写 css，我们统一使用 // 来注释，只在打包样式主文件，添加多行注释

单行注释

```scss
// comment
```
多行注释
```scss
/*  
* comment 1
* comment 2
*/
```
对于 scss 文件，我们大部分采用单行注释，这样编译成 `css` 时会删除掉这些注释，
而多行注释一般写在页面的头部，说明该样式文件是干什么的，怎么用等信息

## 文件大小

单个CSS文件应避免过大，原则上不超过500行，可以按模块或组件拆成粒度更小的文件。

## 预编译器 Sass

待补充

## sass-lint 代码检测工具

需要安装 sass-lint
```bash
npm install --save-dev sass-lint
```
并设置 `.sass-lint.yml` 配置文件

对于 WebStorm，需要安装插件[sass-lint-plugin](https://github.com/idok/sass-lint-plugin)

## scss 代码文件结构以及 CSS 模块化

scss 目录下包含

* 主文件 `perfect.scss`，可以一次性的全部引入所有 css 样式
* 基础文件 `perfect-reset.scss`，包括 `normalize.scss` 和 `reset.scss` 
* 工具类样式 `perfect-utils.scss`，所有工具类样式，调用之前需先导入 `perfect-reset.scss`
* 动画样式 `perfect-animation.scss`，所有动画样式，调用之前需先导入 `perfect-reset.scss`
* CSS 模块文件夹 `modules`，可以单独引入某一 CSS 模块文件，调用之前需先导入 `perfect-reset.scss`
* CSS 工具类样式文件夹 utils，包含所有工具类样式
* CSS 动画样式文件夹 `animation` ，包含各种动画样式
* etc 定义变量、mixin、函数和重置样式，只作为 scss 编译过程文件，不会生成对应的 css 文件

其中 CSS 模块 `modules` 中包含以下几类

* typography 排版样式(Font, Paragraphs, Text, Color, Header(h1-h6), Links, Lists(ul ol dl), code)，
  包括 code, header, link
* print 打印样式
* layout 布局，包括 box, container, float, grid
* navigation 导航样式，包括 crumbs, menu, nav, navbar, pagination, tree
* container 容器样式，包括 accordion, callout, card, carousel, form, list-panel, modal, panel, tab-panel, table, modal 
* components 组件样式，包括 badge, btn, btn-group, dropDown, image, input, input-group, popover, progress, toast, tooltip

工具类样式 utils

* align 文本对齐方向
* background 背景颜色，定义各种基本颜色背景色
* border 边框和圆角
* clearfix 清除浮层
* color 文本颜色，定义各种基本颜色前景色
* display 可视化
* flexbox flex 相关样式
* position 定位
* spacing 内外边距
* text 内容样式，比如单行省略，多行省略等
* 条纹背景
* 其他


## docs 文件结构

