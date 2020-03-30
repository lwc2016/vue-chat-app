const db = require("../config/db");
const { publishClient } = require("../config/redis");

// 添加邀请
exports.send = async (ctx, next) => {
    const { id: fromId } = ctx.session.user;
    const { userId: toId, remarks } = ctx.request.body;
    // 先判断是否是好友
    const [ friend ] = await db.query("select * from friends_table where fromId = ? and toId = ? and isValid = 1", [fromId, toId]);
    if(friend){
        return ctx.body = {status: 400, message: "他已经是您的好友了，不能再添加了！"};
    }
    // 判断是否有邀请，但还未审核的
    const [ invitation ] = await db.query("select * from invitations_table where fromId = ? and toId = ? and status = 'waiting' and isValid = 1", [fromId, toId])
    if(invitation){
        return ctx.body = {status: 400, message: "您已经发送了添加请求，等待验证！"};
    }
    console.log("remarks: ", remarks);
    await db.query("insert into invitations_table ( fromId, toId, remarks ) values ( ?, ?, ? )", [fromId, toId, remarks]);
    // 通过redis发布消息
    const [ invitation2 ] = await db.query(`
        select 
        invitations_table.id as id, 
        nickName, 
        avatar, 
        fromId, 
        toId,
        users_table.remarks as remarks
        from invitations_table left join users_table 
        on invitations_table.fromId = users_table.id 
        where fromId = ? and toId = ? order by invitations_table.id desc;`, [fromId, toId]) || {};
    publishClient.publish("invitation", JSON.stringify({type: "system", subType: "invitation_received", ...invitation2}));
    ctx.body = {status: 200, result: "", message: ""};
};

// 接收邀请
exports.agree = async (ctx, next) => {
    const { id: userId } = ctx.session.user;
    const { id } = ctx.request.body;
    // 查询邀请
    const [ invitation ] = await db.query("select fromId, toId from invitations_table where id = ? and toId = ?", [id, userId]);
    if(!invitation){
        return ctx.body = {status: 400, message: "添加好友邀请不存在！"};
    }
    // 更新状态
    await db.query("update invitations_table set status = 'agreed' where id = ? and toId = ?", [id, userId]);
    const { fromId, toId } = invitation;
    await db.query("insert into friends_table (fromId, toId) values (?, ?), (?, ?)", [fromId, toId, toId, fromId]);
    ctx.body = {status: 200, message: ""};
};

// 拒绝邀请
exports.refuse = async (ctx, next) => {
    const { id: userId } = ctx.session.user;
    const { id } = ctx.request.body;
    // 查询邀请
    const [ invitation ] = await db.query("select fromId, toId from invitations_table where id = ? and toId = ?", [id, userId]);
    if(!invitation){
        return ctx.body = {status: 400, message: "添加好友邀请不存在！"};
    }
    // 更新状态
    await db.query("update invitations_table set status = 'refused' where id = ? and toId = ?", [id, userId]);
    const [ invitation2 ] = await db.query(`
        select 
        invitations_table.id as id, 
        nickName, 
        avatar, 
        fromId, 
        toId,
        users_table.remarks as remarks
        from invitations_table left join users_table 
        on invitations_table.toId = users_table.id 
        where invitations_table.id = ?;`, [id]) || {};
    const { toId, fromId } = invitation2;
    invitation2.toId = fromId;
    invitation2.fromId = toId;  
    publishClient.publish('invitation', JSON.stringify({type: "system", subType: "invitation_refused", ...invitation2}))
    ctx.body = {status: 200, message: ""};
};


// 邀请记录
exports.log = async (ctx, next) => {
    
};

// 邀请详情
exports.detail = async (ctx, next) => {
    const { id: userId } = ctx.session.user;
    const { id } = ctx.request.body;
    console.log("id:", id);
    const [ invitation ] = await db.query(`
    select 
    invitations_table.id as id, 
    name,
    nickName, 
    avatar, 
    fromId, 
    toId,
    users_table.remarks as remarks,
    invitations_table.remarks as invitationRemarks
    from invitations_table left join users_table 
    on invitations_table.fromId = users_table.id 
    where invitations_table.id = ? and toId = ?;`, [id, userId]) || {};
    ctx.body = { status: 200, result: invitation };
};

