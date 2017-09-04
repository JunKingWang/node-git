/*var server = require("./server");
var router = require("./route");

server.start(router.route);*/

/*//输出绝对路径文件名
console.log( __filename );
//输出目录
console.log(__dirname);
//延迟输入
function printHello() {
	console.log("Hello World");
}
var t = setTimeout(printHello, 2000);
clearTimeout(t);//没有输出延迟的内容，在延迟前
//循环执行
// setInterval(printHello, 2000);
// console.error("error");
console.time(new Date());*/

process.stdout.write("Hello World!");

process.argv.forEach(function(val, index, array) {
	console.log(index + ":" + val);
});

console.log(process.execPath);
console.log(process.platform);
console.log("当前目录：" + process.cwd());
console.log("当前版本：" + process.version);
console.log(process.memoryUsage());