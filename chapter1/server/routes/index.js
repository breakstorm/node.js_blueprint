var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log("hi")
	// res.render('index', {title: 'Express from server folder'});
	res.render('index');

});


module.exports = router;