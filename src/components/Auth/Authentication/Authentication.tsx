import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import "./style.css"

const Authentication = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className='body'>
    <div className="glass-container">
      {/* Logo - SVG remains unchanged */}
      <div className="logo-container mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" className="w-48 mx-auto">
          {/* SVG content remains the same */}
        </svg>
      </div>

      <div className="toggle-buttons">
        <button 
          type="button"
          className={`${isLoginView ? 'active' : ''}`}
          onClick={() => setIsLoginView(true)}
        >
          Login
        </button>
        <button
          type="button" 
          className={`${!isLoginView ? 'active' : ''}`}
          onClick={() => setIsLoginView(false)}
        >
          Sign Up
        </button>
      </div>

      {isLoginView ? (
        <form onSubmit={handleSubmit}>
          <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
          <div className="input-group">
            <input type="email" name="email" placeholder="Email Address" required />
          </div>
          <div className="input-group">
            <input 
              type={showLoginPassword ? 'text' : 'password'} 
              name="password" 
              placeholder="Password" 
              required 
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowLoginPassword(!showLoginPassword)}
            >
              {showLoginPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button type="submit">Login</button>
          <p className="text-center mt-3 text-sm">
            <a href="#" className="text-purple-300 hover:underline">
              Forgot Password?
            </a>
          </p>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>
          <div className="input-group">
            <input type="email" name="email" placeholder="Email Address" required />
          </div>
          <div className="input-group">
            <input 
              type={showSignupPassword ? 'text' : 'password'} 
              name="password" 
              placeholder="Password" 
              required 
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowSignupPassword(!showSignupPassword)}
            >
              {showSignupPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
    </div>
  );
};

export default Authentication;