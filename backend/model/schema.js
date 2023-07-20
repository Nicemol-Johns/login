const mongoose = require('mongoose');
const SignupSchema = mongoose.Schema({                                              
    name:{
        type:String,                                                         
        required:true
    },
    email:{
        type:String,                                                         
        required:true
    },
    ph:{
        type:String,                                                         
        required:true
    },
    password:{
        type:String,                                                          
        required:true
    }
})

// const LoginSchema=mongoose.Schema({
//     email:{
//         type:String,
//         required:true,
//         unique:true,
//     },
//     password:{
//         type:String,
//         required:true
//     }


// })

// const UserModel=mongoose.model('user',LoginSchema)
// module.exports=UserModel

const usersSignupData = mongoose.model('users',SignupSchema);
module.exports = usersSignupData;