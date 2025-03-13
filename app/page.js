"use client";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 bg-white dark:bg-gray-900">
      {/* Title */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white font-sans text-center leading-tight">
        AI Social Media Cleanup
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 text-center max-w-xl">
        Enter your <span className="font-semibold text-blue-500">Reddit profile link </span> 
        
         
        and let AI analyze & clean up your past posts.
      </p>

      {/* Input & Button */}
      <div className="flex flex-col w-full max-w-md mt-8 space-y-4">
        <input
          type="text"
          placeholder="https://www.reddit.com/user/yourusername"
          className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-3 text-gray-900 dark:text-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold 
                     hover:bg-blue-600 transition duration-300 shadow-md"
        >
          Analyze Posts
        </motion.button>
      </div>
    </div>
    </>
  );
}
