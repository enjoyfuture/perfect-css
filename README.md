# perfect
  Perfect is a popular CSS framework based on the modern browser.
  It can bring you perfect experience and the newest css technology.
  It is a CSS framework in the future.

# Documentation

The Perfect Doc use the Jekyll to generator.

## The development environment

At first, You need to install Ruby. The Perfect docs is based on the [Ruby](https://www.ruby-lang.org/zh_cn/).

##  Jekyll server

```
gulp jekyll
```

Note: If you exec the command the first, You should exec the following command to install jekyll and dependency package.

http://localhost:9090/

## Perfect official website

http://enjoyfuture.github.io/perfect/

```
gem install jekyll bundler
bundle install
```

You can refer to more information to http://jekyllrb.com/

## Build

```
gulp build
```

## Build doc

```
gulp build-doc
```

## Issue

https://github.com/enjoyfuture/perfect/issues

## CHANGELOG

Please view [here](./CHANGELOG.md)

## 利用 git subtree 提交代码到 GitHub Pages 

利用 git subtree 可以很方便的管理 gh-pages 分支

以下命令列出了详细操作，初始化的时候需要先执行前两步，再执行第三步，以后更新 gh-pages 时，只需执行第三步即可。

1. 创建 gh-pages 分支，**注意：在执行 git subtree add 命令之前，需确保 gh-pages 分支下至少存在一个文件**
```
git checkout -b gh-pages //创建并切换到分支 gh-pages
rm -rf *  //隐藏文件需要单独删除，结合命令 ls -a
git add -A
git commit -m "clear gh-page"
vim .gitignore
git add .gitignore //输入要忽略的文件
git commit -m ".gitignore"
git push --set-upstream origin gh-pages
git checkout master
```

2. 把分支 gh-pages 添加到本地 subtree 中，执行该命令前，请确保 _gh_pages 文件夹不存在

```
git subtree add --prefix=_gh_pages origin gh-pages --squash
```
  
3. 生成 docs
```
gulp build-doc
git add -A _gh_pages
git commit -m "Update docs"
git subtree push --prefix=_gh_pages origin gh-pages --squash
git push
```


