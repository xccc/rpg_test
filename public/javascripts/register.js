var socket = io.connect();
function init() {
	
var e_rror = 0;
function uncheck() {
	$('#agree').attr('checked', false);
	$('#register').attr('disabled', true);
}
// $('#date').attr('value',date);


arr = ['username', 'email','email2','password','password2'];

var arr_r = {'username': false, 'email': false,'email2': false,'password': false,'password2': false};
var Register = function() {
}

Register.prototype.verif_reg = function(arr_lst, callback) {
	
	
	arr_lst.forEach(function(id) {
		
		callback(id);
		

})
}

Register.prototype.empty_fields = function(field_list) {
	
	this.verif_reg(field_list, function(id) {
		
		$('#'+id).blur(function() {
		if($('#'+id).val().length == 0) {
			$('.'+id).html('Please fill it.');
			arr_r[id] = false;
			uncheck();
		} else {
			arr_r[id] = true;
			$('.'+id).html('');
		}
		
	})
})

		

}

Register.prototype.user_validity = function() {

	console.log(arr_r['username']);
	
	$('#username').blur(function() {
	
	var username = arr_r['username'];
	if(username == true) {
		
		if($('#username').val().length < 3) {
			$('.username').html('Username has to be at least 3 chars long');
			arr_r['username'] = false;
			uncheck()
		}
		else if($('#username').val().match(/^[a-z0-9]+$/i) == null) {
			$('.username').html('Username contains invalid characters [a-z0-9]');
			arr_r['username'] = false;
			uncheck()
		}
	}
		socket.emit('check-user', { username: $('#username').val() });
		socket.on('user-verif', function(data) {
			
				if(data.res != 1) {
					$('.username').html('Username exists alredy, please choose another one.');
					arr_r['username'] = false;
					uncheck()
				} else { $('username').html('');
				arr_r['username'] = true;
			}
			})
		
		})
			
		
		
	

	
}
Register.prototype.verif_email = function() {
	var email_arr = ['email', 'email2'];
	this.verif_reg(email_arr, function(id) {
		$('#'+id).blur(function() {
			
				 if($('#email').val().length != 0 && $('#email').val().match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) == null) {
				$('.email').html('Invalid email addres');
				arr_r['email'] = false;
				arr_r['email2'] = false;
				uncheck()
			}
			else if($('#email').val().length != 0 &&  $('#email').val() != $('#email2').val()) {
			
				$('.email').html('E-mails do not match');
				arr_r['email'] = false;
				arr_r['email2'] = false;
				uncheck()
			
			}
			
			else if($('#email').val().length != 0) {
			socket.emit('check-email', {email: $('#email').val()});
			socket.on('email-verif', function(data) {
				if(data.res != 1) {
					$('.email').html('Email already exists');
					arr_r['email'] = false;
					arr_r['email2'] = false;
					uncheck()
				} else {
					$('.email').html('');
				arr_r['email'] = true;
				arr_r['email2'] = true;
			
			}
			
		})
	}
	
		})
	})
}

Register.prototype.check_password = function() {
	var password_arr = ['password','password2'];
	this.verif_reg(password_arr, function(id) {
		$('#'+id).blur(function() {
			
			if($('#password').val() != $('#password2').val()) {
				$('.password').html('Passwords do not match');
				arr_r['password'] = false;
				arr_r['password2'] = false;
				uncheck()
		} else if($('#'+id).val().length < 6) {
			$('.password').html('Password has to be at least 6 characters long, get ducked.');
			arr_r['password'] = false;
			arr_r['password2'] = false;
			uncheck()
		}
		else if($('#password').val().match(/([0-9].*[A-Z])|([A-Z].*[0-9])/) == null) {
			$('.password').html('Password has to contain at least one digit and capital letter.');
			arr_r['password'] = false;
			arr_r['password2'] = false;
			uncheck()
		}
		else {
			$('.password').html('');
			arr_r['password'] = true;
			arr_r['password2'] = true;
		}
	})
})

	
	
}	

var check_reg = new Register;

check_reg.empty_fields(arr);
check_reg.user_validity();
check_reg.verif_email();
check_reg.check_password();

$('#agree').click(function() {
	
	for(x in arr_r) {
		if(arr_r[x] == true) {
			e_rror += 1;
		} 
	}if(e_rror == 5) {
		$('#agree').attr('checked', true);
		$('#register').attr('disabled',false);
		}
			else { 
				$('#register').attr('disabled', true);
			    
				arr_r['password'] = true;
				arr_r['password2'] = true;
				e_rror = 0;
			}
})

		

			








	

}
$(document).ready(init);
