var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = mongoose.Schema({
<<<<<<< HEAD
=======
<<<<<<< HEAD
	created: {
		type: Date,
		default: Date.now
	},
	title: {
=======
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
	created:{
		type: Date,
		default: Date.now
	},
	title:{
<<<<<<< HEAD
=======
>>>>>>> develop
>>>>>>> 14fc4bc9fee34cf8e05024edcb4f3e830715e182
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	content: {
		type: String,
		default: '',
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

module.exports = mongoose.model('Comments', commentSchema);