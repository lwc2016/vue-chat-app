const db = require("../config/db");

// 添加邀请
exports.add = async (ctx, next) => {
    const { id: fromId } = ctx.session.user;
    const { userId: toId } = ctx.request.body;
    await db.query("insert into invitations_table ( fromId, toId ) values ( ?, ? )", [fromId, toId]);
    ctx.body = {status: 200, result: "", message: ""};
};

// 邀请记录
exports.log = async (ctx, next) => {

};

