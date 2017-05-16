const path = require('path');
const sassTrue = require('sass-true');

// 待测试的文件
const officialDemo = path.join(__dirname, 'official-demo', 'test.scss');

// 运行测试文件
sassTrue.runSass({file: officialDemo}, describe, it);
