import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import chalk from 'chalk';
import autoprefixer from 'autoprefixer';
import flexbugs from 'postcss-flexbugs-fixes';

const $ = gulpLoadPlugins();

const scssOption = {
  outputStyle: 'expanded', // 不压缩，设为 compressed 表示压缩
  precision: 10, // 设置小数精度
  includePaths: ['.']
};

/**
 * 浏览器支持性参考 bootstrap 官方的支持，参见源码 postcss.js 的支持性说明
 * iOS：https://developer.apple.com/support/app-store/
 * Android：https://developer.android.com/about/dashboards/index.html
 * http://tongji.baidu.com/data/browser
 */
// 对于低版本浏览器的兼容性待处理
/*const browsers = ['Chrome >= 35', 'Firefox >= 38', 'Edge >= 12',
  'Explorer >= 10', 'Android >= 4', 'iOS >= 8', 'Safari >= 8', 'Opera >= 12'];*/

const browsers = ['Chrome >= 43', 'Firefox >= 38', 'Edge >= 12',
  'Explorer >= 10', 'Android >= 4.4', 'iOS >= 9', 'Safari >= 9', 'Opera >= 30'];

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
gulp.task('scss', ['scss-lint'], () => {
  return gulp.src('scss/*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync(scssOption).on('error', $.sass.logError))
    .pipe($.postcss(postcssPlugins))
    .pipe($.sourcemaps.write('./maps'))
    .pipe(gulp.dest('dist/css'));
});

// 编译 docs scss
gulp.task('scss-docs', ['scss-lint'], () => {
  return gulp.src(['scss/perfect.scss', 'docs/assets/scss/*.scss'])
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync(scssOption).on('error', $.sass.logError))
    .pipe($.postcss(postcssPlugins))
    .pipe($.sourcemaps.write('./maps'))
    .pipe(gulp.dest('docs/assets/css'));
});

// 检测样式加前缀
gulp.task('css-pre', () => {
  const info = autoprefixer({
    browsers
  }).info();

  console.log(chalk.magenta(info));
});
