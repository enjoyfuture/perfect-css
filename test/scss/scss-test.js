const path = require('path');
const sassTrue = require('sass-true');

// 待测试的文件
// const officialTest = path.join(__dirname, 'official-demo', 'test.scss');
// 运行测试文件
// sassTrue.runSass({file: officialTest}, describe, it);

// 待测试的文件
const perfectTest = path.join(__dirname, 'perfect', 'perfect-test.scss');
sassTrue.runSass({
  file: perfectTest,
  precision: 15
}, describe, it);
