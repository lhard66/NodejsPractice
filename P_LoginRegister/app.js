var express = require('express');
var router = require('./controller');

var app = express();

app.set('view engine', 'ejs');

app.get('/register', router.register);

app.post('/doRegister', router.doRegister);

app.get('/login', router.login);

app.post('/doLogin', router.doLogin);

app.get('/test',router.content);

app.listen(3000);