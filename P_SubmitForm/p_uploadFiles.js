var http = require('http');
var formidable = require('formidable');
var util = require('util');
var path = require('path');
var fs = require('fs');
var sd = require('silly-datetime');

http.createServer((req, res)=> {
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {

        var form = new formidable.IncomingForm();
        form.uploadDir = 'X:\\Users\\HeroLiu\\Desktop\\资料夹\\uploads';
        form.encoding = 'utf-8';
        form.parse(req, (err, fields, files)=> {
            //改名
            var extName = path.extname(files.uploadFilesCtrl.name);
            var oldPath = files.uploadFilesCtrl.path;
            var newDir = path.dirname(files.uploadFilesCtrl.path);
            //构建名字
            var dateName = sd.format(new Date(), 'YYYYMMDDHHmmss');
            var ran = parseInt(Math.random() * 89999 + 10000);

            var newPath = newDir + '\\' + dateName +'_'+ ran + extName;
            console.log(oldPath);
            console.log(newPath);

            fs.rename(oldPath, newPath, err=> {
                if (err) {
                    throw error('rename fail');
                }
                res.writeHead(200, {'content-type': 'text/plain'});
                res.end('success!!!');
            });

            //res.write('received upload:\n\n');
            //res.end(util.inspect({fields: fields, files: files}));

        });
    }
}).listen(3000, "localhost");