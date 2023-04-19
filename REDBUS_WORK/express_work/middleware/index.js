const express=require("express");
const app=express();

app.use(function(req,res,next){
    console.log("middleware executed");
    next();
});

app.get('/',function(req,res){
    res.json({Message:"we made it to the root route"});
});

app.listen(3000,function(){
    console.log("server started");
});