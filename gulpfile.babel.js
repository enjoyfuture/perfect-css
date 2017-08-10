import gulp from 'gulp';
import requireDir from 'require-dir';

/**
 *  This will load all scripts files in the gulp directory
 *  in order to load all gulp tasks
 */
requireDir('./gulp');

// build
gulp.task('build', ['clean'], () => {
  gulp.start('scss');
  //gulp.start('build-js');
});

// 默认任务
gulp.task('default', () => {
  gulp.start('serve');
});
