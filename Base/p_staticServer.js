var http = require("http");
var path = require("path");
var fs = require("fs");

http.createServer(function (req, res) {
    if (req.url == "/favicon.ico") {
        return;
    }
    //得到文件名和文件扩展名
    var pathName = path.parse(req.url).base;
    //如果pathName为空，则跳到首页
    if (pathName == "") {
        pathName = "index.html";
    }
    var fileExt = path.extname(pathName);
    //读取文件
    //var mime=getMine(fileExt);
    //console.log(mime);
    fs.readFile("./DemoResource/" + pathName, (err, data)=> {
        if (err) {
            fs.readFile("./DemoResource/404.html", (err, data)=> {
                res.writeHead(404, {"Content-type": "text/html;charset=UTF8"});
                res.end(data);
            });
            return;
        }
        //避免出现异步调用不同步问题
        getMine(fileExt, function (mime) {
            res.writeHead(200, {"Content-type": mime});
            console.log(mime);
            res.end(data);
        })
    });
}).listen(3000, "localhost");

function getMine(extname, callback) {
    /*传统写法
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
     */
    //读取文件写法
    fs.readFile("./mime.json", function (err, data) {
        if (err) {
            throw Error("找不到文件");
        }
        var mimeJson = JSON.parse(data);
        //回调函数，即执行29行代码
        callback(mimeJson[extname]);
    })
}