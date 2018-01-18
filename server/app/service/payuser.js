// app/service/payUser.js
const commFunc = require('../common/commFunc');
module.exports = app => {
  class payUserService extends app.Service {
    * queryByIds(ids) {
      const payUserList = yield app.mysql.get('Sub').select('PAY_USER', {
        where: { ID: ids },
        //   columns: ['ID', 'USER_KEY']
      });
      return payUserList.map((payUser)=>{
        return commFunc.parseObjKey(payUser);
      });
    }
    * list() {
      const payUserList = yield app.mysql.get('Sub').select('PAY_USER', {
        // where: { PAY_TYPE_CODE: ids },
        // columns: ['PAY_TYPE_CODE', 'PAY_TYPE_NAME', 'FEE_RATIO']
      });
      return payUserList.map((payUser)=>{
        return commFunc.parseObjKey(payUser);
      });
    }
    * queryByUid(uid) {
      const payUser = yield app.mysql.get('Sub').get('PAY_USER', {
         USER_KEY: uid
      });
      return commFunc.parseObjKey(payUser);
    }
  }
  return payUserService;
};