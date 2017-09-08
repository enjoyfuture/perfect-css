import childProcess from 'child_process';
import path from 'path';
import fs from 'fs';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import chalk from 'chalk';
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
  publishConfig();

  gulp.src('README.md').pipe(gulp.dest('build'));

  return gulp.src('scss/**')
    .pipe(gulp.dest('build/scss'));
});

// 构建 css
gulp.task('publish-build', ['prepublish'], () => {
  return gulp.src(['build/scss/**/*.scss'])
    .pipe($.sourcemaps.init())
    .pipe($.sass(scssOption).on('error', $.sass.logError))
    .pipe($.postcss(postcssPlugins()))
    .pipe($.sourcemaps.write('../css-maps'))
    .pipe(gulp.dest('build/css'));
});

// 发布到 npm 中
gulp.task('publish', ['publish-build'], () => {
  const {exec} = childProcess;
  exec('cd build && npm publish && cd ..', (error, stdout, stderr) => {
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

// 生成 npm publish package.json
function publishConfig () {
  const packageFile = path.join(__dirname, '..', 'package.json');

  fs.readFile(packageFile, 'utf8', (err, contents) => {
    if (err === null) {
      const json = JSON.parse(contents);

      // 去掉 scripts dependencies 和 devDependencies
      json.scripts = {};
      json.dependencies = {};
      delete json.devDependencies;

      try {
        fs.writeFileSync(path.join(__dirname, '..', 'build', 'package.json'), JSON.stringify(json, null, '  '));
      } catch (e) {
        throw new Error('create npm publish package.json error!');
      }
    }
  });
}
