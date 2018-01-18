'use strict';

module.exports = app => {
  class TestController extends app.Controller {

    * testid() {
      this.ctx.body = { name: `Hi ${this.ctx.params.id}` };
    }

    * testname() {
      yield this.ctx.render('test.nj', { name: this.ctx.query.name });
    }

    * testtpl() {
      const data = {
        list: [
          { id: 1, title: 'this is news 1', url: '/news/1' },
          { id: 2, title: 'this is news 2', url: '/news/2' },
        ],
      };
      yield this.ctx.render('/list.tpl', data);
    }

    * testlist() {
      const page = this.ctx.query.page || 1;
      const data = yield this.ctx.service.test.testlist(page);
      return this.ctx.render('./list.tpl', { list: data });
    }

    * search() {
      this.ctx.body = this.ctx.query.name;
    }
  }

  return TestController;
};
