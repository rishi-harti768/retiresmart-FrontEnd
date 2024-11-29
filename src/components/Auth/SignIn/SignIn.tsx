import React from "react";
import "./style.css";
import Image from 'next/image';


const SignIn = () => {
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Sign-in functionality to be implemented!");
    // Add sign-in logic here, such as calling an API for authentication
  };

  return (
    <>
      {/* Login Form */}
      <div className="container">
        <Image src="/logo.svg" width={240} height={108} alt="logo" />
      <h1>Login</h1>
        <div className="login-box">
         
          <form onSubmit={handleSignIn}>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="btn">
              Sign in
            </button>
            <div className="social-login">
            
            </div>
          </form>
          <p className="register">
            Don't have an account? <a href="#">Register for free</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
