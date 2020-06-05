const BlogPost = require('../models/BlogPost');

module.exports = (req,res)=>{
	BlogPost.findById(req.params.id,(err,posts)=>{
		res.render('post',{detailPost: posts});	
	})
}