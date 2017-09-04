//使用require命令载入node自带的http模块，并将它赋值给http
var http = require("http");

//http.createServer()创建服务器 listen监听8888端口 通过request，response来接受和响应数据
http.createServer(function(request, response) {
	//发送http头部，头部状态为200:ok，响应类型为text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	//发送响应数据"Hello World!"
	response.end("Hello World!");
}).listen(8888);//监听8888端口

//在终端打印
console.log('Server running at http://127.0.0.1:8888/');