const mongoose=require('mongoose');

studentLogin=new mongoose.Schema({
    username:{
        type:'string',
    },
    password:{
        type:'string',
    },
    name:{
        type:'string'
     
    },
    sem:{
        type:'string'
     
    },
    batchyear:{
        type:'string'
     
    },
    branch:{
        type:'string'
     
    },
    proctor:{
        type:'string'
     
    },usertype:{
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
module.exports=studentLogin=mongoose.model('studentLogin',studentLogin);