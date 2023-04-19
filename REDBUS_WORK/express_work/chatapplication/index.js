const express=require("express");
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}));

const routes=require('./Routes/routes');
app.use('/',routes);

//start the server
app.listen(3000,()=>{
    console.log("listening to port:3000");
});