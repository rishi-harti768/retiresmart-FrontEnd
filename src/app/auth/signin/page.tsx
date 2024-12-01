"use client";

import React, { useState } from "react";
import Default from "@/components/default/Default";
import Link from "next/link";
import { Eye, EyeOff } from "react-feather"; // For eye icons, ensure this package is installed
import styles from "../page.module.css";

export default function Page() {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Simulated login logic or API call
    console.log("Email:", email, "Password:", password);
    // Add your login logic here
  };

  const onToggle = () => {
    // Logic for toggling to Sign Up page
    console.log("Switch to Sign Up");
    // Example: Navigate to a different route if needed
  };

  return (
    <>
      <Default current="Sign Up">
        <div className={styles.container}>
          <div className={styles.formContainer}>
            {/* Header Section */}
            <div className={styles.header}>
              <h1 className={styles.title}>Sign In</h1>
              <button className={styles.toggleButton} onClick={onToggle}>
                Sign Up
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className={styles.formGroup}>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Field */}
              <div className={styles.formGroup}>
                <div className={styles.passwordContainer}>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={styles.input}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className={styles.passwordToggle}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitButton}>
                Sign In
              </button>
            </form>

            {/* Forgot Password */}
            <Link href="/forgot-password" className={styles.forgotPassword}>
              Forgot Password?
            </Link>
          </div>
        </div>
      </Default>
    </>
  );
}
