// 用户控制器
const db = require("../config/db");
const generatePassword = require("../utils/generatePassword");

// 登录
exports.login = async (ctx, next) => {
    const { name, password } = ctx.request.body;
    const _password = generatePassword(password);
    const [ user ] = await db.query("select id, name, nickName, avatar, remarks, createdTime from users_table where name = ? and password = ?", [name, _password]);
    if(user){
        ctx.session.user = user;
        ctx.body = {status: 200, result: user, message: ""};
    }else{
        ctx.body = {status: 400, result: "", message: "用户名或密码错误！"};
    }
};

// 注册
exports.register = async (ctx, next) => {
    const { name, nickName, password } = ctx.request.body;
    const _password = generatePassword(password);
    const [ user ] = await db.query("select * from users_table where isValid = 1 and name = ?;", [ name ]);
    if(user){
        return ctx.body = {status: 400, message: "用户名已经存在！"};
    }
    await db.query("insert into users_table (name, nickName, password) values (?, ?, ?);", [name, nickName, _password]);
    ctx.body = {status: 200, result: "", message: ""};
};

// 获取用户详情
exports.info = async (ctx, next) => {
    const { id: userId } = ctx.session.user;
    const [ user ] = await db.query("select id, name, nickName, avatar, remarks, createdTime from users_table where isValid = 1 and id = ? ;", [ userId ]);
    ctx.body = {status: 200, result: user, message: ""}
};

// 用户详情
exports.detail = async (ctx, next) => {
    const { id: userId } = ctx.request.body;
    const [ user ] = await db.query("select id, name, nickName, avatar, remarks, createdTime from users_table where isValid = 1 and id = ? ;", [ userId ]);
    ctx.body = {status: 200, result: user, message: ""};
};

// 更新用户
exports.update = async (ctx, next) => {
    const { id: userId } = ctx.session.user;
    const { nickName, avatar, remarks } = ctx.request.body;
    const [ user ] = await db.query("select * from users_table where isValid = 1 and id = ?", [ userId ]);
    await db.query("update users_table set nickName = ?, avatar = ?, remarks = ? where isValid = 1 and id = ?", [ 
        nickName || user.nickName, 
        avatar || user.avatar, 
        remarks || user.remarks,
        userId
    ]);
    ctx.body = {status: 200, result: "", message: ""};
};