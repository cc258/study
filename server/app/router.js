'use strict';
module.exports = app => {
  // app.router.prefix(`/${app.config.pkg.name}`);
  app.redirect('/', `/${app.config.pkg.name}`, 302);
  app.get(`/${app.config.pkg.name}`, app.controller.home.index);
  app.get(`/${app.config.pkg.name}/api/charge/list`, app.controller.charge.list);
  app.get(`/${app.config.pkg.name}/api/overview/get`, app.controller.overview.get);
  app.get(`/${app.config.pkg.name}/api/overview`, app.controller.overview.list);
  app.get(`/${app.config.pkg.name}/api/overview/monthly`, app.controller.overview.monthly);

  app.get(`/${app.config.pkg.name}/api/store/:storeId/consume`, app.controller.consume.storeConsumeList);
  app.get(`/${app.config.pkg.name}/api/store/:storeId/balance`, app.controller.balance.list);

  app.get(`/${app.config.pkg.name}/api/paytype/:action`, app.controller.paytype.index);
  app.get(`/${app.config.pkg.name}/api/balanceCatalogue/:action`, app.controller.balanceCatalogue.index);
  app.get(`/${app.config.pkg.name}/api/operate/store/:action`, app.controller.store.index);
  app.get(`/${app.config.pkg.name}/api/operate/chargeProduct/:action`, app.controller.chargeProduct.index);

  app.get(`/${app.config.pkg.name}/api/user`, app.controller.user.index);
  app.get(`/${app.config.pkg.name}/monitor`, app.controller.monitor.index);
};
