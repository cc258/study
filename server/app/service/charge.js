// app/service/Charge.js

const commFunc = require('../common/commFunc');

module.exports = app => {
  class ChargeService extends app.Service {
    * list({ timeLimit, whereObj, limit, offset } = {}) {
      let data = { rows: [], total: 0 };
      let querys = [];
      const startYear = timeLimit.startDate.split('-')[0];
      let endYear = timeLimit.endDate.split('-')[0];
      let endTable = [];
      if (endYear !== startYear) {
        endYear = parseInt(startYear) + 1;// 不允许跨多年查询
        endTable = yield app.mysql.get('Sub').query(`select TABLE_NAME from INFORMATION_SCHEMA.TABLES where
          TABLE_SCHEMA='UCOIN' and TABLE_NAME LIKE '%CHARGE_ORDER_FLOW_${endYear}_%' ;`)
      }
      const startTable = yield app.mysql.get('Sub').query(`select TABLE_NAME from INFORMATION_SCHEMA.TABLES where
          TABLE_SCHEMA='UCOIN' and TABLE_NAME LIKE '%CHARGE_ORDER_FLOW_${startYear}_%' ;`);
      const tables = startTable.concat(endTable);
      if (!tables.length) {
        return data;
      } else {
        //存在表
        querys = tables.map((value) => {
          // 拼接query
          let columns = ['ID',
            'PAY_USER_ID',
            'PAY_TYPE',
            'USER_PLATFORM',
            'TRADE_ID',
            'STORE_ID',
            'CHARGE_PRODUCT_NAME',
            'CHARGE_PRODUCT_ID',
            'PAID_PRICE',
            'ORDER_STATUS',
            'UPDATE_TIME'];
          const columnsAs = columns.map((value) => {
            let camelCaseValue = commFunc.underscoreToCamel(value);
            return `${value} AS ${camelCaseValue}`;
          }).join(',');
          let query = `select ${columnsAs} from ${value.TABLE_NAME}`;
          let timelimitSql = `UPDATE_TIME >= '${timeLimit.startDate}' AND UPDATE_TIME < '${timeLimit.endDate}'`;
          let where = app.mysql.get('Sub')._where(whereObj);
          let limitSql = '';// -> LIMIT 0,offset+limit
          // let limitSql = app.mysql.get('Sub')._limit(limit + offset, 0);// -> LIMIT 0,offset+limit
          if (where) {
            return query + where + ' AND ' + timelimitSql + limitSql;
          } else {
            return query + ' WHERE ' + timelimitSql + limitSql;
          }
          // const sql = app.mysql.get('Sub')._selectColumns(table, options.columns) +
          //     app.mysql.get('Sub')._where(options.where) +
          //     app.mysql.get('Sub')._orders(options.orders) +
          //     app.mysql.get('Sub')._limit(options.limit, options.offset);
          // SELECT COUNT(*) AS count FROM `table-name` WHERE `type` = 'javascript';
        });
      }
      this.ctx.logger.info(`[MYSQL] select count(1) as count from ( ${querys.join(' union ')} )  as count`);
      const count = yield app.mysql.get('Sub').query(`select count(1) as count from ( ${querys.join(' union ')} )  as count`);

      data.total = count[0] && count[0].count;

      if (offset > data.total) {
        return data;
      }
      let chargeList = [];
      if (limit) {
        this.ctx.logger.info(`select * from (${querys.join(' union ')}) as tmp` + ` ORDER BY updateTime ASC limit ${offset},${limit} ;`);
        chargeList = yield app.mysql.get('Sub').query(`select * from (${querys.join(' union ')}) as tmp` + ` ORDER BY updateTime ASC limit ?,? ;`, [offset, limit]);
      } else {
        this.ctx.logger.info(`select * from (${querys.join(' union ')}) as tmp` + ` ORDER BY updateTime ASC`);
        chargeList = yield app.mysql.get('Sub').query(`select * from (${querys.join(' union ')}) as tmp` + ` ORDER BY updateTime ASC`);
      }
      if (chargeList.length) {
        // 存在充值记录
        const existUids = chargeList.map((value) => {
          return value.payUserId;
        });
        // 获取用户userkey
        const diffUid = [...new Set(existUids)];
        const payUserMap = {};
        const payUserList = yield this.ctx.service.payuser.queryByIds(diffUid);
        payUserList.forEach((value) => {
          payUserMap[value.id] = value;
        });
        // 获取支付类型
        const payTypes = chargeList.map((value) => {
          return value.payType;
        });
        const diffPayType = [...new Set(payTypes)];
        const payTypeList = yield this.ctx.service.paytype.queryByIds(diffPayType);
        const payTypeMap = {};
        payTypeList.forEach((value) => {
          payTypeMap[value.payTypeCode] = value;
        });
        // 获取商户名称
        const storIds = chargeList.map((value) => {
          return value.storeId;
        });
        const diffStoreId = [...new Set(storIds)];
        const storeList = yield this.ctx.service.store.queryByIds(diffStoreId);
        const storeMap = {};
        storeList.forEach((value) => {
          storeMap[value.id] = value;
        });
        // 获取充值U币数目
        const chargeProductId = chargeList.map((value) => {
          return value.chargeProductId;
        });
        const diffChargeProductId = [...new Set(chargeProductId)];
        const chargeProductList = yield this.ctx.service.chargeProduct.queryByIds(diffChargeProductId);
        const chargeProductMap = {};
        chargeProductList.forEach((value) => {
          chargeProductMap[value.id] = value;
        });
        // data.storeMap = storeMap;
        // data.payUserMap = payUserMap;
        // data.payTypeMap = payTypeMap;
        // data.chargeProductMap = chargeProductMap;
        data.rows = chargeList.map((value) => {
          if (value.payType && payTypeMap[value.payType]) {
            value.payTypeName = payTypeMap[value.payType].payTypeName;
            value.feeRatio = payTypeMap[value.payType].feeRatio;
          }
          if (value.payUserId && payUserMap[value.payUserId]) {
            value.userKey = payUserMap[value.payUserId].userKey;
          }
          if (value.storeId && storeMap[value.storeId]) {
            value.storeName = storeMap[value.storeId].name;
          }
          if (value.chargeProductId && chargeProductMap[value.chargeProductId]) {
            value.ucoinAmt = chargeProductMap[value.chargeProductId].ucoinAmt;
          }
          let query_field_list = ['userKey', 'payTypeName', 'chargeProductName', 'orderStatus', 'paidPrice', 'updateTime',
            'storeName', 'ucoinAmt', 'feeRatio', 'userPlatform', 'tradeId'];
          let requireValue = commFunc.assemble_args(value, query_field_list, []);
          return requireValue
        })
      } else {
        return data;
      }
      return data;
    }
  }
  return ChargeService;
};