// app/service/chargeProduct.js
const commFunc = require('../common/commFunc');

module.exports = app => {
  class payTypeService extends app.Service {
    * queryByIds(ids) {
      const payTypeList = yield app.mysql.get('Sub').select('CHARGE_PAY_TYPE', {
        where: { PAY_TYPE_CODE: ids },
        // columns: ['PAY_TYPE_CODE', 'PAY_TYPE_NAME', 'FEE_RATIO']
      });
      if (payTypeList.length) {
        return payTypeList.map((payType) => {
          payType.FEE_RATIO /= 1000;
          return commFunc.parseObjKey(payType);
        });
      }
      return [];
    }
    * list() {
      const data = {};
      const payTypeList = yield app.mysql.get('Sub').select('CHARGE_PAY_TYPE', {
        // where: { PAY_TYPE_CODE: ids },
        // columns: ['PAY_TYPE_CODE', 'PAY_TYPE_NAME', 'FEE_RATIO']
      });
      if (payTypeList.length) {
        return payTypeList.map((payType) => {
          payType.FEE_RATIO /= 1000;
          return commFunc.parseObjKey(payType);
        });
      }
      return [];

    }
    * queryByName(name) {
      const table = app.mysql.get('Sub')._selectColumns('CHARGE_PAY_TYPE');
      const where = ` where PAY_TYPE_NAME LIKE ?`;
      const payType = yield app.mysql.get('Sub').queryOne(table + where, [`%${name}%`]);
      if (payType) {
        payType.FEE_RATIO /= 1000;
      }
      return commFunc.parseObjKey(payType);
    }

    * update(payTypeCode, params = {}) {
      const row = commFunc.parseDbKey(params);
      row.MODIFY_USER = this.ctx.user ? this.ctx.user.name : 'UNKNOWN';
      row.MODIFY_TIME = app.mysql.get('Main').literals.now; // `now()` on db server
      const result = yield app.mysql.get('Main').update('CHARGE_PAY_TYPE', row, {
        where: { PAY_TYPE_CODE: payTypeCode }
      });
      return result.affectedRows === 1;
    }

    * delete(params) {
      try {
        const row = commFunc.parseDbKey(params);
        // row.CREATE_TIME = app.mysql.get('Main').literals.now; // `now()` on db server
        const result = yield app.mysql.get('Main').delete('CHARGE_PAY_TYPE', row);
        return result.affectedRows === 1;
      } catch (e) {
        return false;
      }
    }

    * insert(params = {}) {
      try {
        const row = commFunc.parseDbKey(params);
        row.MODIFY_USER = this.ctx.user ? this.ctx.user.name : 'UNKNOWN';
        row.MODIFY_TIME = app.mysql.get('Main').literals.now; // `now()` on db server
        // row.CREATE_TIME = app.mysql.get('Main').literals.now; // `now()` on db server
        const result = yield app.mysql.get('Main').insert('CHARGE_PAY_TYPE', row);
        return result.affectedRows === 1;
      } catch (e) {
        return false;
      }
    }
  }
  return payTypeService;
};