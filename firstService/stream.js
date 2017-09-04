/*//从流中读取数据
var fs = require("fs");
var data = "";

//创建可读流
var readerStream = fs.createReadStream("input.txt");
//设置流编码
readerStream.setEncoding('UTF8');
//处理流事件
readerStream.on("data",function(chunk) {
	data += chunk;
});

readerStream.on("end", function() {
	console.log(data);
});

readerStream.on("error", function(err) {
	console.log(err.stack);
});

console.log("程序执行完毕");*/



/*//写入流
var fs = require("fs");
var data = "这是我自己的写入流";

//创建一个可以写入的流，写入到"input.txt"
var writerStream = fs.createWriteStream("input.txt");
//适应utf8写入数据
writerStream.write(data,"UTF8");
//标记文件末尾
writerStream.end();
//处理流事件
writerStream.on("finish", function() {
	console.log("写入完成");
});
writerStream.on("error", function(err) {
	console.log(err.stack);
});
console.log("程序执行完毕");*/

/*//管道流
var fs = require("fs");
var readStream = fs.createReadStream("input.txt");
var writeStream = fs.createWriteStream("output.txt");
readStream.pipe(writeStream);
console.log("程序执行完毕");*/

/*//压缩input.txt文件
var fs = require("fs");
var zlib = require("zlib");
fs.createReadStream("input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.txt.gz"));
console.log("文件压缩完成。");*/

var fs = require("fs");
var zlib = require("zlib");
fs.createReadStream("input.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("input.txt"));
console.log("文件解压完成。");
