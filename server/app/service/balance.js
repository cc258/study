// app/service/Overview.js
const commFunc = require('../common/commFunc');
const datetime = require('silly-datetime');
module.exports = app => {
  class BalanceService extends app.Service {
    * list({ timeLimit, whereObj }) {
      // const table = app.mysql.get('Sub')._selectColumns('TRADE_ORDER_FLOW_CATALOGUE');
      const table = `select CATALOGUE,SUM(PAID_AMT) As PAID_AMT,SUM(DISCOUNT_AMT) as DISCOUNT_AMT from TRADE_ORDER_FLOW_CATALOGUE`;
      let timelimitSql = ` AND TRADE_DATE>= ? AND TRADE_DATE <= ?`;
      let where = app.mysql.get('Sub')._where(whereObj);
      // let order = '';
      // return table + where + timelimitSql;
      const balanceList = yield app.mysql.get('Sub').query(table + where + timelimitSql + 'group by CATALOGUE', [timeLimit.start, timeLimit.end]);
      return balanceList.map((balance) => {
        return commFunc.parseObjKey(balance);
      });
    }
  }
  return BalanceService;
};