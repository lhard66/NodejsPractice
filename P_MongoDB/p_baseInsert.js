var express = require('express');
var mongoClient = require('mongodb').MongoClient;

var app = express();
var dburl='mongodb://localhost:27017/test';

app.get('/', (req, res)=> {
    mongoClient.connect(dburl,(err,db)=>{
        var collection = db.collection('array');
        collection.insertMany([
            {a: 1, b: 2, c: 3, d: 4}
        ], (err, result)=> {
            if (err) {
                console.log('error');
            }else {
                console.log('ok');
            }
            res.send('end');
        });
        db.close();
    });
});

app.listen(3000);