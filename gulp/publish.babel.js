import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import {scssOption, postcssPlugins} from './scss.babel';
const $ = gulpLoadPlugins({
  pattern: ['gulp-*', 'del']
});

// 清理发布目录
gulp.task('clean-publish', () => {
  return $.del(['build'], {force: true});
});

// 复制文件到发布目录
gulp.task('prepublish', ['clean-publish'], () => {
  gulp.src('README.md').pipe(gulp.dest('build'));

  return gulp.src('scss/**')
    .pipe(gulp.dest('build/scss'));
});

// 发布到 npm
gulp.task('publish', ['prepublish'], () => {
  return gulp.src(['build/scss/**/*.scss'])
    .pipe($.sourcemaps.init())
    .pipe($.sass(scssOption).on('error', $.sass.logError))
    .pipe($.postcss(postcssPlugins))
    .pipe($.sourcemaps.write('../css-maps'))
    .pipe(gulp.dest('build/css'));
});
