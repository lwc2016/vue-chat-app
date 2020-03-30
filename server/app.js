const koa = require("koa");
const http = require("http");
const path = require("path");
const compress = require("koa-compress");
const staticSystem = require("koa-static");
const bodyParser = require("koa-bodyparser");
const app = new koa();
const route = require("./routes");
const errorHandler = require("./middlewares/errorHandler.middleware");
const sessionMiddleware = require("./middlewares/session.middleware")

// 开启gzip压缩
const options = { threshold: 2048 };
app.use(compress(options));
// 静态资源
app.use(staticSystem(path.join(__dirname, "../dist"), {
    maxage: 7 * 24 * 60 * 60 * 1000
}));
// session
app.use(sessionMiddleware(app));
// 注册中间件
app.use(bodyParser());
// 处理错误中间件
app.use(errorHandler());
// 注册路由
route(app);

module.exports = app;