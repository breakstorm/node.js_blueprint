var express = require('express');
var router = express.Router();
var passport = require('passport');
var gravatar = require('gravatar');

router.get('/', function(req,res,next){
	console.log("enter / ");
	// res.sendFile('index.html', {root: __dirname + './../../public/HTML/'})
	// res.render('index', {title: 'Login Page', message: req.flash('loginMessage')});
	res.render('signin', {title : "Signin", message: req.flash('loginMessage')});
})

router.get('/signin', function(req, res, next){
	res.render('signin', {title : "Signin", message: req.flash('loginMessage')});
})

router.get('/signup', function(req, res, next){
	res.render('signup', {title: "Signup", message: req.flash('signupMessage')});
})

router.get('/profile', isLoggedIn ,function(req, res, next){
	res.render('profile', {title: "Profile", user: req.user, avatar: gravatar.url(req.user.email, {s: '100', r: 'x', d: 'retro'}, true)});
	// var testUser = {
	// 	name: "test",
	// 	email: "test email"		
	// }
	// res.render('signin', {title: "profile", user: testUser});
})

router.get('/profile2', function(req, res, next) {
	var testUser = {
		name: "test",
		email: "test email"		
	}
	// res.render('profile', {title: "profile", user: testUser});
	res.render('profile', {title: "Profile", user: testUser, avatar: gravatar.url(req.user.email, {s: '100', r: 'x', d: 'retro'}, true)});
})

router.post('/login',
	passport.authenticate('local-login', {
	successRedirect: '/profile',
	failureRedirect: '/signin',
	failureFlash: true
}));

router.post('/signup',	passport.authenticate('local-signup', {
	successRedirect: '/profile',
	failureRedirect: '/signup',
	failureFlash: true
}));

function isLoggedIn(req, res, next){
	console.log("enter function isLoggedIn")
	if(req.isAuthenticate()){
		console.log("success isLoggedIn")
		return next();
	}
	
	console.log("fail isLoggedIn")
	res.redirect('/signin');
}

router.get('/logout', function(req,res) {
	req.logout();
	res.redirect('/');
})



module.exports = router;