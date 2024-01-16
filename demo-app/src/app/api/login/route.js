import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import User from "@/models/users";
import { connectDb } from "@/helper/db";
import jwt from "jsonwebtoken";

 connectDb();
export  async function POST(request){
   
    const {email,password} = await request.json();
    
    try {
        console.log("in post")
        //1step 1: validate c.com',
  
        const user = await User.findOne({email:email})
        console.log(user);
        if(user==null)
           throw new Error("invalid email password")

         // step2:if user present check password
          const matched= bcrypt.compareSync(password,user.password);
          if(!matched)
           throw new Error("incorrect password");

          //step3. generate jwt token 
          const token = jwt.sign({
            _id:user._id,
            name:user._name
          },process.env.JWT_KEY)
          console.log(user);
          console.log("token: "+token);

          //step4.create nextresponse and send toekn in cookie  
          const response = NextResponse.json({
            message: "Login success !!",
            success: true,
            user: user,
          });
      
          response.cookies.set("authToken", token, {
            expiresIn: "1d",
            httpOnly: true,
          });
      
          console.log(user);
          console.log(token);
      
          return response;

        

    } catch (error) {
        return NextResponse.json({
            message:error.message,
            success:false   
               },
               {
                status: 500,
               })
        
    }
}