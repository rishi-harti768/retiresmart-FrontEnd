"use client";

import React, { useState } from "react";
import Default from "@/components/default/Default";
import styles from "../page.module.css";
import { Eye, EyeOff } from "react-feather";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const route = useRouter();
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    /* setFormError("");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isAnEmail = emailPattern.test(email);
    console.log(isAnEmail);

    if (!isAnEmail) {
      setFormError("Please enter a valid email address.");
    }

    // Validate the passwords match
    if (password !== confirmPassword) {
      setFormError("Passwords do not match!");
      return;
    }

    if (password.length < 8) {
      setFormError("Password must be at least 8 characters long.");
      return;
    }

    // Submit form logic here
    console.log("Form submitted", { email, password });
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };

    let data = await fetch("http://localhost:9876/auth/register", options);
    let posts = await data.json();
    console.log(posts); */
  };

  const onToggle = () => {
    // Logic to toggle between Sign Up and Login, e.g., redirect to login page
    route.replace("/auth/signin");
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setFormError("");
                  }}
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
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setFormError("");
                    }}
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
                    type={"password"}
                    className={styles.input}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setFormError("");
                    }}
                    required
                  />
                </div>
              </div>
              <div className={styles.formerror}>{formError}</div>
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

// 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
