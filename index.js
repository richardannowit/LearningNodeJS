/**
 * @file  : index.js
 * @author: Richard Annowit <richardannowit@gmail.com>
 * Date   : 03-06-2020 21:27:12
 */
const express = require('express');
const app = new express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');


//Controllers
const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/home');
const detailPostController = require('./controllers/detailPost');
const storePostController = require('./controllers/storePost');


//middlewares
const validateMiddleWare = require('./middleware/validateMiddleWare');


app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


app.set('view engine','ejs');


mongoose.connect('mongodb://localhost/learn_nodejs',{useNewUrlParser:true});

app.use('/posts/store',validateMiddleWare);

app.get('/',homeController);


app.get('/post/:id',detailPostController);

app.get('/posts/new',newPostController);

app.post('/posts/store',storePostController);

app.listen(3000,()=>{
    console.log("Listening in port 3000");
});


