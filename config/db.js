const mongoose = require ("mongoose")

let connection = mongoose.connect("mongodb://localhost:27017/contact")
          .then("connected to db")


       if(!connection) 
    {
        console.log("Failed to connect")

    }  

       else
        {
console.log("Connected Succesfully")

       }

       module.exports = connection;