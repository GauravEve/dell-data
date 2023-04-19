const mongoose=require('mongoose');
const db='mongodb://127.0.0.1:27017/Redkart';

const connectDb=async()=>{
    try{
        mongoose.set('strictQuery',true);
        await mongoose.connect(db,{
            useNewUrlParser:true
        });
        console.log("mongodb is connected");
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports=connectDb;