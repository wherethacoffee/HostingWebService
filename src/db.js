import mongoose from "mongoose";
import { DB_URI } from "./config.js"

export const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI, {dbName: 'HostingWeb'})
        mongoose.connection.useDb('HostingWeb')
        console.log(">>>> DB connection established")
    } catch (error) {
        console.log(error);
    }
}