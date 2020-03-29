const WebSocket = require("ws");
const cookieParser = require("./utils/cookieParser");
const store = require("./store");

module.exports = (server, app) => {
    const websocket = new WebSocket.Server({ server });
    server.keys = app.keys;

    websocket.on("connection", function(socket, request){
        console.log('有客户端连接了');

        // 获取用户的id
        const { uid } = cookieParser(request.headers.cookie);
        // 将用户存储到store中
        if(uid) store.set(uid, socket);
        console.log('当前在线客户：', store.size, store.keys());

        socket.on("message", function(message){
            console.log("客户端说:", message);
            // 解析数据
            const data = JSON.parse(message);
            data.fromId = uid;
            data.createdTime = new Date().getTime();
            // 将数据发送给自己
            socket.send(JSON.stringify(data));
            // 将数据发送给好友
            const friendWs = store.get(data.toId);
            if(friendWs) friendWs.send(JSON.stringify(data));
        })

        socket.on("close", function(){
            console.log("有客户端断开连接了");
            store.delete(uid);
            console.log('当前在线客户：', store.size, store.keys());
        })

    })
};