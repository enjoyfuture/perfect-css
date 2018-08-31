const { types } = require('node-sass');

/**
 * 转换成 css 时，需要设置 options 属性 functions
 * import functions from '../scss/base/function/Math';
 * scssOption = {
 * // 如果通过 node-sass 命令，可以直接写参数 `--functions scss/base/Math.js` 来让 sass 执行 js
 * // https://www.npmjs.com/package/node-sass#example
 * functions
 * };
 */

module.exports = {
  // pow 函数，实现 x 的 y 次方幂
  'pow($x, $y)': (x, y) =>
    /*
     * 这里 x 和 y 是 SassNumber 对象，需要调用 getValue 方法转换数值
     * https://www.npmjs.com/package/node-sass#importer--v200---experimental
     * 同时还需返回 types.Number 的实例，如果调用 js 方法返回的是 String，需要用 types.String 实例
     * 具体看源码或官网文档
     */
    new types.Number(Math.pow(x.getValue(), y.getValue())),
};
