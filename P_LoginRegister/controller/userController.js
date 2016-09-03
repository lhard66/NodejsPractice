var dbhelper = require('../dal/dbhelper.js');

//处理控制注册业务
exports.showRegister = (callback)=> {
    callback('register');
}

exports.writeRegister = (userjson, callback)=> {
    //写入数据操作
    dbhelper.insertDocuments('user', [userjson], (err, result)=> {
        if (err) {
            console.log('insertDocument err');
            callback(-1);
            return;
        }
        callback(result);
    });
}

exports.showLogin = (callback)=> {
    callback('login');
}

exports.existLogin = (userjson, callback)=> {
    //查询数据，返回登陆是否成功
    dbhelper.find('user', userjson, {}, (err, docs)=> {
        if(err){
            console.log('dologin err');
            callback(-1);
            return;
        }
        callback(docs);
    });
}

exports.content=(callback)=>{
    callback('content');
}