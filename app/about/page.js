"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b from-[#FAF3E0] via-[#F4FF88] to-[#6CF7D5] text-white ">
  
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-5xl text-black text-center mb-6 "
      >
        AI Social Media Cleanup
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-2xl text-center text-purple-300 max-w-xl"
      >
        Take control of your online presence with AI-powered content analysis and moderation.
      </motion.p>

  
      <div className="max-w-2xl mt-12 space-y-8">
        {[
          { title: "🚀 What It Does", text: "Scan your Reddit profile and detect posts that could impact your reputation." },
          { title: "⚙️ How It Works", text: "Paste your profile link, let AI analyze your posts, and review flagged content easily." },
          { title: "🔒 Privacy First", text: "Your data is never stored. All analysis is done in real-time, ensuring total privacy." }
        ].map((section, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            className="bg-white bg-opacity-50 backdrop-blur-md p-6 rounded-xl shadow-lg text-center"
          >
            <h2 className="text-xl font-semibold mb-2 text-black">{section.title}</h2>
            <p className="text-gray-400">{section.text}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-10"
      >
        <Link href="/login">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg">
            Get Started
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
