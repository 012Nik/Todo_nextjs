import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server"
import User  from "@/models/users";
import bcrypt from "bcryptjs"

connectDb()
export async function GET()
{
    let users =[];
    try {
        users = await User.find().select("-password");
        return NextResponse.json(users);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to get users ",
            success:false
        })
    }

    

}

export async function POST(request)
{
    connectDb();
    //getting user details
     const {name,email,password,about,profileURL} = await   request.json()

     const user = new User({
        name,email,password,about,profileURL  
     });

   try {
    //save the obj to db
    user.password= bcrypt.hashSync(user.password,parseInt(process.env.BCRYPT_SALT))
    const CreatedUser = await user.save();

    const response = NextResponse.json( user,{status:201})

    return response;
   } catch (error) {
    console.log("error ocuured"+error)
    return NextResponse.json({
        message:"failed to creatw user",
        status:false
    })
   }
}


export function PUT()
{

}




