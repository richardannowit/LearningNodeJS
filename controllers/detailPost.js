const BlogPost = require('../models/BlogPost');
const User = require('../models/User');
const {infoUser} = require('./getInfoUser');


module.exports = (req,res)=>{
	BlogPost.findById(req.params.id,(err,posts)=>{
		//console.log(posts.idUser);
		//getInfoUser(posts.idUser);
		
		infoUser(posts.idUser).then(user=>{
			res.render('post',{detailPost: posts, userPost: user});
		});
		
		

	})
}
