const koa = require("koa");
const http = require("http");
const path = require("path");
const staticSystem = require("koa-static");
const bodyParser = require("koa-bodyparser");
const app = new koa();
const route = require("./routes");
const errorHandler = require("./middlewares/errorHandler.middleware");
const sessionMiddleware = require("./middlewares/session.middleware")

// 静态资源
app.use(staticSystem(path.join(__dirname, "../dist")));
// session
app.use(sessionMiddleware(app));
// 注册中间件
app.use(bodyParser());
// 处理错误中间件
app.use(errorHandler());
// 注册路由
route(app);

module.exports = app;