const path = require("path");
const Koa = require("koa");
const views = require("koa-views");
const static = require("koa-static");
const app = new Koa();

const bodyParser = require("koa-bodyparser");

const port = 8090;
app.use(bodyParser());
app.use(
  views(path.join(__dirname, "./views"), {
    map: { html: "nunjucks" },
    ext: "njk"
  })
);
app.use(static(path.join(__dirname + "/views")));
app.use(require("./router").routes());

app.listen(port);

console.info(`http://localhost:${port}/index`);
console.log("启动成功");
