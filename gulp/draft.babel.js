import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import yaml from 'js-yaml';

const $ = gulpLoadPlugins();

// 读取文件
function readFiles(filePath) {
  const json = [];
  const dirs = fs.readdirSync(filePath);
  for (let i = 0; i < dirs.length; i++) {
    // 文件，这里也可以使用 const stats = fs.statSync(path); stats.isFile() 来判断
    if (dirs[i].indexOf('.html') !== -1) {
      const contents = fs.readFileSync(path.join(filePath, dirs[i]), 'utf8');
      const title = (/title:\s*.+\s*-\s*(.+)/g).exec(contents)[1];
      const _dir = dirs[i].substring(0, dirs[i].length - 5);
      json.push({
        title,
        file: _dir,
      });
    } else {
      const _dirs = fs.readdirSync(path.join(filePath, dirs[i]));
      const contents = fs.readFileSync(path.join(filePath, dirs[i], _dirs[0]), 'utf8');
      const title = (/title:\s*(.+)\s*-\s*.+/g).exec(contents)[1];
      json.push({
        title,
        file: dirs[i],
        pages: readFiles(path.join(filePath, dirs[i]))
      });
    }
  }
  return json;
}

// 根据草稿目录动态创建 draft.yml 本来应该用 ruby 实现的，但用 node 实现还是方便，顺手
gulp.task('draft-data', () => {
  const draftPath = path.join(__dirname, '..', 'docs', 'draft');
  const json = readFiles(draftPath);
  const contents = yaml.safeDump(json);
  const draftDataPath = path.join(__dirname, '..', 'docs', '_data', 'draft.yml');
  fs.writeFileSync(draftDataPath, contents);
});

