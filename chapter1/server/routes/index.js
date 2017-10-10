var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
	console.log("enter / ");
	// res.sendFile('index.html', {root: __dirname + './../../public/HTML/'})
	// res.render('index', {title: 'Login Page', message: req.flash('loginMessage')});
	res.render('signin');
})

router.get('/signin', function(req, res, next){
	res.render('signin');
})

router.get('/signup', function(req, res, next){
	res.render('signup');
})

router.get('/profile', function(req, res, next){
	res.render('profile');
})

module.exports = router;