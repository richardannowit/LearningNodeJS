const User = require('../models/User');

var res = {};
const getInfo = (userId)=>{
	return User.findById(userId,(err,user)=>{
		if(user){
			return user;
		}

	})
}

const infoUser = async (userId)=>{
	
	return await getInfo(userId);
}

module.exports.infoUser = infoUser;
