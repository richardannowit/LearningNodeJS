const NewUser = require('../models/User');

module.exports = (req,res)=>{
	NewUser.create(req.body,(err,user)=>{
		if(err){
			return res.redirect('/user/register');
		}
		return res.redirect('/');
	})
}