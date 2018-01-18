'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = {};
  const baseDir = appInfo.baseDir;

  // should change to your own
  config.keys = appInfo.name + '_1501818159601_6173';

  // 配置 logger 文件的目录，logger 默认配置由框架提供
  config.logger = {
    dir: path.join(appInfo.baseDir, 'logs'),
  };

  // add your config here

  config.pageset = {
    pagesize: 10,
    serviceurl: 'https://hacker-news.firebaseio.com/v0',
  };

  // {app_root}/config/config.default.js
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
      '.tpl': 'nunjucks',
    },
    root: `${baseDir}/app/public`,
  };

  config.middleware = [
    'robot',
  ];

  config.robot = {
    ua: [
      /baiduspider/i,
      /curl/i,
    ],
  };

  return config;
};
