import mongoose from "mongoose";

const database = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB connected successfully ${process.env.MONGO_URL}`.bgGreen);
        
    } catch (error) {
        console.log(`Error connecting to MongoDB ${process.env.error}`.bgRed);
        
    }
}

export default database;