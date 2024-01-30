import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server"
import User  from "@/models/users";
import bcrypt from "bcryptjs"


export async function GET()
{   await connectDb()
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
    await connectDb()
    //getting user details
     const {name,email,password,about,profileURL} = await request.json()

     const user = new User({
        name,email,password,about,profileURL  
     });

   try {
    //check if user is alredy registered

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return NextResponse.json({ error: 'User with this email is already registered' }, { status: 400 });
      }
    //save the obj to db
    user.password= bcrypt.hashSync(user.password,parseInt(process.env.BCRYPT_SALT))
    const CreatedUser = await user.save();
    const response = NextResponse.json( user,{status:201})

    return response;
   } catch (error) {
    console.log("error ocuured"+error)
    return NextResponse.json({
        message:"failed to create user",
        status:false
    })
   }
}






