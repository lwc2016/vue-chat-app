module.exports = () => async (ctx, next) => {
    try{
        await next();
    }catch(error){
        ctx.body = {status: 500, result: "", message: "服务器内部错误！"};
    }
}; 