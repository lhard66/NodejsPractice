var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/', (req, res)=> {
    res.send('aaaaaaaaaa');
});

app.get('/login', (req, res)=> {
    res.render('login');
});
app.listen(3000);