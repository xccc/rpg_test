mysql = require('mysql');
var db = mysql.createConnection({
	host: 'localhost',
	user: 'mysql',
	password: '',
	database: 'test'
	})
db.connect();
exports.q = function(query, params, callback) {

	var sql = db.query(query, params);
	sql.on('result', function(result) {
		callback(result);
	})
	
	
}
	
exports.query = function(query, callback) {
	db.query(query, function(e, data) {
		callback(data);
	})
}
exports.update = function(query) {
	db.query(query);
}

exports.d = function Player(player) {
	{
		this.player = player;
		
}

Player.prototype.bank = function(callback)
	{
	
		db.query("SELECT balance FROM bank WHERE user='" + player + "'", function(e, data) {
			callback(data);
			})
	}
Player.prototype.get_inventory = function(callback) {
	db.query("SELECT * FROM inventory WHERE user='" + player + "'", function(e, data) {
		callback(data);
	})
}	

Player.prototype.show_installed = function(tool_name,callback) {
	var sql = db.query("SELECT * FROM inventory WHERE user = ? AND installed='1' AND software LIKE ?",[player,tool_name]);
	sql.on('result', function(result) {
		callback(result);
	})
}


Player.prototype.check_inventory = function(item, callback) 
	{
		db.query("SELECT software, installed from inventory WHERE user='" + player + "' AND software='" + item + "'", function(e, data) {
			callback(data);
		})
	}

Player.prototype.hdd_space = function(callback)
	{
		db.query("SELECT current_size FROM hard_drive WHERE name='" + player + "'", function(e, data) {
			callback(data);
		})
	}
Player.prototype.new_hdd_space = function(new_space, callback)
	{
		db.query("UPDATE hard_drive SET current_size='" + new_space + "' WHERE name='" + player + "'");
	}
Player.prototype.update_bank = function(new_amount, callback) {
		db.query("UPDATE bank SET balance='" + new_amount + "' WHERE user='" + player + "'");
	
	}
Player.prototype.insert_item = function(new_item, callback) {
		db.query("INSERT INTO inventory(user, software, installed)VALUES('" +player+ "', '" +new_item+ "', 0)");
	}
Player.prototype.update_item = function(item, action) {
		db.query("UPDATE inventory SET installed='" + action + "' WHERE software='" + item + "' AND user='" + player + "'");
}
Player.prototype.store_hardware = function(item) {
		db.query("INSERT INTO inventory(hardware,hardware_installed,user)VALUES('" + item + "','false','" + player + "')");
}
Player.prototype.get_programming = function(callback) {
		db.query("SELECT programming FROM Skills WHERE name='" + player + "'", function(e, data) {
			callback(data);
		})
	}
Player.prototype.get_combat = function(callback) {
		var sql = db.query("SELECT combat FROM Skills WHERE name = ?",[player]);
		sql.on('result', function(data) {
			callback(data);
		})
	
		
}
Player.prototype.insert_cracked = function(cracked_box, callback) {
	db.query("INSERT INTO hacked_boxes(user, ip)VALUES('" + player + "','" + cracked_box + "') ON DUPLICATE KEY UPDATE ip=ip");
	
}
	
	
Player.prototype.cracked = function(callback) {
	
		var sql = db.query("SELECT ip FROM hacked_boxes WHERE user='" + player + "'", function(data) {
			callback(data);
		})
		
}
Player.prototype.addXp = function	(gained_xp) {
	db.query("UPDATE Skills SET xp=xp+'" + gained_xp + "' WHERE name='" + player + "'");
	
	
	
}
Player.prototype.inProgress = function(callback) {
	
		db.query("SELECT ip FROM user_private WHERE user='" + player + "' AND access='1'",function(e, data) {
		
			callback(data);
		})
}
Player.prototype.addActivity = function(finish_time, action) {
	db.query("INSERT INTO user_action(user,time,task)VALUES('" + player + "','" + finish_time + "','" + action + "') ");
	

	
}
Player.prototype.addHosts = function(ip_addr) {
	db.query("INSERT INTO user_private (user,ip,access)VALUES('" + player + "','" + ip_addr + "','1') ON DUPLICATE KEY UPDATE ip=ip");
}

Player.prototype.getActivity = function(task, callback) {
	 db.query("SELECT task,time FROM user_action WHERE user='" + player + "' AND task LIKE '"+ task + "'", function(e, data) {
	
		callback(data);
	})
	
}
Player.prototype.deleteActivity = function(task) {
	db.query("DELETE FROM user_action WHERE user='" + player + "' AND task='" + task + "'");
}
Player.prototype.Systema = function(callback) {
	db.query("SELECT * FROM System WHERE user='" + player + "'", function(e, data) {
		callback(data);
	})
	
}
Player.prototype.get_hardware = function(callback) {
	db.query("SELECT * FROM System WHERE user='" + player + "'", function(e, data) {
		callback(data);
	})
}




}
