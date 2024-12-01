"use client"; // Enable client-side rendering

import Default from "@/components/default/Default";
import React, { useState } from "react";
import Link from "next/link"; // Import Link
import styles from "../page.module.css";

const Page = () => {
  const [message, setMessage] = useState(""); // Initialize state for message
  const [isSubmitting, setIsSubmitting] = useState(false); // Initialize state for button submission

  // Function to handle resend email logic
  const handleResendEmail = async () => {
    setIsSubmitting(true);
    try {
      // Simulate an API call for resending the email
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Mocking a delay
      setMessage("Verification email sent successfully.");
    } catch (error) {
      setMessage("Failed to send verification email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Default current="Sign Up">
        <div className={styles.container}>
          <div className={styles.formContainer}>
            {/* Logo Section */}
            <div className={styles.logo}>
              <span className={styles.logoText}>RetirSmart</span>
              <span className={styles.logoSubtext}>SECURE YOUR TOMORROW</span>
            </div>

            {/* Title */}
            <h1 className={styles.resetTitle}>Please verify your email</h1>

            {/* Verification Message */}
            <p className={styles.verificationText}>
              We've sent a verification email to your registered email address.
              Please check your inbox and click on the verification link to
              complete your registration.
            </p>

            {/* Conditional Message Display */}
            {message && (
              <div
                className={`${styles.message} ${
                  message.includes("Failed") ? styles.error : styles.success
                }`}
              >
                {message}
              </div>
            )}

            {/* Resend Email Button */}
            <button
              onClick={handleResendEmail}
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Get Email"}
            </button>

            {/* Back to Login Link */}
            <Link href="/auth" className={styles.backLink}>
              Back to Login
            </Link>
          </div>
        </div>
      </Default>
    </>
  );
};

export default Page;
