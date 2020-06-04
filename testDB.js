const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/learn_nodejs',{useNewUrlParser:true});

// BlogPost.create({
// 	title: 'khoa',
// 	body: 'Khoa đẹp trai 3'
// },(err,blogpost)=>{
// 	console.log(err,blogpost);
// })


const getArr = (item,index)=>{
	console.log(item.body);
}
BlogPost.find({title: 'khoa'},(err,blogpost)=>{
	blogpost.forEach(getArr);
});