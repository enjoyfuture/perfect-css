---
layout: docs
title: 布局-栅格系统
description: 栅格系统用来处理页面布局，通过行和列来布局元素，结合响应式来适配不同设备大小的布局展示，
             提供更友好的页面展示。响应式栅格系统的强大功能，只需使用 class『.row』 和 『.col』即可完成整个页面的布局。
group: layout
toc: true
---

## 栅格系统实现
栅格系统基于最新 flex 布局实现。采用 `.row` 和 `.col` 来为元素标签设置布局。为了更好的满足各种宽度的栅格，系统采用 24 列布局实现。
采用响应式布局，可以实现不同屏幕大小的栅格布局，也可以混合使用不同屏幕的栅格样式。
比如：`col-24 col-md-6 col-lg-4` 当设备很小时，`col-24` 起作用，全屏显示；中等设备时 `col-md-6` 起作用；
再大一点的设备 `col-lg-4` 起作用。设备大小的零界点请参考[响应式布局]()。

### 实现原理
* 使用 class 样式 `row` 在水平方向上创建行容器，然后在行容器中添加列 `col`，类似于 table 功能，但比 table 功能强大
* 栅格系统必须是 `row` 和 `col` 组合使用，而且 `col` 被 `row` 包裹
* `col-1` 到 `col-24` 组成了不同宽度的列，比如 `col-8` 的宽度为 8/24
* 通过添加响应式样式，来实现不同设备上的展示，比如: `col-md-2`
* 对于 col 总和超过24，列会自动在第二行中显示
* 对于多行布局，除了使用多个 `row` 外，还可以在需要折行的地方加上 `<div class="w-100"></div>` 强制换行

### 使用场景
* 页面整体布局，左右，左右中布局
* 表单布局
* 替代表格

## 如何使用
栅格系统使用 class `container` `row` 和 `col` 来布局显示内容

<div class="doc-example-row">
{% example html%}
<div class="container">
  <div class="row">
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
  </div>
</div>
{% endexample %}
</div>

上面定义了相等的三列，采用 sm(600px) 小屏幕处理，当设备小于600px 时，撑满一整行显示。用法上需要注意的地方有以下几点。

* 外层包裹容器样式，可以设置内容宽度大小 `.container` 使用 `.container` 定义的宽度，
  而 `.container-fluid` 百分百撑满整个容器宽度
* 使用 flex 定义栅格系统，当没有指定列宽时（即 col 后面的数字），会自动根据列的个数平均计算其宽度，
  比如一行中设置6列（`.col`），则每列的宽度为 1/6
* 默认每列都设置了左右内边距(`padding`)，如果想使内边距为0，可以在行上加入样式 `no-gutters`
* 按照响应式布局，栅格提供了5个层次的列，分别为 xs sm md lg xl
* 建议通常使用响应式零界点 md 来处理列，即 `col-md-x` 
* 当一列上混合出现不同层次的列样式时，会根据设备大小，优先命中最大宽度设备对应的列样式。
  比如，我们在列上设置了 `col-sm-8 col-md-7 col-lg-6`，sm md lg 对应的零界点为 600px 1024px 1440px 。
  当屏幕宽度超过1440px 时，使用 `col-lg-6` 对应的宽度；介于600px和1024px时，使用 `col-md-7` 对应的宽度；
  小于600px 时，使用 `col-sm-8` 对应的宽度。这样就可以更好的兼顾了各种设备大小的布局。看下面的例子，注意观察屏幕宽度变化，对应的列布局变化。
  
<div class="doc-example-row">
{% example html%}
<div class="container">
  <div class="row">
    <div class="col-sm-10 col-md-9 col-lg-8">col-sm-10 col-md-9 col-lg-8</div>
    <div class="col-sm-14 col-md-15 col-lg-16">col-sm-14 col-md-15 col-lg-16</div>
  </div>
</div>
{% endexample %}
</div>  

## 各种列布局
使用 `col-x` 可以设置各种大小的列布局。

### 等宽布局
对于等宽布局，只需为每列设置 `col` 即可

