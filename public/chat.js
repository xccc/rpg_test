
function init() {
	
socket = io.connect('http://localhost:8011');

socket.on('connect', function(data) {
		alert('gotcha');
	});


}


$(document).ready(init);
