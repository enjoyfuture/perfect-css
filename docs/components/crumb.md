---
layout: docs
title: 面包屑
description: 俗称面包屑，即页面导航，它可以清晰的显示出页面在站点整体结构中的位置。面包屑为用户提供一种追踪返回最初访问页面的方式，可以清晰的为用户指引进入网站内部和首页之间的路线，提高用户体验效。
group: components
toc: true
---

俗称面包屑，即页面导航，它可以清晰的显示出页面在站点整体结构中的位置。面包屑为用户提供一种追踪返回最初访问页面的方式，可以清晰的为用户指引进入网站内部和首页之间的路线，提高用户体验效。

关于面包屑的样式，需要完善几种通用的样式
{% example html %}
<ol class="crumbs">
  <li class="crumbs-item active">Home</li>
</ol>
<ol class="crumbs">
  <li class="crumbs-item"><a href="#">Home</a></li>
  <li class="crumbs-item active">Library</li>
</ol>
<ol class="crumbs">
  <li class="crumbs-item"><a href="#">Home</a></li>
  <li class="crumbs-item"><a href="#">Library</a></li>
  <li class="crumbs-item active">Data</li>
</ol>
{% endexample %}

Similar to our navigation components, crumbss work fine with or without the usage of list markup.

{% example html %}
<nav class="crumbs">
  <a class="crumbs-item" href="#">Home</a>
  <a class="crumbs-item" href="#">Library</a>
  <a class="crumbs-item" href="#">Data</a>
  <span class="crumbs-item active">Bootstrap</span>
</nav>
{% endexample %}
