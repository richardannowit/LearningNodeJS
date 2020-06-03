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


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.get('/post',(req,res)=>{
    res.render('post');
});

app.get('/posts/new',(req,res)=>{
    res.render('create');
});

app.post('/posts/store',(req,res)=>{
	console.log(req.body);
	res.redirect('/post');
});

app.listen(3000,()=>{
    console.log("Listening in port 3000");
});


