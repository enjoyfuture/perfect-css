import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import glob from 'glob';
import autoprefixer from 'autoprefixer';
import flexbugs from 'postcss-flexbugs-fixes'; // 修复 flexbox 已知的 bug
//const cssnano = require('cssnano'); // 优化 css，对于长格式优化成短格式等
import OutputPathPlugin from './webpack-plugins/OutputPathPlugin';


const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const isMin = process.env.NODE_UGLIFY === 'true';

// 生成 Banner
const createBannerPlugin = () => new webpack.BannerPlugin({
  banner: [
    '/*!',
    ' Perfect CSS for the web',
    ` Copyright © 2016-${new Date().getFullYear()} JD Finance Inc.`,
    ' License: MIT (https://github.com/joy-web/perfect-css/blob/master/LICENSE)',
    '*/',
  ].join('\n'),
  raw: true,
  entryOnly: true,
});

// 生成 css 文件
const createCssExtractTextPlugin = () => new ExtractTextPlugin({
  filename: `[name]${isMin ? '.min' : ''}.css`,
  allChunks: true,
  ignoreOrder: true,
});

// 生成 scss 入口文件 entry
// 打包时 pathPattern 为 'components/**/!(_)*.scss'
// 文档样式 pathPattern 为 'docs/assets/scss/*.scss'
const createScssEntry = (pathPattern) => {
  const entry = {};
  glob.sync(pathPattern).forEach((item) => {
    const name = item.match(/\/([\w-]*).scss$/)[1];
    entry[name] = path.resolve(item);
  });
  return entry;
};

// 生成 Module Rules
const createScssModuleRules = (isDocs) => {
  const rules = [];
  if (!isMin) {
    rules.push({
      enforce: 'pre',
      test: /\.scss/,
      use: {
        loader: 'sasslint-loader',
        options: {
          configFile: '.sass-lint.yml',
          emitError: false,
          failOnWarning: false,
        },
      },
    });
  }

  if (isDocs) {
    // https://github.com/webpack/url-loader
    rules.push({
      test: /\.(png|jpe?g|gif)/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[hash].[ext]',
          limit: 10000, // 10kb
        },
      },
    });
  }

  rules.push({
    test: /\.scss/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: () => [
              flexbugs(),
              autoprefixer({
                flexbox: 'no-2009',
                grid: false,
                browsers: getBrowsers(),
              }),
            ],
          },
        },
        {
          // Webpack loader that resolves relative paths in url() statements
          // based on the original source file
          loader: 'resolve-url-loader',
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            precision: 15, // 设置小数精度
          },
        },
      ],
    }),
  });

  return rules;
};

/**
 * 浏览器兼容性
 * iOS：https://developer.apple.com/support/app-store/
 * Android：https://developer.android.com/about/dashboards/index.html
 * http://tongji.baidu.com/data/browser
 * https://github.com/ai/browserslist#queries
 * [浏览器列表](https://github.com/ai/browserslist)
 */
export const getBrowsers = (browser) => {
  let browsers = null;

  switch (browser) {
    // 用来编译文档样式
    case 'docs':
      browsers = ['Chrome >= 49', 'Firefox >= 54', 'Edge >= 14',
        'Explorer >= 11', 'Android >=56', 'iOS >= 10.2', 'Safari >= 10.1', 'Opera >= 47'];
      break;

    // 现代浏览器
    case 'modern':
      browsers = ['Chrome >= 45', 'Firefox >= 38', 'Edge >= 12',
        'Explorer >= 10', 'Android >= 4.4', 'iOS >= 9.3', 'Safari >= 9', 'Opera >= 30'];
      break;
    // 对于低版本浏览器的兼容性待处理
    case 'degradation':
      browsers = ['Chrome >= 45', 'Firefox >= 38', 'Edge >= 12',
        'Explorer >= 9', 'Android >= 4.4', 'iOS >= 9.3', 'Safari >= 9', 'Opera >= 30'];
      break;
    default:
      browsers = ['Chrome >= 45', 'Firefox >= 38', 'Edge >= 12',
        'Explorer >= 10', 'Android >= 4.4', 'iOS >= 9', 'Safari >= 9', 'Opera >= 30'];
  }
};

const webpackConfig = [{
  cache: true, // 开启缓存，增量编译
  name: 'js-all',
  entry: path.resolve('./components/perfect.js'),
  output: {
    path: path.resolve(isDev ? 'docs/assets/js' : 'dist'),
    filename: `perfect.${isMin ? 'min.' : ''}js`,
    libraryTarget: 'umd',
    library: 'perfect',
  },
  devtool: 'source-map', // 生成 source-map 文件
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
      }],
  },
}];

if (isDev) {
  webpackConfig.push({
    cache: true, // 开启缓存，增量编译
    name: 'css-docs',
    devtool: 'source-map', // 生成 source-map 文件
    entry: createScssEntry('docs/assets/scss/*.scss'),
    output: {
      path: path.resolve('docs/assets/css'),
      filename: '[name].css',
      sourceMapFilename: '[file].map',
    },
    module: {
      rules: createScssModuleRules(true),
    },
    plugins: [
      createCssExtractTextPlugin(),
    ],
  });
}

if (isProd) {
  // TODO js components 待补充
  // webpackConfig.push({
  //   cache: true, // 开启缓存，增量编译
  //   name: 'js-components',
  //   entry: path.resolve('./components/perfect.js'),
  //   output: {
  //     path: path.resolve(isDev ? 'docs/assets/js' : 'build/js'),
  //     filename: `perfect.${isMin ? 'min.' : ''}js`,
  //     libraryTarget: 'umd',
  //     library: 'perfect',
  //   },
  //   devtool: 'eval-source-map', // 生成 eval-source-map 文件
  //   module: {
  //     rules: [
  //       // https://github.com/MoOx/eslint-loader
  //       {
  //         enforce: 'pre',
  //         test: /\.js$/,
  //         use: {
  //           loader: 'eslint-loader',
  //           options: {
  //             fix: true, // 自动修复
  //             cache: true, // 开启缓存
  //             configFile: '.eslintrc.js',
  //             emitError: false, // 验证失败，终止
  //           },
  //         },
  //       },
  //       {
  //         test: /\.js$/,
  //         exclude: /node_modules/,
  //         loader: 'babel-loader',
  //         options: {
  //           cacheDirectory: true,
  //         },
  //       }],
  //   },
  // });

  webpackConfig.push({
    cache: true, // 开启缓存，增量编译
    name: 'css-components',
    devtool: 'source-map', // 生成 source-map 文件
    entry: createScssEntry('components/**/!(_)*.scss'),
    output: {
      path: path.resolve('dist'),
      filename: `[name]${isMin ? '.min' : ''}.css`,
      sourceMapFilename: '[file].map',
    },
    module: {
      rules: createScssModuleRules(),
    },
    plugins: [
      createBannerPlugin(),
      createCssExtractTextPlugin(),
      new OutputPathPlugin(),
    ],
  });
}

export default webpackConfig;
