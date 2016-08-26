var mongoClient = require('mongodb').MongoClient;
var setting = require('./setting.js');

function _connectDB(callback) {
    var dburl = setting.dburl;
    mongoClient.connect(dburl, (err, db)=> {
        callback(err, db);
    });
}
//插入一个或多个
exports.insertDocuments = function (collectionName, json, callback) {
    _connectDB((err, db)=> {
        if (err) {
            db.close();
            console.log('inserDocuments err');
            return;
        }
        var collection = db.collection(collectionName);
        collection.insertMany(json, (err, result)=> {
            callback(err, result);
            db.close();
        });
    });
}
//只删除一个
exports.deleteOne = function (collectionName, json, callback) {
    _connectDB((err, db)=> {
        if (err) {
            db.close();
            console.log('deleteOne err');
            return;
        }
        var collection = db.collection(collectionName);
        collection.deleteOne(json, (err, result)=> {
            callback(err, result);
            db.close();
        });
    })
}
//删除多个
exports.deleteMany = function (collectionName, json, callback) {
    _connectDB((err, db)=> {
        if (err) {
            db.close();
            console.log('deleteMany err');
            return;
        }
        var collection = db.collection(collectionName);
        collection.deleteMany(json, (err, result)=> {
            callback(err, result);
            db.close();
        });
    });
}
//更新一个或多个
exports.updateMany = function (collectionName, oldjson, newjson, optionjson, callback) {
    _connectDB((err, db)=> {
        if (err) {
            db.close();
            console.log('updateMany err');
            return;
        }
        var collection = db.collection(collectionName);
        collection.updateMany(oldjson, {$set: newjson}, optionjson, (err, result)=> {
            callback(err, result);
            db.close();
        });
    });
}
//查找,{}为查找全部
exports.find = function (collectionName, queryjson, callback) {
    _connectDB((err, db)=> {
        if (err) {
            db.close();
            console.log('findAll err');
            return;
        }
        var collection = db.collection(collectionName);
        collection.find(queryjson).toArray((err, docs)=> {
            callback(err, docs);
            db.close();
        });
    });
}

exports.test = function () {
    _connectDB((err, db)=> {
        if (err) {
            console.log('test_err');
        }
        console.log(db);
        db.close();
    });
}