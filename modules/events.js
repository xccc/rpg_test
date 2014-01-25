var dbs = require('./database'); 
var Db = require('./mysql2.js');
exports.game_level = function(socket) {
	var server_time = new Date();
	s_seconds = server_time.getSeconds();
	s_minutes = server_time.getMinutes();
	s_hours = server_time.getHours();
	full_time = parseInt(s_hours+''+s_minutes+''+s_seconds);
	
	
	socket.on('connected', function(data) {
		username = data.player;
		
		Db.query("SELECT * FROM Skills WHERE name='" + username + "'", function(result) {
			
			if(result.length != 0) {
				
			username = data.player;
			new_level = parseInt(result[0].inprogress);
			programming_level = parseInt(result[0].programming)+1;
				
			if(new_level != 0 && new_level <= full_time) {
				console.log(new_level + 'and' + full_time);
				console.log(result[0].inprogress);
				console.log('how..?');
				Db.update("UPDATE Skills SET inprogress='0', programming='" + programming_level + "' WHERE name='" + username+ "'");
				console.log('Mission completed!');
				
				
		}
			
		}
		})
		
})

	socket.on('new_level', function(data) {
		
		var username = data.user;
		var Player = new Db.d(username);
		server_time = new Date();
		s_seconds = server_time.getSeconds();
		s_minutes = server_time.getMinutes();
		s_hours = server_time.getHours();
		full_time = s_hours+''+s_minutes+''+s_seconds; //+s_minutes+s_seconds;
		Player.get_skill(function(coding) {
			next_level = parseInt(coding[0].programming)+1;
			Db.query("SELECT time FROM game_programming WHERE level='" + next_level + "'", function(data) {
				time_level = parseInt(data[0].time); // how long it takes to finish level
				leet = parseInt(full_time)+time_level;
				
				socket.emit('level', { time: time_level});
				Db.update("UPDATE Skills SET inprogress='" + leet + "' WHERE name='" + username + "'");
			
			
		})
})
	
	
})
}


exports.game_inventory = function(socket) {
	//var Player = new Db.d(
	socket.on('install_item', function(data) {
		
		var username = data.player;
		var item = data.item;
		var Player = new Db.d(username);
		Player.check_inventory(item, function(i) {
			if(i.length == 0) {
				socket.emit('item_response', { item: 'There is no such item'});
			} else if(i[0].installed == 1) {
				socket.emit('item_response', { item: 'Item is already installed'});
			}else {
				Player.update_item(item, 1);
				socket.emit('item_response', { item: 'Item installed!'});
				console.log(username);
			}
		
		
	})
		

})
	socket.on('uninstall_item', function(data) {
		var username = data.player;
		var item = data.item;
		var Player = new Db.d(username);
		Player.check_inventory(item, function(i) {
			if(i.length == 0) {
				socket.emit('item_response', { item: 'There is no such item'});
			} else if(i[0].installed == 0) {
				socket.emit('item_response', { item: 'Item is already uninstalled'});
			}else {
				Player.update_item(item, 0);
				socket.emit('item_response', { item: 'Item uninstalled!'});
				console.log(username);
			}
		
		
	})
		
})
	socket.on('delete_item', function(data) {
		var username = data.player;
		var item = data.item;
		var Player = new Db.d(username);
		Player.check_inventory(item, function(i) {
			if(i.length == 0) {
				socket.emit('item_response', { item: 'There is no such item'});
			} else {
				Player.update_item(item, 0);
				socket.emit('item_response', { item: 'Item deleted'});
				Db.update("DELETE FROM inventory WHERE software='" + item + "' AND user='" + username + "'");
				console.log(username);
			}
		
		
	})
		
})
}
exports.register = function(socket) {
	socket.on('check-user', function(data) {
		username = data.username;
		
		dbs.collector.findOne({username: username}, function(err, user) {
			if(user == null) {
				socket.emit('user-verif', { res: 1});
			} else {
				socket.emit('user-verif', { res: 0});
			}
			console.log('cunt' + typeof user);
		});
	})
	
	
	socket.on('check-email', function(data) {
		email = data.email;
		dbs.collector.findOne({email: email}, function(err, email) {
			if(email == null) {
				socket.emit('email-verif', {res: 1});
			} else {
				socket.emit('email-verif', {res: 0});
			}
		});
	});
	
	
	
	
}


exports.event = function(socket, callback) {
	
	socket.on('connection', function(socket) {
		
		socket.emit('message', {msg: 'wrong user/password' });
					
					
		
	});
	
	
	
};
	
	
			
	
	
	
	
	
	
	
	
	
	
	
	
	

		
		
	
	
	
	
	
	
	




exports.chat = function(socket, u_list, time_t, session_list) {
	
	var morg = [];
		Array.prototype.check = function(v) {
	for(var i = 0; i < this.length; i++)
		{
			if(this[i] == v) return true;
		}
		return false;
}

Array.prototype.unique = function() {
	
	var arr = [];
	for(var i = 0; i < this.length; i++) {
		if(!arr.check(this[i])) {
			arr.push(this[i]);
		}
	}
	return arr;
}
	
	
	
	
	
	
	
	
	
	

		var username;
		
		socket.on('connected', function(data) {

		
		channel = 'abc123';
		username = data.user;
		u_list.push(data.user);
		session_list[data.user+socket.id] = data.user;
		
		
		
		
	
		
	
	
				  
				   
			
			socket.on('sendchat',  function(data) {
	
			
			
		
			
			socket.broadcast.emit('incomingMessage', { username: data.usern, message: data.msg}); // to everyone in room
			socket.emit('incomingMessage', { username: data.usern, message: data.msg}); // so the clients sees his/her own messages also
		
			
		})
	
	
	socket.on('disconnect', function() {
		morg = [];
		for(x in session_list) {
			console.log('at first' + x);
			if(x == data.user+socket.id) {
				delete session_list[x];
			//	/morg.push(session_list[x]);
			
		//	console.log(session_list[x])
		}

}

	
//	console.log(session_list);
		for(x in session_list) {
			if(typeof session_list[x] == 'string') {
				morg.push(session_list[x]);
			}
			//console.log(typeof session_list[x] + 'musta surma');
		}
		rors = morg.unique();
	console.log('olemas' + morg);
	
		socket.broadcast.emit('usersOnline', { names: rors });
				   socket.emit('usersOnline', { names: rors });
				   
				   
				   

	});
			
	
	
	
	socket.on('quik', function(data) {
	/*
		username = data.user;
		console.log(data.user + 'lala' + socket.id + 'good life');
		console.log(session_list);
		delete session_list[data.user+socket.id];
		*/
		socket.emit('dc');
	});
	
	
	
	
	
	
	
	
	
			
			
			
			if(morg.length == 0) {
			
			flow = u_list.unique();
		} else { flow = morg; }
		
		
		
		socket.broadcast.emit('usersOnline', { names: flow });
				   socket.emit('usersOnline', { names: flow });
		
		
	})
	

		

	
 };
			
