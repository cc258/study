
module.exports = () => {
    return function* (next) {
        let match = /store\/(\d+)/g.exec(this.request.url); // 获取不到this.params,正则匹配下
        let storeId = match[1];
        let accessible = this.state.accessibleList.store.filter((value) => {
            return value.storeId === parseInt(storeId);
        });
        if (accessible.length) {
            yield next;
        } else {
            this.body = {
                success: false,
                code: 'ACCESS_DENY',
                msg: '没有该商户权限',
            };
        }
    };
};