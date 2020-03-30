const Router = require("koa-router");
const router = new Router({prefix: "/api/friend"});
const validatorMiddleware = require("../middlewares/validator.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const friendController = require("../controllers/friend.controller");

// 好友列表
router.post("/list", authMiddleware(), friendController.list);

// 好友详情
router.post("/detail", authMiddleware(), validatorMiddleware({
    id: [{required: true, message: "缺少必要参数"}]
}), friendController.detail)

// 更新好友
router.post("/update", authMiddleware(), validatorMiddleware({
    id: [{required: true, message: "缺少必要参数"}]
}), friendController.update)

module.exports = router;