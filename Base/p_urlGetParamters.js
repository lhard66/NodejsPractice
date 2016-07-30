var http=require("http");
var url=require("url");

http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/html;chareset=UFT8"});
	var queryObj=url.parse(req.url,true).query;
	var name=queryObj.name;
	var age=queryObj.age;	
	res.end("hello world name:"+name+"---age:"+age);
}).listen(3000,"localhost");