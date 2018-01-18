'use strict';

module.exports = app => {
  class testservice extends app.Service {
    * testlist(page = 1) {
      const { pagesize, serviceurl } = this.app.config.pageset;
      const { data: idList } = yield this.ctx.curl(`${serviceurl}/topstories.json`, {
        data: {
          orderBy: '"$key"',
          startAt: `"${pagesize * (page - 1)}"`,
          endAt: `"${pagesize * page - 1}"`,
        },
        dataType: 'json',
      });

      const linklist = yield Object.keys(idList).map(key => {
        const url = `${serviceurl}/item/${idList[key]}.json`;
        return this.ctx.curl(url, { dataType: 'json' });
      });

      console.log(linklist);
      return linklist.map(res => res.data);
    }
  }
  return testservice;
};
