'use strict';

module.exports = appInfo => {
  const config = {};
  const baseDir = appInfo.baseDir;
  const aclEnabled = false;
  config.aclEnabled = aclEnabled;
  // should change to your own
  config.keys = appInfo.name + '_1494085185020_510';

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
      '.tpl': 'nunjucks',
    },
    root: `${baseDir}/app/public`,
  };

  config.static = {
    prefix: '/'
  };

  config.mysql = {
    // 单数据库信息配置
    enable: true,
  };

  config.bucLogin = {
    appname: 'ucoin-admin', // 必填，需要应用去申请: https://login.alibaba-inc.com/apply.htms
    ssoURL: 'https://login.alibaba-inc.com',
    ignore: '/ucoinadmin/monitor',
    enable: true
  };

  config.cors = {
    enable: true
  };
  config.acl = {
    enable: config.aclEnabled,
    protocol: 'http'
    // accessKey: 'ucoinadmin-l5WyEaU2189dEzMvYve',
  };
  config.middleware = ['accessability', 'isSuper', 'isAdmin', 'canAccessStore'];
  config.accessability = {
    enable: config.aclEnabled,
    ignore: '/ucoinadmin/monitor',
    PERMISSIONS: {
      // U币中心数据管理	ucoin_super_access
      // 小说流水查询	ucoin_novel_access
      // U币中心管理员	ucoin_admin
      // 漫画流水查询   ucoin_comic_access
      'comic': {
        permissionName: 'ucoin_comic_access',
        storeId: 2,
        name: '漫画'
      },
      'novel': {
        permissionName: 'ucoin_novel_access',
        storeId: 3,
        name: '小说'
      },
      'super': {
        permissionName: 'ucoin_super_access',
      },

      'admin': {
        permissionName: 'ucoin_admin'
      }
    },
    DEFAULT: {
      store: [{
        name: '小说',
        status: !config.aclEnabled,
        storeId: 3
      }, {
        name: '漫画',
        status: !config.aclEnabled,
        storeId: 2
      }],
      isAdmin: !config.aclEnabled,
      isSuper: !config.aclEnabled,
    }
  };
  config.isAdmin = {
    enable: config.aclEnabled,
    match: /\/api\/(overview|consume|charge)+/
  };
  config.isSuper = {
    enable: config.aclEnabled,
    match: /\/api(\/\w+)+\/(update|delete|insert)+/
  };
  config.canAccessStore = {
    enable: config.aclEnabled,
    match: '/ucoinadmin/api/store/'
  };
  config.bucClient = {
    //ucoinadmin-sH586X9tLymiJfemMrm;56VAMw3Q2og5J7E5hFyQS5MPqAmTAY7aXCT1AW0h
    apiKey: 'ucoinadmin-sH586X9tLymiJfemMrm',
    secretKey: '56VAMw3Q2og5J7E5hFyQS5MPqAmTAY7aXCT1AW0h',
    apiURL: 'https://u-api.alibaba-inc.com',
    // timeout: '5s', // 默认 5s，ƒ可以不配置
    // 钉钉免登需要填写 appname 和 appcode
    // appname: '',
    // appcode: '',
  };
  return config;
};
