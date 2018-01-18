// app/service/Store.js
const commFunc = require('../common/commFunc');
module.exports = app => {
  class StoreService extends app.Service {
    * queryByIds(ids) {
      const storeList = yield app.mysql.get('Sub').select('STORE', {
        where: { ID: ids },
        // columns: ['ID', 'NAME']
      });

      return storeList.map((store) => {
        return commFunc.parseObjKey(store);
      });
    }
    * queryByName(name) {
      const table = app.mysql.get('Sub')._selectColumns('STORE');
      const where = ` where NAME LIKE ?`;
      const store = yield app.mysql.get('Sub').queryOne(table + where, [`%${name}%`]);
      return commFunc.parseObjKey(store);
    }
    * list(name) {
      const data = {};
      const storeList = yield app.mysql.get('Sub').select('STORE', {
        // where: { PAY_TYPE_CODE: ids },
        // columns: ['PAY_TYPE_CODE', 'PAY_TYPE_NAME', 'FEE_RATIO']
      });
      if (storeList.length) {
        return storeList.map((store) => {
          return commFunc.parseObjKey(store);
        });
      }
      return [];
    }
    * update(id, params = {}) {
      const row = commFunc.parseDbKey(params);
      row.MODIFY_TIME = app.mysql.get('Main').literals.now; // `now()` on db server
      const result = yield app.mysql.get('Main').update('STORE', row, {
        where: { ID: id }
      });
      return result.affectedRows === 1;
    }

    * delete(params) {
      try {
        const row = commFunc.parseDbKey(params);
        // row.CREATE_TIME = app.mysql.get('Main').literals.now; // `now()` on db server
        const result = yield app.mysql.get('Main').delete('STORE', row);
        return result.affectedRows === 1;
      } catch (e) {
        return false;
      }
    }

    * insert(params = {}) {
      try {
        const row = commFunc.parseDbKey(params);
        row.MODIFY_TIME = app.mysql.get('Main').literals.now; // `now()` on db server
        // row.CREATE_TIME = app.mysql.get('Main').literals.now; // `now()` on db server
        const result = yield app.mysql.get('Main').insert('STORE', row);
        return result.affectedRows === 1;
      } catch (e) {
        return false;
      }
    }
  }
  return StoreService;
};