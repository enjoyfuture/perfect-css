import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins({
  pattern: ['gulp-*', 'del']
});

// 清理临时和打包目录
gulp.task('clean', () => {
  return $.del(['dist', 'js/dist', 'docs/assets/css'], {force: true});
});
