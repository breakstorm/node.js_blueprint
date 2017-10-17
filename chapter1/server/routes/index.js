var express = require('express');
var router = express.Router();
var gravatar = require('gravatar');

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

router.get('/profile', function(req, res, next) {
	var testUser = {
		local:{
			name: 'aaa',
			email: 'aaa@mail.com'
		}
	};
	res.render('profile', {title: 'Profile page', avatar: 
		gravatar.url('aaa@mail.com', {s: '100', r: 'x', d: 'retro'}, true), user: testUser})
})


module.exports = router;