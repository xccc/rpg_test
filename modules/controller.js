var Db = require('./mysql2.js');
	
	
	
	
exports.register = function(req, res) {
		res.render('register');
		
	};
exports.hdd = function(req, res) {
	var Player = new Db.d(req.user);
	Player.get_inventory(function(items) {
		
	res.render('hdd', { inventory: items, player: req.user });
})
}
exports.game = function(req, res) {
	res.render('game');
}
exports.browser = function(req, res) {

	console.log(req.params.id);
	m = require('./mysql.js');

	if(req.params.id == 'bank' || req.params.id == 'bank-login') {
		m.c.query("SELECT * FROM bank WHERE user='"+req.user+"'", function(e, data) {
			if(data.length == 0) {
				register = 1;
				
			}else {
				register = 2;
			}
			if(req.params.id == 'bank-login') {
				register = 3;
			}
			
		
		res.render('bank', { bank_info: data, action: register });
	})
	} else {
	res.render('game');
}
}
exports.get_mail = function(req, res) {
	m = require('./mysql.js');
	m.c.query("SELECT * FROM mail WHERE user_id='"+req.user+"' AND id='"+req.params.id+"'", function(e, data) { 
	//	console.log(data[0].message + 'evil');
	console.log(data.length);
	if(data.length == 0) {
		var ids = null;
	}else {
		ids = req.params.id;
	}
		res.render('mail', { mail: data, id: ids});
		
})
}
exports.mail = function(req, res) {
	m = require('./mysql.js');
	

	m.c.query("SELECT * FROM mail WHERE user_id='"+req.user+"'", function(e, data) {
		
	  	
	
	res.render('mail', { mail: data, id: req.params.id});
})
}
exports.logout = function(req, res) {
	
	res.redirect('http://localhost:8080/');
	req.logout();
}
exports.market_buy = function(req, res) {
	
	
	
var Db = require('./mysql2.js');
player = new Db.d(req.user)
tool_id = req.params.id;
	

	Db.query("SELECT tool_name, costage, size from Market where id='" +tool_id+ "'", function(item) {
		player.bank(function(money) {
			player.hdd_space(function(hdd) {

				
				space_left = hdd[0].current_size-item[0].size;
				item_price = item[0].costage;
				player_balance = money[0].balance;
				item_name = item[0].tool_name;
				
			player.check_inventory(item_name, function(inv) {


				// If there is no such item
			if(item.length == 0) {
				res.redirect('http://localhost:8080/game/market');
				// if player has enough money, space left on the hdd and doesn't posess such item already 
			} else 	if(item_price <= player_balance && space_left >= 0 && inv.length == 0) {
				
				bank_balance = player_balance - item_price;
				
				player.update_bank(bank_balance);
				player.new_hdd_space(space_left);
				
				player.insert_item(item_name);
	
				

				}
				else if(item_price > player_balance)  {
					
					console.log('not enough money');
					
				} else if(space_left < 0) {
					
					console.log('not enuff space');
					
				} else if(inv.length != 0) {
					
					console.log('You already have it');
				}
			

		 res.redirect('http://localhost:8080/game/market');

})
	})
})
})

	
}
exports.test = function(req, res) {
	
	var arr_r = ['network','offense','defence', 'network'];
	
	var Db = require('./mysql2.js');
	var Q = new Db.d(req.user);
	
		// filter url
	if(arr_r.indexOf(req.query.met) != -1) {
		sort_item = "WHERE tool_type='"+req.query.met+"'";
	
	}else {
		sort_item = '';
	}


		Db.query("SELECT * FROM Market "+sort_item, function(data) {
		Q.bank(function(money) {
			
			price_tag = money[0].balance;
	
		Db.query("SELECT * FROM Market WHERE costage <=" + price_tag + "", function(buy_button) {
	
		res.render('test', { docs: data, buy: buy_button});
	
})
})
	})
	
	
	
	



}
exports.hardware_buy = function(req, res) {
	var Db = require('./mysql2.js');
	var Player = new Db.d(req.user);
	var id = parseInt(req.params.id);
	Db.query("SELECT * FROM hardware", function(shop) {
	Db.query("SELECT * FROM inventory WHERE hardware_installed='false'", function(stored) {
		if(stored.length != 0) {
			var stored_hardware = stored;
		} else {
			var stored_hardware = '';
		}
			
	Player.bank(function(bal) {
		player_money = parseInt(bal[0].balance);
	
	Player.get_hardware(function(check_hardware) {
	Db.query("SELECT name,costage,version, type FROM hardware WHERE id='" + id + "'", function(hardware) {
		
			
		if(hardware.length != 0) {
		//	player_hardware = check_hardware[0].
			hardware_name = hardware[0].version;
			hardware_type = hardware[0].type;
			hardware_costage = parseInt(hardware[0].costage);
			
			player_hardware = check_hardware[0][hardware_type];
				if(player_hardware == hardware_name) {
					e_message = 'You already have it';
					
					
				} else if(player_hardware != hardware_name && player_money >= hardware_costage) {
					e_message = 'You bought ' + hardware_name;
					new_amount = player_money-hardware_costage;
					Player.update_bank(new_amount);
					Player.store_hardware(hardware[0].name);
					
				} else {
					e_message = "You don't have enough money.";
				}
		
	}

			res.render('hardware', {hardwar: shop, e_rror: e_message, stored: stored_hardware});
				})	
	})
})
})
})
}
exports.System = function(req, res) {
		var Db = require('./mysql2.js');
		var Player = new Db.d(req.user);
		Player.Systema(function(specs) {
			
		res.render('System', {stats: specs});
	})
		
}
exports.hardware = function(req, res) {
	var Db = require('./mysql2.js');
	var Player = new Db.d(req.user);
	Db.query("SELECT * FROM hardware", function(data) {
	Db.query("SELECT * FROM inventory WHERE hardware_installed='false'", function(store) {
		if(store.length != 0) {
			var stored_hardware = store;
		}else {
			var stored_hardware = '';
		}
	res.render('hardware', { hardwar: data, stored: stored_hardware});
})
})
}
exports.programming = function(req, res) {
	var Db = require('./mysql2.js');
	var Player = new Db.d(req.user);
	
	
	
	
	
	
	
	
	
	Player.get_programming(function(level) {
		
		current_level = level[0].programming;
		
		
		
		
	
	
	res.render('programming', { level: current_level, player: req.user});
})
}

exports.chat = function(req, res) {
	res.render('index2', {user: req.user});
}
exports.index = function(req, res) {
	if(req.isAuthenticated()) {
		res.render('index2', {user: req.user});

	}		
		
			
	 else  {
	res.render('index');

	
}
}
	
				

	
	exports.log = function(req, resp) {
	
	resp.render('login');
	

    
};
exports.get_cookie = function(req, res) {
	console.log('vitt oled');
}
exports.auth = function(req, resp) {
		
		resp.render('login');
		console.log('teh fuck');

	};

exports.users = function(req, resp) {
	console.log(req.user);
		resp.send('yolo');
	};
exports.highscore = function(req, resp) {
	var Db = require('./mysql2.js');
	var Player = new Db.d(req.user);
	
	Db.query("SELECT username FROM login", function(data) {
		
	resp.render('HOF', { users: data});
})
}

