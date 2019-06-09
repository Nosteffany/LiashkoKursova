var port = 8000
var express = require('express');
var app = express();
<<<<<<< HEAD
// var socket = require('socket.io')

var server = app.listen(port, function(){
    console.log('listening for requests on port 8000,');
});

// let io = socket(server)
// io.on('connection', function(socket){
//   console.log(`${socket.id} is connected`);
// });
=======
var socket = require('socket.io')

var server = app.listen(port, function(){
    console.log('listening for requests on port 4000,');
});

let io = socket(server)
io.on('connection', function(socket){
  console.log(`${socket.id} is connected`);
});
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782

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



<<<<<<< HEAD
// function randomInt (low, high) {
//     return Math.floor(Math.random() * (high - low) + low);
// }
=======
server.lastPlayerID = 0;

io.on('connection',function(socket){

  socket.on('newplayer',function(){
      socket.player = {
            id: server.lastPlayerID++,
            x: randomInt(100,400),
            y: randomInt(100,400)
        };
      socket.emit('allplayers',getAllPlayers());
      socket.broadcast.emit('newplayer',socket.player);

      socket.on('disconnect',function(){
          io.emit('remove',socket.player.id);
      });
  });
});

function getAllPlayers(){
    var players = [];
    Object.keys(io.sockets.connected).forEach(function(socketID){
        var player = io.sockets.connected[socketID].player;
        if(player) players.push(player);
    });
    return players;
}

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782
