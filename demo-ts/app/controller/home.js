const fs = require("fs");
module.exports = class HomeController {
  static async index(ctx) {
    ctx.type = "html";
    ctx.body = await fs.readFile(__dirname + "/index.html", "utf-8");
  }

  static async app(ctx) {
    ctx.body = "hi, app";
  }
};
