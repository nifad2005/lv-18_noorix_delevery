import { connect } from "mongoose";



const connectDB = async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
    }
    try {
            await connect(uri);
            console.log("MongoDB connected..");
        } catch (error) {
            console.error("MongoDB connection error:", error);
            throw new Error("MongoDB connection failed");
        }
}

export default connectDB;