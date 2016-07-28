var socket = io();
var name = prompt('STATE YOUR NAME');
$('form').submit(function(){
    socket.emit('chat message', name +': ' + $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
