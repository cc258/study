// app/service/Consume.js
const commFunc = require('../common/commFunc');
const timediff = require('timediff');
const datetime = require('silly-datetime');
module.exports = app => {
  class ConsumeService extends app.Service {
    * list({ timeLimit, whereObj, limit, offset, goodsName, type, set_query_field_list } = {}) {
      let data = { rows: [], total: 0, timeLimit, whereObj, limit, offset, goodsName, type, set_query_field_list };
      let querys = [];
      let start = datetime.format(timeLimit.startDate, 'YYYY-MM').split('-');
      let end = datetime.format(timeLimit.endDate, 'YYYY-MM').split('-');
      let monthGap = 0;
      let yearGap = end[0] - start[0];
      if (end[1] - start[1] >= 0) {
        monthGap = end[1] - start[1];
        monthGap += yearGap * 12;
      } else {
        if (yearGap > 0) {
          yearGap--;
          monthGap = end[1] + 12 - start[1];
          monthGap += yearGap * 12;
        } else {
          return data;
        }
      }
      let startTableName = datetime.format(timeLimit.startDate, 'YYYY_M');
      let { tables, tableNames } = yield this.getAllTableName(startTableName, monthGap);
      let countsArr = yield this.countEachTable(tables, { timeLimit, whereObj, limit, offset, goodsName });
      countsArr.map((value) => {
        data.total += value;
      });
      let consumeList = [];
      let arr = this.getSingleTableQuery(countsArr, limit, offset);
      for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (value.get > 0 || limit === 0) {
          if (tables[i].length) {
            let querys = this.genQuery(tables[i], false, { timeLimit, whereObj, limit: value.limit, offset: value.offset, goodsName });
            let currentConsumeList = yield this.queryList(querys, value.limit, value.offset);
            consumeList = consumeList.concat(currentConsumeList);
          }
        }
      }
      if (type === 'store') {
        data.rows = yield this.genStoreConsumeList(consumeList, set_query_field_list);
      } else {
        data.rows = yield this.genConsumeList(consumeList);
      }
      return data;
    }
    // 获取不同分表中的limit 和 offset
    getSingleTableQuery(countsArr, limit, offset) {
      let currentLength = 0;
      let currentOffset = offset;
      let currentLimit = limit;
      let gotTotal = 0;
      return countsArr.map((value) => {
        currentLength += value;
        if (currentLength < currentOffset) {
          currentOffset -= value;
          return {
            get: 0,
            offset: 0,
            limit: 0
          }
        } else if (currentLength >= currentOffset) {
          let get = Math.min(value - currentOffset, currentLimit);
          let set = {
            get,
            offset: currentOffset,
            limit: get,
          };
          currentOffset -= currentOffset;
          currentLimit -= get;
          return set;
        }
      });
    }
    * getAllTableName(startTableName, month) {
      let startYear = startTableName.split('_')[0] / 1;
      let startMonth = startTableName.split('_')[1] / 1;
      let tableNames = [];
      let tables = [];
      tableNames.push(startTableName);
      let table = yield this.queryTables(tableNames[0]);
      tables.push(table);
      for (let i = 1; i < month + 1; i++) {
        let nextStartMonth = startMonth + 1;
        if (nextStartMonth < 13) {
          tableNames.push(startYear + '_' + (++startMonth));
        } else {
          startMonth = 1;
          tableNames.push((++startYear) + '_' + (1));
        }
        let table = yield this.queryTables(tableNames[i]);
        tables.push(table);
      }
      return { tables, tableNames };
    }
    * countEachTable(allTableName, { timeLimit, whereObj, limit, offset, goodsName }) {
      let countArr = [];
      for (let i = 0; i < allTableName.length; i++) {
        let tables = allTableName[i];
        let querys = [];
        if (!tables.length) {
          countArr.push(0);
        } else {
          //存在表
          querys = this.genQuery(tables, true, { timeLimit, whereObj, limit, offset, goodsName });
          this.ctx.logger.info('[MYSQL]:select count(1) as count from (' + querys.join(' union ') + ')  as count;');
          const count = yield app.mysql.get('Sub').query('select count(1) as count from (' + querys.join(' union ') + ')  as count;');
          let total = count[0] && count[0].count;
          countArr.push(total);
        }
      }
      return countArr;
    }
    * genConsumeList(consumeList) {
      if (consumeList.length) {
        // 存在充值记录

        // 获取商户名称
        const storIds = consumeList.map((value) => {
          return value.storeId;
        });
        const diffStoreId = [...new Set(storIds)];
        const storeList = yield this.ctx.service.store.queryByIds(diffStoreId);
        const storeMap = {};
        storeList.forEach((value) => {
          storeMap[value.id] = value;
        });
        let rows = consumeList.map((value) => {
          if (value.storeId && storeMap[value.storeId]) {
            value.storeName = storeMap[value.storeId].name;
          }
          let query_field_list = ['userKey', 'orderId', 'goodsName', 'tradeTime', 'storeName', 'paidAmt', 'tradeStatus', 'payChannel'];
          let requireValue = commFunc.assemble_args(value, query_field_list, []);
          return requireValue;
        });
        return rows;
      } else {
        return [];
      }
    }
    * genStoreConsumeList(consumeList, set_query_field_list) {
      if (consumeList.length) {
        // 存在充值记录
        // 获取cp
        const catalogues = [];
        consumeList.forEach((value) => {
          catalogues.push(value.goodsCatalogue1);
          catalogues.push(value.goodsCatalogue2);
          catalogues.push(value.goodsCatalogue3);
        });
        const diffCatalogue = [...new Set(catalogues)];
        const catalogueList = yield this.ctx.service.balanceCatalogue.queryByCodes(diffCatalogue);
        const catalogueMap = {};
        catalogueList.forEach((value) => {
          catalogueMap[value.code] = value;
        });
        // data.storeMap = storeMap;
        let rows = consumeList.map((value) => {
          if (value.goodsCatalogue1 && catalogueMap[value.goodsCatalogue1]) {
            value.goodsCatalogue1Name = catalogueMap[value.goodsCatalogue1].name;
            value.catalogue1 = catalogueMap[value.goodsCatalogue1];
          }
          if (value.goodsCatalogue2 && catalogueMap[value.goodsCatalogue2]) {
            value.goodsCatalogue2Name = catalogueMap[value.goodsCatalogue2].name;
            value.catalogue2 = catalogueMap[value.goodsCatalogue2];
          }
          if (value.goodsCatalogue3 && catalogueMap[value.goodsCatalogue3]) {
            value.goodsCatalogue3Name = catalogueMap[value.goodsCatalogue3].name;
            value.catalogue3 = catalogueMap[value.goodsCatalogue3];
          }
          let query_field_list = set_query_field_list || ['goodsCatalogue1Name', 'goodsCatalogue2Name', 'goodsCatalogue3Name', 'orderId', 'goodsName', 'tradeTime', 'discountAmt', 'orderAmt', 'paidAmt', 'tradeStatus', 'payChannel'];
          let requireValue = commFunc.assemble_args(value, query_field_list, []);
          return requireValue;
        });
        return rows;
      } else {
        return [];
      }
    }
    genQuery(tables, isCount, { timeLimit, whereObj, limit, offset, goodsName } = {}) {
      return tables.map((value) => {
        let columns = [
          'ID',
          'PAY_CHANNEL',
          'STORE_ID',
          'ORDER_ID',
          'ORDER_AMT',
          'DISCOUNT_AMT',
          'PAID_AMT',
          'OPERATION_TYPE',
          'PAY_USER_ID',
          'USER_KEY',
          'GOODS_ID',
          'GOODS_NAME',
          'TRADE_STATUS',
          'TRADE_TIME',
          'GOODS_CATALOGUE1',
          'GOODS_CATALOGUE2',
          'GOODS_CATALOGUE3'
        ];
        // 拼接query
        let query = `select ${columns.join(',')} from ${value.TABLE_NAME}`;
        let subWhereSql = `TRADE_TIME >= '${timeLimit.startDate}' AND TRADE_TIME < '${timeLimit.endDate}'`;

        if (goodsName) {
          subWhereSql += ` AND GOODS_NAME LIKE '%${goodsName}%'`
        }

        whereObj.OPERATION_TYPE = 1;

        let where = app.mysql.get('Sub')._where(whereObj);
        let limitSql = '';
        if (!isCount) { // union 前不能orderby，所以这里不能限制子句的条数，要全部查不出来
          // limitSql = app.mysql.get('Sub')._limit(limit + offset, 0); // -> LIMIT 0,offset+limit
        }
        if (where) {
          return query + where + ' AND ' + subWhereSql + limitSql;
        } else {
          return query + ' WHERE ' + subWhereSql + limitSql;
        }
      });
    }

    * queryTables(tableFormat) {
      const tables = yield app.mysql.get('Sub').query(`select TABLE_NAME from INFORMATION_SCHEMA.TABLES where
          TABLE_SCHEMA='UCOIN' and TABLE_NAME LIKE '%TRADE_ORDER_FLOW_${tableFormat}_%' ;`); // 2017_6_0,2017_7_0,
      return tables;
    }

    * queryList(querys, limit, offset) {
      let consumeList = [];
      this.ctx.logger.info(`[MYSQL]:select * from (${querys.join(' union ')}) as tmp` + ` ORDER BY TRADE_TIME ASC limit ${offset}, ${limit} ;`)
      if (limit) {
        consumeList = yield app.mysql.get('Sub').query(`select * from (${querys.join(' union ')}) as tmp` + ` ORDER BY TRADE_TIME ASC limit ?,? ;`, [offset, limit]);
      } else {
        consumeList = yield app.mysql.get('Sub').query(`select * from (${querys.join(' union ')}) as tmp` + ` ORDER BY TRADE_TIME ASC`);
      }
      return consumeList.map((item) => {
        return commFunc.parseObjKey(item);
      });
    }
  }
  return ConsumeService;
};