'use strict';

module.exports = appInfo => {
  const config = {};
  config.bucLogin = {
    appname: 'ucoin-admin', // 必填，需要应用去申请: https://login.alibaba-inc.com/apply.htms
    ssoURL: 'https://login.alibaba-inc.com',
    enable: true,
  };

  config.cors = {
    enable: true
  };

  config.security = {
    // domainWhiteList: ['http://localhost:3000', 'http://100.84.248.177:3000','http://actdev.uc.cn:7001'],
  };

  config.accessability = {
    enable: true
  };
  // 本地不开启acl的验权
  config.isAdmin = {
    enable: true
  };
  config.isSuper = {
    enable: true
  };
  config.canAccessStore = {
    enable: true
  };
  return config;
};
