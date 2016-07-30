var http=require("http");
var fs=require("fs");
var url=require("url");

//读取文件和文件夹
http.createServer(function(req,res){
	if(req.url=="/favicon.ico"){
		return;
	}	
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
	//获得文件夹和文件		
	fs.readdir("./DemoResource",function(err,files){
		//console.log(files);
		var folders=[];
		(function iterator(i){
			if(i==files.length){
				console.log(folders);
				return;
			}
			fs.stat("./DemoResource/"+files[i],function(err,stats){
				if(stats.isDirectory()){
					folders.push(files[i]);
				}
				iterator(i+1);
			});
		})(0);
	});
	res.end("end");
}).listen(3000,"localhost");