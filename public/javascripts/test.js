function init() {

socket = io.connect();
socket.on('connect', function(data) {
	socket.emit('send-data', 'lol');
});

socket.on('data-rec', function(data) {
//		$('lox').prepend(data.mess);
	$('#lox').prepend(data.username);
});

}

$(document).ready(init);

