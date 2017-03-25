import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

// 把 es6 编译成 es5
gulp.task('babel-dist', ['eslint'], () => {
  return gulp.src('javascript/src/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('javascript/dist'));
});

// 把 es6 编译成一个 es5文件
gulp.task('babel-concat', () => {
  return gulp.src('javascript/src/**/*.js')
    .pipe($.babel({
      presets: ['es2015']
    }))
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


