var express = require('express');
var router = express.Router();
//hwigyum
var passport = require('passport');
var gravatar = require('gravatar');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
	//console.log('!!!', req.flash('loginMessage'))
	// res.render('login', {title: 'login', message: req.flash('loginMessage')})
	res.render('login', {title: 'login', message: req.flash('loginMessage')})
})

router.get('/signup', function(req, res, next) {
	// res.render('login', {title: 'login', message: req.flash('loginMessage')})
	res.render('signup', {title: 'signup', message: req.flash('signupMessage')})
})

router.get('/profile', isLoggedIn, function(req, res, next) {
	// var user = {
	// 	local: {
	// 		name: "test name",
	// 		email: "test email"
	// 	}
	// }
	console.log("!!!", req.user);
	// res.render('profile', {title: 'profile', message: 'undefined', user: user, avatar: 'undefined'})
	res.render('profile', {title: 'profile', user: req.user, avatar: gravatar.url(req.user.local.email, {s: '100', r:'x', d:'retro'}, true)})
})

router.post('/login', passport.authenticate('local-login', {
	successRedirect: '/profile',
	failureRedirect: '/login',
	failureFlash: true
}));

router.post('/signup', passport.authenticate('local-signup', {
	successRedirect: '/profile',
	failureRedirect: '/signup',
	failureFlash: true
}));

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated())
		return next();
	res.redirect('/login');
}

router.get('/logout', function(req,res) {
	req.logout();
	res.redirect('/');
})

module.exports = router;
