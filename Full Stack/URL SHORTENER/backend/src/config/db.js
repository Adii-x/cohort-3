import mongoose from "mongoose";
import config from "./config.js";

async function connectDB() {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("Database connected");
    } catch (error) {
        console.log("Error in connecting database", error);
        process.exit(1);
    }
}

export default connectDB;