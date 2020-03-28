const Validator = require("standard-validator");
const { promisify } = require("util");
module.exports = (rules) => async (ctx, next) => {
    const validator = new Validator(ctx.request.body, rules);
    const promisifyValidator = promisify(validator.validate);
    try{
        await promisifyValidator.call(validator);
    }catch(error){
        ctx.body = {
            status: 400,
            message: Object.values(error)[0] 
        }
        return null;
    }
    await next();
};