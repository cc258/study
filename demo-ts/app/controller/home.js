require("@babel/polyfill");

export default class HomeController {

    static async index(ctx) {
        console.log('controller');
        this.ctx.body = 'hi, index';
    };

    static async app(ctx) {
        console.log('app');
        this.ctx.body = 'hi, app';
    };

}

