const mongoose = require("mongoose")
exports.connectDatabase = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName: "job-portal",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

 
        console.log("Database connected")
    } catch (error) {
        console.log(error.message)
    }
}