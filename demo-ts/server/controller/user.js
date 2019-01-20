module.exports = class UserController {
  static async reg(ctx) {
    ctx.body = `
      <form action="/user/validate" method="post">
        <input name="name" type="text" placeholder="请输入用户名：ikcamp"/>
        <br/>
        <input name="password" type="text" placeholder="请输入密码：123456"/>
        <br/>
        <button>GoGoGo</button>
      </form>
    `;
  }

  static async validate(ctx) {
    const { name, password } = ctx.request.body;
    ctx.body = `hi, name: ${name} | password: ${password}`;
  }
};
