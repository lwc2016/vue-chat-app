const Router = require("koa-router");
// 创建路由
const router = new Router({prefix: "/api/invitation"});

const validatorMiddleware = require("../middlewares/validator.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const invitationController = require("../controllers/invitation.controller");

// 添加
router.post("/add", 
    authMiddleware(), 
    validatorMiddleware({
        userId: [{required: true, message: "请填写邀请人的id！"}]
    }),
    invitationController.add
);

router.post("/list", (ctx) => {
    ctx.body = "list";
})

module.exports = router;