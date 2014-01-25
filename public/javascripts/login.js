function init() {

socket = io.connect();


socket.on('connect', function() {
		

	});


socket.on('message', function(data) {
			
				$('#message').html(data.msg);
			});
		

	

	
		$('#best input').keyup(function() {
		var empty = false;
		$('#best input').each(function() {
			
		if($(this).val().length == 0) {
			empty = true;
			
	} });
	
	if(empty) {
		$('#sendLogin').attr('disabled', 'disabled');
	} else {
		$('#sendLogin').attr('disabled',false);
	}
	
	
});










$('#sendLogin').click(function() {
	
	username = $('#username').val();
	password = $('#password').val();

	socket.emit('check-login', { user: username, pass: password});


});



	
}
$(document).ready(init);
