const Router = require("koa-router");
const multer = require("@koa/multer");
const router = new Router({prefix: "/api/file"});
const fileController = require("../controllers/file.controller");
const upload = multer();

router.post("/upload", upload.single("file"), fileController.upload);

module.exports = router;