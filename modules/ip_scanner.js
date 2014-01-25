var Db = require('./player.js');

exports.scan = function(req, resp) {
	Db.query("SELECT software FROM inventory WHERE installed='1' AND software LIKE '%ip%'", function(get_tool) {
	
		// set variables;
	var Player = new Db.d('dima');
	var username = 'dima';
	Player.get_combat(function(player_level) {
		
	
	var user_level = player_level[0].combat;
	var ip_scanner = get_tool[0].software; 
	var sTime = new Date();
	var full_time = sTime.getFullYear()+""+sTime.getMonth()+""+sTime.getDay()+""+sTime.getHours()+""+sTime.getMinutes()+""+sTime.getSeconds();
	
	
				// get tool options for scanning
	
	Db.query("SELECT time, level FROM Tools WHERE tool_name='" + ip_scanner + "'", function(getSpeed) {
		var scanning_time = getSpeed[0].time;
		var ip_potential = getSpeed[0].level;
		var game_process = parseInt(full_time)+scanning_time;
		var client_request = req.body.message;
	

			// if url request is set
	if(client_request == 'start_scanning') {
		
			
						// get IP's from game db and users personal db
				
				Db.query("SELECT ip_address FROM NPC WHERE level='" + user_level + "'", function(level) {
				Db.query("SELECT ip FROM user_private WHERE user='" + username + "'", function(stored_ip) {
					
		var ipStored = stored_ip.length;
		
		if(ipStored == 0) {
			 // store IP into db if there is none
			 console.log('Started scanning.');
			Db.update("INSERT INTO user_action(user,time,task)VALUES('"+ username + "','"+game_process+"','scanning')");
				for(i in level) {
					Db.update("INSERT INTO user_private(user,ip,access)VALUE('"+ username + "','" + level[i].ip_address + "','0')");
				}
				
			}else {
						
				for(var i = 0; i < level.length; i++) {
							// Do nothing is there is already such IP
					if(stored_ip[i].ip.indexOf(level[i].ip_address) == -1) {

						Db.update("INSERT INTO user_private(user,ip,access)VALUES('" + username + "','" + level[i].ip_address + "','0')");
					} else{
							console.log('You already have this IP list');
					}
								
 }}
		
})
})
			Db.query("SELECT time FROM user_action WHERE user='dima'", function(data) {
		
						// If scanning is finished delete scanning from db and set ip accessing to true
				if(data.length != 0 && data[0].time < full_time) {
					console.log('Scanning finished');
					Db.update("DELETE FROM user_action WHERE user='dima'");
					Db.update("UPDATE user_private SET access='1' WHERE user='dima'");
				} else if(data.length != 0) {
					console.log('Still scanning'); 
				}
			})
		
				
	

	}


	
//	resp.send(""+scanning_time);
	
})
})
})

}
