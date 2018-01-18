'use strict';

// had enabled by egg
// exports.static = true;

module.exports = {
  mysql: {
    enabled: true,
    package: 'egg-mysql',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
};

