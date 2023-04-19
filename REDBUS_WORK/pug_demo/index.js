const express=require("express");

const app=express();

//lets set the app engine to use pug

app.set('view engine','pug');

//lets define the routes for pages

app.get('/',function(req,res){
    res.render('index',{title:"Home",message:"Welcome to Redbus website"})
})

app.get('/about',function(req,res){
    res.render('about',{title:"About",message:"This is about page"})
})

app.get('/contact',function(req,res){
    res.render('contact',{title:"Contact",message:"This is contact page"})
})

//lets write a middleware to server the public files

app.use(express.static('public'));

//lets start the server

app.listen(3000,function(){
    console.log("Web app listening on port 3000")
});