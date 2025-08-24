import React from "react";

const SignIn = () => {
  const handleSignIn = () => {};
  return (
    <div className="min-h-screen">
      <div className="bg-[#272727]">
        <figure>
          <img src="/Logo/Logo.png" alt="Logo" />
        </figure>
        <div>
          <h2>Welcome Back</h2>
          <p>Sign in on your account</p>
        </div>
        <form onSubmit={handleSignIn}></form>
      </div>
    </div>
  );
};

export default SignIn;
