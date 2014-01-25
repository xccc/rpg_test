function init() {

var socket = io.connect();

function install_item(name) {

	var player = $('#player').val();
	
	socket.emit('install_item', {item: name, player: player});
	
	// alert($('#item_delete').attr('name'));
	

}
function delete_item(name) {
		var player = $('#player').val();
	
	socket.emit('delete_item', {item: name, player: player});
	

	

}
	
function uninstall_item(name) {

	var player = $('#player').val();
	
	socket.emit('uninstall_item', {item: name, player: player});
	

	

}
socket.on('item_response', function(data) {
	alert(data.item);
})

$("input").click(function(e) {
		var idC = e.target.name;
		var load_fn = e.target.id;
		if(load_fn == 'item_install') {
			install_item(idC);
			window.location.assign('http://localhost:8080/game/hdd');
		}else if(load_fn == 'item_uninstall'){
			uninstall_item(idC);
			window.location.assign('http://localhost:8080/game/hdd');
		} else {
			delete_item(idC);
			window.location.assign('http://localhost:8080/game/hdd');
		}
	})




}
$(document).ready(init);
