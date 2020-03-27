const userRoute = require("./user.route");

module.exports = (app) => {
    // 用户相关路由
    app.use(userRoute.routes())
        .use(userRoute.allowedMethods());

    
};