'use strict';
const commCfg = require('../common/commCfg');
const commFunc = require('../common/commFunc');
const datetime = require('silly-datetime');

// 商户结算
module.exports = app => {
  class BalanceController extends app.Controller {
    * list() {
      const ctx = this.ctx;
      let pageSize = ctx.query.pageSize || commCfg.PAGE_SIZE,
        pageNum = ctx.query.pageNum || 1;
      const offset = 0,
        limit = 0;
      const storeId = parseInt(ctx.params.storeId);
      let query_field_list = ['goodsCatalogue1Name', 'startDate', 'endDate', 'export'];
      let kwargs = commFunc.assemble_args(ctx.query, query_field_list, ['startDate', 'endDate']);
      const timeLimit = {
        start: datetime.format(new Date(kwargs.startDate), 'YYYYMMDD'),
        end: datetime.format(new Date(kwargs.endDate), 'YYYYMMDD'),
      };
      let rawData = [];
      let balanceCatalogueMap = [];
      let catalogueMap = [];
      let rows = [];
      const whereObj = {};
      if (kwargs.goodsCatalogue1Name) {
        const goodsCatalogue1 = yield ctx.service.balanceCatalogue.queryByName(kwargs.goodsCatalogue1Name);
        if (goodsCatalogue1.code) {
          whereObj.CATALOGUE = goodsCatalogue1.code
        } else {
          whereObj.CATALOGUE = kwargs.goodsCatalogue1Name;
        }
      }
      if (storeId) {
        whereObj.STORE_ID = storeId;
        rawData = yield ctx.service.balance.list({
          timeLimit, whereObj
        });
        if (rawData.length) {
          rows = yield this.groupByCatalogue(rawData);
          rows = this.countBalance(rows);
        }
      }
      this.ctx.body = { success: true, data: { rows, total: rows.length } };
    }

    * groupByCatalogue(data) {
      let catalogueMap = {};
      let catalogueIds = data.map((value) => {
        return value.catalogue;
      });
      let diffCatalogueIds = [...new Set(catalogueIds)];
      let balanceCatalogueList = yield this.ctx.service.balanceCatalogue.queryByCodes(catalogueIds);
      let balanceCatalogueMap = {};
      if (balanceCatalogueList.length) {
        balanceCatalogueList.forEach((value) => {
          balanceCatalogueMap[value.code] = value;
        });
      }
      data.forEach(function (element) {
        let catalogueId = element.catalogue;
        if (catalogueMap[catalogueId]) {
          catalogueMap[catalogueId].discountAmt += element.discountAmt;
          catalogueMap[catalogueId].paidAmt += element.paidAmt;
        } else {
          catalogueMap[catalogueId] = {};
          let cur = balanceCatalogueMap[catalogueId];
          if (cur) {
            catalogueMap[catalogueId].catalogue = cur;
            catalogueMap[catalogueId].goodsCatalogue1Name = cur.name;
          } else {
            catalogueMap[catalogueId].catalogue = {};
            catalogueMap[catalogueId].goodsCatalogue1Name = catalogueId;
          }
          catalogueMap[catalogueId].discountAmt = element.discountAmt;
          catalogueMap[catalogueId].paidAmt = element.paidAmt;
        }
      });
      return catalogueMap;
    }

    countBalance(data) {
      // 不计入分成的公式：
      // 分成金额 = 总收金额 * （1 - 运营费用比例 ）* 分成比例  *(1-税率)
      // 计入分成的公式：
      // 分成金额 = (总收金额 + 代金券总额) * （1 - 运营费用比例）* 分成比例*(1-税率)
      const list = [];
      for (const key in data) {
        let item = data[key];
        let catalogue = item.catalogue;
        item.operateFeeRate = (catalogue.operateFeeRate) || 0;
        item.divideFeeRate = (catalogue.divideFeeRate) || 0;
        item.taxRate = (catalogue.taxRate) || 0;
        const rate = (1 - (item.operateFeeRate / 100)) * (item.divideFeeRate / 100) * (1 - (item.taxRate / 100));
        item.totalPaidAmt = item.paidAmt;
        item.totalPaidFee = item.paidAmt;
        item.totalDiscountFee = item.discountAmt;// 代金券总额
        if (catalogue.includeVoucher) {
          item.totalDivideFee = item.paidAmt * rate; // 分成金额：单位分
          item.totalDivideDiscountFee = item.discountAmt * rate; // 分成代金券总额：单位分
          item.totalNonDivideDiscountFee = item.totalDiscountFee - item.totalDivideDiscountFee; //不分成代金券总额：单位分
        } else {
          item.totalDivideFee = (item.paidAmt + item.discountAmt) * rate; // 分成金额：单位分
          item.totalDivideDiscountFee = 0; // 分成代金券总额
          item.totalNonDivideDiscountFee = item.totalDiscountFee; // 不分成代金券总额：单位分
        }
        const requireValue = commFunc.assemble_args(item, ['totalDivideFee', 'totalDiscountFee', 'totalNonDiscountFee', 'operateFeeRate',
          'divideFeeRate', 'goodsCatalogue1Name', 'totalPaidAmt', 'totalPaidFee', 'totalDiscountFee', 'totalDivideDiscountFee', 'totalNonDivideDiscountFee'
        ], []);
        // return item;
        list.push(requireValue);
      }
      return list;
    }
  }

  return BalanceController;
};
