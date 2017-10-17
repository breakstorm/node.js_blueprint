var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = mongoose.Schema({
<<<<<<< HEAD
	created: {
		type: Date,
		default: Date.now
	},
	title: {
=======
	created:{
		type: Date,
		default: Date.now
	},
	title:{
>>>>>>> develop
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