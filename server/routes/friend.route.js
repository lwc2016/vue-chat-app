const Router = require("koa-router");
const router = new Router({prefix: "/api/friend"});
const validatorMiddleware = require("../middlewares/validator.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const friendController = require("../controllers/friend.controller");

// 好友列表
router.post("/list", friendController.list);

module.exports = router;