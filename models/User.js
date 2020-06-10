const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		require: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required : true
	}
});

UserSchema.pre('save',function(next){
	const user = this;
	bcrypt.hash(user.password,10,(err,hashPass)=>{
		user.password = hashPass;
		next();
	})
})


const User = mongoose.model('User',UserSchema);
module.exports = User;