var express=require('express');
var app=express();

//lets write the api's
app.use(function(req,res,next){
    
    console.log("middleware1");
    next();
})

app.use(function(req,res,next){
    
    console.log("middleware2");
    next();
})

app.get('/',function(req,res,next){
    console.log("Got a request from server for homepage");
    res.send("Welcome to redbus training department");
    next();
});

app.use('/',function(req,res,next){
    
    console.log("middleware3");
})


app.post('/',function(req,res){
    console.log("Got a post request for the home page");
    res.send ("Post message for home page")
    
});

app.get('/intern',function(req,res){
    console.log("Got a request for intern page");
    res.send("Intern page");

});

app.delete('/',function(req,res){
    console.log("Delete method called");
    res.send("Delete method");
})
app.listen(3000);


