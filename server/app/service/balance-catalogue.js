// app/service/Balance.js
const commFunc = require('../common/commFunc');
module.exports = app => {
  class BalanceService extends app.Service {
    * list(storeId = 0) {
      const catalogueList = yield app.mysql.get('Sub').select('BALANCE_CATALOGUE', {
        columns: ['ID', 'STORE_ID', 'CATALOGUE', 'CODE', 'NAME', 'TAX_RATE', 'OPERATE_FEE_RATE', 'DIVIDE_FEE_RATE', 'INCLUDE_VOUCHER'],
        where: { STORE_ID: storeId }
      });
      if (catalogueList.length) {
        return catalogueList.map((balanceCatalogue) => {
          balanceCatalogue.TAX_RATE /= 1000;
          balanceCatalogue.OPERATE_FEE_RATE /= 1000;
          balanceCatalogue.DIVIDE_FEE_RATE /= 1000;
          return commFunc.parseObjKey(balanceCatalogue);
        });
      }
      return [];
    }

    * queryByCodes(codes) {
      const catalogueList = yield app.mysql.get('Sub').select('BALANCE_CATALOGUE', {
        where: { CODE: codes },
        // columns: ['PAY_TYPE_CODE', 'PAY_TYPE_NAME', 'FEE_RATIO']
      });
      if (catalogueList.length) {
        return catalogueList.map((balanceCatalogue) => {
          balanceCatalogue.TAX_RATE /= 1000;
          balanceCatalogue.OPERATE_FEE_RATE /= 1000;
          balanceCatalogue.DIVIDE_FEE_RATE /= 1000;
          return commFunc.parseObjKey(balanceCatalogue);
        });
      }
      return [];
    }

    * queryByName(name) {
      const table = app.mysql.get('Sub')._selectColumns('BALANCE_CATALOGUE');
      const where = ` where NAME = ?`;
      const balanceCatalogue = yield app.mysql.get('Sub').queryOne(table + where, [`${name}`]);
      if (balanceCatalogue) {
        balanceCatalogue.TAX_RATE /= 1000;
        balanceCatalogue.OPERATE_FEE_RATE /= 1000;
        balanceCatalogue.DIVIDE_FEE_RATE /= 1000;
      }
      return commFunc.parseObjKey(balanceCatalogue);
    }

    * update(id, params = {}) {
      const row = commFunc.parseDbKey(params);
      row.MODIFY_USER = this.ctx.user ? this.ctx.user.name : 'UNKNOWN';
      row.MODIFY_TIME = app.mysql.get('Main').literals.now; // `now()` on db server
      // return row;
      const result = yield app.mysql.get('Main').update('BALANCE_CATALOGUE', row, {
        where: { ID: id }
      });
      return result.affectedRows === 1;
    }
    * insert(params = {}) {
      const row = commFunc.parseDbKey(params);
      row.MODIFY_USER = this.ctx.user ? this.ctx.user.name : 'UNKNOWN';
      row.MODIFY_TIME = app.mysql.get('Main').literals.now; // `now()` on db server
      row.CREATE_TIME = app.mysql.get('Main').literals.now; // `now()` on db server
      const result = yield app.mysql.get('Main').insert('BALANCE_CATALOGUE', row);
      return result.affectedRows === 1;
    }

    * delete(params) {
      try {
        const row = commFunc.parseDbKey(params);
        // row.CREATE_TIME = app.mysql.get('Main').literals.now; // `now()` on db server
        const result = yield app.mysql.get('Main').delete('BALANCE_CATALOGUE', row);
        return result.affectedRows === 1;
      } catch (e) {
        return false;
      }
    }
  }
  return BalanceService;
};