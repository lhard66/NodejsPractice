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
//favicon图标
//app.use(favicon(__dirname + '/public/images/favicon.ico'));
//首页
app.get('/',router.showIndex);
//处理相册
app.get('/album/:name',router.showAlbum);

//404
app.use((req,res)=>{
    res.render('err');
})

app.listen(3000);