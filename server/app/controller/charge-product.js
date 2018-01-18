'use strict';
// 商品管理
const commFunc = require('../common/commFunc');
module.exports = app => {
  class chargeProductController extends app.Controller {

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
      const chargeProductList = yield ctx.service.chargeProduct.list();
      return { success: true, data: chargeProductList };
    }
    * update() {
      const ctx = this.ctx;
      let id = ctx.query.id;
      let query_field_list = ['chargeChannel', 'paymentProductId', 'name', 'ucoinAmt', 'originalPrice', 'price', 'tag', 'status'];
      let kwargs = commFunc.assemble_args(ctx.query, query_field_list, []);
      let success = false;
      let data = { success: false, msg: '参数有误' };
      if (id && Object.keys(kwargs).length) {
        const success = yield ctx.service.chargeProduct.update(id, kwargs);
        if (success) {
          data.success = success;
          data.msg = '更新成功';
        } else {
          data.msg = '更新失败,不存在该商品';
        }
      }
      return data;
    }
    * insert() {
      const ctx = this.ctx;
      let query_field_list = ['chargeChannel', 'paymentProductId', 'name', 'ucoinAmt', 'originalPrice', 'price', 'tag', 'status'];
      let kwargs = commFunc.assemble_args(ctx.query, query_field_list, []);
      let success = false;
      let data = { success: false };
      if (Object.keys(kwargs).length) {
        const success = yield ctx.service.chargeProduct.insert(kwargs);
        if (success) {
          data.success = success;
          data.msg = '新增成功';
        } else {
          data.msg = '新增失败，检查参数';
        }
      } else {
        data.msg = '新增失败，检查参数';
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
        const success = yield ctx.service.chargeProduct.delete(kwargs);
        if (success) {
          data.success = success;
          data.msg = '删除成功';
        } else {
          data.msg = '删除失败';
        }
      } else {
        data.msg = '商品id不能为空';
      }
      return data;
    }
  }
  return chargeProductController;
};
