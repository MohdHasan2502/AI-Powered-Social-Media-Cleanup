"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const phrase = "AI Social Media Cleanup";
  const highlightWord = "Cleanup";
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b from-[#FAF3E0] via-[#F4FF88] to-[#6CF7D5]">
      <h1 className="text-6xl md:text-7xl  text-center text-gray-900 leading-tight">
        AI Social Media <span className="text-blue-500">{highlightWord}</span>
      </h1>


      <p className="text-lg md:text-xl text-gray-600 mt-4 text-center max-w-xl">
        Cut the noise & take control of your online presence.  
        Enter your <span className="font-semibold text-blue-500">Reddit profile</span>, and let AI do the cleanup.
      </p>

     <Link href="/login">
      <div className="mt-8 flex gap-4" >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold 
                     hover:bg-yellow-500 transition duration-300 shadow-md"
        >
          Get Started
        </motion.button>
      </div>
      </Link>
    </div>
  );
}
