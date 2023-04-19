const express=require("express");
const app=express();
var cookieParser=require('cookie-parser');
const { stringify } = require("qs");
app.set("view engine",'ejs'); //used for adding(rendereing) css file
app.use(cookieParser())
var name='Gaurav'
// app.post('/',function(req,res){
//     name=req.params.name;
//     res.send(stringify(req.params.name));
// })
app.get('/',function(req,res){
    // if(name!="Gaurav")
    res.cookie('name', 'Aman');
    res.cookie('lname','Kumar')
    res.send("home page")
})

app.get('/user',function(req,res){
    // res.send(`Welcome`);
    const param={
        name:req.cookies.name,
        lname:req.cookies.lname
    }
    console.log(cookies.getAll({}))
    res.render("user",{param})
})


app.listen(3000);