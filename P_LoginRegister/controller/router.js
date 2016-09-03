var user = require('./userController'),
    http = require('http'),
    formidable = require('formidable');


exports.register = (req, res)=> {
    user.showRegister((name)=> {
        res.render(name);
    })
}

exports.doRegister = (req, res)=> {
    var form = new formidable.IncomingForm();
    //接收表单
    form.parse(req, (err, fields)=> {
        if (err) {
            console.log('doregister err');
            return;
        }
        //传入json，写入数据库
        user.writeRegister(fields, result=> {
            if (result == -1) {
                res.send('注册失败！');
            } else {
                res.send('注册成功！');
            }
        });
    });
}

exports.doLogin = (req, res)=> {
    var form = new formidable.IncomingForm();
    //接收表单
    form.parse(req, (err, fields)=> {
        if (err) {
            console.log('router dologin parse err');
            return;
        }
        user.existLogin(fields, docs=> {
            console.log(docs);
            if (docs == -1 || docs.length < 1) {
                //登陆失败
                console.log('router dologin existlogin err');
                res.send('登陆失败！');
                //console.log(docs);
                return;
            }else {
                //记录session
                res.send('登陆成功！');
            }
        });
    });
}

exports.login = (req, res)=> {
    user.showLogin((name)=> {
        res.render(name);
    });
}

exports.content=(req,res)=>{
    user.content((name)=>{
        res.render(name);
    });
}
