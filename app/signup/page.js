"use client";
import { useState, } from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";


const Signup = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    alert("Account Created Successfully!");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm flex flex-col items-center">
        <Image
          src={Logo}
          alt="Logo"
          width={80}
          height={50}
          className="h-auto w-auto object-contain mb-3"
        />

        <h1 className="text-xl font-bold text-gray-800 text-center mb-2">
          Create an Account
        </h1>
        <p className="text-gray-500 text-sm text-center mb-4">
          Sign up to get started
        </p>

        <form className="space-y-3 w-full" onSubmit={handleSubmit} method="POST">
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Your Password"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {formData.password &&
            formData.confirmPassword &&
            formData.password !== formData.confirmPassword && (
              <p className="text-red-500 text-sm text-center">
                Passwords do not match!
              </p>
            )}

          <button
            type="submit"
            className={`w-full py-2 rounded-lg font-semibold text-white transition-all duration-300 ${
              isFormValid
                ? "bg-blue-500 hover:bg-blue-600 shadow-md"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Sign Up
          </button>
        </form>
       

       <Link href="/login">   
          <p className="text-gray-500 text-sm mt-3">
            Already have an account?{" "}  
            <span className="text-blue-500 hover:underline cursor-pointer"  >
              Login
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
