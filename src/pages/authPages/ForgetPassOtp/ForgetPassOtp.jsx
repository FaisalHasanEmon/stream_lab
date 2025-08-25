import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgetPassOtp() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    console.log("OTP verification attempt:", otpCode);
    navigate("/signin");
  };

  const handleResend = () => {
    console.log("Resend OTP");
    // Clear current OTP
    setOtp(["", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  const handleBackClick = () => {
    console.log("Navigate back");
  };

  useEffect(() => {
    // Focus first input on component mount
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div
        className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-md p-6 sm:p-8 lg:p-10 xl:p-8 rounded-lg shadow-xl "
        style={{
          backgroundColor: "#272727",
        }}
      >
        {/* Header with Back Button */}
        <div className="mb-6 sm:mb-8">
          <Link
            to="/verifyEmail"
            className="inline-flex items-center text-white hover:text-gray-300 transition-colors mb-4 sm:mb-6"
            onClick={handleBackClick}
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5 mr-2" />
            <span className="text-sm sm:text-base font-medium">
              Verify Email
            </span>
          </Link>

          {/* Description */}
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed">
            An OTP has been sent to your email, please enter it below to verify
            your identity.
          </p>
        </div>

        {/* OTP Form */}
        <div className="space-y-6 sm:space-y-8">
          {/* OTP Input Fields */}
          <div className="flex justify-center space-x-3 sm:space-x-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                pattern="[0-9]"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-center text-lg sm:text-xl lg:text-2xl font-semibold bg-transparent border-2 border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            ))}
          </div>

          {/* Resend Link */}
          <div className="text-center">
            <span className="text-gray-400 text-xs sm:text-sm">
              Didn't receive the code?{" "}
            </span>
            <button
              onClick={handleResend}
              className="text-blue-400 text-xs sm:text-sm hover:text-blue-300 transition-colors underline-offset-4 hover:underline"
            >
              Resend
            </button>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 sm:py-4 px-4 text-sm sm:text-base rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
