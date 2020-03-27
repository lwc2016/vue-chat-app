const server = require("./server");

// 启动服务
server.listen(3030, () => {
    console.log("server is running at port: 3030");
})