var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	local: {
		name: String,
		email: String,
		password: string
	}
});

userschema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
	return bcrypt.comapreSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);