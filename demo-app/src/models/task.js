import mongoose, { Mongoose } from "mongoose";

const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    addDate:{
        type:Date,
        default:Date.now()
    },
    status:{
        type:String,
        enum:["pending","completed"],
        default:"pending"

    },
    userId:{
        type:mongoose.ObjectId,
        require:true
    }
})

export const Task = mongoose.models.task || mongoose.model("task", TaskSchema);
    