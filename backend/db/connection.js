const mongoose = require('mongoose');

// require("dotenv").config();                                                   
// const ConnectionString = process.env.CONNECTION_STRING; 

mongoose.connect("mongodb+srv://nicemol002:users@cluster0.o3tzbwf.mongodb.net/users")
.then(()=>{
    console.log(`Connection to Database established`);
})
.catch((error)=>{
    console.log(`Error in connecting to database ${error.message}`);
})