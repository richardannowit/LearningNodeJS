const BlogPost = require("../models/BlogPost");

module.exports = (req, res)=>{
	BlogPost.find({},(err,posts)=>{
		res.render('index',{blogposts: posts});
	})
}