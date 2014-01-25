module.exports.verify =


 function(req, res, next ) {
  if (req.isAuthenticated()) { return next(); } 

	res.redirect('/auth');
} 


module.exports.verify_login = function(req, res, next) {
	console.log(req.isAuthenticated());
		if(req.isAuthenticated()) { res.redirect('/'); }
		return next();
	}

