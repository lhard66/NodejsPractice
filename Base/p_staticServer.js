var http=require("http");
var path=require("path");
var fs=require("fs");

http.createServer(function(req,res){
	if(req.url=="/favicon.ico"){
		return;
	}	
	//得到文件名和文件扩展名
	var pathName=path.parse(req.url).base;
	var fileExt=path.extname(pathName);
	//如果pathName为空，则跳到首页
	if(pathName==""){
		pathName="index.html";
	}
	//读取文件
	res.writeHead(200,{"Content-type":getMine(fileExt)});
	fs.readFile("./DemoResource/"+pathName,(err,data)=>{
		if(err){
			fs.readFile("./DemoResource/404.html",(err,data)=>{
				res.writeHead(404,{"Content-type":"text/html;charset=UTF8"});
				res.end(data);
			});
			return;
		}
		res.end(data);
	});		
}).listen(3000,"localhost");

function getMine(extname){
	var type="text/html";
	switch(extname){
		case ".jpg":
			type="image/jpg";
			break;
		case ".html":
			type="text/html";
			break;

	}
	return type;
}