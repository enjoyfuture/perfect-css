---
layout: docs
title: 导航类样式-菜单
description: 菜单
group: navigation
toc: true
---

## Examples

{% example html %}
<ul class="menu">
  <li><a href="#" class="menu-title menu-header">菜单</a></li>
  <li><a href="#" class="menu-title menu-header">菜单</a></li>
  <li><a href="#" class="menu-title menu-header">菜单</a></li>
  <li>
    <a href="#" class="menu-title menu-header active">一级菜单</a>
    <ul class="menu">
      <li><a href="#" class="menu-title">菜单</a></li>
      <li><a href="#" class="menu-title">菜单</a></li>
      <li>
        <a href="#" class="menu-title active">二级菜单</a>
        <ul class="menu">
          <li><a href="#" class="menu-title">菜单</a></li>
          <li><a href="#" class="menu-title active">菜单</a></li>
          <li><a href="#" class="menu-title">菜单</a></li>
        </ul>
      </li>
      <li><a href="#" class="menu-title">菜单</a></li>
    </ul>
  </li>
  <li><a href="#" class="menu-title menu-header">菜单</a></li>
</ul>
{% endexample %}

## 下拉菜单

{% example html %}
<ul class="menu menu-dropdown">
  <li><a href="#" class="menu-title menu-header">菜单</a></li>
  <li><a href="#" class="menu-title menu-header">菜单</a></li>
  <li><a href="#" class="menu-title menu-header">菜单</a></li>
  <li>
    <a href="#" class="menu-title menu-header active">一级菜单</a>
    <ul class="menu">
      <li><a href="#" class="menu-title">菜单</a></li>
      <li><a href="#" class="menu-title">菜单</a></li>
      <li class="menu-cascaded">
        <a href="#" class="menu-title active">二级菜单</a>
        <ul class="menu">
          <li class="menu-cascaded">
            <a href="#" class="menu-title">菜单1</a>
            <ul class="menu">
              <li>
                <a href="#" class="menu-title">菜单11</a>
              </li>
              <li>
                <a href="#" class="menu-title">菜单22</a>
              </li>
              <li><a href="#" class="menu-title active">菜单34</a></li>
              <li><a href="#" class="menu-title">菜单45</a></li>
              <li><a href="#" class="menu-title active">菜单56</a></li>
              <li><a href="#" class="menu-title">菜单66</a></li>
            </ul>
          </li>
          <li>
            <a href="#" class="menu-title">菜单2</a>
          </li>
          <li><a href="#" class="menu-title active">菜单3</a></li>
          <li><a href="#" class="menu-title">菜单4</a></li>
          <li><a href="#" class="menu-title active">菜单5</a></li>
          <li><a href="#" class="menu-title">菜单6</a></li>
        </ul>
      </li>
      <li><a href="#" class="menu-title">菜单</a></li>
    </ul>
  </li>
  <li><a href="#" class="menu-title menu-header">菜单</a></li>
</ul>
{% endexample %}

## 目录菜单，最多支持6级

{% example html %}
<ul class="menu menu-catalogue">
  <li class="menu-item"><a href="#" class="menu-title menu-header">一级菜单1</a></li>
  <li>
    <a href="#" class="menu-title menu-header active">一级菜单2</a>
    <ul class="menu menu-catalogue">
      <li><a href="#" class="menu-title">二级菜单2-1</a></li>
      <li><a href="#" class="menu-title">二级菜单2-2</a></li>
      <li>
        <a href="#" class="menu-title active">二级菜单2-3</a>
        <ul class="menu menu-catalogue">
          <li>
            <a href="#" class="menu-title">三级菜单2-3-1</a>
            <ul class="menu menu-catalogue">
              <li>
                <a href="#" class="menu-title">四级菜单2-3-1-1</a>
                <ul class="menu menu-catalogue">
                  <li>
                    <a href="#" class="menu-title">五级菜单2-3-1-1-1</a>
                    <ul class="menu menu-catalogue">
                      <li>
                        <a href="#" class="menu-title">六级菜单2-3-1-1-1-1</a>
                      </li>
                      <li><a href="#" class="menu-title active">六级菜单2-3-1-1-1-2</a></li>
                      <li><a href="#" class="menu-title">六级菜单2-3-1-1-1-3</a></li>
                    </ul>
                  </li>
                  <li><a href="#" class="menu-title active">五级菜单2-3-1-1-2</a></li>
                  <li><a href="#" class="menu-title">五级菜单2-3-1-1-2</a></li>
                </ul>
              </li>
              <li><a href="#" class="menu-title active">四级菜单2-3-1-2</a></li>
              <li><a href="#" class="menu-title">四级菜单2-3-1-3</a></li>
            </ul>
          </li>
          <li><a href="#" class="menu-title active">三级菜单2-3-2</a></li>
          <li><a href="#" class="menu-title">三级菜单2-3-3</a></li>
        </ul>
      </li>
      <li><a href="#" class="menu-title">二级菜单2-4</a></li>
    </ul>
  </li>
  <li><a href="#" class="menu-title menu-header">一级菜单3</a></li>
</ul>
{% endexample %}



