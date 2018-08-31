import path from 'path';
import autoprefixer from 'autoprefixer';
import flexbugs from 'postcss-flexbugs-fixes';
import cssnano from 'cssnano'; // 优化 css，对于长格式优化成短格式等
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

import getBrowsers from './get-browsers';
import webpack from 'webpack';

// 生成 Banner
export const copyrightBanner = () =>
  new webpack.BannerPlugin({
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
export const createCssExtractPlugin = () =>
  new MiniCssExtractPlugin({
    filename: `../css/[name]${
      process.env.NODE_UGLIFY === 'true' ? '.min' : ''
    }.css`,
    allChunks: true,
    ignoreOrder: true,
  });

// 生成 css Module Rules
export const createScssModuleRules = isDocs => {
  const rules = [];

  if (isDocs) {
    // https://github.com/webpack/url-loader
    rules.push({
      test: /\.(bmp|gif|jpg|jpeg|png|svg)$/,
      oneOf: [
        // 在 css 中的图片处理
        {
          issuer: /\.(scss)$/, // issuer 表示在这些文件中处理
          oneOf: [
            // svg 单独使用 svg-url-loaderInline 处理，编码默认为 utf-8
            {
              test: /\.svg$/,
              loader: 'svg-url-loader',
              exclude: path.resolve(
                __dirname,
                './client/scss/common/_iconfont.scss'
              ), // 除去字体文件
              options: {
                name: '[hash:8].[ext]',
                limit: 4096, // 4kb
              },
            },

            /*
             * 其他图片使用 Base64
             * https://github.com/webpack/url-loader
             */
            {
              loader: 'url-loader',
              options: {
                name: '[hash:8].[ext]',
                limit: 4096, // 4kb
              },
            },
          ],
        },

        // 在其他地方引入的图片文件使用 file-loader 即可
        {
          loader: 'file-loader',
          options: {
            name: '[hash:8].[ext]',
          },
        },
      ],
    });
  }

  rules.push({
    test: /\.scss/,
    use: [
      MiniCssExtractPlugin.loader,
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
            cssnano({
              autoprefixer: false,
            }),
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
        /*
         * Webpack loader that resolves relative paths in url() statements
         * based on the original source file
         */
        loader: 'resolve-url-loader',
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true, // 必须保留
          /*
           * 注意此处不能设为压缩，负责样式中引入的图片等资源文件会提示找不到
           * 设为压缩后，查找路径是基于绝对路径，对于 perfect.scss 是基于 scss 当前路径为根路径
           * outputStyle: 'compressed', // 压缩
           */
          precision: 15, // 设置小数精度
        },
      },
    ],
  });

  return rules;
};

// 生成 js Module Rules
export const createJsModuleRules = () => {
  const rules = [
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
        babelrc: false,
        /*
         * babel-preset-env 的配置可参考 https://zhuanlan.zhihu.com/p/29506685
         * 他会自动使用插件和 polyfill
         */
        presets: [
          [
            'env',
            {
              // 设为 true 会根据需要自动导入用到的 es6 新方法，而不是一次性的引入 babel-polyfill
              targets: {
                browsers: getBrowsers(),
              },
              modules: false, // 设为 false，交由 Webpack 来处理模块化
              /*
               * 设为 true 会根据需要自动导入用到的 es6 新方法，而不是一次性的引入 babel-polyfill
               * 比如使用 Promise 会导入 import "babel-polyfill/core-js/modules/es6.promise";
               */
              useBuiltIns: true,
            },
          ],
        ],
        plugins: [
          'transform-class-properties', // 解析类属性，静态和实例的属性
          'transform-object-rest-spread', // 支持对象 rest
        ],
      },
    },
  ];

  return rules;
};

// 公共配置参数
export const commonConfig = () => ({
  /**
   * 生产下默认设置以下插件，webpack 4 中，一些插件放在 optimization 中设置
   * https://webpack.js.org/concepts/mode
   * plugins: [
   * new UglifyJsPlugin(),
   * new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
   * new webpack.optimize.ModuleConcatenationPlugin(),
   * new webpack.NoEmitOnErrorsPlugin()
   * ]
   */
  mode: process.env.NODE_ENV,
  cache: true, // 开启缓存，增量编译
  bail: true, // 如果发生错误，则不继续尝试
  devtool: 'source-map', // 生成 source-map 文件
  /*
   * Specify what bundle information gets displayed
   * https://webpack.js.org/configuration/stats/
   */
  stats: {
    cached: true, // 显示缓存信息
    cachedAssets: true, // 显示缓存的资源（将其设置为 `false` 则仅显示输出的文件）
    chunks: true, // 显示 chunk 信息（设置为 `false` 仅显示较少的输出）
    chunkModules: true, // 将构建模块信息添加到 chunk 信息
    colors: true,
    hash: true, // 显示编译后的 hash 值
    modules: true, // 显示构建模块信息
    reasons: true, // 显示被导入的模块信息
    timings: true, // 显示构建时间信息
    version: true, // 显示 webpack 版本信息
  },
});

/* eslint-disable indent */
const minimizer =
  process.env.NODE_ENV === 'development'
    ? {}
    : {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true, // set to true if you want JS source maps
          }),
          new OptimizeCSSAssetsPlugin({}),
        ],
      };

// 公共的 optimization
export const commonOptimization = () =>
  /*
   * webpack 4 新增属性，选项配置，原先的一些插件部分放到这里设置
   * 优化可以参考这里 https://zhuanlan.zhihu.com/p/35258448
   */
  ({
    removeEmptyChunks: true, // 空的块chunks会被移除。这可以减少文件系统的负载并且可以加快构建速度。
    mergeDuplicateChunks: true, // 相同的块被合并。这会减少生成的代码并缩短构建时间。
    occurrenceOrder: true, // Webpack将会用更短的名字去命名引用频度更高的chunk
    sideEffects: true, // 剔除掉没有依赖的模块
    // https://github.com/webpack-contrib/mini-css-extract-plugin#minimizing-for-production
    ...minimizer,
    namedChunks: false, // 开启后给代码块赋予有意义的名称，而不是数字的id。
  });
