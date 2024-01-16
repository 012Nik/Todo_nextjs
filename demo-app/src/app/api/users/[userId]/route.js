import { connectDb } from "@/helper/db";
import User from "@/models/users";
import { connect } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

connectDb();
export async function GET(request,{params})
{
    const {userId} = params;

    try {
     const user= await User.findById(userId).select("-password");
      return NextResponse.json(user)
    } catch (error) {
        console.log("failed to get user",error);
        return NextResponse.json({
            message:"failed to get user",
            success:false
        })
        
    }
}



export async function DELETE(request,{params})
{
  const {userId} = params;

  try {
    await User.deleteOne({
        _id:userId,
    });
    return NextResponse.json({
        message:"user deleted succesfully",
        success:true
    })
  } catch (error) {
    console.log(error)
    NextResponse.json({
        message:"failed to delete user",
        success:false
    })
  }
}

export async function PUT(request,{params})
{
    const {userId} =params;

    const {name,password,about,profileURL} = await request.json()

    try {
        const user = await User.findById(userId);
        user.name = name
        user.password= password
        user.about=about
        user.profileURL= profileURL

       const updatedUser = await user.save();

       return NextResponse.json(updatedUser);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed "
        });
    }
}