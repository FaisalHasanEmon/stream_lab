import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function VerifyEmail() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email verification logic here
    console.log("Email verification attempt:", email);
    navigate("/otp");
  };

  const handleBackClick = () => {
    // Handle back navigation
    console.log("Navigate back");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div
        className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-md p-6 sm:p-8 lg:p-10 xl:p-8 rounded-lg shadow-xl"
        style={{ backgroundColor: "#272727" }}
      >
        {/* Header with Back Button */}
        <div className="mb-6 sm:mb-8">
          <Link
            to="/signin"
            className="inline-flex items-center text-white hover:text-gray-300 transition-colors mb-4 sm:mb-6"
            onClick={handleBackClick}
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5 mr-2" />
            <span className="text-sm sm:text-base font-medium">
              Verify Email
            </span>
          </Link>
        </div>

        {/* Verify Email Form */}
        <div className="space-y-4 sm:space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-white text-xs sm:text-sm font-medium mb-2 sm:mb-3"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Write your email..."
              className="w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Save Button */}

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 sm:py-4 px-4 text-sm sm:text-base rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 mt-6 sm:mt-8"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
