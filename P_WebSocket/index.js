const express = require('express');
const app=express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

//定义静态资源文件地址，在html页面中引用
app.use(express.static('./node_modules'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('a user connected');
});

http.listen(3000, function() {
  console.log('watch 3000 port');
});