<div class="doc-example-row">
{% example html%}
<div class="container">
  <div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
  </div>
  
  <div class="row">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
  </div>
</div>
{% endexample %}
</div> 

### 多行布局
我们在需要折行的地方加上一个高度为0，宽度为100%的元素来强制换行处理

<div class="doc-example-row">
{% example html%}
<div class="container">
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="w-100"></div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
</div>
{% endexample %}
</div> 

### 固定列宽和自适应宽度混合
指定的列宽，比如 `col-5`，会按照 5/24 计算其宽度，未指定的列宽 `col` 会平均计算剩下的宽度。
例子中，第一行 `col-5` 和 `col-7` 占用了 12 格，那剩下的 12 格会平分到两个设置 `col`上，即每个宽度占6格。
第二行设置 `col` 的占格子数为：(24-5-10)/3 = 3

<div class="doc-example-row">
{% example html%}
<div class="container">
  <div class="row">
    <div class="col">col</div>
    <div class="col-5">col-5</div>
    <div class="col-7">col-7</div>
    <div class="col">col</div>
  </div>
  
  <div class="row">
    <div class="col">col</div>
    <div class="col-10">col-10</div>
    <div class="col">col</div>
    <div class="col-5">col-5</div>
    <div class="col">col</div>
  </div>
</div>
{% endexample %}
</div> 

### 根据内容计算列宽度
使用样式 `col-{breakpoint}-auto` 设置列，表示列的宽度会根据内容来计算其宽度,
但当内容很多时会导致布局混乱，所以需要我们设置最大宽度，或强制换行显示

<div class="doc-example-row">
{% example html%}
<div class="container">
  <div class="row">
    <div class="col-md-4">col-md-4</div>
    <div class="col-md-auto">根据内容计算列宽度</div>
    <div class="col-md-5">col-md-5</div>
  </div>
  
  <div class="row">
    <div class="col-lg-6">col-lg-6</div>
    <div class="col-lg-auto">根据内容的多少，会占用下一列的宽度</div>
    <div class="col">col</div>
  </div>
</div>
{% endexample %}
</div> 

## 响应式布局下栅格系统的使用
栅格系统提供了5个层次的响应式布局样式 `col-xs-*` `col-sm-*` `col-md-*` `col-lg-*` `col-xl-*`，
分别对应不同大小的设备。

### 折中的方案
为了兼容各个设备的布局，我们常用 `col-sm-*` 来创建栅格系统

<div class="doc-example-row">
{% example html%}
<div class="container">
  <div class="row">
    <div class="col-sm-10">col-sm-10</div>
    <div class="col-sm-8">col-sm-8</div>
    <div class="col-sm-6">col-sm-6</div>
  </div>
  
  <div class="row">
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
  </div>
</div>
{% endexample %}
</div> 

### 混合使用
为了兼顾各种设备大小的布局，混合使用响应式布局是个完美的解决方案，下面的例子，在改变屏幕大小时，每列所占宽度的比例会变化的。

<div class="doc-example-row">
{% example html%}
<div class="container">
  <!-- 首列在移动端等小屏幕下全屏显示，在大一点的屏幕下，宽度占用2/3-->
  <div class="row">
    <div class="col-24 col-md-16">col-24 col-md-16</div>
    <div class="col-12 col-md-8">col-12 col-md-8</div>
  </div>
</div>
{% endexample %}
</div> 

## 对齐
使用工具类 flex 提供的样式可以设置栅格垂直和水平对齐方式

### 垂直对齐
垂直对齐使用class `align-items-{breakpoint}-*` 和 `.align-self{breakpoint}-*`
前者是指整行上对应的列对齐方式，设置 `row` 上，而后者是指某一列对齐方式，设置在 `col` 上

