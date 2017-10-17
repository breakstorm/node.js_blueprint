var gravatar = require('gravatar');
var Comments = require('../models/comments');

<<<<<<< HEAD
exports.list = function(req, res) {
	Comments.find().sort('-created').populate('user', 'local.email').exec(function(error, comments) {
		if(error) {
=======
<<<<<<< HEAD
exports.list = function(req,res){
	Comments.find().sort('-created').populate('user', 'local.email').exec(function(error, comments){
		if(error){
=======
exports.list = function(req, res) {
	Comments.find().sort('-created').populate('user', 'local.email').exec(function(error, comments) {
		if(error) {
>>>>>>> develop
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
			return res.send(400, {
				message: error
			});
		}
<<<<<<< HEAD
		console.log(comments);
		console.log(req.user)
=======
<<<<<<< HEAD
=======
		console.log(comments);
		console.log(req.user)
>>>>>>> develop
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182

		res.render('comments', {
			title: 'Comments Page',
			comments: comments,
<<<<<<< HEAD
=======
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
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
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

<<<<<<< HEAD
=======
>>>>>>> develop
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
		res.redirect('/comments');
	})
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
exports.hasAuthorization = function(req, res, next){
	if(req.isAuthenticated())
		return next();
	res.rediret('/login');
};

=======
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
exports.hasAuthorization = function(req, res, next) {
	if(req.isAuthenticated())
		return next();
	res.redirect('/login');
<<<<<<< HEAD
}
=======
}
>>>>>>> develop
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
