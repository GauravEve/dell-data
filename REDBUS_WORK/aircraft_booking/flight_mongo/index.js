const express=require('express');
const cors = require('cors');
const connectDb=require("./config/db");
const login=require("./routes/api/login")
const flights=require("./routes/api/search_flights")
const booking=require("./routes/api/booking");
const app=express();

//connect to database
connectDb();
app.use(express.json({extended:false}));
app.use(cors({origin: true, credentials: true}));
app.use(login);
app.use(flights);
app.use(booking);
app.get('/',(req,res)=>res.send("Testing server"));
//start server
const port=process.env.PORT||5000;
app.listen(port,()=>console.log(`Server running on ${port}`));