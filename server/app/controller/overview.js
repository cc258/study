'use strict';
const commFunc = require('../common/commFunc');
const commCfg = require('../common/commCfg');
const datetime = require('silly-datetime');
const timediff = require('timediff');
module.exports = app => {
  class OverviewController extends app.Controller {
    // 获取数据折线图数据
    // granularity: 时间粒度（0：按天，1：按月）
    // 默认获取开始时间对应天/开始时间对应月+30条数据
    * list() {
      const ctx = this.ctx;
      let kwargs = commFunc.assemble_args(ctx.query, ['granularity', 'startDate', 'endDate'], ['startDate', 'endDate']);
      let timeFormat;
      let granularity = kwargs.granularity || 0;
      let timeLimit; // 计算时间跨度
      if (!granularity) {
        timeFormat = datetime.format(new Date(kwargs.endDate), 'YYYYMMDD');
        timeLimit = timediff(kwargs.startDate, kwargs.endDate, 'D').days + 1;
      } else {
        timeFormat = datetime.format(new Date(kwargs.endDate), 'YYYYMM');
        timeLimit = timediff(kwargs.startDate, kwargs.endDate, 'M').months + 1;
      }
      const data = yield ctx.service.overview.list({
        timeFormat,
        granularity,
        limit: ctx.query.startDate ? timeLimit : commCfg.OVERVIEW_LIMIT,
      });
      this.ctx.body = { success: true, data: { rows: data.reverse() } };
    }
    // 获取今日+昨天的数据两条
    * get() {
      const ctx = this.ctx;
      const current = new Date();
      const todayFormat = datetime.format(current, 'YYYYMMDD');
      const yesterdayFormat = datetime.format(current - 1000 * 60 * 60 * 24, 'YYYYMMDD');
      const data = yield ctx.service.overview.get({
        todayFormat,
        yesterdayFormat,
        granularity: 0,
        limit: 2,
      });
      this.ctx.body = { success: true, data: { rows: data.reverse() } };
    }

    // 月度信息表
    * monthly() {
      const ctx = this.ctx;
      let kwargs = commFunc.assemble_args(ctx.query, ['startDate', 'endDate'], ['startDate', 'endDate']);
      const startFormat = new Date('2017-01');
      let timeLimit = timediff(startFormat, kwargs.endDate, 'M').months + 1;
      let timeFormat = datetime.format(new Date(kwargs.endDate), 'YYYYMM');
      let startDateFormat = datetime.format(new Date(kwargs.startDate), 'YYYYMM');
      const data = yield ctx.service.overview.list({
        timeFormat,
        granularity: 1,
        limit: timeLimit > 0 ? timeLimit : commCfg.OVERVIEW_LIMIT,
      });
      let lastChargeAmt = 0, lastConsumeAmt = 0, lastBalance = 0;
      let monthlyInfo = [];
      data.forEach(function (value, index) {
        let { chargeAmt, consumeAmt, analyseDate } = value;
        let currentBalance = lastChargeAmt - lastConsumeAmt + value.chargeAmt - value.consumeAmt;
        lastChargeAmt += value.chargeAmt;
        lastConsumeAmt += value.consumeAmt;
        if (analyseDate <= timeFormat && analyseDate >= startDateFormat) {
          monthlyInfo.push({
            analyseDate,
            chargeAmt,
            consumeAmt,
            currentBalance,
            lastBalance,
          })
        }
        lastBalance = currentBalance;
      });
      this.ctx.body = { success: true, data: { rows: monthlyInfo } };
    }
  }
  return OverviewController;
};
