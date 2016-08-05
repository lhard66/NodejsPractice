var http=require('http');
var formidable=require('formidable');
var util=require('util');

http.createServer((req,res)=>{
    if(req.url=='/upload'&&req.method.toLowerCase()=='post'){
        var form=new formidable.IncomingForm();
        form.uploadDir='X:/Users/HeroLiu/Desktop/资料夹/uploads';
        form.encoding='utf-8';
        form.parse(req,(err,fields,files)=>{
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: files}));
        });
    }
}).listen(3000,"localhost");