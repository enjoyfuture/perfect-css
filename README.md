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
npm install
gulp jekyll
```

Note: If you exec the command the first, You should exec the following command

1. Make sure you have installed the ruby. And we use the brew to manage ruby.
  ```
    brew update 
    brew upgrade
    gem update
  ```
2.  Install jekyll and dependency package.

```
gem install jekyll bundler
bundle install
# or
bundle update
```

You can refer to more information to http://jekyllrb.com/

Then, You can open the serve in browser

http://localhost:9090/

## Perfect official website

http://perfect-css.com


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
