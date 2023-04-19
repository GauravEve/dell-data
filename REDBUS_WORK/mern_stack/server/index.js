const express=require("express");
const app=express();
const books=require("./routes/api/books")
const connectDb=require('./config/db');
const cors=require('cors')
const bodyParser=require('body-parser')
app.use(cors({origin:true,credentials:true}))
app.use(express.json({extended:false}));
// app.use(bodyParser);
connectDb();
app.use(books);
app.get('/',(req,res)=>{
    res.send("server running")
})
app.listen(5000,()=>console.log("Listening to port 5000"))

