import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

// 清理临时和打包目录
gulp.task('clean', () => {
  return gulp.src(['dist', 'docs/assets/css'])
    .pipe($.clean({force: true}));
});
