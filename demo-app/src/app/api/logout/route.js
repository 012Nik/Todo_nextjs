import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

export async function POST(request)
{

    const response =NextResponse.json({
        message:"logout success",
        success:true
    })

    response.cookies.set("authToken","",{
        expiresIn:new Date(0)
    })
    return response;
}