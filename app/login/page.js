'use client';
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";

const Login = () => {
  

  

  

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#FAF3E0] via-[#F4FF88] to-[#6CF7D5] p-6">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm flex flex-col items-center">
        <Image src={Logo} alt="Logo" width={80} height={50} className="h-auto w-auto object-contain mb-3" />
        
        <h1 className="text-xl font-bold text-gray-800 text-center mb-2">Welcome Back</h1>
        <p className="text-gray-500 text-sm text-center mb-4">Sign in to continue</p>

        <form className="space-y-3 w-full" >
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
             
            />
          </div>

          <button
            type="submit"
            className={"w-full py-2 rounded-lg font-semibold text-white transition-all duration-30 hover:bg-blue-600 shadow-md bg-gray-400 cursor-not-allowed"}
      
          
          >
            Login
          </button>
        </form>
<Link href="/signup">
        <p className="text-gray-500 text-sm mt-3">
          Don't have an account? <span className="text-blue-500 hover:underline cursor-pointer">Sign Up</span>
        </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
