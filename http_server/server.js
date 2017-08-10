var http = require("http");
http.createServer(function(req, resp){
    console.log(req.url);
    resp.writeHead(200, {"Content-Type": "text/plain"});
    resp.end("Hello World\n");
}).listen(8888);
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');