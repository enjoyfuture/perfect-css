import childProcess from 'child_process';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import chalk from 'chalk';

const $ = gulpLoadPlugins();

// 生成 highlighter rouge theme
// 可用的主题有 base16, base16.dark, base16.monokai, base16.monokai.light, base16.solarized, base16.solarized.dark,
// colorful, github, gruvbox, gruvbox.light, molokai, monokai, monokai.sublime, thankful_eyes, tulip
// https://havee.me/internet/2016-02/upgrade-github-pages-site-to-jekyll-3.html
// 安装了 rouge (gem install rouge) 就可以使用命令 rougify
// 支持的语言看这里 http://rouge.jneen.net/
// rougify -help style 查看支持的主题，也可以在 github 上搜索主题 https://github.com/search?q=pygments+style
gulp.task('rouge-theme', () => {
  const {exec} = childProcess;
  exec('rougify style github > docs/assets/scss/docs/_highlight.scss', (error, stdout, stderr) => {
    if (error) {
      console.error(error);
    } else {
      console.log(chalk.magenta('Generator rouge theme success'));
    }
  });
});
