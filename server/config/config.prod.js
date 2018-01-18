'use strict';

module.exports = appInfo => {
  const config = {};
  const aclEnabled = true;
  config.aclEnabled = aclEnabled;
  config.bucLogin = {
    appname: 'ucoin-admin', // 必填，需要应用去申请: https://login.alibaba-inc.com/apply.htms
    ssoURL: 'https://login.alibaba-inc.com',
    enable: true,
  };
  config.cors = {
    enable: false
  };
  config.acl = {
    protocol: 'http',
  };
  config.accessability = {
    enable: config.aclEnabled
  };
  // 本地不开启acl的验权
  config.isAdmin = {
    enable: config.aclEnabled
  };
  config.isSuper = {
    enable: config.aclEnabled
  };
  config.canAccessStore = {
    enable: config.aclEnabled
  };
  config.bucClient = {
    apiURL: 'https://ucdataxhttps.m.sm.cn:9081/uapi'
  };
  return config;
};
