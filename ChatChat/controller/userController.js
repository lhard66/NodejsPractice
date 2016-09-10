var formidable = require('formidable');
var dbhelper = require('./dbhelper.js');

exports.showLogin = ((req, res)=> {
    res.render('login');
});

exports.doLogin = ((req, res)=> {
    var form = formidable.IncomingForm();
    form.parse(req, (err, fields)=> {
        dbhelper.find('users', fields, '', (err, docs)=> {
            console.log(docs);
            console.log(docs.length);
            if(docs.length){
                res.send('success');
            }else {
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
        dbhelper.insertDocuments('users', fields, (err, result)=> {
            if (err) {
                console.log('err: usecontroller dologin insertdocuments');
                res.render('404');
                return;
            }
            res.send(result);
        });
    });
});