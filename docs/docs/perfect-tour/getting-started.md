---
layout: docs
title: Perfect 之旅-快速上手
description: <p>Perfect CSS 充分利用了最新 CSS 特性来实现，提供了常用的样式库组件，支持各种大小设备，
             可快速搭建项目，自定义组件大小和颜色。Perfect CSS 可概括为功能强大、组件齐全、可扩展性强。</p>
             <p>如果你想用默认提供的组件搭建项目，直接按照文档和实例一步一步使用即可，
             如果你想定制化组件，可参考<a href="../best-practices/">最佳实践</a>。</p>
group: perfect-tour
toc: true
---

## 下载
可以通过 [npm](https://www.npmjs.com/package/perfect-css) 或 [yarn](https://yarnpkg.com/zh-Hans/package/perfect-css) 来安装 `Perfect CSS`。也可以从 [github]() 下载已编译压缩好的 `Perfect CSS` 文件，
或直接下载[源文件](https://github.com/joy-web/perfect-css/archive/v0-dev.zip)，源文件中包括了源码、例子和文档。

### 利用 npm 或 yarn 包管理器安装
```bash
npm install perfect-css --save
```

```bash
yarn add perfect-css --save
```

### 压缩的 CSS 和 JavaScript

### 源码

如果你想查看源代码或者修改源代码后重新生成样式库，可以从 github 上 [下载](https://github.com/joy-web/perfect-css) 源码。
[构建编译源代码](../build)是件很开心的事，从中你可以学习到一些 CSS 组件的实现、SASS 的用法，
当然当你发现了问题或更好的建议时，请及时反馈给 [Perfect CSS 成员组]({{site.repo}}/issues/new?title=问题或建议){:target="_blank"}，在此对你发现的问题和提出的宝贵意见深表感谢！

## Hello World
该例子提供了 Perfect CSS 简单用法

{% example html%}
<button class="btn btn-raised btn-primary" id="toastBtn">Hello World</button>
<div class="toast" id="toastEl">
  <div class="toast-content">轻轻的，我来了</div>
</div>
<script>
  let timeoutId;
  const toastEl = document.getElementById('toastEl');

  document.getElementById('toastBtn').addEventListener('click', function () {
    toastEl.classList.add('enter');
    clearTimeout(timeoutId);

    toastEl.firstElementChild.innerHTML = '轻轻的，我来了';
    timeoutId = setTimeout(() => {
      toastEl.firstElementChild.innerHTML = '挥挥手，我走了';
      toastEl.classList.remove('enter');
    }, 3000);
  }, false);
</script>
{% endexample %}

## 使用 Perfect

### 通过 link 标签直接引入

通过在 `<head>` 标签中插入 `<link>` 标签来引入 Perfect 样式。

```html
<link href="/perfect/dist/css/perfect.min.css" rel="stylesheet">
```

### Perfect CSS CDN

也可以通过 Perfect CSS CDN 来加速资源的载入，CDN 提供了更快的加载速度，更好的缓存。
CDN 资源待补充

```html
<link rel="stylesheet" href="css/perfect.min.css" integrity="" crossorigin="anonymous">
```

### 修改并编译源代码

我们可以下载 Perfect CSS 源码，根据需要修改 CSS 代码后重新打包构建后引入项目中。

### 使用 `JavaScript` 导入

目前来看，通过 JavaScript 动态导入是最常用的方式，可以用在 [React](https://reactjs.org/){:target="_blank"}，
[Vue.js](https://cn.vuejs.org/){:target="_blank"}，[Angular](https://angular.io/){:target="_blank"} 等。
结合构建打包工具 [Webpack](https://webpack.js.org/){:target="_blank"}可以快速的搭建项目。
以下给出了示例代码

1. [Perfect CSS + React + Webpack]()
1. [Perfect CSS + Vue.js + Webpack]()
1. [Perfect CSS + Angular + Webpack]()

导入的方式又可以分为普通导入和 CSS Module 方式引入，我们可以使用 es6 语法 `import` 导入，也可以使用 `require` 导入

#### 普通导入

```javascript
import from 'perfect/perfect.min.css';
// 或者
require('perfect/perfect.min.css');
```
也可以根据需要部分导入 css 样式或 sass 样式
```javascript
import from 'perfect/css/elements/button/button.css';
// 或者
require('perfect/sass/elements/button/button.sass');
```

#### CSS Module 导入
CSS Module 导入也可以结合 `classnames` 来一起使用

以下是在 react 中的用法
```javascript
import classNames from 'classnames/bind';
import styles from 'perfect/perfect.min.css';

const perfectCss = classNames.bind(styles);
// ...
const Com1 = () => {
  return (
    <div className={perfectCss('container', 'm-t-2')}>
      <div className={styles.row}><div className={styles['col-8']}>col-8</div></div>
    </div>
  );
}

export default Com1;
```

以上不论是普通导入还是 CSS Module 导入，都需要结合前端构建工具，比如 [Webpack](https://webpack.js.org/)。
关于 Webpack 的使用，这里就不展开说明了，感兴趣的读者可以查看其[官网](https://webpack.js.org/)。

上面给出了最基本的使用方法，对于高级使用可以参见[最佳实践](../best-practices/)

## Html 模板
下面给出一个通用的基于 `html5` 的模板

```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="keywords" content="CSS3 Perfect">
  <meta name="description" content="">
  <meta name="author" content="">
  
  <title>Perfect</title>
  
  <!-- Favicons -->
  <link rel="apple-touch-icon" href="/favicon.png">
  <link rel="icon" href="/favicon.ico">
  
  <!-- Perfect CSS -->
  <link href="/assets/css/perfect.css" rel="stylesheet">
</head>
<body>

</body>
</html>
```

对于国内的浏览器，还需要在`<head>`中加上以下代码，用 webkit 内核来渲染页面
```html
  <!--360浏览器-->
  <meta name="renderer" content="webkit">
  <!--其它双核浏览器-->
  <meta name="force-rendering" content="webkit">
```

## 响应式 meta tag 使用

为了在不同大小设备中友好的显示页面，可以使用 meta viewport 来开启页面响应式布局，
把下面的代码放到 `<head>` 中

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

在移动设备中，可以使用 `user-scalable=no` 来禁用缩放功能。禁用缩放功能后，用户只能滚动屏幕，而不能缩放，
尤其嵌入到 app 的页面，去掉缩放功能后，看上去更像原生应用。

```html
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no">
```

新的 meta viewport 加入了 shrink-to-fit，
默认情况下，即不设置 shrink-to-fit=no，当内容溢出时，会缩小内容来适应整个浏览器宽度，
有时我们不想缩小而是让溢出的内容隐藏，这时通过设置 shrink-to-fit=no 来禁用默认的行为。
详细说明可以参见[这篇文章](https://bitsofco.de/ios-safari-and-shrink-to-fit/)

