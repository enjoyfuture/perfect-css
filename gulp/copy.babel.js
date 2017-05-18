import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

// 把 js copy 到 docs 下
gulp.task('copy-js-to-docs', () => {
  return gulp.src('js/dist/**')
    .pipe(gulp.dest('docs/assets/js'));
});

// 把 clipboard copy 到 docs 下
gulp.task('copy-clipboard-to-docs', () => {
  return gulp.src(['node_modules/clipboard/dist/clipboard.min.js',
    'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('docs/assets/js/vendor'));
});
