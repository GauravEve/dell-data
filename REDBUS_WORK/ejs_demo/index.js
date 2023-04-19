const express=require("express");
const app=express();

app.set("view engine",'ejs');

app.use(express.static('public')); //used for adding(rendereing) css file

app.get('/',function(req,res){
    res.render('home');
})

app.get('/about',function(req,res){
    res.render('about');
})

app.get('/contact',function(req,res){
    res.render('contact');
})

app.listen(3000);