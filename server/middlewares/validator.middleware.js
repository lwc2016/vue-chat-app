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
            message: error
        }
        return null;
    }
    await next();
};