import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import glob from 'glob';
import autoprefixer from 'autoprefixer';
import flexbugs from 'postcss-flexbugs-fixes'; // 修复 flexbox 已知的 bug

import CopyrightBannerPlugin from './webpack/copyright-banner-plugin';
import getBrowsers from './webpack/get-browsers';
import OutputPathPlugin from './webpack-plugins/OutputPathPlugin';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const isMin = process.env.NODE_UGLIFY === 'true';

// 生成 css 文件
const createCssExtractTextPlugin = () =>
  new ExtractTextPlugin({
    filename: `[name]${isMin ? '.min' : ''}.css`,
    allChunks: true,
    ignoreOrder: true,
  });

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

// 生成 Module Rules
const createScssModuleRules = isDocs => {
  const rules = [];

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

const webpackConfig = [
  {
    mode: process.env.NODE_ENV,
    cache: true, // 开启缓存，增量编译
    name: 'js-all',
    entry: path.resolve('./components/perfect.js'),
    output: {
      path: path.resolve(isDev ? 'docs/assets/js' : 'dist/js'),
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
        },
      ],
    },
  },
];

if (isDev) {
  webpackConfig.push(
    {
      mode: process.env.NODE_ENV,
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
      plugins: [createCssExtractTextPlugin()],
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
    }
  );
}

if (isProd) {
  webpackConfig.push({
    mode: process.env.NODE_ENV,
    cache: true, // 开启缓存，增量编译
    name: 'css-components',
    devtool: 'source-map', // 生成 source-map 文件
    entry: createScssEntry('components/**/!(_)*.scss'),
    output: {
      path: path.resolve('dist/css'),
      filename: `[name]${isMin ? '.min' : ''}.css`,
      sourceMapFilename: '[file].map',
    },
    module: {
      rules: createScssModuleRules(),
    },
    plugins: [
      new CopyrightBannerPlugin(),
      createCssExtractTextPlugin(),
      new OutputPathPlugin(),
    ],
  });
}

export default webpackConfig;
