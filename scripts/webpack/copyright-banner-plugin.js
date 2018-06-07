import webpack from 'webpack';

// 生成 Banner
class CopyrightBannerPlugin extends webpack.BannerPlugin {
  constructor({
    projectName = 'Perfect CSS for the web',
    authorName = 'JD Finance Inc.',
    licenseName = 'MIT (https://github.com/joy-web/perfect-css/blob/master/LICENSE)',
  }) {
    super({
      banner: [
        '/*!',
        ` ${projectName}`,
        ` Copyright © 2016-${new Date().getFullYear()} ${authorName}`,
        ` License: MIT ${licenseName}`,
        '*/',
      ].join('\n'),
      raw: true,
      entryOnly: true,
    });
  }
}

export default CopyrightBannerPlugin;
