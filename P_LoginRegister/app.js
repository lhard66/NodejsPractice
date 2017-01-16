var express = require('express');
var router = require('./controller');
var session = require('express-session');

var app = express();

//设置session中间件
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');

app.get('/register', router.register);

app.post('/doRegister', router.doRegister);

app.get('/login', router.login);

app.post('/doLogin', router.doLogin);

app.get('/test', router.content);

app.listen(3001);