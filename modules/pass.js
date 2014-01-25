
var User = require('./database.js');
var M = require('./mysql.js');
var event = require('./events.js');


// use is as a module to include it in app.js
module.exports = function(passport, LocalStrategy, socket) {



// creating user sessions

passport.serializeUser(function(user, callback) {
	
		console.log(user['username'] + 'yihaa');
	


  callback(null, user['username']);
});


// when sessions is expired, kill it.
passport.deserializeUser(function(user, callback) {


	// find the correct user from db.
 // User.collector.findOne({username: user}, function(err, user) {
	
 //   callback(err, user.username);
//  });

  M.c.query("SELECT * FROM login WHERE username='"+user+"'", function(e, ussr) {
		
	  callback(e, user);
	 
  })
});




// create local strategy, verify user with mongoDB
passport.use(new LocalStrategy(
	function(username, password, callback) {
		username = username.trim();
		password = password.trim();
		console.log(username.length);
		M.c.query("SELECT id, username FROM login WHERE username='"+username+"' AND password='"+password+"'", function(e, auth) {
			
	
	if(e) {
		return;
	}
	if(!auth)
		{
			event.event(socket);
			callback(e, 'error');
		}
	callback(null, auth[0]);
	console.log(auth[0]);
	})

}
));






}
