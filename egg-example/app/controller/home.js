'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }

    * application() {
      this.ctx.body = 'hi, application';
    }
  }
  return HomeController;
};
