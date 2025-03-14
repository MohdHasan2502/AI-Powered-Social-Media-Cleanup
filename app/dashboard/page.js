"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Dashboard() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Controversial Post 1", subreddit: "r/news", sentiment: "Negative", flagged: true },
    { id: 2, title: "Casual Post 2", subreddit: "r/AskReddit", sentiment: "Neutral", flagged: false },
    { id: 3, title: "Old Post 3", subreddit: "r/funny", sentiment: "Positive", flagged: false },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 bg-gradient-to-b from-[#FAF3E0] via-[#F4FF88] to-[#6CF7D5]">
      

      {/* Hero Section */}
      <div className="text-center my-8 ">
        <motion.h1 className="text-3xl font-extrabold text-gray-900 dark:text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Welcome, Ready to Clean Your Reddit?
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Analyze and remove old, risky posts with AI assistance.</p>
        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Analyze New Posts</button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <h2 className="text-2xl font-bold">102</h2>
          <p>Total Posts Scanned</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <h2 className="text-2xl font-bold text-red-500">15</h2>
          <p>Flagged Posts</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <h2 className="text-2xl font-bold text-green-500">7</h2>
          <p>Deleted Posts</p>
        </div>
      </div>

      {/* Post List */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Posts</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-3">Title</th>
              <th className="p-3">Subreddit</th>
              <th className="p-3">Sentiment</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className={post.flagged ? "bg-red-100 dark:bg-red-900" : ""}>
                <td className="p-3">{post.title}</td>
                <td className="p-3">{post.subreddit}</td>
                <td className="p-3">{post.sentiment}</td>
                <td className="p-3">
                  <button className="bg-gray-300 text-black px-3 py-1 rounded-lg mr-2">Review</button>
                  {post.flagged && <button className="bg-red-500 text-white px-3 py-1 rounded-lg">Delete</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
