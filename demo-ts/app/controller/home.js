const fs = require("fs");
module.exports = class HomeController {
  static async index(ctx) {
    ctx.body = 'hi, index';
  }

  static async app(ctx) {
    ctx.body = "hi, app";
  }
};
