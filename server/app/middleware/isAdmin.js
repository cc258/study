// 权限控制

module.exports = () => {
    return function* (next) {
        if (this.state.accessibleList.isAdmin) {
            yield next;
        } else {
            this.body = {
                success: false,
                code: 'ACCESS_DENY',
                msg: '需要管理员权限',
            };
        }
    };
};