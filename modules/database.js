// database confid data
db_table = 'users';
db_host = 'localhost';
db_dbs = 'nodetest1';
db_port = 27017;

//including database files
db = require('mongodb').Db
server = require('mongodb').Server


// establishing connection
connection = new db(db_dbs, new server(db_host, db_port));
connection.open(function(e, d) {
	if(e) {
		console.log(e);
	} else {
		console.log('Connection established!');
}
});



// query function to get data from the database


exports.collector = connection.collection('users');









	
