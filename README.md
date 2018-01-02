# perfect
  Perfect is a popular CSS framework based on the modern browser.
  It can bring you perfect experience and the newest css technology.
  It is a CSS framework in the future.
  
  http://perfect-css.com/

**_Note: The Project is developing. In looking forward_**

## Documentation

The Perfect docs use the Jekyll to generator.

If you want to add and contribute to improve the document or translate this document.
Please exec the following command to start the document service.

### Clone repository from [github](https://github.com/joy-web/perfect-css)

```git
git clone git@github.com:joy-web/perfect-css.git
cd perfect-css
npm install
```

### The development environment

At first, You need to install Ruby. The Perfect docs is based on the [Ruby](https://www.ruby-lang.org/zh_cn/).

###  Jekyll server

```npm
npm start
```

Note: If you exec the command the first, You should exec the following command

1. Make sure you have installed the ruby. And we use the rvm to manage ruby.
  ```
    rvm install 2.4.2 # or the latest version for ruby
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
npm run build
```

## Build jekyll doc

```
npm run jekyll:docs
```

## Publish to Npm

```npm
npm publish
```

## Test 

## SCSS test

```npm
npm run scss-test
```

## push github pages to git branch gh-pages
```npm
npm run github-pages
```
If there is an error, you can view [github-pages.md](./github-pages.md)

## Other Development

### Rouge Theme

Generate a highlighter rouge theme

```npm
npm run rouge-theme
```

Note: 
* The rouge themes has base16, base16.dark, base16.monokai, base16.monokai.light, base16.solarized, base16.solarized.dark,
  colorful, github, gruvbox, gruvbox.light, molokai, monokai, monokai.sublime, thankful_eyes, tulip
* After the rouge installed rouge (gem install rouge), you can use the command `rougify`
* Support highlighter language, you can view here http://rouge.jneen.net/
* the command `rougify -help style` can view all the support themes.
* You can search the theme from github https://github.com/search?q=pygments+style
* https://havee.me/internet/2016-02/upgrade-github-pages-site-to-jekyll-3.html

### Test Css prefix
```npm
npm run css-prefix
```

### Generate Perfect CSS dist zip

```npm
npm run generate-zip
```

## Issue

https://github.com/joy-web/perfect-css/issues

## CHANGELOG

Please view [here](./CHANGELOG.md)
