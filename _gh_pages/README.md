# 目录说明

* _data 定义数据
  网站数据应放在这里。jekyll 的引擎会自动加载在该目录下所有的 yaml 文件（后缀是 .yml, .yaml, .json 或者 .csv ）。
  这些文件可以经由 `site.data` 访问。如果有一个 members.yml 文件在该目录下，
  你就可以通过 `site.data.members` 获取该文件的内容。
* _includes 放置公共文件
  可以加载这些包含部分到你的布局或者文章中以方便重用。
  可以用这个标签  `{% include file.ext %}` 来把文件 _includes/file.html 包含进来。
* _layouts 设置网站布局
  layouts 用来设置布局模板，标签  `{{content}}` 可以将content插入到页面中。
* _plugins ruby 插件
* assets 定义 CSS 和 js 文件
* docs 参考文档
<<<<<<< HEAD
=======
* components 组件
>>>>>>> 274d71830943ddf222d83be4859ecf2552378ea5
* draft 开发草稿文件
* guide 开发规范

  
