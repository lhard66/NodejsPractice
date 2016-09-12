var formidable = require('formidable');
var dbhelper = require('./dbhelper.js');
var tool = require('./tool.js');


exports.showIndex = ((req, res)=> {
    //拿到session，若为空则表示未登陆
    var uname = req.session.name || '游客';

    res.render('index', {
        name: uname
    });
});

exports.showLogin = ((req, res)=> {
    res.render('login');
});

exports.doLogin = ((req, res)=> {
    var form = formidable.IncomingForm();
    form.parse(req, (err, fields)=> {
        dbhelper.find('users', fields, '', (err, docs)=> {
            if (docs.length) {
                //记录session
                req.session.name = docs[0].name;
                res.render('index', {
                    name: req.session.name
                });
            } else {
                res.send('fail');
            }
        });
    });
});

exports.showRegister = ((req, res)=> {
    res.render('register');
});

exports.doRegister = ((req, res)=> {
    var form = formidable.IncomingForm();
    form.parse(req, (err, fields)=> {
        //MD5加密
        fields.pwd = tool.MD5(fields.pwd);
        dbhelper.insertDocuments('users', fields, (err, result)=> {
            if (err) {
                console.log('err: usecontroller dologin insertdocuments');
                res.render('404');
                return;
            }
            res.render('login');
        });
    });
});

exports.testLogin = ((req, res)=> {
    var pwd = tool.MD5('11');
    console.log(pwd);
});