<div class="doc-example-row doc-example-row-flex-cols">
{% example html%}
<div class="container">
  <div class="row align-items-start">
    <div class="col">
      顶端对齐
    </div>
    <div class="col">
      顶端对齐
    </div>
    <div class="col">
      顶端对齐
    </div>
  </div>
  
  <div class="row align-items-center">
    <div class="col">
      垂直居中
    </div>
    <div class="col">
      垂直居中
    </div>
    <div class="col">
      垂直居中
    </div>
  </div>
  
  <div class="row align-items-end">
    <div class="col">
      底端对齐
    </div>
    <div class="col">
      底端对齐
    </div>
    <div class="col">
      底端对齐
    </div>
  </div>
</div>
{% endexample %}
</div> 

<div class="doc-example-row doc-example-row-flex-cols">
{% example html%}
<div class="container">
  <div class="row">
    <div class="col align-self-start">
      顶端对齐
    </div>
    <div class="col align-self-center">
      垂直居中
    </div>
    <div class="col align-self-end">
      底端对齐
    </div>
  </div>
</div>
{% endexample %}
</div> 

### 水平对齐
水平对齐使用class `justify-content-{breakpoint}-*` 设置在 `row` 上

<div class="doc-example-row">
{% example html%}
<div class="container">
  <div class="row justify-content-start">
    <div class="col-8">
      左对齐
    </div>
    <div class="col-8">
      左对齐
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-8">
      居中对齐
    </div>
    <div class="col-8">
      居中对齐
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-8">
      右对齐
    </div>
    <div class="col-8">
      右对齐
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-5">
      平均对齐
    </div>
    <div class="col-5">
      平均对齐
    </div>
    <div class="col-5">
      平均对齐
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-8">
      两端对齐
    </div>
    <div class="col-8">
      两端对齐
    </div>
  </div>
</div>
{% endexample %}
</div> 

## 无边距
默认每列设置了左右内边距，如果想去掉左右内边距，可以在 `row` 上添加 class `no-gutters`
下面例子中，第一行是有边距，第二行是无边距。如果连容器的内边距都不需要，可以把 `.container`
和 `.container-fluid` 去掉。

<div class="doc-example-row doc-example-row-gutters">
{% example html%}
<div class="container">
  <div class="row">
    <div class="col-8">
      <div>col-8</div>
    </div>
    <div class="col-8">
      <div>col-8</div>
    </div>
    <div class="col-8">
      <div>col-8</div>
    </div>
  </div>
</div>
<div class="row no-gutters">
  <div class="col-8">
    <div>col-8</div>
  </div>
  <div class="col-8">
    <div>col-8</div>
  </div>
  <div class="col-8">
    <div>col-8</div>
  </div>
</div>
{% endexample %}
</div> 

## 重新排序
我们可以使用 flex `order-*` 、`offset-*` 或 [margin utilities]({{ site.baseurl }}/docs/utilities/spacing/) 来调整列显示位置，
使用 `order-*` 直接改变列位置，使用 `offset-*` 或 margin auto 通过设置 margin-left 或 margin-right 来偏移列，
变相的达到调整位置的目的

### flex order 排序
使用 `.order-*` 来调整列位置，可以调整到 1 ~ 24，比如 `order-4` `order-md-4` 等

<div class="doc-example-row">
{% example html%}
<div class="container">
  <div class="row">
    <div class="col order-4">order-4 位置由1变为4</div>
    <div class="col">位置由2变为1</div>
    <div class="order-2 col">order-2 位置由3变为2</div>
    <div class="order-3 col">order-3 位置由4变为3</div>
  </div>
</div>
{% endexample %}
</div>

我们也可以使用 `.order-first` 快速改变元素位置到首行或首列
<div class="doc-example-row">
{% example html%}
<div class="container">
  <div class="row">
    <div class="col">
      第一个元素，位置改变
    </div>
    <div class="col">
      第二个元素，位置改变
    </div>
    <div class="col order-first">
      位置由3变成1
    </div>
  </div>
</div>
{% endexample %}
</div>

### offset 调整位置
使用 `.offset-*` 来调整列位置，比如 `offset-md-7`，实际上是增加了 margin-left 值，使列移动到 `col-md-7` 的位置上。

