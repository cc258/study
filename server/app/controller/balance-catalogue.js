'use strict';
const commCfg = require('../common/commCfg');
const commFunc = require('../common/commFunc');
// 商户结算
module.exports = app => {
  class BalanceController extends app.Controller {
    * index() {
      const ctx = this.ctx;
      const action = ctx.params.action;
      let data = { success: false, msg: '错误操作类型' };
      if (['list', 'update', 'insert', 'delete'].indexOf(action) > -1) {
        data = yield this[action]();
      }
      this.ctx.body = data;
    }

    * list() {
      const ctx = this.ctx;
      const storeId = ctx.query.storeId;
      if (storeId > 0) {
        const balanceCatalogueList = yield ctx.service.balanceCatalogue.list(storeId);
        return { success: true, data: balanceCatalogueList };
      } else {
        return { success: false, msg: '不存在该商户' };
      }

    }

    * update() {
      const ctx = this.ctx;
      const id = this.ctx.query.id;
      let query_field_list = ['storeId', 'catalogue', 'code', 'name', 'taxRate', 'operateFeeRate', 'divideFeeRate', 'includeVoucher'];
      let kwargs = commFunc.assemble_args(ctx.query, query_field_list, []);
      kwargs.taxRate ? kwargs.taxRate *= 1000 : '';
      kwargs.operateFeeRate ? kwargs.operateFeeRate *= 1000 : '';
      kwargs.divideFeeRate ? kwargs.divideFeeRate *= 1000 : '';
      let success = false;
      let data = { success: false };
      if (id && Object.keys(kwargs).length) {
        const success = yield ctx.service.balanceCatalogue.update(id, kwargs);
        if (success) {
          data.success = success;
          data.msg = '更新成功';
        } else {
          data.msg = '更新失败,不存在该分成类型';
        }
      } else {
        data.msg = '参数有误';
      }
      return data;
    }
    * insert() {
      const ctx = this.ctx;
      let query_field_list = ['storeId', 'catalogue', 'code', 'name', 'taxRate', 'operateFeeRate', 'divideFeeRate', 'includeVoucher'];
      let kwargs = commFunc.assemble_args(ctx.query, query_field_list, []);
      kwargs.taxRate ? kwargs.taxRate *= 1000 : '';
      kwargs.operateFeeRate ? kwargs.operateFeeRate *= 1000 : '';
      kwargs.divideFeeRate ? kwargs.divideFeeRate *= 1000 : '';
      let success = false;
      let data = { success: false };
      if (Object.keys(kwargs).length) {
        const success = yield ctx.service.balanceCatalogue.insert(kwargs);
        if (success) {
          data.success = success;
          data.msg = '新增成功';
        } else {
          data.msg = '新增失败';
        }
      } else {
        data.msg = '参数有误';
      }
      return data;
    }

    * delete() {
      const ctx = this.ctx;
      let query_field_list = ['id'];
      let kwargs = commFunc.assemble_args(ctx.query, query_field_list, []);
      let success = false;
      let data = { success: false };
      if (kwargs.id) {
        const success = yield ctx.service.balanceCatalogue.delete(kwargs);
        if (success) {
          data.success = success;
          data.msg = '删除成功';
        } else {
          data.msg = '删除失败';
        }
      } else {
        data.msg = 'id不能为空';
      }
      return data;
    }
  }
  return BalanceController;
};
