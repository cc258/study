"use strict";

var _home = _interopRequireDefault(require("./controller/home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("@babel/polyfill"); // const Home = require('./controller/home');


module.exports = function (app) {
  app.get('/', _home.default.index);
  console.log(_home.default);
  app.get('/application', _home.default.application);
  console.log('-------------------');
};