const mongoose=require('mongoose');

BookSchema=new mongoose.Schema({
    title:{
        type:'string',
        required: true
    },
    isbn:{
        type:'string',
        required:true
    },
    author:{
        type:'string',
        required: true
    },
    description:{
        type:'string'
     
    },
    published_date:{
        type:Date
    },
    publisher:{
    
    },
    updatedDate:{
        type:Date,
        default:Date.now()
    }
});
module.exports=Book=mongoose.model('Book',BookSchema);