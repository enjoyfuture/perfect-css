# perfect
  Perfect is a popular CSS framework based on the modern browser.
  It can bring you perfect experience and the newest css technology.
  It is a CSS framework in the future.

**_Note: The Project is developing. In looking forward_**

## Documentation

The Perfect docs use the Jekyll to generator.

If you want to add and contribute to improve the document or translate this document.
Please exec the following command to start the document service.

### Clone repository from [github](https://github.com/joy-web/perfect-css)

```bash
git clone git@github.com:joy-web/perfect-css.git
cd perfect-css
npm install
```

### The development environment

At first, You need to install Ruby. The Perfect docs is based on the [Ruby](https://www.ruby-lang.org/zh_cn/).

###  Jekyll server

```
gulp jekyll
```

Note: If you exec the command the first, You should exec the following command

1. Make sure you have installed the ruby. And we use the rvm to manage ruby.
  ```
    rvm install 2.4.2 # 或者最新ruby版本  
    gem update 
    # or 
    sudo gem update
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

### Perfect official website

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

https://github.com/joy-web/perfect-css/issues

## CHANGELOG

Please view [here](./CHANGELOG.md)
