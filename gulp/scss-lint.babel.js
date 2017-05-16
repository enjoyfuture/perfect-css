import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

/**
 * 用 sass-lint 来检测 scss 代码
 * https://www.npmjs.com/package/gulp-sass-lint
 * https://www.npmjs.com/package/sass-lint
 * WebStorm plugin   https://github.com/idok/sass-lint-plugin
 * Convert your SCSS-Lint Config File to Sass-Lint  http://sasstools.github.io/make-sass-lint-config/
 */
gulp.task('scss-lint', () => {
  return gulp.src(['scss/**/*.scss', 'docs/assets/scss/**/*.scss'])
    .pipe($.sassLint({
      configFile: '.sass-lint.yml'
    }))
    .pipe($.sassLint.format())
    .pipe($.sassLint.failOnError())
});


