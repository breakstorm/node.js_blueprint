var express = require('express');
var router = express.Router();

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

router.get('/profile', function(req, res, next){
	res.render('profile', {title: "Profile", user: req.user, avatar: gravatar.url(req.user.email, {s: '100', r: 'x', d: 'retro'}, true)});
})

module.exports = router;