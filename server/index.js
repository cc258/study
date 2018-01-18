'use strict';

// 启动参数
const options = {
  baseDir: __dirname,
};

// UAE 下自动计算开启的 worker 数量
if (process.env.UAE_MODE) {
  const MAX_WORKERS = Math.max(1, require('os').cpus().length - 2);
  const CONFIG_WORKERS = require('./conf/config.json').workers || MAX_WORKERS;
  options.workers = Math.min(MAX_WORKERS, CONFIG_WORKERS);
}

// 启动入口
require('@ali/nut').startCluster(options);
