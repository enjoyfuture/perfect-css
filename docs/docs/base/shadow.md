---
layout: docs
title: 基础-Shadow 阴影效果
description: 阴影效果模拟物体在深度和方向上投影，从而产生更直观的视觉效果。物体的高度和光的角度决定了影子的外观。
             Perfect CSS 提供了 0 到 24 范围的投影效果，值越大表明投影越大。
group: base
toc: true
---

## 阴影效果设计

阴影效果给出了物体的三维空间效果，Perfect CSS 通过本影、半影和全影来综合处理阴影，关于阴影的设计可以阅读这里
[【Material Design guidelines: Shadows & elevation】](https://material.io/guidelines/material-design/elevation-shadows.html){:target="_blank"}

## 使用

可以直接使用 `CSS Classes`，也可以通过 `@include` `Sass Mixin` 

### CSS Classes
Perfect CSS 中有些组件默认设置了阴影效果，比如按钮，设置的阴影效果为 z-space 2。
如果你想在其他组件或元素中设置阴影效果，可以使用系统提供的 CSS Classes。

CSS Classes | 说明
--- | ---
.shadow-(X) | 设置阴影效果，X 的范围为 0 <= X <= 24，设为0表示无阴影效果
.shadow-transition | 设置阴影效果的动画
{: .doc-table}

### Sass Mixin

在需要阴影效果的样式中使用 Sass Mixin 设置, 比如 `@include shadow(5)`

## Sass Variable、Function 和 Mixin 

Variable | 说明
--- | ---
$shadow-transition-duration | 动画持续时间，默认 280ms
$shadow-transition-timing-function | 默认动画 function，$animation-ease-in-out
{: .doc-table}

Function | 说明
--- | ---
@function shadow-transition-rule | 返回 box-shadow 动画
{: .doc-table}

Mixin | 说明
--- | ---
@mixin shadow($z-value, $umbra-color: $shadow-umbra-color, $penumbra-color: $shadow-penumbra-color, $ambient-color: $shadow-ambient-color) | 根据给定的 z 坐标空间设置阴影效果，阴影颜色默认为黑色，也可以根据需要设置其他颜色
@mixin shadow-transition | 为给定的元素设置一个动画效果
{: .doc-table}

关于阴影效果动画的使用，首先定义动画 CSS Class

```scss
.shadow-animation {
  @include shadow-transition;
}
```
然后在需要添加动画的元素上加上 `shadow-animation` 即可

## 例子

例子中给出了默认颜色阴影效果和自定义颜色效果，还给出了阴影动画效果和 Sass Mixin 使用

[Shadow 阴影效果]({{site.baseurl}}/components/base/shadow/){:target="_blank"}
