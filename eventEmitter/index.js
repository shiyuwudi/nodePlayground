var events = require("events");
var eventEmitter = new events.EventEmitter();
// 会依次调用监听者
eventEmitter.on("some_event", function (arg1, arg2) {
    console.log("111", arg1, arg2);
});
eventEmitter.on("some_event", function (arg1, arg2) {
    console.log("222", arg1, arg2);
});
setTimeout(function () {
    eventEmitter.emit("some_event", "参数1", "参数2");
}, 3000);