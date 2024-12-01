import React from 'react';

const Resetemail = () => {
  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen text-gray-200">
      <div className="glass-container bg-gray-800 rounded-lg shadow-lg w-96 p-6">
        {/* Logo */}
        <div className="logo-container mb-6 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" className="w-32">
            <defs>
              <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#7C3AED', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: '#7C3AED', stopOpacity: 0.05 }} />
              </linearGradient>
              <clipPath id="shieldPath">
                <path d="M200,40 L320,80 A150,150 0 0 1 200,180 A150,150 0 0 1 80,80 Z" />
              </clipPath>
            </defs>
            <path
              d="M200,40 L320,80 A150,150 0 0 1 200,180 A150,150 0 0 1 80,80 Z"
              fill="url(#purpleGrad)"
              opacity="0.8"
            />
            <g clipPath="url(#shieldPath)" opacity="0.6">
              <path
                d="M80,140 Q200,60 320,80"
                stroke="#7C3AED"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M80,120 Q200,40 320,60"
                stroke="#7C3AED"
                strokeWidth="2"
                fill="none"
              />
            </g>
            <text
              x="200"
              y="110"
              fontFamily="Arial, sans-serif"
              fontWeight="700"
              fontSize="36"
              textAnchor="middle"
              fill="#FFFFFF"
            >
              <tspan fill="#7C3AED">Retir</tspan>Smart
            </text>
            <text
              x="200"
              y="135"
              fontFamily="Arial, sans-serif"
              fontSize="12"
              textAnchor="middle"
              fill="#CCCCCC"
            >
              SECURE YOUR TOMORROW
            </text>
          </svg>
        </div>

        {/* Reset Password Form */}
        <h2 className="text-center text-2xl font-bold mb-4 text-gray-100">Reset Password</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white rounded-md py-2 hover:bg-purple-700 transition"
          >
            Reset Password
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          <a href="#" className="text-purple-400 hover:underline">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Resetemail;
