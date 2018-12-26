module.exports = class HomeController {
  static async index(ctx) {
    ctx.body = "hi, index";
  }

  static async app(ctx) {
    ctx.body = "hi, app";
  }

  static async sn(ctx) {
    const id = ctx.params.id;
    ctx.body = `hi, sn ${id}`;
  }
};
