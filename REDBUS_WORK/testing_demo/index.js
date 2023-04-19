const express=require("express");
const app=express();

app.get('/',function(req,res){
    res.send("Welcome to Unit Testing");
});

app.get('/users',(req,res)=>{
    const users=[
        {'id':1,'name':'Puneet'},
        {'id':2,'name':'Abhinandan'},
        {'id':3,'name':'Shivansh'}

    ]
    res.json(users);
});

app.get('/login',function(req,res){
    const login=[
        {'username':"Gaurav", 'password':"Gaurav123"},
        {'username':"Jatin", 'password':"Jatin123"}
    ]
    res.json(login);
});

app.get('/signup',function(req,res){
    const signup=[
        {'username':"Gaurav", 'password':"Gaurav123"},
        {'username':"Jatin", 'password':"Jatin123"}
    ]
    res.json(signup);
});


module.exports=app;
