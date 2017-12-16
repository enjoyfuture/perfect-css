# 目录说明

* _data 定义数据
  网站数据应放在这里。jekyll 的引擎会自动加载在该目录下所有的 yaml 文件（后缀是 .yml, .yaml, .json 或者 .csv ）。
  这些文件可以经由 `site.data` 访问。如果有一个 members.yml 文件在该目录下，
  你就可以通过 `site.data.members` 获取该文件的内容。
* _includes 放置公共文件
  布局文件可以引入这些公共文件，文档文件也可以引入。
  可以用标签  `{% include file.html %}` 来把文件 _includes/file.html 包含进来。
* _layouts 设置布局模板
  layouts 用来设置布局模板，标签  `{{content}}` 可以将content插入到页面中。
* _plugins ruby 插件
* assets 定义 CSS 和 js 文件
* components 组件
* docs 文档
* draft 开发草稿文件
* examples 综合示例

```
├── _data
├── _includes
├── _layouts
├── _plugins
├── assets
├── components
├── docs
├── draft
└── examples
```
