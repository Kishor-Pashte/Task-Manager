import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected')

    }catch(e) {
        console.error(e?.message || "Database connection failed!")
        
    }
}

export default connectDB;