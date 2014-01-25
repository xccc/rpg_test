var controller = require('./../modules/controller.js');
var auth = require('./../modules/auth.js');
var ip = require('./../modules/game/tools/ip_scanner.js');
var bf = require('./../modules/game/tools/brute_forcer.js');







exports.router = function(route, passport) {
	

	route.get('/', controller.index);
	route.get('/register', auth.verify_login, controller.register);
	route.get('/pauk', function(req, resp) {
		resp.render('pauk');
	});
	
	route.get('/tesla', function(req, resp) { resp.render('tesla'); }); 
	route.get('/test', auth.verify, controller.test);
	route.get('/auth', controller.auth);
	route.get('/users', auth.verify, controller.users);
    route.get('/mail', auth.verify, controller.mail);
    route.get('/mail/:id', auth.verify, controller.get_mail);
    route.get('/logout', auth.verify, controller.logout);
    route.get('/game/:id(bank|bank-login)',auth.verify, controller.browser);
    route.get('/game/market', auth.verify, controller.test);
    route.get('/game/market/buy/:id', auth.verify, controller.market_buy);
    route.get('/game/hdd', auth.verify, controller.hdd);
    route.get('/game/chat', auth.verify, controller.chat);
    route.get('/game/programming', auth.verify, controller.programming);
    route.get('/game/hardware', auth.verify, controller.hardware);
    route.get('/game/hardware/buy/:id', auth.verify, controller.hardware_buy);
    route.get('/game/System', auth.verify, controller.System);
    route.get('/game/HOF', controller.highscore);
    route.get('/scanner', function(req, res) { res.render('trick'); });
    route.post('/tiss', ip.scan);
    route.post('/hdds', bf.crack);
    route.get('/hdds', bf.crack);
    
 //   route.get('/game/market/buy/:id', auth.verify, controller.market_buy);
   // route.get('/game/email', auth.verify, controller.email);
    route.get('/game',auth.verify, controller.game);
	route.post('/auth', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/auth'}));
	
		
		
};


 



