/**
 * Created by HeroLiu on 08/05/2016.
 */
var http=require("http");
var querystring=require("querystring");

http.createServer((req,res)=>{
    //res.writeHead(200,{"Content-type":"text/html"});
    if(req.url=="/dopost"&&req.method.toLocaleLowerCase()=="post"){
        var alldata="";
        req.addListener("data",chunk=>{
           alldata+=chunk;
        });
        req.addListener("end",chunk=>{
            alldata+=chunk;
            var dataobj=querystring.parse(alldata.toString());
            console.log(dataobj);
            console.log(dataobj.name)
            res.end("end");
        });
    }
}).listen(3000,"localhost");
