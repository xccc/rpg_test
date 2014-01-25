var playerLib = require('./../../player.js');
var gameLib = require('./../../game.js');
var server = require('./../../server.js');
exports.scan = function(req, resp) {
	
	
		// set variables;me
	var Player = new playerLib.d('dima');
	var Game = new gameLib.create('dima');
	var player_lvl = Player.get_combat(function(player) { // player.combat
	var get_scanner = Player.show_installed('%ip%', function(scanner) { // get user ip_scanner
	var scanner_stats = Game.get_tools(scanner.software, function(ip_scan) { // get scanner stats
		var scanning_time = parseInt(ip_scan.time); // how long it will scan
		var full_time = server.server_time()+scanning_time; // add server time + scanning time
		var client_request = req.body.message; // client request for scanning
		
	

		console.log(full_time);
	if(client_request == 'start_scanning') {
		Player.getActivity('scanning', function(playerActivity) { // check for any previous scanning activities
			if(playerActivity.length == 0) { // if there is none
				resp.send(scanning_time);
			
				
				Game.npc(function(bot_list) { // go through npc list
					Player.addActivity(full_time, 'scanning'); // and activity to user db
							
				for(var i in bot_list) { 
					
					Player.addHosts(bot_list[i].ip_address); // add host to user db
				}
	
	})
}			else {
			
				if(parseInt(playerActivity[0].time) < server.server_time()) { // if scanning is finished
					console.log('FINISHED SCANNING');
					Player.deleteActivity('scanning'); // delete activity

				}
				else {
					console.log('Still scanning'); // still in progress
					var calculate_time = parseInt(playerActivity[0].time) - server.server_time();
				
				
					console.log(calculate_time+ " seconds left to finish scan");
					resp.send(JSON.stringify(calculate_time));
				
				}
	
}
})
}
})
})
})
}


