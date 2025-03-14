"use client";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Enter Profile Link",
      description: "Paste your Reddit profile link into the input field.",
      icon: "🔗",
    },
    {
      title: "AI Analyzes Your Profile",
      description: "Our AI scans your past posts and comments for sentiment, flagged content, and trends.",
      icon: "🤖",
    },
    {
      title: "Get a Sentiment Score",
      description: "Receive a sentiment score ranging from -1 (negative) to +1 (positive).",
      icon: "📊",
    },
    {
      title: "Review Flagged Posts",
      description: "See any controversial or high-risk posts that could impact your online reputation.",
      icon: "⚠️",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-green-100 to-cyan-100 flex flex-col items-center justify-center px-6 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900 text-center"
      >
        How It Works
      </motion.h1>

      <p className="text-gray-600 text-lg text-center mt-2 max-w-lg">
        Understand your online presence with AI-powered analysis.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white shadow-lg rounded-xl p-6 flex items-start space-x-4"
          >
            <div className="text-3xl">{step.icon}</div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.a 
        href="/analyze-profile"
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2 shadow-md hover:bg-blue-700 transition duration-300"
      >
        Get Started <ArrowRight size={18} />
      </motion.a>
    </div>
  );
}
