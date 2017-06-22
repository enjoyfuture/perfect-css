---
layout: docs
title: 布局-容器
description: 容器布局分为自适应布局和响应式布局，结合强大的 Grid 可实现任意布局
    <p>两列等高布局传统PC端布局，两列子容器高度始终保持一致。支持：ie6+</p>
group: layout
toc: true
---

## 自适应布局

<div class="doc-example-container">
{% example html%}
<div class="container-fluid">
  自适应布局
</div>
{% endexample %}
</div>

### 自适应布局 - float横向自适应
利用`overflow: hidden;`触发浏览器`haslayout`的特性，实现的浮动布局方式。`container-float-full`容器的宽度会根据`container-float-cell`容器的内容自动填补剩余空间。兼容性：ie7+


<div class="doc-example-container">
{% example html%}
<div class="container-fluid-float exp1">
  <div class="container-fluid-float-cell">浮动元素-宽度自适应</div>
  <div class="container-fluid-float-full text-center">填充块</div>
</div>
{% endexample %}
</div>

**可以随意进行多层嵌套：**
<div class="doc-example-container">
{% example html%}
<div class="container-fluid-float exp2">
  <div class="container-fluid-float-cell">1级-浮动元素</div>
  <div class="container-fluid-float-full"><!--1级-填充块-->
    <div class="container-fluid-float-cell float-right" style="background: #adecbd;">2级-浮动元素</div>
    <div class="container-fluid-float-full text-center">2级-填充块</div>
  </div>
</div>
{% endexample %}
</div>

### 自适应方块
常见于移动端图片展示等位置，根据手机屏幕大小不同，等比例显示方块。

<div class="doc-example-container">
{% example html %}
<div style="width: 200px;">
  <div class="container-square">
    <div class="container-square-box">
      自适应方块
    </div>
  </div>
</div>
{% endexample %}
</div>

也可结合`float`或`inline-block`来进行排列
<div class="doc-example-container">
{% example html %}
<div class="inline-block-wrap exp-square">
    <div class="inline-block">
      <div class="container-square">
        <div class="container-square-box">
          自适应方块
        </div>
      </div>
    </div>
    <div class="inline-block">
      <div class="container-square">
        <div class="container-square-box">
          自适应方块
        </div>
      </div>
    </div>
    <div class="inline-block">
      <div class="container-square">
        <div class="container-square-box">
          自适应方块
        </div>
      </div>
    </div>
  </div>
{% endexample %}
</div>

此外，给container-square改写不同的padding-top百分比，也可改变方块的长宽比例。
<div class="inline-block" style="width: 200px;">
  <div class="container-square" style="padding-top: 70%;">
    <div class="container-square-box" style="background: #adecbd;">
      width: 200px; padding-top: 70%;
    </div>
  </div>
</div>
<div class="inline-block" style="width: 200px;">
  <div class="container-square" style="padding-top: 100%;">
    <div class="container-square-box" style="background: #adecbd;">
      width: 200px; padding-top: 100%;
    </div>
  </div>
</div>
<div class="inline-block" style="width: 100px;">
  <div class="container-square" style="padding-top: 200%;">
    <div class="container-square-box" style="background: #adecbd;">
      width: 100px; padding-top: 200%;
    </div>
  </div>
</div>

## 响应式布局

<div class="doc-example-container">
{% example html %}
<div class="container">
  响应式布局
</div>
{% endexample %}
</div>

## 等高布局

传统pc端常见的两列等高布局。场景常见于：左侧导航栏右侧正文，或右侧导航栏左侧正文，背景色不同需要同时铺满等高的情况。兼容性：ie6/7+

- 父容器container-equal-height： 
  1. 定义父容器`width`、`padding-left`，
  2. `padding-left`与导航容器宽度保持一致。
- 导航container-equal-height-nav：
  1. 定义导航`width`、`margin-left`，
  2. `margin-left`为`width`的负值，

<div class="doc-example-container">
{% example html %}
<div class="container-equal-height exp1">
  <div class="container-equal-height-nav text-center">
    导航1<br>
  </div>
  <div class="container-equal-height-main text-center">
    正文<br>
    正文<br>
    正文<br>
  </div>
</div>
{% endexample %}
</div>

- 导航容器在右侧：
  1. 给两个子容器分别添加`float-right`，
  2. 将container-equal-height的`padding-left`、container-equal-height-nav的`margin-left`，分别改为`padding-right`和`margin-right`。

<div class="doc-example-container">
{% example html %}
<div class="container-equal-height exp2">
  <div class="container-equal-height-nav float-right text-center">
    导航1<br>
    导航2<br>
    导航3<br>
    导航4<br>
  </div>
  <div class="container-equal-height-main float-right text-center">
    正文<br>
    正文<br>
  </div>
</div>
{% endexample %}
</div>

## 垂直居中

## 媒体查询

## 使用场景


