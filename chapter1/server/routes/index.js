var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("get index / ")
  res.render('index', { title: 'Express from server folder' });
});

module.exports = router;
