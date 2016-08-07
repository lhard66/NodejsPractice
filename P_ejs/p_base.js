/**
 * Created by HeroLiu on 08/07/2016.
 */
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer((req, res)=> {
    fs.readFile('./p_template.ejs', (err, data)=> {
        var template = data.toString();
        var dictionary = {
            version: 6,
            news: ['good', 'study', 'day', 'up']
        };
        var html = ejs.render(template, dictionary);

        res.writeHead(200, {'Content-type': 'text/html;charset=UFT8'});
        res.end(html);
    });

}).listen(3000, 'localhost');
