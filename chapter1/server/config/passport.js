var LocalStrategy = require('passport-local').Strategy;
<<<<<<< HEAD
=======
<<<<<<< HEAD
var User = require('../models/users');

module.exports = function(passport){
	passport.serializeUser(function(user, done){
		done(null, user.id);
		});
	
	passport.deserializeUser(function(id, done){
=======
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
var User = require('../models/user');

module.exports = function(passport) {
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
<<<<<<< HEAD
=======
>>>>>>> develop
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
		User.findById(id, function(err, user){
			done(err, user);
		});
	});

	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
<<<<<<< HEAD
=======
<<<<<<< HEAD
	function(req,email,password,done){
		if(email)
			email = email.toLowerCase();
		process.nextTick(function(){
			User.findOne({ 'local.email': email}, function(err,user){
				if(err)
					return done(err);
				if(!user)
					return done(null, false, req.flash('loginMessage', 'No user found.'));
				if(!user.validPassword(password))
					return done(null, false, req.flash('loginMessage', 'Wohh! Wrong apssword.'));
=======
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
	function(req, email, password, done) {
		if(email)
			email = email.toLowerCase();
		process.nextTick(function(){
			User.findOne({'local.email': email}, function(err, user){
				if(err)
					return done(err);
				if(!user)
					return done(null, false, req.flash('loginMessage', 'No user found'));
				if(!user.validPassword(password))
					return done(null, false, req.flash('loginMessage', 'Wohh! Wrong apssword'));
<<<<<<< HEAD
=======
>>>>>>> develop
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
				else
					return done(null, user);
			});
		});
	}));

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
<<<<<<< HEAD
	function(req, email, password, done) {
=======
<<<<<<< HEAD
	function(req, email, password, done){
=======
	function(req, email, password, done) {
>>>>>>> develop
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
		if(email)
			email = email.toLowerCase();
		process.nextTick(function(){
			if(!req.user){
<<<<<<< HEAD
=======
<<<<<<< HEAD
				User.findOne({'local.email': email}, function(err, user){
					if(err)
						return done(err);
					if(user){
						return done(null, false, req.flash('signupMessage', 'Wohh! the email is already taken.'));
					}
					else{
						var newUser = new User();
						newUser.local.name = req.body.name;
						newUser.local.email = email;
						newUser.local.password = newUsesr.generateHash(password);

						newUser.save(function(err){
=======
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
				User.findOne({'local.email': email}, function(err, user) {
					if(err)
						return done(err);
					if(user){
						return done(null, false, req.flash('signupMessage', 'Wohh! the email is already taken'));
					}else{
						var newUser = new User();
						newUser.local.name = req.body.name;
						newUser.local.email = email;
						newUser.local.password = newUser.generateHash(password);

						newUser.save(function(err) {
<<<<<<< HEAD
=======
>>>>>>> develop
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
							if(err)
								throw err;
							return done(null, newUser);
						});
					}
				});
<<<<<<< HEAD
=======
<<<<<<< HEAD
			}
			else{
				return done(null, req.user);
			}
		});
	}));
=======
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
			}else{
				return done(null, req.user);
			}
		})
	}))
<<<<<<< HEAD
=======
>>>>>>> develop
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
};