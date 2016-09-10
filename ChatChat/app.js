var express = require('express');
var userController = require('./controller/userController.js');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res)=> {
    res.send('aaaaaaaaaa');
});

app.get('/login', userController.showLogin);

app.post('/dologin', userController.doLogin);

app.get('/register',userController.showRegister);

app.post('/doregister',userController.doRegister);

app.use((req,res)=>{
   res.send('404');
});
app.listen(3000);