/**
 * Created by HeroLiu on 08/15/2016.
 */
var file = require('../models/file.js');
var fs = require('fs');
var formidable = require('formidable');
var util = require('util');

//得到相册内文件夹名字
exports.showIndex = (req, res)=> {
    // res.render('index',{
    //     'albums':file.getAllAlbums()
    // });
    //不使用上面的方式是因为：render是异步的，先通过回调函数得到文件夹名字后，再执行render
    file.getAllAlbums((err, albumNames)=> {
        if (err) {
            res.end(err);
            return;
        }
        res.render('index', {
            'albums': albumNames
        });
    });
}
//得到相册文件夹内文件，用于显示图片文件使用。
exports.showAlbum = (req, res)=> {
    var albumName = req.params['name'];
    file.getPicNames(albumName, (files)=> {
        res.render('album', {
            'picName': files,
            'albumName': albumName
        });
    });
}
//上传图片文件页面显示
exports.uploadShow = (req, res)=> {
    file.getAllAlbums((err, albumNames)=> {
        if (err) {
            res.end(err);
            return;
        }
        res.render('upload', {
            'albums': albumNames
        });
    });
}
//上传文件
exports.uploadRes = (req, res)=> {
    file.uploadProcess(req, res, (err, fields, files)=> {
        if (err) {
            console.log(err);
            res.render('err');
            return;
        }
        //修改文件名,并移动文件
        var oldpath = files.uploadFile.path;
        var randomPart = Math.floor(Math.random() * 10000);
        var newpath = './uploads/' + fields.albumName + '/' + Date.now() + '_' + randomPart + "_" + files.uploadFile.name;
        fs.rename(oldpath, newpath, (err)=> {
            if (err) {
                console.log(err);
            }
        });
        console.log(newpath);
        //输出信息
        var msg = '上传成功！文件夹名：' + fields.albumName;
        res.render('info', {
            'msg': msg
        });
    });
}
//favicon
exports.favicon = (req, res)=> {
    fs.readFile('./favicon.ico', (err, data)=> {
        if (err) {
            res.end();
            return;
        }
        res.send(data);
    });
}
//删除文件夹
exports.delFolder=(req,res)=>{
    var del= req.query;
    var folderPath='./uploads/'+del.delname;
    //得到文件夹中的文件
    var files= fs.readdirSync(folderPath);
    if(files.length<1){
        res.render('info',{
            'msg':'此文件夹不存在'
        });
    }
    //循环删除文件
    files.forEach(ele=>{
       fs.unlinkSync(folderPath+'/'+ele);
    });
    var nowfiles=fs.readdirSync(folderPath);
    //表示文件夹已清空
    if(nowfiles.length<1){
        fs.rmdirSync(folderPath);
    }
    res.render('info',{
        'msg':'已成功删除文件夹'
    });
}














