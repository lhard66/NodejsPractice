/**
 * Created by HeroLiu on 08/08/2016.
 */
var http = require('http');
var express = require('express');
var bodyparser=require('body-parser');

var fs = require('fs');

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

//post请求
app.set('view engine', 'ejs');//设置模版引擎

app.get('/form', (req, res)=> {
    fs.readFile('./p_base.ejs', (err, data)=> {
        if (err) {
            res.send('error');
        }
        res.send(data.toString());
    });
});

//用于接收类型为www-form-urlencoded的post请求的Server
app.use(bodyparser.urlencoded({
    extended:true
}));
app.post('/form', (req, res)=> {
    var body = req.body;
    console.log(body);
    res.send(body.name);
    //res.send('ths is post,name is ' + name);
});
app.listen(3000);

