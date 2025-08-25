import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div
        className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-md p-6 sm:p-8 lg:p-10 xl:p-8 rounded-xl shadow-xl"
        style={{ backgroundColor: "#272727" }}
      >
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <img
            src="/Logo/Logo.png"
            alt="JusB.io Logo"
            className="mx-auto mb-3 sm:mb-4 h-10 sm:h-12 lg:h-14"
          />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-1 sm:mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
            Sign in on your account
          </p>
        </div>

        {/* Login Form */}
        <div className="space-y-4 sm:space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-10 sm:pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? (
                  <EyeOff size={16} className="sm:w-5 sm:h-5" />
                ) : (
                  <Eye size={16} className="sm:w-5 sm:h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/verifyEmail"
              className="text-blue-400 text-xs sm:text-sm hover:text-blue-300 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 sm:py-3 px-4 text-sm sm:text-base rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Sign In
          </button>

          {/* Sign Up Link */}
          <div className="text-center">
            <span className="text-gray-400 text-xs sm:text-sm">
              Don't have an account?{" "}
            </span>
            <Link
              to="/signup"
              className="text-blue-400 text-xs sm:text-sm hover:text-blue-300 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