<div class="doc-example-row">
{% example html%}
<div class="container">
  <div class="row">
    <div class="col-md-7">col-md-7</div>
    <div class="col-md-7 offset-md-7">col-md-7 offset-md-7，向右移动了7格</div>
  </div>
  <div class="row">
    <div class="col-md-8 offset-md-9">col-md-8 offset-md-9，向右移动了9格</div>
  </div>
  <div class="row">    
    <div class="col-md-10 offset-md-10">col-md-10 offset-md-10，向右移动了10格</div>
  </div>
</div>
{% endexample %}
</div>

### margin auto 排序
使用 `m*-auto` 可以设置左右 margin 为 auto，从而使左右留出空白空间

<div class="doc-example-row">
{% example html%}
<div class="container">
  <div class="row">
    <div class="col-md-8 m-l-auto">col-md-8 m-l-auto</div>
    <div class="col-md-6">col-md-4</div>
    <div class="col-md-6">col-md-4</div>
  </div>
  <div class="row">
    <div class="col-md-6 m-md-auto">col-md-6 m-md-auto</div>
    <div class="col-md-6 m-l-md-auto">col-md-6 m-md-auto</div>
  </div>
  <div class="row">
    <div class="col-auto m-r-auto">col-auto m-r-auto</div>
    <div class="col-auto">col-auto</div>
  </div>
</div>
{% endexample %}
</div>

另外使用 `m*-auto` 可以实现左右位移的效果

<div class="doc-example-row">
{% example html%}
<div class="container">
  <div class="row">
    <div class="col-8 m-l-auto">左边位移</div>
    <div class="col-4">col-4</div>
    <div class="col-4">col-4</div>
  </div>
  <div class="row">
    <div class="col-4">col-4</div>
    <div class="col-4">col-4</div>
    <div class="col-8 m-r-auto">右边位移</div>
  </div>
  <div class="row">
    <div class="col-6 m-l-auto">左位移</div>
    <div class="col-4">col-4</div>
    <div class="col-6 m-r-auto">右位移</div>
  </div>
</div>
{% endexample %}
</div>

## 栅格系统嵌套

嵌套类似于表格嵌套，就是在列中再包含一个栅格，理论上可以无限嵌套使用

<div class="doc-example-row">
{% example html%}
<div class="container">
  <div class="row">
    <div class="col-md-16">
      外层栅格系统
      <div class="row">
        <div class="col-md-8">内层栅格系统</div>
        <div class="col-md-8">内层栅格系统</div>
        <div class="col-md-8">内层栅格系统</div>
      </div>
    </div>
    <div class="col-md-4">col-md-4</div>
  </div>
</div>
{% endexample %}
</div>

## 自定义栅格系统
通过修改 Sass 变量，可以调整栅格格数，间距大小，以及结合响应式调整屏幕零界点大小

grid 对应的变量文件为 [{{site.repo}}/tree/master/scss/layout/grid/_variable.scss]({{site.repo}}/scss/layout/grid/_variable.scss)

```scss
$grid-columns: 24 !default;
$grid-gutter-width: 30px !default;
```

响应式对应的变量文件为 [{{site.repo}}/tree/master/scss/responsive/_variable.scss]({{site.repo}}/scss/responsive/_variable.scss)

```scss
$responsive-breakpoints: (
  xs: 0, // xsmall
  sm: 600px, // small
  md: 1024px, // medium
  lg: 1440px, // large
  xl: 1600px, // xlarge
) !default;

$container-max-widths: (
  sm: 600px,
  md: 1024px,
  lg: 1440px,
  xl: 1600px
) !default;
```
修改后需要重新编译生成 css 代码，也可以通过自定义主题来在线设置，保存并下载生成的 css 文件。TODO 待完成

## 开启关闭响应式布局
我们可以通过设置 Scss 变量 [$enable-responsive]({{site.repo}}/tree/master/scss/base/variables/_options.scss) 来开启或关闭响应式布局，默认是开启。在不需要响应式布局的情况下，可以关闭。
关闭后，我们使用 `col` `col-2` 等即可创建栅格系统。需要注意的时，要配合 class `container`来使用，并自定义
父容器的宽度。


