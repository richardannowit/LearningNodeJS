const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
	idUser: String,
	title: String,
	content: String,
	image: String,
	DatePost: {
		type: Date,
		default: new Date()
	}
})

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost;