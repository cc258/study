module.exports = class HomeController {
  static async index(ctx) {
    // ctx.body = "hi, index";
    await ctx.render("index", { title: "index" });
  }

  static async app(ctx) {
    ctx.body = "hi, app";
  }

  static async sn(ctx) {
    const id = ctx.params.id;
    ctx.body = `hi, sn ${id}`;
  }
};
