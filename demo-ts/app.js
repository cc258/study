
const Koa = require('koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app.use(require('./app/router').routes());
app.listen(3000);

console.log('http://localhost:3000/index');
console.log('启动成功');