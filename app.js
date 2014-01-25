var express = require('express');
var app = express();
var http = require('http').createServer(app);
var socket = require('socket.io').listen(http);


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var router = require('./routes/router.js');

var pass = require('./modules/pass.js')(passport, LocalStrategy, socket);






var events = require('./modules/events.js');




app.use(express.cookieParser());
app.use(express.session({secret: '232424354632456tgfeferthgfdertg456ftfft43'}));
app.use(express.bodyParser());

app.use(passport.initialize());
app.use(passport.session());




app.set('ipaddr', 'localhost');
app.set('port', '8080');
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static('public', __dirname + '/public'));

var u_list = [];

var session_i = 1;
var session_list = [];
var time_t = [];

socket.sockets.on('connection', function(socket) {
	
		
				
		
		 events.chat(socket, u_list, time_t, session_list);

			events.register(socket);
			events.game_inventory(socket);
			events.game_level(socket);
	
})

router.router(app, passport);






http.listen(app.get('port'), app.get('ipaddr'));









