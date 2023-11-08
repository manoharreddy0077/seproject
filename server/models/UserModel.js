const mongoose =require('mongoose');


//create user schema
const userSchema =new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
})

//create user model 

const User =mongoose.model('User',userSchema);

module.exports=User;