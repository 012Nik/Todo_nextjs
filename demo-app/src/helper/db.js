
import mongoose from "mongoose";
import User from "../models/users.js";

const config = {isConnected:0,}
export const connectDb = async () => {
    if(config.isConnected)
        return;
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work_manager",
            
        });
        console.log("Connected to the database...");
            config.isConnected=connection.readyState;

    
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
};
