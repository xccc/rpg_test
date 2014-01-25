mysql = require('mysql');

var db = mysql.createConnection({
	host: 'localhost',
	user: 'mysql',
	password: '',
	database: 'test'
	})
db.connect();

exports.g = function Game(player) {
	{
		this.player;
}
Game.prototype.get_tools = function(tool_name, callback) {
	var sql = db.query("SELECT * FROM Tools WHERE tool_name = ?", tool_name);
	sql.on('result', function(result) {
		callback(result);
	})
	
}
}
