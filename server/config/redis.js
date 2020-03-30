const redis = require("redis");
// 用户缓存
const mainClient = redis.createClient(6379, "localhost");
// 订阅
const subscribeClient = redis.createClient(6379, "localhost");
// 发布
const publishClient = redis.createClient(6379, "localhost");

module.exports = {
    mainClient,
    subscribeClient,
    publishClient
}
