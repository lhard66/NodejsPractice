var http=require("http");
http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/html;chareset=UFT-8"});
	res.end("hello world!");
}).listen(3000 ,"localhost");