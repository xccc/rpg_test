function init() {
	socket = io.connect();
var date = new Date();
date = date.getHours();
var e_len = 1;
$('#date').attr('value',date);
var e_rror = 1;
arr = ['#username', '#email', '#email2', '#password', '#password2'];
	

		arr.forEach(function(d, id) {
		//	console.log(d);
			$(d).blur(function() {
			//	if(
			console.log($(d).val());
			if($(d).val().length == 0) {
				
				$(this).next('p').html('Please fill it');
				console.log('Fill it cunt');
				e_len = 1;
				e_rror = 1;
			}else { $(this).next('p').html(''); e_len=0; e_rror = 0; }

			
			if(d == '#username') {
			
				socket.emit('check_user', {user: $(arr[0]).val()});
				socket.on('user-verif', function(data) {
					console.log(data.res);
					if(data.res != 1) {
						$('.username').html('Username is in use!');
						console.log('in use');
						e_rror=1;
				} 
			 })
			 if($(arr[0]).val().length < 3 && $(arr[0]).val().length != 0) {
				 $('.username').html('Username has to be at least 3 letters long');
				 e_rror = 1;
			 }
			if($(arr[0]).val().length >= 3 && $(arr[0]).val().match(/^[a-z0-9]+$/i) == null) {
					$('.username').html('Username contains invalid characters "A-z0-9"');
					console.log('mkm');
					e_rror = 1;
				} // else { $('.username').html(''); }e
			}
			//if(d == '#email' || d == '#email2') {
		if($(arr[1]).val().length && $(arr[2]).val().length && $(arr[1]).val() != $(arr[2]).val()) 	 {
			
			$('.email').html('Emails do NOT MATCH BITCH');
			e_rror = 1;
		} 
		
	 	  else if($(arr[1]).val().length && $(arr[2]).val().length != 0) {
			  socket.emit('check-email', {email: $('#email').val()});
			  socket.on('email-verif', function(data) {
				  if(data.res != 1) {
					  e_rror = 1;
					  $('.email').html('Email in use!');
					 } else { $('.email').html(''); e_rror = 0; }
				  })
				  
			
		}
		
		if($(arr[3]).val().length && $(arr[4]).val().length && $(arr[3]).val() != $(arr[4]).val()) {
				$('.password').html('Passwords do not match');
				e_rror = 1;
			}
		else if($(arr[3]).val().length && $(arr[4]).val().length != 0) {
				
				if($(arr[3]).val().length < 6 || $(arr[4]).val().length < 6) {
					
					$('.password').html('Password has to be at least 6 chars long');
					e_rror = 1;
				}
			
					else if($(arr[3]).val().match(/([0-9].*[A-Z])|([A-Z].*[0-9])/) == null) {
						$('.password').html('Password has to containt at least on number and capital letter.');
						e_rror = 1;
					}
			  } else if(e_rror != 1)  { $('#regi').attr('disabled', false); }
		// /([0-9].*[a-z])|([a-z].*[0-9])/
		})
		});
				


}

$(document).ready(init);
