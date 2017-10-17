var gravatar = require('gravatar');
var Comments = require('../models/comments');

<<<<<<< HEAD
exports.list = function(req,res){
	Comments.find().sort('-created').populate('user', 'local.email').exec(function(error, comments){
		if(error){
=======
exports.list = function(req, res) {
	Comments.find().sort('-created').populate('user', 'local.email').exec(function(error, comments) {
		if(error) {
>>>>>>> develop
			return res.send(400, {
				message: error
			});
		}
<<<<<<< HEAD
=======
		console.log(comments);
		console.log(req.user)
>>>>>>> develop

		res.render('comments', {
			title: 'Comments Page',
			comments: comments,
<<<<<<< HEAD
			gravatar: gravatar.url(comments.email, {s: '80', r: 'x', d: 'retro'}, true)
		});
	})
};

exports.create = function(req,res){
	var comments = new Comments(reqbody);
	comments.user = req.user;
	comments.save(function(error){
		if(error){
			return res.send(400, {
				message: error
			});
		}
=======
			gravatar: gravatar.url(req.user.local.email, {s: '80', r: 'x', d: 'retro'}, true)
		})
	})
}

exports.create = function(req, res) {
	var comments = new Comments(req.body);
	comments.user = req.user;
	comments.save(function(error) {
		if(error) {
			return res.send(400, {
				message: error
			})
		}

>>>>>>> develop
		res.redirect('/comments');
	})
}

<<<<<<< HEAD
exports.hasAuthorization = function(req, res, next){
	if(req.isAuthenticated())
		return next();
	res.rediret('/login');
};

=======
exports.hasAuthorization = function(req, res, next) {
	if(req.isAuthenticated())
		return next();
	res.redirect('/login');
}
>>>>>>> develop
