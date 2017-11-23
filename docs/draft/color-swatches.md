---
layout: docs
title: Perfect 之旅-调色板
description: 调色板中的颜色源于大自然并从中获取灵感，采用大胆的颜色色彩与单调乏味的周边环境形成鲜明的对比，
             强调深度阴影和高亮处理，引出意想不到且充满活力的颜色。
group: getting-started
---

以下调色板基于 [Google Material Design Color](https://material.io/guidelines/style/color.html){:target="_blank"}。
调色板以一些基础色为主颜色，通过调整亮度和色彩饱和度为不同的设备提供了一套完整可用的颜色方案。
颜色变量文件定义在 [scss/etc/variables/colors.scss]({{site.repo}}/blob/master/scss/etc/variables/colors.scss){:target="_blank"}

{% assign index = 0 %}
{% assign len = site.data.color-swatches | size %}
{% assign len = len | minus: 1 %}

{% for group in site.data.color-swatches %}
{% assign mod = index | modulo: 4 %}
{% if index != 0 and mod == 0 %}
</div>
{% endif %}
{% if mod == 0 %}
<div class="row doc-color-panel">
{% endif %}

{% assign primary-color = group.primary-color %}
  <div class="col">
    <section class="doc-color-group">
      <div class="doc-primary-color{% if primary-color[0].dark == 1 %} doc-color-dark{% endif %}" style="background-color: {{ primary-color[0].color }};">
        <div class="doc-color-title">{{ group.color-group }}</div>
        <div class="doc-color">
          <span>{{ primary-color[0].size }}</span>
          <span>{{ primary-color[0].color }}</span>
        </div>
      </div>
      {% for color in group.colors %}
      <div class="doc-color{% if color.dark == 1 %} doc-color-dark{% endif %}" style="background-color: {{ color.color }};">
        <span>{{ color.size }}</span>
        <span>{{ color.color }}</span>
      </div>
      {% endfor %}

      {% if group.colors-a %}
      <div class="doc-color-a">
      {% for color in group.colors-a %}
      <div class="doc-color{% if color.dark == 1 %} doc-color-dark{% endif %}" style="background-color: {{ color.color }};">
        <span>{{ color.size }}</span>
        <span>{{ color.color }}</span>
      </div>
      {% endfor %}
      </div>
      {% endif %}
    </section>
  </div>

{% if index == len %}
</div>
{% endif %}

{% assign index = index | minus: -1 %}
{% endfor %}

选择其中一种饱和度为 500 作为设计的主颜色（primary color），搭配其他颜色做辅助设计。

选择调色方案除了基于给定的这些颜色外，还可以定制你想要的任何颜色来设计，
但要确保你的应用使用的颜色给人以舒服的感觉，元素色彩之间要有鲜明的对比，震撼或柔和的视觉体验。
[Google Material Design](https://material.io/){:target="_blank"}
给我们提供了一个调色板工具 [color tool](https://material.io/color){:target="_blank"}

### 主颜色（primary color）
我们使用主颜色作为应用的主色调，用在屏幕的主要位置，操作按钮以及组件上，通过对主色调调整明暗和亮度，
在不同的元素上产生对比效果。深浅色调的对比使用有助于区分不同的区域，比如状态栏和工具栏等。

### 次要颜色（secondary color）
次要颜色主要用在部分 UI 组件上，他是主颜色的重要补充部分，用来协调搭配主颜色，使页面设计更美观。
次要颜色是可选的，不是所有的应用设计中都加入次要颜色，如果主颜色能更好的对比不同的元素，则可不必添加次要颜色。
次要颜色主要用在以下几种组件中

* 按钮、按钮内容和活动的按钮
* 文本、可以点击的元素、选中的文本
* 进度条
* 操作类组件：比如滑块
* 超链接
* 头条

关于主颜色和次要颜色的使用，在大区域和元素中应该使用主颜色，次要颜色应该用在小区域中。
更多颜色设计理念可以参考[这里](https://material.io/guidelines/style/color.html){:target="_blank"}
