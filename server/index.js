const http = require("http");
const app = require("./app");
const websocket = require("./websocket");

const server = http.createServer(app.callback());
websocket(server, app);

// 启动服务
server.listen(3030, () => {
    console.log("server is running at port: 3030");
})