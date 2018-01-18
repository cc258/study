'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/application', 'home.application');

  app.get('/testname', 'test.testname');
  app.get('/testtpl', 'test.testtpl');
  app.get('/testlist', 'test.testlist');

  app.get('/testid/:id', 'test.testid');
  app.get('/search', 'test.search');
};
