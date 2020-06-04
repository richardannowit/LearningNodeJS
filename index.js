/**
 * @file  : index.js
 * @author: Richard Annowit <richardannowit@gmail.com>
 * Date   : 03-06-2020 21:27:12
 */
const express = require('express');
const path = require('path');
const app = new express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
const fileUpload = require('express-fileupload');



app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');


mongoose.connect('mongodb://localhost/learn_nodejs',{useNewUrlParser:true});




app.get('/',(req,res)=>{
	BlogPost.find({},(err,posts)=>{
		res.render('index',{blogposts: posts});
	});
    
});

app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.get('/post/:id',(req,res)=>{
	BlogPost.findById(req.params.id,(err,posts)=>{
		res.render('post',{detailPost: posts});	
	})
});

app.get('/posts/new',(req,res)=>{
    res.render('create');
});

app.post('/posts/store',(req,res)=>{
	let img = req.files.image;
	req.body.image = img.name;
	img.mv(path.resolve(__dirname,'public/upload',img.name),(err)=>{
		BlogPost.create(req.body,(err,blogpost)=>{
			console.log(req.body);
			res.redirect('/');
		});	
	})
	
});

app.listen(3000,()=>{
    console.log("Listening in port 3000");
});


