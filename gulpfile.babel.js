import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import chalk from 'chalk';
import childProcess from 'child_process';
import requireDir from 'require-dir';

requireDir('./gulp');

const $ = gulpLoadPlugins();

// exec jekyll serve
gulp.task('jekyll', ['sass-compile', 'build-js'], () => {
  const {spawn} = childProcess;
  const bundle = spawn('bundle', ['exec', 'jekyll', 'serve']);

  bundle.stdout.on('data', (data) => {
    let _data = data.toString();
    _data = _data.replace(/\n$/, '');
    if (_data) {
      console.log(chalk.magenta(_data));
    }
  });

  bundle.stderr.on('data', (data) => {
    console.log(chalk.red(data));
  });

  // 监听
  gulp.watch(['scss/**/*.scss', 'docs/assets/scss/**/*.scss'], ['sass-compile']);
  gulp.watch(['js/src/**/*.js'], ['build-js']);
});

// 开启 docs 服务
gulp.task('serve', ['clean'], () => {
  gulp.start('jekyll');
});

// build js
gulp.task('build-js', ['babel-dist', 'babel-compress'], () => {
  gulp.start('copy-js-to-docs');
});

// build
gulp.task('build', ['clean'], () => {
  gulp.start('sass');
  gulp.start('build-js');
});

// 默认任务
gulp.task('default', () => {
  gulp.start('serve');
});
