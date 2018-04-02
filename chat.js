// Make connection
var socket = io.connect('http://localhost:4000');

// query DOM
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      button = document.getElementById('button');

//Emit events
btn.addEventListener('click', function(){
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
    message.value = "";
});

// listening for event
socket.on('chat', function(data){
  output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

button.addEventListener('click', function(){
  socket.emit('trykknap');
  console.log('hejmeddig');
})
