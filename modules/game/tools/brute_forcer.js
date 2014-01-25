var Db = require('./../../player.js');
var game_lib = require('./../../game.js');
exports.crack = function(req, res) {

	var Player = new Db.d('dima') // has to be req.user;
	var Game = new game_lib.g('dima');
	var url_req = req.body.message;
	
	
	
	


if(url_req == 'start_bruting') {
	var get_BT = Player.show_installed('%brute%', function(b) { // get user brute forcer
	var shop_BT = Game.get_tools(b.software, function(brute_forcer) { // get bruter stats
	var player_lvl = Player.get_combat(function(player_lvl) { // get player level
	var bf_success = brute_forcer.success_rate; // get brute_forcer success rate, example 15% is 100/15 = 7
	var brute_time = brute_forcer.time; // how long brute forcer will run
	Player.inProgress(function(ip) { // ips we are about to crack
			for(var i in ip) {
			var brute_perf = Math.round(Math.random()*bf_success)+1; // calculate the odds, random(1,7)
			if(brute_perf == 1) { // if random() is 1 then continue
				
							
				Player.addXp(Game.getXp(player_lvl));		// add xp
				Player.insert_cracked(ip[i].ip);		// add cracked machine
	}
		}
						res.render('hdds');
						
					

})
})
})
})
}				
				
	res.render('hdds');


	
}
