import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request,{params})
{   await connectDb()
        const {taskId} = params;

        try {
            const task = await Task.findById(taskId);

            if (!task) {
                return NextResponse.json({
                    message: "Task not found",
                }, { status: 404 }); // 404 Not Found
            }

            return NextResponse.json(task);

        } catch (error) {
            console.log(error);
            return NextResponse.json({
                message:"failed to find task"
            })
            
        }

}

export async function PUT(request,{params})
{  await connectDb()
    const {taskId} = params;
    const {status} = request.json();

    try {
        const task = await Task.findById(taskId);
        task.status = "completed";

        const updatedtask = await task.save();

        return NextResponse.json(updatedtask)
    } catch (error) {

        console.log(error);
        return NextResponse.json({
            message:"task not updated"
        })
        
    }
}
export async function DELETE(request,{params})
{   await connectDb()
    const {taskId} = params;

    try {
        await Task.deleteOne({
            _id:taskId
        });  //must pass an object dont directly pass taskId
        return NextResponse.json({
            message:"task deleted succesfully"
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"task not deleted"
        })
    }
}