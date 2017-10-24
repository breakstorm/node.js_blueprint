var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
	// res.render('login', {title: 'login', message: req.flash('loginMessage')})
	res.render('login', {title: 'login', message: 'undefined'})
})

router.get('/signup', function(req, res, next) {
	// res.render('login', {title: 'login', message: req.flash('loginMessage')})
	res.render('signup', {title: 'signup', message: 'undefined'})
})

router.get('/profile', function(req, res, next) {
	var user = {
		local: {
			name: "test name",
			email: "test email"
		}
	}
	// res.render('login', {title: 'login', message: req.flash('loginMessage')})
	res.render('profile', {title: 'profile', message: 'undefined', user: user, avatar: 'undefined'})
})

module.exports = router;
