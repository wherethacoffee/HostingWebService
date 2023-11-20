import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    pwd: {
        type: String,
        required: true
    }
})

export default mongoose.model('Admin', adminSchema)