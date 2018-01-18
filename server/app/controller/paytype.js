'use strict';
// 手续费
const commFunc = require('../common/commFunc');
module.exports = app => {
  class PaytypeController extends app.Controller {

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
      const paytypeList = yield ctx.service.paytype.list();
      return { success: true, data: paytypeList };
    }
    * update() {
      const ctx = this.ctx;
      let payTypeCode = ctx.query.payTypeCode;
      let query_field_list = ['payTypeName', 'feeRatio'];
      let kwargs = commFunc.assemble_args(ctx.query, query_field_list, []);
      kwargs.feeRatio ? kwargs.feeRatio *= 1000 : '';
      let success = false;
      let data = { success: false, msg: '参数有误' };
      if (payTypeCode && Object.keys(kwargs).length) {
        const success = yield ctx.service.paytype.update(payTypeCode, kwargs);
        if (success) {
          data.success = success;
          data.msg = '更新成功';
        } else {
          data.msg = '更新失败,不存在该支付类型';
        }
      }
      return data;
    }
    * insert() {
      const ctx = this.ctx;
      let query_field_list = ['payTypeCode', 'feeRatio', 'payTypeName'];
      let kwargs = commFunc.assemble_args(ctx.query, query_field_list, []);
      kwargs.feeRatio ? kwargs.feeRatio *= 1000 : '';
      let success = false;
      let data = { success: false };
      if (kwargs.payTypeCode && Object.keys(kwargs).length) {
        const success = yield ctx.service.paytype.insert(kwargs);
        if (success) {
          data.success = success;
          data.msg = '新增成功';
        } else {
          data.msg = '已存在该类型，请检查';
        }
      } else {
        data.msg = '支付类型码不能为空';
      }
      return data;
    }
    * delete() {
      const ctx = this.ctx;
      let query_field_list = ['payTypeCode'];
      let kwargs = commFunc.assemble_args(ctx.query, query_field_list, []);
      let success = false;
      let data = { success: false };
      if (kwargs.payTypeCode) {
        const success = yield ctx.service.paytype.delete(kwargs);
        if (success) {
          data.success = success;
          data.msg = '删除成功';
        } else {
          data.msg = '删除失败';
        }
      } else {
        data.msg = '支付类型码不能为空';
      }
      return data;
    }
  }
  return PaytypeController;
};
