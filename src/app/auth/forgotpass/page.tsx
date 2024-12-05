"use client";

import React, { useState } from "react";
import Default from "@/components/default/Default";
import Link from "next/link";
import styles from "../page.module.css"; // Ensure this file exists with the necessary CSS classes

export default function Page() {
  const [email, setEmail] = useState(""); // State for email input
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission status
  const [message, setMessage] = useState(""); // State for feedback messages

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent page reload on form submission
    /* 
    setIsSubmitting(true); // Disable the button while submitting

    try {
      // Simulate API call for resetting password
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Mock delay
      setMessage("Password reset email sent successfully.");
    } catch (error) {
      setMessage("Failed to send reset email. Please try again.");
    } finally {
      setIsSubmitting(false); // Re-enable the button
    } */
  };

  return (
    <Default current="Sign Up">
      <div className={styles.container}>
        <div className={styles.formContainer}>
          {/* Logo Section */}
          <div className={styles.logo}>
            <span className={styles.logoText}>RetirSmart</span>
            <span className={styles.logoSubtext}>SECURE YOUR TOMORROW</span>
          </div>

          {/* Title */}
          <h1 className={styles.resetTitle}>Reset Password</h1>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address</label>
              <input
                type="email"
                className={styles.input}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Message Feedback */}
            {message && (
              <div
                className={`${styles.message} ${
                  message.includes("Failed") ? styles.error : styles.success
                }`}
              >
                {message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Reset Password"}
            </button>
          </form>

          {/* Back to Login */}
          <Link href="/auth/signin" className={styles.backLink}>
            Back to Login
          </Link>
        </div>
      </div>
    </Default>
  );
}
