var express=require('express');

var app=express();

app.get('/',(req,res)=>{
    res.send('end');
});

app.listen(3000);