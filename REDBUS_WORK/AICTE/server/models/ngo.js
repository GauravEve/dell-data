const mongoose=require('mongoose');

ngoLogin=new mongoose.Schema({
    username:{
        type:'string',
    },
    password:{
        type:'string',
    },
    name:{
        type:"string"
    },
    description:{
        type:"string"
    },
    date:{
        type:"date"
    },
    address:{
        type:"string"
    },
    phoneno:{
        type:"number"
    },
    mail:{
        type:"string"
    },
    image:{
        type:"string"
    },
    usertype:{
        type:'string'
     
    }
    // phone:{
    
    // },
    // email:{
    //     type:'string',
    // },
    // dob:{
    //     type:Date
    // },
    // age:{
    //     type:'string'
    // },
    // gender:{
    //     type:'string'
    // },
    // address:{
    //     type:'string'
    // }
});
module.exports=ngoLogin=mongoose.model('ngoLogin',ngoLogin);