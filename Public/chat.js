var socket = io.connect('http://localhost:4000');

//Query Dom

var message=document.getElementById('message'),
    handle=document.getElementById('handle'),
    button=document.getElementById('send'),
    output=document.getElementById('output'),
    feedback=document.getElementById('feedback');

//Emit events
 button.addEventListener('click', function(){
   socket.emit('chat', {
     message : message.value,
     handle : handle.value
   });
 });

 message.addEventListener('keypress',function(){
   socket.emit('typing',handle.value);
 });

 //listen to events

 socket.on('chat', function(data){
   output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
 });

socket.on('typing', function(data){
  feedback.innerHTML = '<p><em>' + data+ 'is typing a message...</p></em>';
})
