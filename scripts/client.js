"use strict";

var Client = {};
Client.socket =  io.connect();

Client.askNewPlayer = function(){
  Client.socket.emit('newplayer');
}

Client.socket.on('newplayer',function(data){
    Project.addNewPlayer(data.id,data.x,data.y);
});

Client.socket.on('allplayers',function(data){
    console.log(data);
    for(var i = 0; i < data.length; i++){
        Project.addNewPlayer(data[i].id,data[i].x,data[i].y);
    }
});

Client.socket.on('remove',function(id){
    Project.removePlayer(id);
});
