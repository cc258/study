module.exports = class HomeController {
  static async index(ctx) {
    await ctx.render("index");
  }

  static async app(ctx) {
    ctx.body = "hi, app";
  }

  static async sn(ctx) {
    const id = ctx.params.id;
    ctx.body = `hi, sn ${id}`;
  }
};
