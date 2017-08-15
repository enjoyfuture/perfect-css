---
layout: docs
title: 排版 (Typography)
description: 对于内容展示所常用的 HTML 元素我们都为其赋予了特定样式，包括样式标准化（normalization）、排版、列表等。
group: typography
toc: true
---

Perfect 基于默认排版元素定义了简单的样式，包含 段落、`h1-h6`、列表等。

## 段落 (Paragraphs)

段落对应于 p 元素，我们重写了默认样式，设置 margin-top 为 0， margin-bottom 为 1rem 

```scss
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
```

### 基本样式

{% example html%}
<p>
这是一个段落，段落基于默认的字体、行高和间距来显示，上外边距设为 0，下外边距被设为 1rem，
段落中只能包含行内元素，不能包含块级元素。我们可以用标签 <code>strong</code> 设置 <strong>粗体</strong>，
用 <code>em</code> 设置 <em>斜体</em>。
</p>
{% endexample %}

### 首行缩进

我们可以为段落添加样式 `text-indent` 来首行缩进两个字

{% example html%}
<p class="text-indent">
首行缩进，为了展示这个效果，我们需要额外添加许多字体，所以大家不用看内容，内容都是废话，只需看效果即可。
首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进。
</p>
<div class="text-indent">
  <p>
    也可以在包裹父元素中添加该样式，达到同样的效果。为了展示这个效果，我们需要额外添加许多字体，所以大家不用看内容，内容都是废话，只需看效果即可。
    首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进首行缩进。
  </p>
  <p>
    This is a paragraph. Paragraphs are preset with a font size, line height and spacing to match the overall vertical rhythm. 
    To show what a paragraph looks like this needs a little more content so.
  </p>
</div>
{% endexample %}

## Header (h1~h6)

HTML Heading 提供了 h1 到 h6 元素。为了方便屏幕阅读器帮助盲人更好的使用，我们尽量按标题层次结构化文档，
比如，在书写代码时，`h2` 接下来应该是 `h2` 或 `h3`。

{% example html%}
<h1>h1. 这是一个非常大的 header。</h1>
<h2>h2. 这是一个大的 header。</h2>
<h3>h3. 这是一个中等的 header。</h3>
<h4>h4. 这是一个中等偏小的 header。</h4>
<h5>h5. 这是一个小的 header。</h5>
<h6>h6. 这是一个非常小的 header。</h6>
{% endexample %}

对于其他元素，我们可以设置 .h1 ~ .h6 `class` 来达到 h1 ~ h6 的效果

{% example html%}
<p class="h1">h1. 这是一个非常大的 header。</p>
<p class="h2">h2. 这是一个大的 header。</p>
<p class="h3">h3. 这是一个中等的 header。</p>
<div class="h4">h4. 这是一个中等偏小的 header。</div>
<div class="h5">h5. 这是一个小的 header。</div>
<p class="h6">h6. 这是一个非常小的 header。</p>
{% endexample %}

### 副标题

我们可以加入 `<small>` 元素来设置副标题，`<small>` 字体大小是 `80%`，
我们也可以通过设置 `class` 来自定义副标题样式

{% example html%}
<h4>主标题 <small>副标题</small></h4>
<h4>主标题 <small class="text-muted">自定义class .text-muted 副标题</small></h4>
{% endexample %}

## 大字体标题
当你需要设置更大，更显著的字体来作为标题或其他地方显示时，你可以采用 `display` class 设置。
`display` class 共提供了四个级别的大小，从小到大依次为：`.display-1` `.display-2` `.display-3` `.display-4` 

{% example html%}
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
{% endexample %}

## HTML5 默认文本元素
HTML5 提供了几个标签，用来格式化文本，显示不同的样式效果。
这些标签有：`mark` `del` `s` `ins` `u` `small` `strong` `em`

{% example html%}
<p>我们可以用 mark 标签来<mark>高亮文本</mark>。</p>
<p><del>用删除标签，表示该段内容需要删除掉。</del></p>
<p><s> s 标签的功能与 del 类似，表示该段内容将会被替换或无意义。</s></p>
<p><ins> ins 标签表示该段内容是额外添加的，或附加的内容</ins></p>
<p><u>标签 u 表示会给该段文字加上下划线</u></p>
<p><small>利用 small 标签设置更小的文字内容。</small></p>
<p><strong>strong 会对文本加重处理</strong></p>
<p><em>em 会对文本斜体处理</em></p>
{% endexample %}

Perfect 同时提供了 class `.mark` 和 `.small` 用在其他标签元素上。

## 文本工具类样式
文本工具类样式提供了文本对齐方式、粗细效果、颜色等，[文本工具类样式](/docs/utils/text/)
Text utilities

## 缩写词 Abbreviations

使用元素 `<abbr>` 来标记缩写词，另外必须要设置 title 属性，用来解释书写词的意思。

