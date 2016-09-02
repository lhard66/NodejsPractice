var user = require('./userController');


exports.register=(req,res)=>{
    user.showRegister((name)=>{
        res.render(name);
    })
}

exports.doRegister=(req,res)=>{
    var field=req.
    user.writeRegister((namejson)=>{
        //res.send(namejson);
    });
}