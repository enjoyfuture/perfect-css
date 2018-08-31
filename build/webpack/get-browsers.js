/**
 * 浏览器兼容性
 * iOS：https://developer.apple.com/support/app-store/
 * Android：https://developer.android.com/about/dashboards/index.html
 * http://tongji.baidu.com/data/browser
 * https://github.com/ai/browserslist#queries
 * [浏览器列表](https://github.com/ai/browserslist)
 */
const getBrowsers = browser => {
  let browsers = null;

  switch (browser) {
    // 用来编译文档样式
    case 'docs':
      browsers = [
        'Chrome >= 49',
        'Firefox >= 54',
        'Edge >= 14',
        'Explorer >= 11',
        'Android >=56',
        'iOS >= 10.2',
        'Safari >= 10.1',
        'Opera >= 47',
      ];
      break;

    // 现代浏览器
    case 'modern':
      browsers = [
        'Chrome >= 45',
        'Firefox >= 38',
        'Edge >= 12',
        'Explorer >= 10',
        'Android >= 4.4',
        'iOS >= 9.3',
        'Safari >= 9',
        'Opera >= 30',
      ];
      break;
    // 对于低版本浏览器的兼容性待处理
    case 'degradation':
      browsers = [
        'Chrome >= 45',
        'Firefox >= 38',
        'Edge >= 12',
        'Explorer >= 9',
        'Android >= 4.4',
        'iOS >= 9.3',
        'Safari >= 9',
        'Opera >= 30',
      ];
      break;
    default:
      browsers = [
        'Chrome >= 45',
        'Firefox >= 38',
        'Edge >= 12',
        'Explorer >= 10',
        'Android >= 4.4',
        'iOS >= 9',
        'Safari >= 9',
        'Opera >= 30',
      ];
  }
};

export default getBrowsers;
