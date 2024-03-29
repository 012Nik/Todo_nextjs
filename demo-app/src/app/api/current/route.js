import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/users";
import { connectDb } from "@/helper/db";

export async function GET(request) {
  await connectDb()
  console.log("in current route")
  const authToken = request.cookies.get("authToken")?.value;
  console.log("current toekn :"+authToken);
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  console.log("current data:"+data);
  const user = await User.findById(data._id).select("-password");
    console.log("======test========");
  return NextResponse.json(user);
}