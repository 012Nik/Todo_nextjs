"use client"
import Link from "next/link";
import React from "react";
import addTask from "@/app/add-task/page";


const Navbar = () => {
    return (
        <nav className="bg-black h-12 py-2 px-2 flex justify-between items-center">
            <div className="brand text-2xl">
                <h1 className="text-white"><a href="#">Work Manager</a></h1>
            </div>
            <div>
                <ul className="flex justify-between item-center space-x-3 text-white font-semibold">
                <li>
                
                <Link href={"/"}>Home</Link>
                </li>
                <li>
                 <Link href="/add-task">Add Task</Link>
                </li>
                <li>
                 <a href="/show-task">Show task</a>
                </li>
               </ul>
                    </div>
            <div>
                <ul className="flex space-x-4 px-4 text-white">
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/signup">Sign in</a>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;