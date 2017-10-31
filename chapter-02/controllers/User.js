var models = require('../models/index');
var User = require('../models/user');

exports.create = function(req, res) {
	//request body를 가진 User 모델 만들기 
	models.User.create({
		name: req.body.name,
		email: req.body.email
	}).then(user => {res.json(user)})
}

exports.list = function(req, res){
	models.User.findAll({}).then( users => { res.join(users) })
}