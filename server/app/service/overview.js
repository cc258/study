// app/service/Overview.js
const commFunc = require('../common/commFunc');
const datetime = require('silly-datetime');
module.exports = app => {
  class OverviewService extends app.Service {
    * list({ timeFormat, granularity, limit = 30 }) {
      const table = app.mysql.get('Sub')._selectColumns('FEE_DAY_ANALYSE');
      let timelimitSql = ` AND ANALYSE_DATE <= ?`;
      let where = app.mysql.get('Sub')._where({ ANALYSE_TYPE: granularity });
      let order = ' ORDER BY ANALYSE_DATE ASC limit 0,?';
      // return table + where + timelimitSql + order;
      const overviewList = yield app.mysql.get('Sub').query(table + where + timelimitSql + order, [timeFormat, limit]);
      return overviewList.map((overview) => {
        return commFunc.parseObjKey(overview);
      });
    }

    * get({ todayFormat, yesterdayFormat, granularity, limit }) {
      const table = app.mysql.get('Sub')._selectColumns('FEE_DAY_ANALYSE');
      let timelimitSql = ` AND (ANALYSE_DATE = ? OR ANALYSE_DATE = ?)`;
      let where = app.mysql.get('Sub')._where({ ANALYSE_TYPE: granularity });
      let order = ' ORDER BY ANALYSE_DATE ASC';
      // return table + where + timelimitSql + order;
      const overviewList = yield app.mysql.get('Sub').query(table + where + timelimitSql + order, [todayFormat, yesterdayFormat]);
      return overviewList.map((overview) => {
        return commFunc.parseObjKey(overview);
      });
    }
  }
  return OverviewService;
};