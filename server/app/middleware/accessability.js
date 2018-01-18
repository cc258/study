const commCfg = require('../common/commCfg');
const commFunc = require('../common/commFunc');
// 权限列表查询
module.exports = (options) => {
  // 返回一个真正的 Middleware 函数
  return function* query(next) {
    const accessibleList = {
      store: [],
      isAdmin: false,
      isSuper: false,
    }
    const PERMISSIONS = options.PERMISSIONS;
    let queryPermissions = [];
    for (let key in PERMISSIONS) {
      queryPermissions.push(PERMISSIONS[key].permissionName);
    }
    let ret = yield this.acl.AccessControlService.checkPermissions({
      userId: this.user.bucid, // 这里是bucid, 不是工号
      permissionNames: queryPermissions,
    });
    
    if (ret.checkPermissionResults) {
      ret.checkPermissionResults.forEach(function (value) {
        let accessible = value.accessible;
        if (value.permissionName === PERMISSIONS['novel'].permissionName && accessible) {
          accessibleList.store.push({
            name: PERMISSIONS['novel'].name,
            status: accessible,
            storeId: PERMISSIONS['novel'].storeId
          });
        }
        if (value.permissionName === PERMISSIONS['comic'].permissionName && accessible) {
          accessibleList.store.push({
            name: PERMISSIONS['comic'].name,
            status: accessible,
            storeId: PERMISSIONS['comic'].storeId,
          });
        }
        if (value.permissionName === PERMISSIONS['admin'].permissionName) {
          accessibleList.isAdmin = accessible;
        }
        if (value.permissionName === PERMISSIONS['super'].permissionName) {
          accessibleList.isSuper = accessible;
        }
      });
    }
    this.state.accessibleList = accessibleList;
    yield next;
  };
};