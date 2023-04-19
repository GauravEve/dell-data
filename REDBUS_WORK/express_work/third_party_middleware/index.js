const bodyParser=require('body-parser');
const express=require("express");
const morgan=require("morgan");

const app=express();

//lets use third party malware
app.use(morgan("tiny"));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
     res.json({message:"Hello"});
});

//lets catch the 404 error and forward it to error handler
// (function () {
//     throw new Error('Died')
  
//   // Errors will be passed to Express
//   }).catch(next,err)

app.use((req,res,next)=>{
    const err=new Error("Not Found");
    err.status=404;
    return next(err);
});

//error handlers
// app.use(err,req,res,next)=>{
//     res.send(err);
//     })
// });
app.use((err,req,res,next)=>{
    res.status(err.status||500);
    return res.json({message:err.message,
                    error:app.get("env")==="development"?err:{}    
    })
});

app.listen(3000);