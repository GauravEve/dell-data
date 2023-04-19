const mongoose=require('mongoose');

Passenger=new mongoose.Schema({
    user_id:{
        type:'string'
    },
    username:{
        type:'string',
    },
    password:{
        type:'string',
    },
    firstname:{
        type:'string'
     
    },
    lastname:{
        type:'string'
    },
    phone:{
    
    },
    email:{
        type:'string',
    },
    dob:{
        type:Date
    },
    age:{
        type:'string'
    },
    gender:{
        type:'string'
    },
    address:{
        type:'string'
    }
});
module.exports=Passenger=mongoose.model('passenger',Passenger);