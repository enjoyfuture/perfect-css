---
layout: docs
title: 基础-Ripple 波纹效果
description: 波纹效果，通过 CSS 和 Javascript 为组件呈现出类似水波纹的效果
group: base
toc: true
---

## 波纹效果设计思想

不需要额外的元素，利用伪类 `::before` 和 `::after` 以及 Javascript 即可实现波纹效果。

* 伪类会给元素设置 ripple 双层背景， `::before` 用来产生动画效果，`::after` 为动画效果提供渲染背景舞台，
* 设置的双层背景面积是元素的二倍


## 使用

