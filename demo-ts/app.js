const Koa = require("koa");
const app = new Koa();

const bodyParser = require("koa-bodyparser");

const port = 8090;
app.use(bodyParser());

app.use(require("./app/router").routes());

app.listen(port);

console.info(`http://localhost:${port}/index`);
console.log("启动成功");
