/**
 * Created by HeroLiu on 08/16/2016.
 */
var fs=require('fs');
var formidable=require('formidable');
var util=require('util');

exports.getAllAlbums=(callback)=>{
    //return ['小猫','小狗','小猪','小羊','小马','小牛','小蛇'];
    //读取uploads文件夹中的文件夹名
    fs.readdir('./uploads',(err,files)=>{
        if(err){
            //返回，回调函数
            return callback('找不到uploads文件夹。',null);
        }
        var albumNames=[];
        (function iterator(i) {
            //判断什么时候停止
            if(i==files.length){
                //返回，回调函数
                return callback(null,albumNames);
            }
            //判断是否是文件夹
            fs.stat('./uploads/'+files[i],(err,stats)=>{
                if(stats.isDirectory()){
                    albumNames.push(files[i]);
                }
                iterator(++i);
            });
        })(0);
    });
}
exports.getPicNames=(albumName,callback)=>{
    //这里的./uploads的.指的是app.js所在的目录
    fs.readdir('./uploads/'+albumName,(err,files)=>{
        callback(files);
    });
}
exports.uploadProcess=(req,res,callback)=>{
    var form=new formidable.IncomingForm();
    form.uploadDir ='./temp';

    form.parse(req,(err,fields,files)=>{
        callback(err,fields,files);
    });
}
















