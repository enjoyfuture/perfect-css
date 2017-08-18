---
layout: docs
title: 基础样式-代码
description: 通过定制代码样式来友好的展现编程代码，让用户清晰的查看代码，结合高亮代码插件，
             呈现给用户的是可读性强、易于使用的代码格式。
group: typography
toc: true
---

代码样式对应源文件：[/scss/core/base-styles/code.scss]({{ site.repo }}/scss/core/base-styles/code.scss){:target="_blank"}

CSS 中用来处理代码的 html 标签主要有 `code`  `pre` `var` `kbd` `samp`

## 代码块级元素 `pre`

我们使用 `pre` 来显示多行代码，需要注意的是，代码中的尖括号需要做转义处理，pre 中的内容
如果没有换行符，默认是不换行处理的，相当于设置了 `white-space:pre`，我们可以通过属性 `white-space` 来改变换行行为。
随着 pre 中的内容增加，pre 的高度会越来越高，可以通过添加样式 `.pre-scroll` 设置垂直方向滚动条。
该滚动条高度设置为 `300px`。例子中添加了样式 `.pre-scroll`，会出现垂直滚动条，我们如果去掉该样式后，垂直滚动条
会消失。

{% example html%}
<pre class="pre-scroll" id="preScroll">
  <code>&lt;p&gt;代码第一行内容&lt;/p&gt;
  &lt;p&gt;代码第二行内容&lt;/p&gt;
  &lt;p&gt;代码第三行内容&lt;/p&gt;
  </code>
  <code>
  function getStyles(element, property, extra) {
    const styles = element.ownerDocument.defaultView.getComputedStyle(element, null);
    if (property) {
      const cssValue = styles.getPropertyValue(property) || styles[property];
      if (extra) {
        const num = parseFloat(cssValue);
        return extra === true || isFinite(num) ? num || 0 : cssValue;
      }
      return cssValue;
    }
    return styles;
  }
  </code>
</pre>
{% endexample %}

## 代码行内元素 `code`

用来处理行内元素，可以使用 `code` ，注意代码中的内容尖括号需要转义处理

{% example html%}
  html <code>&lt;span&gt;</code> 是一个行内元素，这里 &lt;span&gt; 用 code 包裹后显示效果为 <code>&lt;span&gt;</code>
{% endexample %}

## 键盘字母元素 `kbd`

可以用 `kbd` 元素来包裹指令、快捷键等。

{% example html%}
在 Mac 终端中，我们可以用 <kbd>ls -a</kbd> 来查看当前目录下所有文件和文件夹（包括隐藏的文件）。<br/>
我们按下快捷键 <kbd>command + c</kbd> 复制选中的内容。<br/>
kbd 也可以嵌套使用，嵌套中的内层，字体会加粗显示。例如：<kbd><kbd>command</kbd> + <kbd>a</kbd></kbd>
{% endexample %}

## 输出元素 `samp`

`samp` 是 Sample（示例）的缩写。各种程序的代码示例可以用 `samp` 括起来。比如一段输出错误信息等。

`samp` 元素也可以表示一段用户应该对其没有什么其他解释的文本字符，要从正常的上下文抽取这些字符时，通常要用到这个标签。

更多信息查看这里 [http://html.com/tags/samp/](http://html.com/tags/samp/)

{% example html%}
<samp>计算机示例程序输出，这里发生了一个非常严重的错误：连接数据库出错</samp> <br/>
字符组合 <samp>ae</samp> 被转义后，可以变成 &aelig; 连字字符。
在 HTML 中，用于 <code>ae</code> 连字的转义写法是 <code>&aelig;</code>，浏览器会将它转换成相应的 <code>æ</code> 连字字符来显示。
{% endexample %}

## 变量 `var`

在程序代码中，可以用 var 来包裹变量

{% example html%}
let <var>sum</var> = <var>num1</var> + <var>num2</var> * 3;
{% endexample %}
