var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// var path = require('path');

var router = express.Router();
// var app = express();

// app.use(express.static(path.join(__dirname+'./../../', 'public')));
// app.use( __dirname + '/../../public' , express.static('/public'));
// app.use(express.static(path.join(__dirname,'./../../public')));

var users = [{
		username: "abc",
		password: "111"
	},
	{
		username: "aaa",
		password: "111"
	}
]

// session 저장
passport.serializeUser(function(user, done) {
  console.log("enter serializeUser");
  done(null, user.username);
});
// session 확인
passport.deserializeUser(function(id, done) {
	console.log("enter deserializeUser " + id);

	for(var i = 0; i < users.length; i++){
		var user = users[i];
		console.log("enter deserializeUser " + id + " to " + user.username);

		if(user.username === id){
			done(null,user)
		}
	}

  // User.findById(id, function(err, user) {
  //   done(err, user);
  // });
});

// local strategy
passport.use(new LocalStrategy(
	function(username, password, done){
		console.log("enter LocalStrategy");
		var name = username;
		var pwd = password;

		for(var i = 0; i < users.length; i++){
			var user = users[i];

			if(name === user.username){
				console.log("authenticate success")
				return done(null, user);
			}else{
				console.log("authenticate fail")
				return done(null, false, {message: "fail to login"});
			}
		}
		return done(null, false, {message: "fail to login"});
	}
));

router.get('/', function(req, res, next){
	// res.sendFile('/Users/gimhwigyeom/Documents/node.js_blueprint/chapter1/public/HTML/index.html');
	res.sendFile('public/HTML/index.html', {root: __dirname + './../../'});
	// res.sendFile('HTML/index.html');
});
router.get('/success', function(req, res, next){
	res.sendFile('public/HTML/success.html', {root: __dirname + './../../'});
});

router.post('/login', passport.authenticate('local', {
	successRedirect: '/success',
	failureRedirect: '/',
	failureFlash: true })
);

module.exports = router;