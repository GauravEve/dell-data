//lets import express module

var express = require('express');

//lets create an instance of express

var app=express();

//lets get a response from the server
app.get('/',function(req,res){
    res.send("welcome to express tutorial")
});

app.get('/aboutus',function(req,res){
    res.send("About us");   
})

app.get('/career',function(req,res){
    res.send("Career");
})

app.post('/exp_post',function(req,res){
    res.send("This is express post method");
})

app.listen(3000);

