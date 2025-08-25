import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    distroCode: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log("Sign up attempt:", formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div
        className="w-full max-w-sm sm:max-w-md lg:max-w-[540px] xl:max-w-md p-6 sm:p-8 lg:p-10 xl:p-8 rounded-lg shadow-xl"
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
            Create Account
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
            Join the JusB.io community
          </p>
        </div>

        {/* Sign Up Form */}
        <div className="space-y-4 sm:space-y-5">
          {/* Full Name Field */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

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
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Distro Code Field */}
          <div>
            <label
              htmlFor="distroCode"
              className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2"
            >
              Distro Code
            </label>
            <input
              id="distroCode"
              name="distroCode"
              type="text"
              value={formData.distroCode}
              onChange={handleInputChange}
              placeholder="Give Distro Code Here"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-10 sm:pr-12"
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

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-10 sm:pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showConfirmPassword ? (
                  <EyeOff size={16} className="sm:w-5 sm:h-5" />
                ) : (
                  <Eye size={16} className="sm:w-5 sm:h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Terms and Privacy Checkbox */}
          <div className="flex items-start space-x-2 sm:space-x-3">
            <input
              id="agreeToTerms"
              name="agreeToTerms"
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-blue-500 bg-transparent border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
              required
            />
            <label
              htmlFor="agreeToTerms"
              className="text-xs sm:text-sm text-gray-400 leading-relaxed"
            >
              I agree to the{" "}
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 sm:py-3 px-4 text-sm sm:text-base rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!formData.agreeToTerms}
          >
            Create Account
          </button>

          {/* Log In Link */}
          <div className="text-center">
            <span className="text-gray-400 text-xs sm:text-sm">
              Don't have an account?{" "}
            </span>
            <Link
              to="/signin"
              className="text-blue-400 text-xs sm:text-sm hover:text-blue-300 transition-colors"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
