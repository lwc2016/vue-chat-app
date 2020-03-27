const Router = require("koa-router");
const router = new Router({ prefix: "/api/user" });
const userController = require("../controllers/user.controller");
const validatorMiddleware = require("../middlewares/validator.middleware");
const authMiddleware = require("../middlewares/auth.middleware");

// 登录
router.post("/login", 
    validatorMiddleware({
        name: [{required: true, message: "请填写用户名！"}],
        password: [{required: true, message: "请填写密码！"}]
    }), 
    userController.login
);

// 注册
router.post("/register", 
    validatorMiddleware({
        name: [{required: true, message: "请填写用户名！"}],
        nickName: [{required: true, message: "请填写昵称！"}],
        password: [{required: true, message: "请填写密码！"}],
    }), 
    userController.register
);

// 获取当前登录用户信息
router.post("/info", 
    authMiddleware(),
    userController.info
);

// 获取用户信息
router.post("/detail", 
    authMiddleware(), 
    validatorMiddleware({
        id: [{required: true, message: "请填写用户id！"}]
    }), 
    userController.detail
);

// 更新当前登录的用户信息
router.post("/update", 
    authMiddleware(), 
    userController.update
);

module.exports = router;