import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

/**
 * 使用 true 对 sass 单元测试
 * http://oddbird.net/true/
 */
gulp.task('scss-test', () => {
  return gulp.src('test/scss/scss-test.js')
    .pipe($.mocha());
});