{% example html%}
<p><abbr title="资产抵押债券">ABS</abbr> 云平台系统，投资人最佳选择</p>
{% endexample %}

## 引用 Blockquote

当引用别人说的话，或是名言名句时，我们可以使用 `<blockquote class="blockquote">` 
来包裹要引用的内容

{% example html%}
<blockquote class="blockquote">
  最甜美的是爱情，最苦涩的也是爱情
  <div class="blockquote-footer"><cite>菲·贝利</cite></div>
</blockquote>
{% endexample %}

### 引用出处

`<div class="blockquote-footer">` 和 `<cite>` 结合使用。

{% example html%}
<blockquote class="blockquote">
  没有青春的爱情有何滋味？没有爱情的青春有何意义。
  <div class="blockquote-footer">送给青春人，出自<cite>拜伦</cite></div>
</blockquote>
{% endexample %}

### 引用从右向左显示
{% example html%}
<blockquote class="blockquote blockquote-reverse">
  没有青春的爱情有何滋味？没有爱情的青春有何意义。
  <div class="blockquote-footer">送给青春人，出自<cite>拜伦</cite></div>
</blockquote>
{% endexample %}

## 超链接 Link

超链接使用原生的 `a` 标签即可。
对于需要提供给屏幕阅读器的页面，链接的文本避免使用 `这里` 等含糊不清的说法，最好使用链接本身要提现的内容。

{% example html%}
<p>超链接采用主颜色，我们可以<a href="/getting-started/color-swatches">通过颜色板来选取其他主颜色</a></p>
{% endexample %}

如果我们想在其他标签上展现超链接的行为，可以添加 class `.link` 来达到跟`a` 标签同样的样式。

{% example html%}
<p><span class="link">使用 class .link 后的效果</span></p>
{% endexample %}

## 分割线
我们采用元素 `<hr/>` 来分割两个不同的区域
{% example html%}
<hr/>
{% endexample %}

## 列表

列表包含三种：无序列表 `ul li`，有序列表 `ol li` 和 定义说明列表 `dl dt dd`

### 无序列表
当列表顺序并不重要时，我们可以使用无序列表 `ul`

{% example html%}
<ul>
  <li>北京</li>
  <li>河北
    <ul>
      <li>石家庄</li>
      <li>张家口</li>
      <li>保定</li>
    </ul>
  </li>
  <li>山东</li>
  <li>河南</li>
  <li>山西</li>
  <li>天津</li>
</ul>
{% endexample %}

### 有序列表

{% example html%}
<ol>
  <li>蔬菜</li>
  <li>水果
    <ol>
      <li>百香果</li>
      <li>芒果</li>
      <li>香蕉</li>
    </ol>
  </li>
  <li>肉</li>
  <li>蛋</li>
  <li>米面</li>
  <li>牛奶</li>
</ol>
{% endexample %}

todo 可以补充一下菜单列表或目录结构，支持六级目录

### 定义说明列表

定义说明列表是用于描述键值对的，比如元数据或数据字典等。每一项包含 `dt` 与定义说明的内容 `dd`

{% example html%}
<dl>
  <dt>互联网</dt>
  <dd>是网络与网络之间所串连成的庞大网络，这些网络以一组通用的协议相连，形成逻辑上的单一巨大国际网络。</dd>
  <dt>金融</dt>
  <dd>
    本质是价值流通。金融产品的种类有很多，其中主要包括银行、证券、保险、信托等。金融所涉及的学术领域很广，
    其中主要包括：会计、财务、投资学、银行学、证券学、保险学、信托学等等。
  </dd>
  <dd>The dimensions of height, depth, and width within which all things exist and move.</dd>
  <dt>互联网金融</dt>
  <dd>
    就是互联网技术和金融功能的有机结合，依托大数据和云计算在开放的互联网平台上形成的功能化金融业态及其服务体系，
    包括基于网络平台的金融市场体系、金融服务体系、金融组织体系、金融产品体系以及互联网金融监管体系等，
    并具有普惠金融、平台金融、信息金融和碎片金融等相异于传统金融的金融模式。
  </dd>
</dl>
{% endexample %}

### 去掉列表样式

设置 `list-style: none;` 来去掉列表默认样式

{% example html%}
<ol class="list-unstyled">
  <li>蔬菜</li>
  <li>水果
    <ol class="list-unstyled">
      <li>百香果</li>
      <li>芒果</li>
      <li>香蕉</li>
    </ol>
  </li>
  <li>肉</li>
  <li>蛋</li>
  <li>米面</li>
  <li>牛奶</li>
</ol>
{% endexample %}

### 内联列表

内联列表会把内容显示在一行中，可以使用class `.list-inline` 和 `list-inline-item`

{% example html%}
<ul class="list-inline">
  <li class="list-inline-item">进去</li>
  <li class="list-inline-item">出来</li>
  <li class="list-inline-item">离开</li>
</ul>
{% endexample %}

## 响应式排版
待补充

