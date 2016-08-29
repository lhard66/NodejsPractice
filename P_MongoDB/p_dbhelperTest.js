var express = require('express');
var dbhelper = require('./dbhelper');

var app = express();


app.get('/', (req, res)=> {
    dbhelper.test()
    res.send('connect success!');
});

app.get('/add', (req, res)=> {
    dbhelper.insertDocuments('teacher', [
        {a: 1, name: "jim"}, {b: 2, name: "lucy"}, {c: 3, name: "tom"}
    ], (err, result)=> {
        if (err) {
            res.send('add err');
            return;
        }
        res.send(result);
    });
});

app.get('/del', (req, res)=> {
    dbhelper.deleteOne('teacher', {borough: "Bronx"}, (err, result)=> {
        if (err) {
            res.send('/del err');
            return;
        }
        res.send(result);
    });
});

app.get('/delmany', (req, res)=> {
    dbhelper.deleteMany('teacher', {c: 3}, (err, result)=> {
        if (err) {
            res.send('delMany err');
            return;
        }
        res.send(result);
    });
});

app.get('/update', (req, res)=> {
    dbhelper.updateMany('teacher', {a: 1}, {name: "lhard"}, {upsert: true}, (err, result)=> {
        if (err) {
            console.log('update err');
            return;
        }
        res.send(result);
    });
});

app.get('/findAll', (req, res)=> {
    dbhelper.find('teacher', {}, {skip: 1, limit: 3, sort: {"name": 1}}, (err, docs)=> {
        if (err) {
            console.log('findall err');
            return;
        }
        res.send(docs);
    });
});

app.get('/findid', (req, res)=> {
    dbhelper.find('teacher', {name: 'lhard'}, (err, docs)=> {
        if (err) {
            console.log('findid err');
            return;
        }
        res.send(docs);
    });
});
app.listen(3000);