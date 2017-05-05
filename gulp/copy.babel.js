import path from 'path';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

// 把 css copy 到 docs 下
gulp.task('copy-css-to-docs', () => {
  return gulp.src('dist/css/*.css')
    .pipe(gulp.dest('docs/assets/css'));
});

// 把 js copy 到 docs 下
gulp.task('copy-js-to-docs', () => {
  return gulp.src('js/dist/**')
    .pipe(gulp.dest('docs/assets/js'));
});
