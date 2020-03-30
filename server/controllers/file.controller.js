const ossClient = require("../config/oss");
const path = require("path");
exports.upload = async (ctx, next) => {
    const { originalname, buffer } = ctx.request.file;
    const filename = new Date().getTime() + path.extname(originalname);
    const resp = await ossClient.put(filename, buffer);
    ctx.body = {status: 200, result: resp.url};
}