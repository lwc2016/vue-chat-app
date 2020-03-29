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
        friends_table.createdTime as createdTime
        from friends_table left join users_table on friends_table.toId = users_table.id where fromId = ? and friends_table.isValid = 1;`, [ userId ]);
    ctx.body = {status: 200, result: list};
};