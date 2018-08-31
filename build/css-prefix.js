import chalk from 'chalk';
import autoprefixer from 'autoprefixer';
import getBrowsers from './webpack/get-browsers';

// 检测样式前缀
const info = autoprefixer({
  browsers: getBrowsers('docs'),
}).info();

console.log(chalk.magenta(info));
