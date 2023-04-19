const mongoose=require('mongoose');

CartSave=new mongoose.Schema({
    id:{
        type:"string"
    },
    image:{
        type:'string',
    },
    description:{
        type:'string',
    },
    type:{
        type:'string'
     
    },
    brand:{
        type:"string"
    },
    size:{
        type:"string"
    },
    price:{
        type:"number"
    },
    category:{
        type:"string"
    },
    
});
module.exports=CartSave=mongoose.model('CartSave',CartSave);