module.exports = class UserController {
  static async getData(ctx) {
    ctx.body = { code: "ok", data: { name: "cc", age: "18" } };
  }
};
