var events = require("events");
var eventEmitter = new events.EventEmitter();

// 创建事件处理方法
var connectHandler = function connected() {
    console.log("连接成功");
    eventEmitter.emit("data_received");
}
// 绑定事件
eventEmitter.on("connected", connectHandler);
// 绑定匿名函数
eventEmitter.on("data_received", function() {
    console.log("数据接收成功");
});
eventEmitter.emit("connected");
console.log("程序执行完毕");