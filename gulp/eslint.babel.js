import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

// eslint 检测 js 代码
gulp.task('eslint', () => {
  return gulp.src(['js/src/**/*.js', 'gulp/*.js', 'gulpfile.babel.js'])
    .pipe($.eslint({
      configFile: '.eslintrc'
    }))
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe($.eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe($.eslint.failAfterError());
});

