var express = require('express');
var router = express.Router();

<<<<<<< HEAD
=======
<<<<<<< HEAD
/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("get users/")
  res.send('respond with a resource');
});

module.exports = router;
=======
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
router.get('/', function(req,res,next){
	res.send('respond with a resource');
})

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> develop
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
