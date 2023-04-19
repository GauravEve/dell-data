const mongoose=require('mongoose');

proctorLogin=new mongoose.Schema({
    username:{
        type:'string',
    },
    password:{
        type:'string',
    },
    name:{
        type:'string'
     
    },
    department:{
        type:'string'
     
    },
    batchyear:{
        type:'string'
     
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
module.exports=proctorLogin=mongoose.model('proctorLogin',proctorLogin);