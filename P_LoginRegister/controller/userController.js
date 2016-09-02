
//处理控制注册业务
exports.showRegister=(callback)=>{
    callback('register');
}

exports.writeRegister=(namejson,callback)=>{
    //解析json写入数据库
    callback(namejson);
}