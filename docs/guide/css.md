---
layout: guide
title: Perfect 规范
description: CSS 规范
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
5. 文件必须用UTF-8编码，在HTML中指定UTF-8编码即可，在CSS中不需要再指定，只要保持其文件编码为UTF-8就可以了
6. 使用有意义的通用的英文单词或缩写来命名，class 的命名应反映该元素的功能，而不要用抽象晦涩的命名
7. 采用 scss 格式书写，变量按照第2条规范来命名，即全部小写，多个单词中间用中划线 (-) 连接，比如：`$btn-padding-x: 1rem !default;`

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

### 属性声明顺序

相关的属性声明应当归为一组，并按照下面的顺序书写

* Layout 布局 (Positioning, Flex an Float)
* Box model 盒模型 - 按 width height padding margin border 顺序书写
* Font 字体
* Typographic 排版 
* List 列表
* Overflow
* Other 其他
* animation 动画相关

具体每一个属性书写顺序请参考 [sass-lint.yml](链接待补充)

### 超链接书写顺序
链接的样式请严格按照如下顺序添加： a:link -> a:visited -> a:hover -> a:active

### 选择器书写格式

* 避免使用多个属性选择器（例如，[class^="..."]），这会降低浏览器的性能
* 选择器嵌套要尽可能的短，最好不要超过3，太深的嵌套会降低浏览器的性能
* 只在必要的情况下才使用后代选择器 (例如，没有使用带前缀 class 的情况)
* 尽可能提高代码模块的复用，样式尽量用组合的方式

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

## 文件大小

单个CSS文件应避免过大，原则上不超过500行，可以按模块或组件拆成粒度更小的文件。
