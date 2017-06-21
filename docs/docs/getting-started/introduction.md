---
layout: docs
title: Perfect 之旅-介绍
description: Perfect 比较全面的提供了各种 CSS 样式库，用户可以一次性的导入，也可以单独导入需要的样式。
             Perfect 借助强大的响应式布局，支持各种大小设备。 Perfect 框架充分利用了最新 css 特性来实现，
             支持 css module，更方便用户使用。
group: getting-started
toc: true
---

## 如何使用 Perfect
首先你需要下载 Perfect，Perfect 提供了 npm 下载和 bower 下载

```bash
npm install perfect --save
```

```bash
bower install perfect --save
```

当然如果你想下载更详细的代码可以从 github [下载](https://github.com/enjoyfuture/perfect)。

### 通过 link 标签直接引入

通过在 `<head>` 标签中插入 `<link>` 标签来引入 Perfect 样式。

```html
<link href="/perfect/dist/css/perfect.min.css" rel="stylesheet">
```

### 导入的方式引入
导入的方式又可以分为普通导入和 css module 方式引入，我们可以利用 es6 语法 `import` 导入，
也可以使用 `require` 导入

#### 普通导入
```javascript
import from 'perfect/perfect.min.css';
// 或者
require('perfect/perfect.min.css');
```
也可以根据需要部分导入 css 样式或 sass 样式
```javascript
import from 'perfect/dist/css/buttons.css';
// 或者
import from 'perfect/scss/core/components/buttons.scss';
```

import classNames from 'classnames/bind';

#### css module 导入
css module 导入需要结合 `classnames` node_modules

以下是在 react 中的用法
```javascript
import classNames from 'classnames/bind';
import styles from 'perfect/perfect.min.css';

const perfectCss = classNames.bind(styles);
// ...
const Com1 = () => {
  return (
    <div className={perfectCss('container')}></div>
  );
}

export default Com1;
```

以上不论是普通导入还是 css module 导入，都需要结合前端构建工具，比如 [webpack](https://webpack.js.org/)。
关于 webpack 的使用，这里就不展开说明了，感兴趣的读者可以查看其[官网](https://webpack.js.org/)。

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

为了在不同大小的设备中友好的显示页面，可以使用 meta viewport 来开启页面响应式布局，
把下面的代码放到 `<head>` 中

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

在移动设备中，可以使用 `user-scalable=no` 来禁用缩放功能。警用缩放功能后，用户只能滚动屏幕，而不能缩放，
尤其嵌入到 app 的页面，去掉缩放功能后，看上去更像原生应用。

```html
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no">
```

新的 meta viewport 加入了 shrink-to-fit，
默认情况下，即不设置 shrink-to-fit=no，当内容溢出时，会缩小内容来适应整个浏览器宽度，
有时我们不想缩小而是让溢出的内容隐藏，这时通过设置 shrink-to-fit=no 来禁用默认的行为。
详细说明可以参见[这篇文章](https://bitsofco.de/ios-safari-and-shrink-to-fit/)

