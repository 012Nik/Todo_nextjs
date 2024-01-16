import { connectDb } from "@/helper/db";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

//get all task

connectDb();
export async function GET()
{
    try {
        const task = await Task.find();

        return NextResponse.json(task);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to get tasks"
        })
    }
}


//create task

export async function POST(request)
{   connectDb();
    console.log("in post method")
   const {title,content,status,userId} = await request.json();

   try {
    console.log("in try block of post method")
        const createtask = new Task({
            title,content,status,userId,
        })
        // const newTask = await createtask.save();   
         // Example increasing the timeout to 20 seconds
const newTask = await createtask.save({ w: 1, wtimeout: 20000 });
 
         return NextResponse.json(newTask,{
        status:201
         });
   } catch (error) {
    console.log("task not created "+ error);
    return NextResponse.json({
        message:"failed to create task",
        
    })
   }
}