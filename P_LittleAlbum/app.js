/**
 * Created by HeroLiu on 08/15/2016.
 */
var express=require('express');
var router=require('./controller');

var app=express();

//设置模板引擎
app.set('view engine','ejs');

//路由中间件
//静态页面
app.use(express.static('./public'));
//首页
app.get('/',router.showIndex);

app.listen(3000);