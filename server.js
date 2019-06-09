var port = 8000
var express = require('express');
var app = express();
// var socket = require('socket.io')

var server = app.listen(port, function(){
    console.log('listening for requests on port 8000,');
});

// let io = socket(server)
// io.on('connection', function(socket){
//   console.log(`${socket.id} is connected`);
// });

app.use('/scripts', express.static(__dirname + '/scripts'));//Serving static files
app.use('/assets',express.static(__dirname + '/assets'));
app.use('/music',express.static(__dirname + '/music'));
app.use('/phaser.js',express.static(__dirname + '/phaser.js'));
// app.listen(port, function(){
//   console.log("Server running at: http://localhost:" + port)
// });

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index1.html');
});



// function randomInt (low, high) {
//     return Math.floor(Math.random() * (high - low) + low);
// }
