/*var fs = require("fs");

fs.readFile('input.txt', function(err, data) {
	if(err) {
		return console.error(err);
	}
	console.log('异步读取：' + data.toString());
});

var data = fs.readFileSync("input.txt");
console.log("同步读取：" + data.toString());

console.log("程序执行完毕。");*/

/*var fs = require("fs");
console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
	if(err) {
		return console.log(err);
	}
	console.log("打开文件成功！");
});*/

/*var fs = require("fs");
console.log("准备打开文件！");
fs.stat('input.txt', function(err, data) {
	if(err) {
		return console.log(err);
	}
	console.log(data);
	console.log("读取文件信息成功！");
	console.log("是否为文件(isFile)?" + data.isFile());
	console.log("是否为目录(isDirectory)?" + data.isDirectory());
});*/

/*var fs = require("fs");
console.log("准备写入文件");
fs.writeFile("input.txt","我是通过写入的文件内容", function(err){
	if(err) {
		return console.log(err);
	}
	console.log("写入成功！");
});
console.log("-----------我是分割线-----------")
console.log("读取写入的数据！");
fs.readFile("input.txt", function(err, fd) {
	if(err) {
		return cnosole.log(err);
	}
	console.log("异步读取文件数据" + fd.toString());
});
*/

var fs = require("fs");
var buf = new Buffer(1024);
console.log("准备打开已存在的文件！");
fs.open("input.txt", "r+", function(err, fd) {
	if(err) {
		console.log(err);
	}
	console.log("文件打开成功！");
	console.log("准备读取文件！");
	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
		if(err) {
			return console.log(err);
		}
		console.log(bytes + "字节被读取");
		if(bytes > 0) {
			console.log(buf.slice(0, bytes).toString());
		}
	});
});
