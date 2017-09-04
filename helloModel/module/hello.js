/*exports.world = function() {
	console.log("Hello World!");
}*/

/*function Hello() {
	var name;
	this.setName = function(thyName) {
		name = thyName;
	};
	this.getName = function() {
		console.log("Hello " + name);
	};
}
module.exports = Hello;*/

//找出浏览器请求的url路径
var http = require("http");
var url = require("url");

function start() {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for" + pathname + "received");
		response.writeHead(200,{"Context-Type":"text/plain"});
		response.write("Hello World!");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}

exports.start = start;
