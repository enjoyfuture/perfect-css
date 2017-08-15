// 生成 npm publish package.json
const path = require('path');
const fs = require('fs');

const packageFile = path.join(__dirname, 'package.json');

fs.readFile(packageFile, 'utf8', (err, contents) => {
  if (err === null) {
    const json = JSON.parse(contents);

    // 去掉 scripts dependencies 和 devDependencies
    json.scripts = {};
    json.dependencies = {};
    delete json.devDependencies;

    try {
      fs.writeFileSync(path.join(__dirname, 'build', 'package.json'), JSON.stringify(json, null, '  '));
    } catch (e) {
      throw new Error('create npm publish package.json error!');
    }
  }
});


