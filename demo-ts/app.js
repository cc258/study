
const Koa = require('koa');
const Router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(bodyParser());
app.use(require('./app/router'));

app.listen(3000);
console.log('启动成功');