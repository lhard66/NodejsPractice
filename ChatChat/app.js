var express = require('express');
var userController = require('./controller/userController.js');
var session = require('express-session');

var app = express();

//设置session中间件
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', userController.showIndex);
app.get('/index', userController.showIndex);

app.get('/login', userController.showLogin);

app.post('/dologin', userController.doLogin);

app.get('/register', userController.showRegister);

app.post('/doregister', userController.doRegister);

app.get('/test', userController.testLogin);


app.use((req, res)=> {
    res.send('404');
});
app.listen(3000);