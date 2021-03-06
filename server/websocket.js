const WebSocket = require("ws");
const cookieParser = require("./utils/cookieParser");
const { mainClient, subscribeClient } = require("./config/redis");
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
        // 判断用户是否有缓存的消息
        mainClient.llen(`chat-app-${uid}-messages`, (err, data) => {
            if(data >= 0){
                for(let i = 0; i < data; i ++){
                    mainClient.lpop(`chat-app-${uid}-messages`, (err, data) => {
                        socket.send(data);
                    })
                }
            }
        })

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
            if(friendWs){
              // 如果用户在线，则直接发送给用户
              friendWs.send(JSON.stringify(data));
            } else {
              // 否则存储到缓存中
              mainClient.lpush(`chat-app-${data.toId}-messages`, JSON.stringify(data));
            }
        })

        socket.on("close", function(){
            console.log("有客户端断开连接了");
            store.delete(uid);
            console.log('当前在线客户：', store.size, store.keys());
        })
    })

    // 使用redis进行监听
    subscribeClient.subscribe("invitation")
    subscribeClient.on("message", function(chanel, message){
        if(chanel === 'invitation'){
            const { toId } = JSON.parse(message);
            const clientSocket = store.get(String(toId))
            if(clientSocket){
               // 如果用户在线，则直接发送给用户
               clientSocket.send(message);
            }else{
               // 否则存储到缓存中
               mainClient.lpush(`chat-app-${toId}-messages`, message);
            }
        }
        console.log(message);
    })
};