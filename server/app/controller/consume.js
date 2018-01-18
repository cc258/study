'use strict';
// 消费流水
const commFunc = require('../common/commFunc');
const commCfg = require('../common/commCfg');
const timediff = require('timediff');
module.exports = app => {
  class ComsumeController extends app.Controller {
    * list() {
      const ctx = this.ctx;
      let pageSize = ctx.query.pageSize || commCfg.PAGE_SIZE,
        pageNum = ctx.query.pageNum || 1;
      const offset = (pageNum - 1) * pageSize,
        limit = parseInt(pageSize);

      let query_field_list = ['userKey', 'goodsName', 'storeName', 'tradeStatus', 'startDate', 'endDate', 'export'];
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
      if (kwargs.userKey) {
        const payUser = yield ctx.service.payuser.queryByUid(kwargs.userKey);
        payUser ? whereObj.PAY_USER_ID = payUser.id : '';
      }
      if (kwargs.tradeStatus > -1 && kwargs.tradeStatus < 5) {
        whereObj.TRADE_STATUS = kwargs.tradeStatus
      }
      let data = {};
      if (kwargs.export === 'all') {
        data = yield ctx.service.consume.list({ timeLimit, whereObj, limit: 0, offset: 0, goodsName: kwargs.goodsName });
      } else {
        data = yield ctx.service.consume.list({ timeLimit, whereObj, limit, offset, goodsName: kwargs.goodsName });
      }
      this.ctx.body = { success: true, data };
    }

    * storeConsumeList() {
      const ctx = this.ctx;
      let pageSize = ctx.query.pageSize || commCfg.PAGE_SIZE,
        pageNum = ctx.query.pageNum || 1;
      const offset = (pageNum - 1) * pageSize,
        limit = parseInt(pageSize);
      const storeId = parseInt(ctx.params.storeId);
      let query_field_list = ['goodsCatalogue1Name', 'goodsName', 'tradeStatus', 'startDate', 'endDate', 'export'];
      let kwargs = commFunc.assemble_args(ctx.query, query_field_list, ['startDate', 'endDate']);
      const timeLimit = {
        startDate: kwargs.startDate,
        endDate: kwargs.endDate
      };
      let data = {};
      const whereObj = {};
      if (kwargs.goodsCatalogue1Name) {
        const goodsCatalogue1 = yield ctx.service.balanceCatalogue.queryByName(kwargs.goodsCatalogue1Name);
        goodsCatalogue1 ? whereObj.GOODS_CATALOGUE1 = goodsCatalogue1.code : '';
      }
      if (kwargs.tradeStatus) {
        whereObj.TRADE_STATUS = kwargs.tradeStatus
      }
      if (storeId) {
        whereObj.STORE_ID = storeId;
        if (kwargs.export === 'all') {
          data = yield ctx.service.consume.list({
            timeLimit, whereObj, limit: 0, offset: 0,
            goodsName: kwargs.goodsName,
            type: 'store'
          });
        } else {
          data = yield ctx.service.consume.list({
            timeLimit, whereObj, limit, offset,
            goodsName: kwargs.goodsName,
            type: 'store'
          });
        }
      }
      this.ctx.body = { success: true, data };
    }
  }
  return ComsumeController;
};
