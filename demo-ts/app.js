
const Koa = require('koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app.use(require('./app/router').routes());
app.listen(8080);

console.log('http://localhost:8080/index');
console.log('启动成功');