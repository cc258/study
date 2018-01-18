// app/service/chargeProduct.js
const commFunc = require('../common/commFunc');

module.exports = app => {
  class chargeProductService extends app.Service {
    * queryByIds(ids) {
      const chargeProductList = yield app.mysql.get('Sub').select('CHARGE_PRODUCT', {
        where: { ID: ids },
        // columns: ['ID', 'UCOIN_AMT']
      });
      return chargeProductList.map((chargeProduct)=>{
        return commFunc.parseObjKey(chargeProduct);
      });
    }

    * list(name) {
      const data = {};
      const chargeProductList = yield app.mysql.get('Sub').select('CHARGE_PRODUCT', {
        // where: { PAY_TYPE_CODE: ids },
        // columns: ['PAY_TYPE_CODE', 'PAY_TYPE_NAME', 'FEE_RATIO']
      });
      if (chargeProductList.length) {
        return chargeProductList.map((chargeProduct) => {
          return commFunc.parseObjKey(chargeProduct);
        });
      }
      return [];
    }
    * update(id, params = {}) {
      const row = commFunc.parseDbKey(params);
      const result = yield app.mysql.get('Main').update('CHARGE_PRODUCT', row, {
        where: { ID: id }
      });
      return result.affectedRows === 1;
    }

    * delete(params) {
      try {
        const row = commFunc.parseDbKey(params);
        // row.CREATE_TIME = app.mysql.get('Main').literals.now; // `now()` on db server
        const result = yield app.mysql.get('Main').delete('CHARGE_PRODUCT', row);
        return result.affectedRows === 1;
      } catch (e) {
        return false;
      }
    }

    * insert(params = {}) {
      try {
        const row = commFunc.parseDbKey(params);
        const result = yield app.mysql.get('Main').insert('CHARGE_PRODUCT', row);
        return result.affectedRows === 1;
      } catch (e) {
        return false;
      }
    }
  }
  return chargeProductService;
};