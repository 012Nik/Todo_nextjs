
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

//get all tasks of user
// localhost:3000/api/users/[userId]/tasks


export async function GET(request, { params }) {
  const { userId } = params;
  await connectDb()
  try {
    // get user using id

    const tasks = await Task.find({
      userId: userId,
    });
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success:false,
      message:"error in finding tasks"
    })
  }
}