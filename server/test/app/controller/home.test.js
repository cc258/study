'use strict';

const mm = require('@ali/mm');
const assert = require('assert');

describe('test/app/controller/home.test.js', () => {
  let app;

  before(() => {
    app = mm.app();
    return app.ready();
  });

  after(() => app.close());

  it('should use assert, not should/expect/chai', () => {
    // see https://zhuanlan.zhihu.com/p/25956323
    assert(app);
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, nut')
      .expect(200);
  });
});
