var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

module.exports = function(passport) {
	passport.serializeUser(function(user, done) {
		console.log("!!!enter passport serializeUser")
		done(null, user.id);
	})

	passport.deserializeUser(function(id, done) {
		console.log("!!!enter passport deserializeUser")
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
		function(req, email, password, done) {
			if(email)
				email = email.toLowerCase();
			process.nextTick(function() {
				User.findOne({ 'local.email': email}, function(err, user) {
					if(err)
						return done(err);
					if(!user)
						return done(null, false, req.flash('loginMessage', 'No user found'));
					if(!user.validPassword(password))
						return done(null, false, req.flash('loginMessage', 'Wohh! wrong password'));
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
		function(req, email, password, done) {
			if(email)
				email = email.toLowerCase();
			process.nextTick(function() {
				if(!req.user){
					User.findOne({'local.email': email}, function(err, user) {
						if(err)
							return done(err);
						if(user) {
							return done(null, false, req.flash('signupMessage', 'Wohh! the email is already taken'));
						} else {
							var newUser = new User();
							newUser.local.name = req.body.name;
							newUser.local.email = email;
							newUser.local.password = newUser.generateHash(password);

							newUser.save(function(err) {
								if(err)
									throw err;
								return done(null, newUser);
							});
						}
					});
				} else {
					return done(null, req.user);
				}
			});
		}));
}