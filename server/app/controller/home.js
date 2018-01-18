'use strict';
// 首页页面路由
module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const ctx = this.ctx;
      // let msg;
      // try {
      //   msg = yield this.ctx.acl.AccessControlService.checkPermissions({
      //     userId: ctx.user.bucid, // 这里是bucid, 不是工号
      //     permissionNames: ['ucoin_comic_access'],
      //   });
      // } catch (e) {
      //   msg = e;
      // }
      yield ctx.render('index.html');
      // this.ctx.body = { success: '11', user: ctx.user, msg };

      // yield ctx.render('index.html', { user: ctx.user });
    }
  }
  return HomeController;
};