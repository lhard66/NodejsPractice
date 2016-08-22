var express=require('express');
var mongoClient=require('mongodb').MongoClient;

var app=express();
var dburl='mongodb://localhost:27017/test';

app.get('/',(req,res)=>{
   mongoClient.connect(dburl,(err,db)=>{
      if(err){
         res.send('error');
      }
      res.send('success');
      console.log(db);
      db.close();
   });
});

app.listen(3000);