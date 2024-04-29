const mongoose = require("mongoose");


const connectDB = async ()=>{
  try {
    const conn = await mongoose.connect("mongodb+srv://herkintormiwer:herkintormiwer@testmongodb.rsap9rt.mongodb.net/?retryWrites=true&w=majority&appName=testmongodb",{
        // useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFIndAndModify: true,
        // useCreateIndex: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`sorry ${error}`);
  }
}


module.exports = connectDB;