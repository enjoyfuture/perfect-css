---
layout: docs
title: 主题-设计理念
description: Perfect 主题设计遵守 WCAG 2.0 规范标准，突出对比度。采用主色调和对比色调处理，
             同时加入了四种辅助颜色，分别为成功（success）、信息（info）、警告（warning）、错误（error）。
             色彩中定义了十种灰色颜色值，可满足不同灰度的样式。主题颜色贯穿于整个 CSS 组件中，所有组件默认采用浅色调开发，
             用户根据需要可以定制自己的色彩需求。
             
group: theme
toc: true
---

# 主题

## 色彩

* 遵守 WCAG 2.0 规范标准，突出对比度，更利于视觉障碍(色盲)阅读

色彩计算方法参考
* https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
* https://www.w3.org/Translations/WCAG20-zh/  相对亮度
* [sRGB编码](https://www.w3.org/Graphics/Color/sRGB.html)

基于 material design 思想，定义三种基本颜色主题，这三种基本颜色主题，会用在所有 CSS 组件上，
另外再定义成功 success 、警告 warning 、错误 error 三种辅助颜色，这三种颜色主要用在背景，文本，背景，按钮等
组件上

