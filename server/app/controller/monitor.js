'use strict';
// 首页页面路由
module.exports = app => {
  class MonitrorController extends app.Controller {
    * index() {
      this.ctx.body = { msg: 'OK' };
    }
  }
  return MonitrorController;
};