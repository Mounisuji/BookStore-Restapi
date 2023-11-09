const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1/bookStore',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("Mongodb Connected Successfully")
    }catch(error){
        console.log("MongoDb Connection Error: " + error.message);
        ProcessingInstruction.exit(1)
    }
};

module.exports = connectDB;