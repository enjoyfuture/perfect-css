import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import chalk from 'chalk';
import childProcess from 'child_process';

const $ = gulpLoadPlugins();

// exec jekyll serve
gulp.task('jekyll', ['scss-docs', 'build-js', 'copy-clipboard-to-docs', 'draft-data'], () => {
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
  gulp.watch(['docs/draft/**'], ['draft-data']);
});

// 开启 docs 服务
gulp.task('serve', ['clean'], () => {
  gulp.start('jekyll');
});


// 使用 jekyll 编译生成 doc 文档
gulp.task('build-doc', ['scss-docs', 'build-js', 'copy-clipboard-to-docs', 'draft-data'], () => {
  const {exec} = childProcess;
  exec('JEKYLL_ENV=production bundle exec jekyll build', (error, stdout, stderr) => {
    if (error) {
      console.log(chalk.magenta(error));

      return;
    }
    if (stdout) {
      console.log(chalk.magenta(`stdout: ${stdout}`));
    }
    if (stderr) {
      console.log(chalk.magenta(`stderr: ${stderr}`));
    }
  });
});
