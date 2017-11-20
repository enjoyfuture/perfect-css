import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import chalk from 'chalk';
import autoprefixer from 'autoprefixer';
import flexbugs from 'postcss-flexbugs-fixes'; // 修复 flexbox 已知的 bug
import cssnano from 'cssnano'; // 优化 css，对于长格式优化成短格式等

const $ = gulpLoadPlugins();

export const scssOption = {
  outputStyle: 'expanded', // 不压缩，设为 compressed 表示压缩
  precision: 15, // 设置小数精度
  includePaths: ['.'],
};

/**
 * 浏览器兼容性
 * iOS：https://developer.apple.com/support/app-store/
 * Android：https://developer.android.com/about/dashboards/index.html
 * http://tongji.baidu.com/data/browser
 * https://github.com/ai/browserslist#queries
 */

const getBrowsers = (browser) => {
  let browsers = null;

  switch (browser) {
    // 用来编译文档样式
    case 'docs':
      browsers = ['Chrome >= 49', 'Firefox >= 54', 'Edge >= 14',
        'Explorer >= 11', 'Android >=56', 'iOS >= 10.2', 'Safari >= 10.1', 'Opera >= 47'];
      break;

    case 'modern':
      browsers = ['Chrome >= 45', 'Firefox >= 38', 'Edge >= 12',
        'Explorer >= 10', 'Android >= 4.4', 'iOS >= 9', 'Safari >= 9', 'Opera >= 30'];
      break;
    // 对于低版本浏览器的兼容性待处理
    case 'degradation':
      browsers = ['Chrome >= 45', 'Firefox >= 38', 'Edge >= 12',
        'Explorer >= 9', 'Android >= 4.4', 'iOS >= 9', 'Safari >= 9', 'Opera >= 30'];
      break;
    default:
      browsers = ['Chrome >= 45', 'Firefox >= 38', 'Edge >= 12',
        'Explorer >= 10', 'Android >= 4.4', 'iOS >= 9', 'Safari >= 9', 'Opera >= 30'];
  }
};

export const postcssPlugins = (browser) => {
  const browsers = getBrowsers(browser);
  return [
    //cssnano(),
    flexbugs(),
    autoprefixer({
      flexbox: 'no-2009',
      browsers
    })
  ];
};

/**
 * 利用sass生成styles任务
 * [在线补齐前缀](http://autoprefixer.github.io/)
 * [浏览器列表](https://github.com/ai/browserslist)
 *
 */
gulp.task('scss', ['scss-lint'], () => {
  return gulp.src(['scss/**/*.scss'])
    .pipe($.sourcemaps.init())
    .pipe($.sass(scssOption).on('error', $.sass.logError))
    .pipe($.postcss(postcssPlugins()))
    .pipe($.sourcemaps.write('./maps'))
    .pipe(gulp.dest('dist/css'));
});

// 编译 docs scss
gulp.task('scss-docs', ['scss-lint'], () => {
  return gulp.src(['docs/assets/scss/*.scss'])
    .pipe($.sourcemaps.init())
    .pipe($.sass(scssOption).on('error', $.sass.logError))
    .pipe($.postcss(postcssPlugins('docs')))
    .pipe($.sourcemaps.write('./maps'))
    .pipe(gulp.dest('docs/assets/css'));
});

// 检测样式加前缀
gulp.task('css-pre', () => {
  const info = autoprefixer({
    browsers: getBrowsers('docs')
  }).info();

  console.log(chalk.magenta(info));
});
