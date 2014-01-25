function init() {













socket = io.connect();

//socket.emit('ready', room);


socket.on('connect', function(data) {
		socket.emit('connected', {user: $('#usern').val() });
		
	
});

socket.on('answer-me', function(data) {
	socket.emit('pong', { user: $('#usern').val() });
});

	

socket.on('incomingMessage', function(data) {
	var dat = new Date();
	
	$('#divino').prepend(dat.getHours() + ':' + dat.getMinutes() + ':' + dat.getSeconds() + ' << ' + data.username + ' <> ' + data.message + '\r\n');
	
});

socket.on('usersOnline', function(data) {
		var users = '';
		
		for(i in data.names) {
			
			users += data.names[i] + '<br /> ';
		}
		
		

	$('#usersOnline').html(users);
	

})
function sendMessage() {
	var oMessage = $('#message').val();
		$('#message').val('');
		var time = new Date();
		var tiss = time.getMinutes();
		
		
		socket.emit('sendchat', {msg: oMessage, usern: $('#usern').val(), tt: tiss });		
}


 $('#message').on('keydown', function(e) {
	if(e.which == 13) {
		e.preventDefault();
		if($('#message').val().trim().length <= 0) {
			return;
		}
		sendMessage();
		$('#message').val('');
}
});
socket.on('dc', function() {
	window.location.assign('/auth');
});

	$('#sendLogin').click(function(e) {
			username = $('#username').val();
			password = $('#password').val();
			
		});


$('#disconnect').click(function() {
	
	socket.emit('quik', {user: $('#usern').val() });
});
}
$(document).ready(init);

