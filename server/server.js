const koa = require("koa");
const http = require("http");
const session = require("koa-session");
const bodyParser = require("koa-bodyparser");
const app = new koa();
const route = require("./routes");
const errorHandler = require("./middlewares/errorHandler.middleware");

// session
app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess', 
  maxAge: 86400000,
  autoCommit: true, 
  overwrite: true, 
  httpOnly: true, 
  signed: true, 
  rolling: false,
  renew: false,
  sameSite: null,
};
app.use(session(CONFIG, app));

// 注册中间件
app.use(bodyParser());
// 处理错误中间件
app.use(errorHandler());
// 注册路由
route(app);

const server = http.createServer(app.callback());
module.exports = server;