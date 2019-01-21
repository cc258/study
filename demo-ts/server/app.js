const path = require("path");
const Koa = require("koa");
const koaNunjucks = require("koa-nunjucks-2");
const static = require("koa-static");
const app = new Koa();

const bodyParser = require("koa-bodyparser");

const port = 8090;
const public = "../static";
app.use(bodyParser());

app.use(static(path.resolve(__dirname, public)));
app.use(
  koaNunjucks({
    ext: "html",
    path: path.resolve(__dirname, "views"),
    nunjucksConfig: {
      trimBlocks: true
    }
  })
);
// ext (default: 'njk'): Extension that will be automatically appended to the file name in ctx.render calls. Set to a falsy value to disable.
// path (default: current directory): Path to the templates. Also supports passing an array of paths.
// writeResponse (default: true): If true, writes the rendered output to response.body.
// functionName (default: 'render'): The name of the function that will be called to render the template.
// nunjucksConfig: Object of Nunjucks config options.
// configureEnvironment: A function to modify the Nunjucks environment. See the Extending Nunjucks section below for usage.

app.use(require("./router").routes());

app.listen(port);

console.info(`http://localhost:${port}/index`);
console.log("启动成功");
