'use strict';

// had enabled by egg
// exports.static = true;
// config/plugin.js
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};

// config/plugin.js
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.bucLogin = {
  enable: true,
  package: '@ali/egg-buc-login',
}

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.bucClient = {
  enable: true,
  package: '@ali/egg-buc-client',
}

exports.acl = {
  enable: true,
  package: '@ali/egg-acl',
}