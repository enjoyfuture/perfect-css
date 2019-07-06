# perfect
  Perfect is a popular CSS framework based on the modern browser.
  It can bring you perfect experience and the newest css technology.
  It is a CSS framework in the future.
  
  http://perfect-css.com/

**_Note: The Project is developing. In looking forward_**

## Documentation

The Perfect docs use the Jekyll to generator.

You can learn perfect css from the official http://perfect-css.com/ .

Of course, If you want to join in and contribute to improve the document or translate this document. Please exec the following command to start the document service.

### Clone repository from [github](https://github.com/joy-web/perfect-css)

```bash
git clone git@github.com:joy-web/perfect-css.git
cd perfect-css
npm install
```

### Initialize the development environment

At first, You need to install Jekyll. The Perfect CSS docs is based on the [Jekyll](https://jekyllrb.com/).

Note: Jekyll is running in the ruby environment. You need to install [Ruby](https://www.ruby-lang.org/zh_cn/).

1. Make sure you have installed the latest version ruby. And we use the [rvm](https://rvm.io/) to manage ruby.

    ```bash
      rvm install 2.6.0 # or the latest version for ruby
      gem update
      # or
      sudo gem update
    ```

2. Install jekyll and dependency package.

    Note: Make sure to install dependencies in the current directory('perfect-css').
    
    ```bash
    gem install jekyll bundler
    bundle install
    # or
    bundle update
    ```
    
    You can refer to more information to http://jekyllrb.com/

##  Jekyll server

### Start server in the local

```bash
npm start
```

Then, You can open the serve in browser

http://localhost:9090/

### Perfect official website

http://perfect-css.com

## Build

```bash
npm run build
```

## Build jekyll doc

```bash
npm run jekyll:docs
```

## Test 

```bash
npm run test
```

### SCSS test

```bash
npm run test:scss
```

### Javascript test

```bash
npm run test:js
```

## lint and fix lint
We use eslint to normalize the JavaScript code and use stylelint to normalize the CSS code.

You can exec the following command to lint or fix the code.

```bash
npm run lint:css
npm run lint:js
npm run lint
npm run fix:css
npm run fix:js
npm run fix
```

## Publish to npm

```bash
npm publish
```

## push github pages to git branch gh-pages

```bash
npm run github-pages
```

If there is an error, you can view [github-pages.md](./github-pages.md)

## Other Development

### Rouge Theme

Generate a highlighter rouge theme

```bash
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

### View Css prefix

```bash
npm run css-prefix
```

### Generate Perfect CSS dist zip

```bash
npm run generate-zip
```

## Issue

https://github.com/joy-web/perfect-css/issues

## CHANGELOG

Please view [here](./CHANGELOG.md)
