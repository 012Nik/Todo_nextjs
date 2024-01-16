
import mongoose from "mongoose";
import User from "../models/users.js";

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work_manager",
            
        });
        console.log("Connected to the database...");

    
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
};
