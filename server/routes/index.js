const userRoute = require("./user.route");
const invitationRoute = require("./invitation.route");
const friendRoute = require("./friend.route");
const fileRoute = require("./file.route");
const indexRoute = require("./index.route");

module.exports = (app) => {
   // 用户相关路由
   app.use(userRoute.routes())
      .use(userRoute.allowedMethods())

   // 邀请相关的路由
   app.use(invitationRoute.routes())
      .use(invitationRoute.allowedMethods());

   // 好友相关的路由
   app.use(friendRoute.routes())
      .use(friendRoute.allowedMethods())
   
   // 文件相关
   app.use(fileRoute.routes())
      .use(fileRoute.allowedMethods());

   // get路由
   app.use(indexRoute.routes())
      .use(indexRoute.allowedMethods());
};