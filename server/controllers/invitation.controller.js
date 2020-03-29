const db = require("../config/db");

// 添加邀请
exports.send = async (ctx, next) => {
    const { id: fromId } = ctx.session.user;
    const { userId: toId } = ctx.request.body;
    await db.query("insert into invitations_table ( fromId, toId ) values ( ?, ? )", [fromId, toId]);
    ctx.body = {status: 200, result: "", message: ""};
};

// 接收邀请
exports.agree = async (ctx, next) => {
    const { id: userId } = ctx.session.user;
    const { invitationId } = ctx.request.body;
    // 查询邀请
    const [ invitation ] = await db.query("select fromId, toId from invitations_table where id = ? and toId = ?", [invitationId, userId]);
    if(!invitation){
        return ctx.body = {status: 400, message: "添加好友邀请不存在！"};
    }
    // 更新状态
    await db.query("update invitations_table set status = agreed where id = ? and toId = ?", [invitationId, userId]);
    const { fromId, toId } = invitation;
    await db.query("insert into friends_table (fromId, toId) values (?, ?), (?, ?)", [fromId, toId, toId, fromId]);
    ctx.body = {status: 200, message: ""};
};

// 拒绝邀请
exports.refuse = async (ctx, next) => {

};


// 邀请记录
exports.log = async (ctx, next) => {
    
};

