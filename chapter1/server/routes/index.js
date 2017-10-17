var express = require('express');
var router = express.Router();
var gravatar = require('gravatar');
var passport = requrie('passport');

router.get('/', function(req, res, next) {
	res.render('index', {title: 'Express from server folder'});
	// res.render('index');
});

router.get('/login', function(req, res, next) {
	res.render('login', {title: 'Login page', message: 'hello login'})
})

router.get('/signup', function(req, res, next) {
	res.render('signup', {title: 'Signup page', message: 'hello signup'})
})

router.get('/profile', isLoggedIn, function(req, res, next) {
	var testUser = {
		local:{
			name: 'aaa',
			email: 'aaa@mail.com'
		}
	};
	res.render('profile', {title: 'Profile page', avatar: 
		gravatar.url('aaa@mail.com', {s: '100', r: 'x', d: 'retro'}, true), user: req.user})
	// res.render('profile', {title: 'Profile page', avatar: 
	// 	gravatar.url('aaa@mail.com', {s: '100', r: 'x', d: 'retro'}, true), user: testUser})
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

router.get('/logout', function(req, res, next){
	req.logout();
	req.redirect('/');
});

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated())
		return next();
	res.redirect('/login');
};

module.exports = router;