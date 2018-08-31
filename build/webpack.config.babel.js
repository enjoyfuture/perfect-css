import path from 'path';
import glob from 'glob';
import {
  copyrightBanner,
  createCssExtractPlugin,
  createScssModuleRules,
  createJsModuleRules,
  commonConfig,
  commonOptimization,
} from './webpack/config';
import OutputPathPlugin from './webpack-plugins/OutputPathPlugin';
import webpack from 'webpack';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const isMin = process.env.NODE_UGLIFY === 'true';

// 生成 scss 入口文件 entry
// 打包时 pathPattern 为 'components/**/!(_)*.scss'
// 文档样式 pathPattern 为 'docs/assets/scss/*.scss'
const createScssEntry = pathPattern => {
  const entry = {};
  glob.sync(pathPattern).forEach(item => {
    const name = item.match(/\/([\w-]*).scss$/)[1];
    entry[name] = path.resolve(item);
  });
  return entry;
};

// 基于 webpack 的持久化缓存方案 可以参考 https://github.com/pigcan/blog/issues/9
const webpackConfig = [
  {
    ...commonConfig(),
    name: 'js-all',
    entry: path.resolve('./components/perfect.js'),
    output: {
      path: path.resolve(isDev ? 'docs/assets/js' : 'dist/js'),
      filename: `perfect.${isMin ? 'min.' : ''}js`,
      libraryTarget: 'umd',
      library: 'perfect',
      // Point sourcemap entries to original disk location (format as URL on Windows)
      devtoolModuleFilenameTemplate: info =>
        path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
      sourceMapFilename: 'map/[file].map',
    },
    module: {
      /*
       * Make missing exports an error instead of warning
       * 缺少 exports 时报错，而不是警告
       */
      strictExportPresence: true,
      rules: createJsModuleRules(),
    },
    optimization: commonOptimization(),
    plugins: [
      // 用来优化生成的代码 chunk，合并相同的代码
      new webpack.optimize.AggressiveMergingPlugin(),
      new copyrightBanner(),
    ],
  },
];

if (isDev) {
  webpackConfig.push(
    {
      ...commonConfig(),
      name: 'css-docs',
      entry: createScssEntry('docs/assets/scss/*.scss'),
      output: {
        path: path.resolve('docs/assets/tmp'),
        filename: '[name].css',
        sourceMapFilename: '[file].map',
      },
      module: {
        rules: createScssModuleRules(true),
      },
      plugins: [createCssExtractPlugin(), new copyrightBanner()],
    },
    {
      mode: process.env.NODE_ENV,
      cache: true, // 开启缓存，增量编译
      name: 'js-docs',
      entry: { home: path.resolve('./docs/assets/es6/home.js') },
      output: {
        path: path.resolve('docs/assets/js'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'perfectDoc',
      },
      devtool: 'eval-source-map', // 生成 eval-source-map 文件
      module: {
        rules: [
          // https://github.com/MoOx/eslint-loader
          {
            enforce: 'pre',
            test: /\.js$/,
            use: {
              loader: 'eslint-loader',
              options: {
                fix: true, // 自动修复
                cache: true, // 开启缓存
                configFile: '.eslintrc.js',
                emitError: false, // 验证失败，终止
              },
            },
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      optimization: commonOptimization(),
      plugins: [
        // 用来优化生成的代码 chunk，合并相同的代码
        new webpack.optimize.AggressiveMergingPlugin(),
        new copyrightBanner(),
      ],
    }
  );
}

if (isProd) {
  webpackConfig.push({
    ...commonConfig(),
    name: 'css-components',
    entry: createScssEntry('components/**/!(_)*.scss'),
    output: {
      path: path.resolve('dist/tmp'),
      filename: `[name]${isMin ? '.min' : ''}.css`,
      sourceMapFilename: '[file].map',
    },
    module: {
      rules: createScssModuleRules(),
    },
    plugins: [
      new copyrightBanner(),
      createCssExtractPlugin(),
      new OutputPathPlugin(),
    ],
  });
}

export default webpackConfig;
