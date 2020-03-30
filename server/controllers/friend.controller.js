const db = require("../config/db");

// 好友列表
exports.list = async (ctx, next) => {
    const { id: userId } = ctx.session.user;
    const list = await db.query(`
        select 
        friends_table.id as id, 
        users_table.id as userId, 
        name, 
        nickName, 
        avatar,
        remarkName,
        friends_table.createdTime as createdTime
        from friends_table left join users_table on friends_table.toId = users_table.id 
        where fromId = ? and friends_table.isValid = 1;`, [ userId ]);
    ctx.body = {status: 200, result: list};
};

// 获取好友详情
exports.detail = async (ctx, next) => {
    const { id: userId } = ctx.session.user;
    const { id } = ctx.request.body;
    const [ friend ] = await db.query(`
        select 
        friends_table.id as id, 
        users_table.id as userId, 
        name, 
        nickName, 
        avatar,
        remarkName
        from friends_table left join users_table on friends_table.toId = users_table.id 
        where friends_table.id = ? and fromId = ? and friends_table.isValid = 1;`, [id, userId])
    console.log(friend); 
    ctx.body = {status: 200, result: friend};
};

// 更新好友
exports.update = async (ctx, next) => {
    const { id: userId } = ctx.session.user;
    const { remarkName, id } = ctx.request.body;
    await db.query('update friends_table set remarkName = ? where id = ? and fromId = ? and isValid = 1;', [remarkName, id, userId]);
    ctx.body = {status: 200, result: ""};
};