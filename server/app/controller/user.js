'use strict';
const commCfg = require('../common/commCfg');
const commFunc = require('../common/commFunc');
// 用户信息
module.exports = app => {
  class UserController extends app.Controller {
    * index() {
      const currentUser = commFunc.assemble_args(this.ctx.user, ['userid', 'name', 'avatar_url']);
      let accessibleList = app.config.accessability.DEFAULT;
      if (app.config.aclEnabled) {
        accessibleList = this.ctx.state.accessibleList;
      }
      this.ctx.body = {
        success: true, data: {
          user: currentUser,
          accessibleList
        }
      };
    }
  }
  return UserController;
};
