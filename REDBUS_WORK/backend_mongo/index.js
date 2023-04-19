const express=require('express');
const connectDb=require("./config/db");
const books=require("./routes/api/books_routes")
const app=express();

//connect to database
connectDb();
app.use(express.json({extended:false}));
app.use(books);
app.get('/',(req,res)=>res.send("Testing server"));
//start server
const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`Server running on ${port}`));