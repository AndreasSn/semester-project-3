
var express  = require('express');
var socket = require('socket.io');

// app setup
var app = express();
var server = app.listen(4000, function(){
  console.log('listening to request on port 4000');
});

// static files
app.use(express.static('public'));

// socker setup
var io = socket(server);

io.on('connection', function(socket){
  console.log('Made a socket connection ', socket.id);

    socket.on('chat', function(data){
      io.sockets.emit('chat', data);
      console.log('Du har trykket på knappen ');
    });

    socket.on('trykknap', function(){
      console.log('BUMS')
    })
});
