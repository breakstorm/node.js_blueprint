var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var passport = require('passport');
var gravatar = require('gravatar');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("get index / ")
  res.render('index', { title: 'Express from server folder' });
});

router.get('/login', function(req, res, next){
	res.render('login', {title: 'Login Page', message: req.flash('loginMessage') });
});

router.get('/signup', function(req,res){
	res.render('signup', {title: 'Signup Page', message: req.flash('signupMessage')});
});

router.get('/profile', isLoggedIn, function(req,res,next){
	res.render('profile', {title: 'Profile Page', user: req.user, avatar: gravatar.url(req.user.email, {s: '100', r:'x', d: 'retro'}, true)});
});
=======
var gravatar = require('gravatar');
var passport = require('passport');

router.get('/', function(req, res, next) {
	res.render('index', {title: 'Express from server folder'});
	// res.render('index');
});

router.get('/login', function(req, res, next) {
	res.render('login', {title: 'Login page', message: req.flash('loginMessage')})
})

router.get('/signup', function(req, res, next) {
	res.render('signup', {title: 'Signup page', message: req.flash('signupMessage')})
})

router.get('/profile', isLoggedIn, function(req, res, next) {
	var testUser = {
		local:{
			name: 'aaa',
			email: 'aaa@mail.com'
		}
	};
	console.log("!!!", req.user.local.email);
	console.log("!!!", gravatar.url(req.user.local.email, {s: '100', r: 'x', d: 'retro'}, true));
	res.render('profile', {title: 'Profile page', avatar: 
		gravatar.url(req.user.local.email, {s: '100', r: 'x', d: 'retro'}, true), user: req.user})
	// res.render('profile', {title: 'Profile page', avatar: 
	// 	gravatar.url('aaa@mail.com', {s: '100', r: 'x', d: 'retro'}, true), user: testUser})
})
>>>>>>> develop

router.post('/login', passport.authenticate('local-login', {
	successRedirect: '/profile',
	failureRedirect: '/login',
	failureFlash: true
}));

<<<<<<< HEAD
router.post('/signup', passport.authenticate('local-signup',{
	successRedirect: '/profile',
	failureRedirect: '/signup',
	failureFlash: true
}))

function isLoggedIn(req, res, next){
	if(req.isAuthenticated())
		return next();
	res.redirect('/login');
}


router.get('/logout', function(req, res){
	req.logout();
	res.reirect('/');
});
=======
router.post('/signup', passport.authenticate('local-signup', {
	successRedirect: '/profile',
	failureRedirect: '/signup',
	failureFlash: true
}));

router.get('/logout', function(req, res, next){
	req.logout();
	res.redirect('/');
});

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated())
		return next();
	res.redirect('/login');
};
>>>>>>> develop

module.exports = router;