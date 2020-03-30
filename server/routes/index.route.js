const Router = require("koa-router");
const fs = require("fs");
const path = require("path");
const router = new Router();
router.get("*", async (ctx, next) => {
    console.log(fs.readFileSync(path.join(__dirname, "../../dist/index.html")));
    ctx.type = "html";
    ctx.body = fs.readFileSync(path.join(__dirname, "../../dist/index.html"));
});

module.exports = router;