var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
	console.log("enter / ");
	res.sendFile('index.html', {root: __dirname + './../../public/HTML/'})
})


module.exports = router;