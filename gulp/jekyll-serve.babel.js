import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import chalk from 'chalk';
import childProcess from 'child_process';

const $ = gulpLoadPlugins();

const a = /^([a-zA-Z0-9.+#-]+)((\s+\w+(=((\w|[0-9_-])+|"([0-9]+\s)*[0-9]+"))?)*)$/;

const b = /^((\s+\w+(=((\w|[0-9_-])+|"([0-9]+\s)*[0-9]+"))?)*)$/;

// exec jekyll serve
gulp.task('jekyll', ['scss-docs', 'build-js', 'copy-clipboard-to-docs'], () => {
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
  gulp.watch(['scss/**/*.scss', 'docs/assets/scss/**/*.scss'], ['scss-docs']);
  gulp.watch(['js/src/**/*.js'], ['build-js']);
});

// 开启 docs 服务
gulp.task('serve', ['clean'], () => {
  gulp.start('jekyll');
});

