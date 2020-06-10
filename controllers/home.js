const BlogPost = require("../models/BlogPost");
const User = require("../models/User");


module.exports = (req, res)=>{
	BlogPost.find({},(err,posts)=>{
		//console.log(req.session);
		res.render('index',{blogposts:posts});
	})

	
	
}