const express=require('express');
const cors = require('cors');
const connectDb=require("./config/db");
const register=require("./routes/register")
const login=require("./routes/login")
const app=express();

//connect to database
connectDb();
app.use(express.json({extended:false}));
app.use(cors({origin: true, credentials: true}));
app.use(register);
app.use(login);

app.get('/',(req,res)=>res.send("Testing server"));
//start server
const port=process.env.PORT||5000;
app.listen(port,()=>console.log(`Server running on ${port}`));