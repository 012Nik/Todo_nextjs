"use client"
import Link from "next/link";
import React, { useContext } from "react";
import addTask from "@/app/add-task/page";
import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Router from "next/router";
import { useRouter } from "next/navigation";


const Navbar = () => {
   const router = useRouter();
    const context = useContext(UserContext);
   // console.log(context)

    async function doLogout()
    {
       try {
        const result = await logout()
       console.log("logout result: "+result);
      
       context.setUser(undefined)
      router.push("/");
       } catch (error) {
        alert("logout error : "+error)
       }
    }

    return (

        <nav className="bg-black h-12 py-2 px-2 flex justify-between items-center">
            <div className="brand text-2xl">
                <h1 className="text-white"><a href="#">Work Manager</a></h1>
            </div>
            <div>
                <ul className="flex justify-between item-center space-x-3 text-white font-semibold">
                {
                    context.user && (
                        <>
                        <li className="text-white">
                
                <Link href={"/"}>Home</Link>
                </li>
                <li className="text-white">
                 <Link href="/add-task">Add Task</Link>
                </li>
                <li className="text-white"> 
                 <a href="/show-task">Show task</a>
                </li>
                        </>
                    )
                }
               </ul>
                    </div>
            <div>
            <ul className="flex space-x-3">
          {context.user && (
            <>
              <li className="text-white">
                <Link href={"#!"} className="text-white">{context.user.name}</Link>
              </li>
              <li className="text-white">
              <button onClick={doLogout} className="text-white">Logout</button>
              </li>
            </>
          )}

          {!context.user && (
            <>
              <li className="text-white">
                <Link href="/login">Login</Link>
              </li>
              <li className="text-white">
                <Link href="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
            </div>

        </nav>
    );
};

export default Navbar;