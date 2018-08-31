/**
 * 实现根据 entry 动态打包编译到不同的文件夹下
 * 插件的定义可参考 https://webpack.js.org/api/plugins/#src/components/Sidebar/Sidebar.jsx
 * 以及源码 Compiler.js 中涉及到的事件和方法
 *
 */

import path from 'path';
import fs from 'fs';

// 移动文件
const mv = (sourceFile, targetFile) => {
  // 移动文件，不用关闭文件流，默认会自动关闭
  const fileReadStream = fs.createReadStream(sourceFile);
  const fileWriteStream = fs.createWriteStream(targetFile);
  fileReadStream.pipe(fileWriteStream);
  // 移动完删除源文件
  fileWriteStream.on('close', () => {
    fs.unlink(sourceFile, err => {
      if (err) {
        console.error('删除失败');
      }
    });
  });
};

class OutputPathPlugin {
  apply(compiler) {
    const outputPath = compiler.options.output.path;
    const filename = compiler.options.output.filename;
    const sourceMapFilename = compiler.options.output.sourceMapFilename;
    const entry = compiler.options.entry;

    compiler.plugin('done', stats => {
      Object.keys(entry).forEach(key => {
        const currentFilename = filename.replace(/\[[\w-]+]/, key);
        const currentMapFilename = sourceMapFilename.replace(
          /\[[\w-]+]/,
          currentFilename
        );

        const value = entry[key];
        // 相对路径
        let relativePath = __dirname;
        relativePath = relativePath.substring(
          0,
          relativePath.length - 'webpack-plugins'.length
        );
        relativePath = value.replace(relativePath, '');
        const paths = relativePath.split('/');
        // 去掉第一个
        paths.shift();
        // 去掉最后两个
        paths.pop();
        if (paths.indexOf('utils') === -1) {
          paths.pop();
        }

        // 只有一层目录结构的不做处理
        if (paths.length > 0) {
          // 最终输出路径
          const targetPath = path.join(outputPath, paths.join('/'));

          const moveFile = function(err) {
            if (!err) {
              // 移动文件
              mv(
                path.join(outputPath, currentFilename),
                path.join(targetPath, currentFilename)
              );
              // 移动 Map 文件
              mv(
                path.join(outputPath, currentMapFilename),
                path.join(targetPath, currentMapFilename)
              );
            }
          };

          if (fs.existsSync(targetPath)) {
            moveFile();
          } else {
            // 创建文件夹
            compiler.outputFileSystem.mkdirp(targetPath, moveFile);
          }
        }
      });
    });
  }
}

export default OutputPathPlugin;
