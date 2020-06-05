const BlogPost = require('../models/BlogPost');
const path = require('path');

module.exports = (req,res)=>{
	if(req.files == null){
		BlogPost.create(req.body,(err,blogpost)=>{
			res.redirect('/');
		});	
	} else{
		let img = req.files.image;
		req.body.image = img.name;
		img.mv(path.resolve(__dirname,'public/upload',img.name),(err)=>{
			BlogPost.create(req.body,(err,blogpost)=>{
				console.log(req.body);
				res.redirect('/');
			});	
		})
	}
}