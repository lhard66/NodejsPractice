/**
 * Created by HeroLiu on 08/15/2016.
 */
var express=require('express');
var router=require('./controller');
var fs=require('fs');
//var favicon=require('serve-favicon');

var app=express();

//设置模板引擎
app.set('view engine','ejs');

//路由中间件
//静态页面
app.use(express.static('./public'));
app.use(express.static('./uploads'));

//首页
app.get('/',router.showIndex);
//处理相册
app.get('/album/:name',router.showAlbum);
//上传页面显示
app.get('/upload',router.uploadShow);
//上传图片
app.post('/uploadres',router.uploadRes);
//删除文件夹
app.get('/delfolder',router.delFolder);
//favicon
app.get('/favicon.ico',router.favicon);
//404
app.use((req,res)=>{
    res.render('err');
})

app.listen(3000);