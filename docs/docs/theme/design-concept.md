---
layout: docs
title: 主题-设计理念
description: Perfect CSS 主题设计遵循 WCAG 2.0 规范标准，突出对比度。定义三种基本颜色（主色、次色和背景颜色），四种辅助颜色：成功（success）、信息（info）、警告（warning）和错误（error），
             色彩中还定义了十种常用灰色颜色值，满足不同灰度的样式。主题颜色会贯穿于整个 CSS 组件中，所有组件默认采用浅色调设计，
             用户可根据需要定制自己的色彩。
             
group: theme
toc: true
---

# 主题设计理念

## 色彩和色调

* Perfect CSS 颜色遵循 WCAG 2.0 规范标准，突出对比度，更利于视觉障碍(色盲)阅读。

色彩规范和对比度以及计算方法参考
* [https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests](https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests)
* [https://www.w3.org/Translations/WCAG20-zh/](https://www.w3.org/Translations/WCAG20-zh/) 相对亮度
* [sRGB编码](https://www.w3.org/Graphics/Color/sRGB.html)

Perfect CSS 基准色参考了 [Material Color](https://material.io/guidelines/style/color.html)

## 颜色
Perfect CSS 定义了三种基本颜色和四种辅助颜色，三种基本颜色分别为主颜色、次颜色（强调颜色）和背景颜色，
四种辅助颜色包含成功 success 、信息 info、警告 warning 和错误 error。具体在[【主题 Sass 变量】](#toc-4)中会给出详细讲解。

# 使用

可以使用预设的 Sass 变量来修改颜色值，也可以使用定义的 Mixin 和 Function用在样式组件中，其中 Mixin
`theme-prop` 会用在各个组件中，用来设置与颜色相关的 CSS property。通过 `theme-prop` 设置的属性值，
可以方便的通过修改 CSS 变量来定制主题，详细可以在[【主题 Sass Mixin Function】](#toc-5)中查看。

# 例子

例子中给出了主题对应的 Mixin 和 Function 的用法，以及主题预设的 CSS 样式（前景和背景色 classes）。

[例子]({{site.baseurl}}/components/theme/classes/){:target="_blank"}

# 主题 Sass 变量
主题 Sass 变量包括基本颜色变量、色调变量、辅助颜色变量和灰度颜色变量。

首先给出颜色透明度变量
```scss
$alpha: .16 !default;
```

## 基本颜色
Perfect CSS 定义了三种基本颜色值，分别为主色、次色（对比色）以及背景色，对应的变量为 
`$theme-primary` `$theme-secondary` `$theme-background`

次色一般采用强调色，突出显示特性或场景。

### 基本颜色基础值

```scss
$theme-primary: #2196f3 !default; // 主颜色，使用蓝色 $blue-500 #2196f3
$theme-secondary: #e040fb !default; // 次颜色，也叫强调(accent)颜色，使用紫色 $purple-a-200 #e040fb
$theme-background: #fff !default; // 背景颜色，默认白色
```

其中主色和次色（对比色）又分别给出了3种浅色和3种深色
```scss
// 主题颜色浅色
$theme-primary-light: #64b5f6 !default; // 取 $blue-300
$theme-secondary-light: #ea80fc !default; // 取 $purple-a-100

// 主题颜色更浅色
$theme-primary-lighter: #bbdefb !default; // 取 $blue-100
$theme-secondary-lighter: #e1bee7 !default; // 取 $purple-100

// 主题颜色最浅色
$theme-primary-lightest: #e3f2fd !default; // 取 $blue-50
$theme-secondary-lightest: #f3e5f5 !default; // 取 $purple-50

// 主题颜色深色
$theme-primary-dark: #1976d2 !default; // 取 $blue-700
$theme-secondary-dark: #d500f9 !default; // 取 $purple-a-400

// 主题颜色更深色
$theme-primary-darker: #1565c0 !default; // 取 $blue-800
$theme-secondary-darker: #aa00ff !default; // 取 $purple-a-700

// 主题颜色最深色
$theme-primary-darkest: #0d47a1 !default; // 取 $blue-900
$theme-secondary-darkest: #4a148c !default; // 取 $purple-900
```

为了方便用 CSS 变量设置透明的背景色，并且变量值修改后，对应的透明背景色也改变，主题基本颜色中又提供了透明色变量。
其中波纹（ripple）组件中就用到了该变量值。
如果浏览器支持了 CSS module，我们可以动态的修改 color 值，直接使用 $theme-primary 加透明参数值即可，只是目前浏览器还不支持。
关于 [CSS Color Level 4](https://www.w3.org/TR/2016/WD-css-color-4-20160705/) 提供了大量关于 Color 的处理，只是好多还没有实现，未来这些功能都实现后，CSS Color 的处理将变得更方便，更灵活，期待中......

```scss
$theme-primary-alpha: rgba($theme-primary, $alpha) !default;
$theme-secondary-alpha: rgba($theme-secondary, $alpha) !default;
```

上面定义的三种基本颜色值、对应的 6 种浅色值、6 种深色值和 2 种透明色值作为数组放到变量 `$theme-property-values` 中

CSS 主题颜色（$theme-property-values）属性 | 说明
--- | ---
primary | 主题主颜色
secondary | 主题次颜色
background | 主题背景颜色
primary-light | 主题主颜色浅色
secondary-light | 主题次颜色浅色
primary-lighter | 主题主颜色更浅色
secondary-lighter | 主题次颜色更浅色
primary-lightest | 主题主颜色最浅色
secondary-lightest | 主题次颜色最浅色
primary-dark | 主题主颜色深色
secondary-dark | 主题次颜色深色
primary-darker | 主题主颜色更深色
secondary-darker | 主题次颜色更深色
primary-darkest | 主题主颜色最深色
secondary-darkest | 主题次颜色最深色
primary-alpha | 主题主颜色透明色
secondary-alpha | 主题次颜色透明色
{: .doc-table}

### 基本颜色对比色调判断值（深色或浅色）
Perfect CSS 中色调是指浅色（白色）和深色（黑色）以及加入透明色后的颜色值，主要用来突出对比度。
比如深红色背景色，此时的对比色应该是白色，而浅红色背景色对比色应该是黑色。
对于给定一个背景颜色值，前景色应该使用浅色还是深色可以通过函数 `@function theme-light-or-dark` 来计算返回。

Perfect CSS 中每个基本颜色值都给出了对应的对比色调变量，即浅色或深色色调变量，方便在 CSS 组件中调用。

```scss
// 浅色或深色色调，给出基本颜色的对比色调， light or dark
$theme-primary-contrast-tone: theme-contrast-tone($theme-primary);
$theme-secondary-contrast-tone: theme-contrast-tone($theme-secondary);

// 主题颜色浅色对比色调
$theme-primary-light-contrast-tone: theme-contrast-tone($theme-primary-light);
$theme-secondary-light-contrast-tone: theme-contrast-tone($theme-secondary-light);

// 主题颜色更浅色对比色调
$theme-primary-lighter-contrast-tone: theme-contrast-tone($theme-primary-lighter);
$theme-secondary-lighter-contrast-tone: theme-contrast-tone($theme-secondary-lighter);

// 主题颜色最浅色对比色调
$theme-primary-lightest-contrast-tone: theme-contrast-tone($theme-primary-lightest);
$theme-secondary-lightest-contrast-tone: theme-contrast-tone($theme-secondary-lightest);

// 主题颜色深色对比色调
$theme-primary-dark-contrast-tone: theme-contrast-tone($theme-primary-dark);
$theme-secondary-dark-contrast-tone: theme-contrast-tone($theme-secondary-dark);

// 主题颜色更深色对比色调
$theme-primary-darker-contrast-tone: theme-contrast-tone($theme-primary-darker);
$theme-secondary-darker-contrast-tone: theme-contrast-tone($theme-secondary-darker);

// 主题颜色最深色对比色调
$theme-primary-darkest-contrast-tone: theme-contrast-tone($theme-primary-darkest);
$theme-secondary-darkest-contrast-tone: theme-contrast-tone($theme-secondary-darkest);

// 主题颜色透明色对比色调
$theme-primary-alpha-contrast-tone: theme-contrast-tone($theme-primary-alpha);
$theme-secondary-alpha-contrast-tone: theme-contrast-tone($theme-secondary-alpha);

// 背景色对比色调
$theme-background-contrast-tone: theme-contrast-tone($theme-background);
```

### 深色和浅色色调颜色值

Perfect CSS 中深色和浅色（黑色和白色）色调值分别定义了 4 种透明度色值
```scss
$theme-text-colors: (
  dark: (
    primary: rgba(0, 0, 0, .87),
    secondary: rgba(0, 0, 0, .54),
    hint: rgba(0, 0, 0, .38),
    disabled: rgba(0, 0, 0, .38)
  ),
  light: (
    primary: #ffffff,
    secondary: rgba(255, 255, 255, .7),
    hint: rgba(255, 255, 255, .5),
    disabled: rgba(255, 255, 255, .5)
  )
);
```

### 基本颜色对应的对比色调值
通过上面的[【基本颜色对比色调判断值（深色或浅色）】](#toc-4-1-2)和[【深色和浅色色调值】](#toc-4-1-3)可以方便的计算出给定基本颜色值对应的对比色调值，比如 `$theme-primary` 默认给定的颜色计算出对比色调应该是 light。下面给出使用方法和例子，
比如在 CSS 组件中要设置 color 属性值，如果要设置 `$theme-primary` 的对比色调 `hint` 值时，可以按照以下步骤来计算出
* 首先计算出 `$theme-primary` 的对比色调是深色还是浅色，即 `$theme-primary-contrast-tone`
* 从 `$theme-text-colors` 中取出 `map-get($theme-text-colors, $theme-primary-contrast-tone)` 来判断是使用深色还是浅色
* 再取出 `hint`， `map-get(map-get($theme-text-colors, $theme-primary-contrast-tone), hint)`

上面三步就可以计算出 `$theme-primary` 最终的对比色调值。

给定的每个基本颜色值计算出的对比色调值作为集合放到变量 `$theme-contrast-tone-property-values` 中，
对比色调值从明亮到暗淡依次定义为 `primary` `secondary` `hint` `disabled`。

CSS 主题颜色对比色调属性 | 说明
--- | ---
primary-on-primary | 用在 $theme-primary 上的 primary 对比色调
secondary-on-primary | 用在 $theme-primary 上的 secondary 对比色调
hint-on-primary | 用在 $theme-primary 上的 hint 对比色调
disabled-on-primary | 用在 $theme-primary 上的 disabled 对比色调
 | 
primary-on-primary-light | 用在 $theme-primary-light 上的 primary 对比色调
secondary-on-primary-light | 用在 $theme-primary-light 上的 secondary 对比色调
hint-on-primary-light | 用在 $theme-primary-light 上的 hint 对比色调
disabled-on-primary-light  | 用在 $theme-primary-light 上的 disabled 对比色调
primary-on-primary-lighter | 用在 $theme-primary-lighter 上的 primary 对比色调
secondary-on-primary-lighter | 用在 $theme-primary-lighter 上的 secondary 对比色调
hint-on-primary-lighter | 用在 $theme-primary-lighter 上的 hint 对比色调
disabled-on-primary-lighter  | 用在 $theme-primary-lighter 上的 disabled 对比色调
primary-on-primary-lightest | 用在 $theme-primary-lightest 上的 primary 对比色调
secondary-on-primary-lightest | 用在 $theme-primary-lightest 上的 secondary 对比色调
hint-on-primary-lightest | 用在 $theme-primary-lightest 上的 hint 对比色调
disabled-on-primary-lightest  | 用在 $theme-primary-lightest 上的 disabled 对比色调
 | 
primary-on-primary-dark | 用在 $theme-primary-dark 上的 primary 对比色调
secondary-on-primary-dark | 用在 $theme-primary-dark 上的 secondary 对比色调
hint-on-primary-dark | 用在 $theme-primary-dark 上的 hint 对比色调
disabled-on-primary-dark  | 用在 $theme-primary-dark 上的 disabled 对比色调
primary-on-primary-darker | 用在 $theme-primary-darker 上的 primary 对比色调
secondary-on-primary-darker | 用在 $theme-primary-darker 上的 secondary 对比色调
hint-on-primary-darker | 用在 $theme-primary-darker 上的 hint 对比色调
disabled-on-primary-darker  | 用在 $theme-primary-darker 上的 disabled 对比色调
primary-on-primary-darkest | 用在 $theme-primary-darkest 上的 primary 对比色调
secondary-on-primary-darkest | 用在 $theme-primary-darkest 上的 secondary 对比色调
hint-on-primary-darkest | 用在 $theme-primary-darkest 上的 hint 对比色调
disabled-on-primary-darkest  | 用在 $theme-primary-darkest 上的 disabled 对比色调 
 | 
primary-on-primary-alpha | 用在 $theme-primary-alpha 上的 primary 对比色调
secondary-on-primary-alpha | 用在 $theme-primary-alpha 上的 secondary 对比色调
hint-on-primary-alpha | 用在 $theme-primary-alpha 上的 hint 对比色调
disabled-on-primary-alpha | 用在 $theme-primary-alpha 上的 disabled 对比色调
 | 
primary-on-secondary | 用在 $theme-secondary 上的 primary 对比色调
secondary-on-secondary | 用在 $theme-secondary 上的 secondary 对比色调
hint-on-secondary | 用在 $theme-secondary 上的 hint 对比色调
disabled-on-secondary | 用在 $theme-secondary 上的 disabled 对比色调
 | 
primary-on-secondary-light | 用在 $theme-secondary-light 上的 primary 对比色调
secondary-on-secondary-light | 用在 $theme-secondary-light 上的 secondary 对比色调
hint-on-secondary-light | 用在 $theme-secondary-light 上的 hint 对比色调
disabled-on-secondary-light  | 用在 $theme-secondary-light 上的 disabled 对比色调
primary-on-secondary-lighter | 用在 $theme-secondary-lighter 上的 primary 对比色调
secondary-on-secondary-lighter | 用在 $theme-secondary-lighter 上的 secondary 对比色调
hint-on-secondary-lighter | 用在 $theme-secondary-lighter 上的 hint 对比色调
disabled-on-secondary-lighter  | 用在 $theme-secondary-lighter 上的 disabled 对比色调
primary-on-secondary-lightest | 用在 $theme-secondary-lightest 上的 primary 对比色调
secondary-on-secondary-lightest | 用在 $theme-secondary-lightest 上的 secondary 对比色调
hint-on-secondary-lightest | 用在 $theme-secondary-lightest 上的 hint 对比色调
disabled-on-secondary-lightest  | 用在 $theme-secondary-lightest 上的 disabled 对比色调 
 | 
primary-on-secondary-dark | 用在 $theme-secondary-dark 上的 primary 对比色调
secondary-on-secondary-dark | 用在 $theme-secondary-dark 上的 secondary 对比色调
hint-on-secondary-dark | 用在 $theme-secondary-dark 上的 hint 对比色调
disabled-on-secondary-dark  | 用在 $theme-secondary-dark 上的 disabled 对比色调
primary-on-secondary-darker | 用在 $theme-secondary-darker 上的 primary 对比色调
secondary-on-secondary-darker | 用在 $theme-secondary-darker 上的 secondary 对比色调
hint-on-secondary-darker | 用在 $theme-secondary-darker 上的 hint 对比色调
disabled-on-secondary-darker  | 用在 $theme-secondary-darker 上的 disabled 对比色调
primary-on-secondary-darkest | 用在 $theme-secondary-darkest 上的 primary 对比色调
secondary-on-secondary-darkest | 用在 $theme-secondary-darkest 上的 secondary 对比色调
hint-on-secondary-darkest | 用在 $theme-secondary-darkest 上的 hint 对比色调
disabled-on-secondary-darkest  | 用在 $theme-secondary-darkest 上的 disabled 对比色调
 | 
primary-on-secondary-alpha | 用在 $theme-secondary-alpha 上的 primary 对比色调
secondary-on-secondary-alpha | 用在 $theme-secondary-alpha 上的 secondary 对比色调
hint-on-secondary-alpha | 用在 $theme-secondary-alpha 上的 hint 对比色调
disabled-on-secondary-alpha | 用在 $theme-secondary-alpha 上的 disabled 对比色调
 | 
primary-on-background | 用在 $theme-background 上的 primary 对比色调
secondary-on-background | 用在 $theme-background 上的 secondary 对比色调
hint-on-background | 用在 $theme-background 上的 hint 对比色调
disabled-on-background | 用在 $theme-background 上的 disabled 对比色调 
 | 
primary-on-light | 用在深色颜色上的 primary 对比色调
secondary-on-light | 用在深色颜色上的 secondary 对比色调
hint-on-light | 用在深色颜色上的 hint 对比色调
disabled-on-light | 用在深色颜色上的 disabled 对比色调
 | 
primary-on-dark | 用在浅色颜色上的 primary 对比色调
secondary-on-light | 用在浅色颜色上的 secondary 对比色调
hint-on-light | 用在浅色颜色上的 hint 对比色调
disabled-on-light | 用在浅色颜色上的 disabled 对比色调
{: .doc-table}

## 辅助颜色

除了上面定义的三种基本颜色外，Perfect CSS 又定义了成功 success 、信息 info、警告 warning 和错误 error 四种辅助颜色，这四种颜色主要用在背景，文本，按钮等上，用来区分文本颜色和背景，以及表单样式（比如校验失败和成功的颜色）等。

四种辅助颜色又增加了浅色和深色颜色值，四种辅助颜色作为基本颜色的补充，用在特定组件元素上。

CSS 辅助颜色 | 说明
--- | ---
success | 成功
info | 信息
warning | 警告
error | 错误
success-light | 成功浅色
info-light | 信息浅色
warning-light | 警告浅色
error-light | 错误浅色
success-dark | 成功深色
info-dark | 信息深色
warning-dark | 警告深色
error-dark | 错误深色
{: .doc-table}

## 灰色颜色

Perfect CSS 定义了 10 种常用灰色颜色，提供了黑色透明度和灰色本身颜色两种方案实现，可以根据配置项 `$enable-transparent` 来选择其中一种方案，默认使用黑色透明度，修改 `base/variables/_options.scss` 中变量 `$enable-transparent` 可以改变实现方案。

CSS 灰色颜色变量名 | 黑色透明度 | 灰色 rgb 值
--- | ---
$grey-color-50 | rgba(0, 0, 0, .02) | #fafafa
$grey-color-100 | rgba(0, 0, 0, .04) | #f5f5f5
$grey-color-200 | rgba(0, 0, 0, .065) | #eeeeee
$grey-color-300 | rgba(0, 0, 0, .12) | #e0e0e0
$grey-color-400 | rgba(0, 0, 0, .26) | #bdbdbd
$grey-color-500 | rgba(0, 0, 0, .38) | #9e9e9e
$grey-color-600 | rgba(0, 0, 0, .54) | #757575
$grey-color-700 | rgba(0, 0, 0, .62) | #616161
$grey-color-800 | rgba(0, 0, 0, .74) | #424242
$grey-color-900 | rgba(0, 0, 0, .87) | #212121
{: .doc-table}

另外还定义了白色、黑色和透明色三个变量
```scss
$white: #ffffff !default;
$black: #000000 !default;
$transparent: rgba(0, 0, 0, 0) !default;
```

# 主题 Sass Function 和 Mixin 

## Function

函数名 | 功能
--- | ---
coefficient($rgb) | 颜色色彩系数，例如 coefficient(3) => .000910580950647
theme-luminance($color) | 计算颜色的亮度值 https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
theme-contrast-ratio($back, $front) | 计算两种颜色的对比度，一般指前景色和背景色
theme-tone($color) | 根据给定的颜色来判断色调是浅色还是深色
theme-contrast-tone($color) | 根据给定的颜色来判断对比色调是浅色还是深色
theme-contrast-tone-var($theme-contrast-tone-property) | 根据 $theme-contrast-tone-property-values 中的 key 计算对应的 CSS 变量名，比如 primary-on-primary 对应的变量名为 --theme-#{$theme-primary-contrast-tone}-primary
{: .doc-table}

## Mixin

Mixin名 | 功能
--- | ---
theme-color-prop($property, $style, $important) | 给属性 $property 设置颜色 $style 值，属性 $property 一般用在 color background-color border-color 等，也可用在任何可以设置颜色值的属性上，$style 应该是 $theme-property-values 中某个 key，该 mixin 主要用来设置主题颜色值，并且设置了主题 CSS 变量值，用户通过修改 CSS 变量值可以动态的修改整个主题值，比如在 body 上修改 css 变量值
theme-contrast-tone-prop($property, $style, $important) | 用来设置主题色对应的对比色调值，浅色或是深色，$style 应该是 $theme-contrast-tone-property-values 中某个 key，该 mixin 除了设置了对比色调值，还设置了对应的 CSS 变量值，同样可以通过修改 CSS 变量值来修改对应的对比色调值
theme-prop($property, $style, $important: false) | 糅合 theme-color-prop 和 theme-contrast-tone-prop，如果 $style 是颜色值，则直接设置颜色
theme($style, $fore: true) | 通过设置前后景来定制主题，该 mixin 只处理简单的 color 和 background-color ，对于更复制的需要组件单独定义。$style 指 $theme-property-values 或 $theme-assist-colors 中属性值，$fore true 指前景，false 指背景，默认 true
theme-assist($property, $style, $opacity: 1) | 设置辅助颜色，根据给定的 $style ($theme-assist-colors 中的 key) 和 $opacity 来设置颜色
theme-classes($tone: false) | 设置主题对应的背景和前景颜色 class，如果 $tone 设为 true，则会给出对应的前景或背景对比颜色色调值（深色或浅色），这样可以突出对比度，方便阅读，在需要的地方可以调用该 mixin ，并且参数 $tone 设为 true 即可
theme-assist-classes($tone: false) | 设置辅助颜色对应的背景和前景颜色 class，如果 $tone 设为 true，则会给出对应的前景或背景对比颜色色调值（深色或浅色），这样可以突出对比度，方便阅读，在需要的地方可以调用该 mixin ，并且参数 $tone 设为 true 即可
theme-grey-classes($tone: false) | 设置灰度颜色对应的背景和前景颜色 class，如果 $tone 设为 true，则会给出对应的前景或背景对比颜色色调值（深色或浅色），这样可以突出对比度，方便阅读，在需要的地方可以调用该 mixin ，并且参数 $tone 设为 true 即可
{: .doc-table}

# 主题 CSS 变量
主题样式中采用了最新的 CSS 变量，这样可以很方便的通过修改 CSS 变量值来改变主题，不过对于低版本的浏览器不兼容 CSS 变量。CSS 变量结合 Mixin `theme-color-prop` 和 `theme-tone-prop` 来设置颜色值。
Perfect CSS 提供了以下 CSS 变量值

CSS 变量名 | 含义
--- | ---
--theme-primary | 主题主颜色
--theme-secondary | 主题次颜色（对比强调颜色）
--theme-background | 主题背景颜色
--theme-primary-light | 主题主颜色浅色
--theme-secondary-light | 主题次颜色浅色
--theme-primary-lighter | 主题主颜色更浅色
--theme-secondary-lighter | 主题次颜色更浅色
--theme-primary-lightest | 主题主颜色最浅色
--theme-secondary-lightest | 主题次颜色最浅色
--theme-primary-dark | 主题主颜色深色
--theme-secondary-dark | 主题次颜色深色
--theme-primary-darker | 主题主颜色更深色
--theme-secondary-darker | 主题次颜色更深色
--theme-primary-darkest | 主题主颜色最深色
--theme-secondary-darkest | 主题次颜色最深色
--theme-primary-alpha | 主题主颜色透明色
--theme-secondary-alpha | 主题次颜色透明色
 | 
--theme-dark-primary | 主题对比色调深色主色
--theme-dark-secondary | 主题对比色调深色次色
--theme-dark-hint | 主题对比色调深色提示性色
--theme-dark-disabled | 主题对比色调深色禁用色
--theme-light-primary | 主题对比色调浅色主色
--theme-light-secondary | 主题对比色调浅色次色
--theme-light-hint | 主题对比色调浅色提示性色
--theme-light-disabled | 主题对比色调浅色禁用色
 | 
--theme-success | 辅助颜色-成功
--theme-info | 辅助颜色-信息
--theme-warning | 辅助颜色-警告
--theme-error | 辅助颜色-错误
--theme-success-light | 辅助颜色-成功浅色
--theme-info-light | 辅助颜色-信息浅色
--theme-warning-light | 辅助颜色-警告浅色
--theme-error-light | 辅助颜色-错误浅色
--theme-success-dark | 辅助颜色-成功深色
--theme-info-dark | 辅助颜色-信息深色
--theme-warning-dark | 辅助颜色-警告深色
--theme-error-dark | 辅助颜色-错误深色
--theme-success-alpha | 辅助颜色-成功透明色
--theme-info-alpha | 辅助颜色-信息透明色
--theme-warning-alpha | 辅助颜色-警告透明色
--theme-error-alpha | 辅助颜色-错误透明色
{: .doc-table}

# 主题 CSS Classes
我们可以通过主题提供的 CSS Classes 来修改 html 元素的前景和背景色，以及文本内容的灰度颜色值等。
所提供的 CSS Classes Property 值设置为 `!important`，优先级最高，从而能覆盖其他样式设置的主题颜色值

## 主题背景 CSS Classes

[实例]({{site.baseurl}}/components/theme/classes/#anchor-1-1-1){:target="_blank"}

CSS Classes名 | 含义
--- | ---
.theme-background | 主题背景颜色背景色
.theme-primary-bg | 主题主颜色背景色
.theme-secondary-bg | 主题次颜色背景色
.theme-primary-light-bg | 主题主颜色浅色背景色
.theme-secondary-light-bg | 主题次颜色浅色背景色
.theme-primary-lighter-bg | 主题主颜色更浅色背景色
.theme-secondary-lighter-bg | 主题次颜色更浅色背景色
.theme-primary-lightest-bg | 主题主颜色最浅色背景色
.theme-secondary-lightest-bg | 主题次颜色最浅色背景色
.theme-primary-dark-bg | 主题主颜色深色背景色
.theme-secondary-dark-bg | 主题次颜色深色背景色
.theme-primary-darker-bg | 主题主颜色更深色背景色
.theme-secondary-darker-bg | 主题次颜色更深色背景色
.theme-primary-darkest-bg | 主题主颜色最深色背景色
.theme-secondary-darkest-bg | 主题次颜色最深色背景色
.theme-primary-alpha-bg | 主题主颜色透明色背景色
.theme-secondary-alpha-bg | 主题次颜色透明色背景色
{: .doc-table}

## 主题前景 CSS Classes

[实例]({{site.baseurl}}/components/theme/classes/#anchor-1-1-2){:target="_blank"}

CSS Classes名 | 含义
--- | ---
.theme-primary | 主题主颜色前景色
.theme-secondary | 主题次颜色前景色
.theme-primary-light | 主题主颜色浅色前景色
.theme-secondary-light | 主题次颜色浅色前景色
.theme-primary-lighter | 主题主颜色更浅色前景色
.theme-secondary-lighter | 主题次颜色更浅色前景色
.theme-primary-lightest | 主题主颜色最浅色前景色
.theme-secondary-lightest | 主题次颜色最浅色前景色
.theme-primary-dark | 主题主颜色深色前景色
.theme-secondary-dark | 主题次颜色深色前景色
.theme-primary-darker | 主题主颜色更深色前景色
.theme-secondary-darker | 主题次颜色更深色前景色
.theme-primary-darkest | 主题主颜色最深色前景色
.theme-secondary-darkest | 主题次颜色最深色前景色
.theme-primary-alpha | 主题主颜色透明色前景色
.theme-secondary-alpha | 主题次颜色透明色前景色
{: .doc-table}

## 辅助颜色背景 CSS Classes

[实例]({{site.baseurl}}/components/theme/classes/#anchor-1-2-1){:target="_blank"}

CSS Classes名 | 含义
--- | ---
.theme-success-bg | 辅助颜色-成功背景色
.theme-info-bg | 辅助颜色-信息背景色
.theme-warning-bg | 辅助颜色-警告背景色
.theme-error-bg | 辅助颜色-错误背景色
.theme-success-light-bg | 辅助颜色-成功浅色背景色
.theme-info-light-bg | 辅助颜色-信息浅色背景色
.theme-warning-light-bg | 辅助颜色-警告浅色背景色
.theme-error-light-bg | 辅助颜色-错误浅色背景色
.theme-success-dark-bg | 辅助颜色-成功深色背景色
.theme-info-dark-bg | 辅助颜色-信息深色背景色
.theme-warning-dark-bg | 辅助颜色-警告深色背景色
.theme-error-dark-bg | 辅助颜色-错误深色背景色
.theme-success-alpha-bg | 辅助颜色-成功透明色背景色
.theme-info-alpha-bg | 辅助颜色-信息透明色背景色
.theme-warning-alpha-bg | 辅助颜色-警告透明色背景色
.theme-error-alpha-bg | 辅助颜色-错误透明色背景色
{: .doc-table}

## 辅助颜色前景 CSS Classes

[实例]({{site.baseurl}}/components/theme/classes/#anchor-1-2-2){:target="_blank"}

CSS Classes名 | 含义
--- | ---
.theme-success | 辅助颜色-成功前景色
.theme-info | 辅助颜色-信息前景色
.theme-warning | 辅助颜色-警告前景色
.theme-error | 辅助颜色-错误前景色
.theme-success-light | 辅助颜色-成功浅色前景色
.theme-info-light | 辅助颜色-信息浅色前景色
.theme-warning-light | 辅助颜色-警告浅色前景色
.theme-error-light | 辅助颜色-错误浅色前景色
.theme-success-dark | 辅助颜色-成功深色前景色
.theme-info-dark | 辅助颜色-信息深色前景色
.theme-warning-dark | 辅助颜色-警告深色前景色
.theme-error-dark | 辅助颜色-错误深色前景色
.theme-success-alpha | 辅助颜色-成功透明色前景色
.theme-info-alpha | 辅助颜色-信息透明色前景色
.theme-warning-alpha | 辅助颜色-警告透明色前景色
.theme-error-alpha | 辅助颜色-错误透明色前景色
{: .doc-table}

## 灰度颜色背景 CSS Classes

[实例]({{site.baseurl}}/components/theme/classes/#anchor-1-3-1){:target="_blank"}

CSS Classes名 | 含义
--- | ---
.theme-grey-bg-50 | 灰度颜色背景颜色值 50
.theme-grey-bg-100 | 灰度颜色背景颜色值 100
.theme-grey-bg-200 | 灰度颜色背景颜色值 200
.theme-grey-bg-300 | 灰度颜色背景颜色值 300
.theme-grey-bg-400 | 灰度颜色背景颜色值 400
.theme-grey-bg-500 | 灰度颜色背景颜色值 500
.theme-grey-bg-600 | 灰度颜色背景颜色值 600
.theme-grey-bg-700 | 灰度颜色背景颜色值 700
.theme-grey-bg-800 | 灰度颜色背景颜色值 800
.theme-grey-bg-900 | 灰度颜色背景颜色值 900
{: .doc-table}

## 灰度颜色前景 CSS Classes

[实例]({{site.baseurl}}/components/theme/classes/#anchor-1-3-2){:target="_blank"}

CSS Classes名 | 含义
--- | ---
.theme-grey-50 | 灰度颜色前景颜色值 50
.theme-grey-100 | 灰度颜色前景颜色值 100
.theme-grey-200 | 灰度颜色前景颜色值 200
.theme-grey-300 | 灰度颜色前景颜色值 300
.theme-grey-400 | 灰度颜色前景颜色值 400
.theme-grey-500 | 灰度颜色前景颜色值 500
.theme-grey-600 | 灰度颜色前景颜色值 600
.theme-grey-700 | 灰度颜色前景颜色值 700
.theme-grey-800 | 灰度颜色前景颜色值 800
.theme-grey-900 | 灰度颜色前景颜色值 900
{: .doc-table}

