var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
//cookie要使用此中间件
app.use(cookieParser());

app.get('/city', (req, res)=> {
    //获得url参数
    var name = req.query.name;
    //得到cookie信息
    var footpoint = (req.cookies.city || '起始地') + '-->' + name;

    //var footpoint = footpoint + '-->' + name;
    res.cookie('city', footpoint, {maxAge: 10000, httpOnly: true});
    res.send('this city name:' + name);
});

app.get('/', (req, res)=> {
    var footpoint = req.cookies.city;
    console.log(footpoint);
    res.send(footpoint);
});

app.get('/clear', (req, res)=> {
    res.clearCookie('name');
    res.send('clear cookie');
});

app.listen(3000);