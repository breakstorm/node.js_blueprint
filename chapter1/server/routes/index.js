var express = require('express');
// var path = require('path');

var router = express.Router();
// var app = express();

// app.use(express.static(path.join(__dirname+'./../../', 'public')));
// app.use( __dirname + '/../../public' , express.static('/public'));
// app.use(express.static(path.join(__dirname,'./../../public')));


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
	failureRedirect: '/'
}));

module.exports = router;