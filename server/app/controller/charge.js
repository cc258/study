'use strict';
// 充值流水
const commCfg = require('../common/commCfg');
const commFunc = require('../common/commFunc');

module.exports = app => {
  class ChargeController extends app.Controller {
    * list() {
      const ctx = this.ctx;
      let pageSize = ctx.query.pageSize || commCfg.PAGE_SIZE,
        pageNum = ctx.query.pageNum || 1;
      const offset = (pageNum - 1) * pageSize,
        limit = parseInt(pageSize);
      let query_field_list = ['userKey', 'payType', 'storeName', 'orderStatus', 'startDate', 'endDate', 'export'];
      let kwargs = commFunc.assemble_args(ctx.query, query_field_list, ['startDate', 'endDate']);
      const timeLimit = {
        startDate: kwargs.startDate,
        endDate: kwargs.endDate
      };
      const whereObj = {};
      if (kwargs.storeName) {
        const store = yield ctx.service.store.queryByName(kwargs.storeName);
        store ? whereObj.STORE_ID = store.id : '';
      }
      if (kwargs.payType) {
        const payType = yield ctx.service.paytype.queryByName(kwargs.payType);
        payType ? whereObj.PAY_TYPE = payType.payTypeCode : '';
      }
      if (kwargs.userKey) {
        const payUser = yield ctx.service.payuser.queryByUid(kwargs.userKey);
        payUser ? whereObj.PAY_USER_ID = payUser.id : '';
      }
      if (kwargs.orderStatus > -1 && kwargs.orderStatus < 5) {
        whereObj.ORDER_STATUS = kwargs.orderStatus;
      }
      let data = [];
      if (kwargs.export === 'all') {
        data = yield ctx.service.charge.list({ timeLimit, whereObj, limit: 0, offset: 0 });
      } else {
        data = yield ctx.service.charge.list({ timeLimit, whereObj, limit, offset });
      }
      this.ctx.body = { success: true, data, kwargs };
    }
  }
  return ChargeController;
};
