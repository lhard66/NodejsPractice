/**
 * Created by HeroLiu on 08/08/2016.
 */
var http = require('http');
var express = require('express');

var app = express();

//基础用法
app.get('/', (req, res)=> {
    res.send('hello ltq world');
});
//带参数，http://localhost:3000/student/111033/jim
//输出：id = 111033---name = jim
app.get('/student/:id/:name', (req, res)=> {
    var id = req.params['id'];
    var name = req.params['name'];
    var reg = /^\d{6}$/;
    if (reg.test(id)) {
        res.send('id = ' + id + '---name = ' + name);
    } else {
        res.send('id error');
    }
});

//！！！注意此处post请求失败！！！
//post请求
app.set('view engine','ejs');//设置模版引擎
app.post('/',(req,res)=> {
    console.log('post');
    res.send('ths is post');
});
app.listen(3000);

