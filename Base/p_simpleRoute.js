var http=require("http");
var url=require("url");
http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/html;chareset=UTF8"});
	var urlPath=req.url;
	res.write(urlPath);
	if(/^\/student\/\d{6}$/.test(urlPath)){
		var num=urlPath.substr(9);
		res.write("<br/>学号："+num);
	}
	else if(/^\/teacher\/\d{5}$/.test(urlPath)){
		var num=urlPath.substr(9);
		res.write("<br/>工号："+num);
	}
	else{
		res.write("<br/>没有！");
	}
	res.end("<br/>end!");
}).listen(3000,"localhost");