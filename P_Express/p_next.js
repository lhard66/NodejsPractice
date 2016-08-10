/**
 * Created by HeroLiu on 08/10/2016.
 */
var express=require('express');

var app=express();

//静态服务
app.use('/static',express.static('./staticFiles'));

app.get('/nam',(req,res)=>{
    res.send('hello world');
});

app.use('/use',(req,res)=>{
    res.send('use method');
});

//404
app.use((req,res,err)=>{
   res.send('404');
});

app.listen(3000);