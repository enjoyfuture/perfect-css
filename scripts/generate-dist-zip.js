// 生成编译后的 css 和 js 文件，包含全部 js 和 css 文件，上传到 github 上
import filePackage from 'file-package';
import fs from 'fs';
import path from 'path';
import glob from 'glob';

function getVersion() {
  const content = fs.readFileSync('./package.json', 'utf8');
  return JSON.parse(content).version;
}

function copyFile() {
  glob.sync('dist/perfect.*').forEach(item => {
    const sourceFile = path.resolve(item);
    const targetFile = path.resolve(
      `_tmp/dist/${item.indexOf('.css') !== -1 ? 'css' : 'js'}/${
        item.split('/')[1]
      }`
    );
    // const fileReadStream = fs.createReadStream(sourceFile);
    // const fileWriteStream = fs.createWriteStream(targetFile);
    // fileReadStream.pipe(fileWriteStream);
    fs.copyFileSync(sourceFile, targetFile);
  });
}

function zipFile() {
  const version = getVersion();
  const filePath = `perfect-css-${version}-dist`;
  const fileName = `${filePath}.zip`;
  filePackage('_tmp/dist', `_tmp/zip/${fileName}`, {
    packageRoot: filePath,
  });
}

copyFile();
zipFile();
