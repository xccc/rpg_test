var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'lammas123',
	database: 'test'
	})
connection.connect();
exports.c = connection;

function query(query, callback) {
	callback(connection.query(query));
}

exports.query = query;
