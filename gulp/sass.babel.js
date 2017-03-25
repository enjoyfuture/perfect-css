import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import chalk from 'chalk';
import autoprefixer from 'autoprefixer';
import flexbugs from 'postcss-flexbugs-fixes';

const $ = gulpLoadPlugins();

const sassOption = {
  outputStyle: 'expanded', // 不压缩，设为 compressed 表示压缩
  precision: 10,
  includePaths: ['.']
};

/**
 * 浏览器支持性参考 bootstrap 官方的支持，参见源码 postcss.js 的支持性说明
 * iOS：https://developer.apple.com/support/app-store/
 * Android：https://developer.android.com/about/dashboards/index.html
 */
const browsers = ['Chrome >= 35', 'Firefox >= 38', 'Edge >= 12',
  'Explorer >= 10', 'Android >= 4', 'iOS >= 8', 'Safari >= 8', 'Opera >= 12'];

const postcssPlugins = [
  autoprefixer({browsers}),
  flexbugs
];

/**
 * 利用sass生成styles任务
 * [在线补齐前缀](http://autoprefixer.github.io/)
 * [浏览器列表](https://github.com/ai/browserslist)
 *
 */
gulp.task('sass', () => {
  return gulp.src('scss/*.scss')
    .pipe($.sass.sync(sassOption).on('error', $.sass.logError))
    .pipe($.postcss(postcssPlugins))
    .pipe(gulp.dest('dist/css'));
});

// 文档 sass 样式
gulp.task('sass-docs', () => {
  return gulp.src('docs/assets/scss/docs.scss')
    .pipe($.sass.sync(sassOption).on('error', $.sass.logError))
    .pipe($.postcss(postcssPlugins))
    .pipe(gulp.dest('docs/assets/css'));
});

// 把 css copy 到 docs 下
gulp.task('copy-css-to-docs', () => {
  return gulp.src('dist/css/*.css')
    .pipe(gulp.dest('docs/assets/css'));
});

// 编译 sass
gulp.task('sass-compile', ['sass', 'sass-docs'], () => {
  gulp.start('copy-css-to-docs');
});

// 检测样式加前缀
gulp.task('css-pre', () => {
  const info = autoprefixer({
    browsers
  }).info();

  console.log(chalk.magenta(info));
});
