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
//favicon图标
//app.use(favicon(__dirname + '/public/images/favicon.ico'));
//首页
app.get('/',router.showIndex);
//favicon.ico图标
// app.get('/favicon.ico',(req,res)=>{
//     fs.readFile('/favicon.ico',(err,data)=>{
//         res.writeHead(200,{"Content-type":"image/ico"});
//         res.send(data);
//     });
// });


app.listen(3000);