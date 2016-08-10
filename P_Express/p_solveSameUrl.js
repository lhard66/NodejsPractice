/**
 * Created by HeroLiu on 08/10/2016.
 */
var express = require('express');

var app = express();

app.get('/:name/:id', (req, res,next)=> {
    var name = req.param('name');
    var id = req.param('id');
    if(name=='admin'&&id=='login'){
        next();
    }else {
        res.send('name = ' + name + "---id = " + id);
    }
});

app.get('/admin/login',(req,res)=>{

    res.send('admin/login');
});

app.listen('3000');