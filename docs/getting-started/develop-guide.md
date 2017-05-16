---
layout: docs
title: Perfect 之旅- Perfect 开发指南
description: Perfect 开发指南
group: getting-started
toc: true
---

Perfect 开发指南

# 临时知识点总结

参考 https://bitsofco.de/ios-safari-and-shrink-to-fit/

<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

默认情况下，即不设置 shrink-to-fit=no，当内容溢出时，会缩小内容来适应整个浏览器宽度，有时我们不想缩小而是让溢出的内容
隐藏，这时通过设置 shrink-to-fit=no 来禁用默认的行为

Subresource Integrity 介绍

https://imququ.com/post/subresource-integrity.html

可以使用 sha256 算法生成摘要签名，并进行 Base64 编码

curl https://imququ.com/static/js/other/zepto.js | openssl dgst -sha256 -binary | openssl enc -base64 -A

<script crossorigin="anonymous" integrity="sha256-b/TAR5GfYbbQ3gWQCA3fxESsvgU4AbP4rZ+qu1d9CuQ=" src="https://imququ.com/static/js/other/zepto.js"></script> 

crossorigin 属性的解答，看以下链接

https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_settings_attributes

网页头部声明lang=”zh-cn”、lang=“zh”、lang=“zh-cmn-Hans”区别

http://www.cnblogs.com/mayicao/articles/lang.html

