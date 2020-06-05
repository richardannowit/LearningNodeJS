module.exports = (req,res,next)=>{
	if(req.body.title=='' || req.body.content==''){
		console.log("Don\'t add to database");
		return res.redirect('/posts/new');
	}
	next();
}


