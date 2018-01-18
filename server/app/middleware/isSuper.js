// 权限控制

module.exports = () => {
    return function* (next) {
        if (this.state.accessibleList.isSuper) {
            this.logger.info(this.user.userid, '[OPERATE]' + this.request.url);
            yield next;
        } else {
            this.body = {
                success: false,
                code: 'ACCESS_DENY',
                msg: '需要超级管理员权限',
            };
        }
    };
};