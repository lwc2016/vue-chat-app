const session = require("koa-session");

module.exports = (app) => {
    // session
    app.keys = ['some secret hurr'];
    const CONFIG = {
        key: 'koa:sess', 
        maxAge: 86400000,
        autoCommit: true, 
        overwrite: true, 
        httpOnly: true, 
        signed: true, 
        rolling: false,
        renew: false,
        sameSite: null,
    };
    return session(CONFIG, app);
};