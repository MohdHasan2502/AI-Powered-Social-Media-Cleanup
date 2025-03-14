"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AnalyzeProfile() {
  const [profileLink, setProfileLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyze = async () => {
    if (!profileLink.trim()) return alert("Enter a valid Reddit profile link!");

    setLoading(true);
    try {
      // Simulating API call (Replace this with actual API integration)
      setTimeout(() => {
        setAnalysisResult({
          flaggedPosts: [
            { id: 1, text: "Controversial comment about AI", risk: "High" },
            { id: 2, text: "Offensive joke", risk: "Medium" },
          ],
          sentimentScore: -0.8,
        });
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error analyzing profile:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-200 bg-gradient-to-b from-[#FAF3E0] via-[#F4FF88] to-[#6CF7D5] dark:bg-gray-900">
      <h1 className="text-4xl  text-gray-900  dark:text-white mb-4">
        Analyze Your Reddit Profile
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
        Enter your Reddit profile link and let AI analyze your past posts.
      </p>

      <div className="flex flex-col w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="https://www.reddit.com/user/yourusername"
          value={profileLink}
          onChange={(e) => setProfileLink(e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-3 text-gray-900 dark:text-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-md"
        >
          {loading ? "Analyzing..." : "Analyze Profile"}
        </motion.button>
      </div>

      {/* Analysis Results */}
      {analysisResult && (
        <div className="mt-6 w-full max-w-2xl bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            Analysis Results
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Sentiment Score:{" "}
            <span
              className={`font-bold ${
                analysisResult.sentimentScore < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {analysisResult.sentimentScore}
            </span>
          </p>

          <h3 className="font-medium text-gray-900 dark:text-white">Flagged Posts:</h3>
          <ul className="mt-2">
            {analysisResult.flaggedPosts.map((post) => (
              <li
                key={post.id}
                className="p-2 border-b border-gray-300 dark:border-gray-700"
              >
                <span className="text-gray-800 dark:text-gray-300">{post.text}</span>{" "}
                - <span className="text-red-500 font-semibold">{post.risk} Risk</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
