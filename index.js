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
const expressSession = require('express-session');


//Controllers
const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/home');
const detailPostController = require('./controllers/detailPost');
const storePostController = require('./controllers/storePost');
const registerController = require('./controllers/register');
const storeRegisterController = require('./controllers/storeRegister');
const loginController = require('./controllers/login');
const storeLoginController = require('./controllers/storeLogin');
const logoutController = require('./controllers/logout');


//middlewares
const validateMiddleWare = require('./middleware/validateMiddleWare');
const authMiddleWare = require('./middleware/authMiddleWare');
const redirectMiddleWare = require('./middleware/redirectIfAuth');

app.use(expressSession({secret: 'keyboard cat'}));
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

global.loggedIn = null;
app.use('*',(req,res,next)=>{
	loggedIn = req.session.userId;
	next();
})

app.set('view engine','ejs');


mongoose.connect('mongodb://localhost/learn_nodejs',{useNewUrlParser:true});

app.use('/posts/store',validateMiddleWare);

app.get('/',homeController);


app.get('/post/:id',detailPostController);

app.get('/posts/new',authMiddleWare,newPostController);

app.post('/posts/store',authMiddleWare,storePostController);

app.get('/user/login',redirectMiddleWare,loginController);
app.post('/auth/login',redirectMiddleWare,storeLoginController);

app.get('/user/register',redirectMiddleWare,registerController);
app.post('/auth/register',redirectMiddleWare,storeRegisterController);

app.get('/user/logout',logoutController);

app.use((req,res)=>res.render('notfound'));


app.listen(3000,()=>{
    console.log("Listening in port 3000");
});


