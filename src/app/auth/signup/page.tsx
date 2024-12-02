"use client";


import React, { useState } from "react";
import Default from "@/components/default/Default";
import styles from "../page.module.css";
import { Eye, EyeOff } from "react-feather";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Validate the passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Submit form logic here
    console.log("Form submitted", { email, password });
  };

  const onToggle = () => {
    // Logic to toggle between Sign Up and Login, e.g., redirect to login page
    console.log("Toggle to Login");
  };

  return (
    <>
      <Default current="Sign Up">
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <div className={styles.header}>
              <h1 className={styles.title}>Sign Up</h1>
              <button className={styles.toggleButton} onClick={onToggle}>
                Login
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
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

              {/* Password Input */}
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

              {/* Confirm Password Input */}
              <div className={styles.formGroup}>
                <div className={styles.passwordContainer}>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={styles.input}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitButton}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </Default>
    </>
  );
}
