import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

// 把 es6 编译成 es5
gulp.task('babel-dist', () => {
  return gulp.src('js/src/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('js/dist'));
});

// 把 es6 编译成一个 es5文件
gulp.task('babel-concat', () => {
  return gulp.src('js/src/**/*.js')
    .pipe($.babel())
    .pipe($.concat('perfect.js'))
    .pipe(gulp.dest('dist/js'));
});

// 压缩文件
gulp.task('babel-compress', ['babel-concat'], () => {
  return gulp.src('dist/js/perfect.js')
    .pipe($.sourcemaps.init())
    .pipe($.uglify({
      preserveComments: 'license'
    }))
    .pipe($.concat('perfect.min.js'))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'));
});


