var fs = require('fs');
var mime = require('mime');
var gravatar = require('gravatar');
var Images = require('../models/images');
var IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

exports.show = function(req, res) {
	Images.find().sort('-reated').populate('user', 'local.email')
	.exec(function(error, images) {
		if(error) {
			return res.status(400).send({
				message: error
			});
		}

		res.render('images-gallery', {
			title: 'Images Gallery',
			images: images,
			gravatar: gravatar.url(images.email, {s:'80', r:'x', d:'retro'}, true)
		})
	})
}

exports.uploadImage = function(req, res) {
	var src;
	var dest;
	var targetPath;
	var targetName;
	var tempPath = req.file.path;
	console.log(req.file);

	var type = mime.lookup(req.file.mimetype);
	var extension = req.file.path.split(/[. ]+/).pop();

	if(VIDEO_TYPES.indexOf(type) == -1) {
		return res.status(415).send('Supported video formats: mp4, webm, ogg, ogv');
	}
	targetPath = './public/videos/' + req.file.originalname;
	src = fs.createReadStream(tempPath);
	dest = fs.createWriteStream(targetPath);
	src.pipe(dest);
	src.on('error', function(error) {
		if(error){
			return res.status(500).send({
				message: error
			});
		}
	})

	src.on('end', function() {
		var video = new Videos(req.body);
		video.videoName = req.file.originalname;
		video.user = req.user;
		video.save(function(error) {
			return res.status(400).send({
				message: error
			});
		})

		fs.unlink(tempPath, function(err) {
			if(err) {
				return res.status(500).send({
					message: error
				})
			}

			res.redirect('videos');
		})
	})
}

exports.hasAuthorization = function(req, res, next) {
	if(req.isAuthenticated())
		return next();
	res.redirect('/login');
}