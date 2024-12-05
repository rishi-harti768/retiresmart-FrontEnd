"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import styles from "./page.module.css";
import Default from "@/components/default/Default";

export default function Page() {
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /*
    // Add your password reset logic here
    setError("Something went wrong. Please try again."); */
  };

  const preventCopy = (e: React.ClipboardEvent) => {
    e.preventDefault();
    alert("Copying password is not allowed for security reasons.");
  };

  return (
    <Default current={"Sign Up"}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.header}>
            <h1 className={styles.title}>Reset Password</h1>
            <p className={styles.subtitle}>
              Enter a new password below to reset your password
            </p>
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="new-password">
                New password
              </label>
              <div className={styles.passwordInput}>
                <input
                  id="new-password"
                  type={showPassword ? "text" : "password"}
                  className={styles.input}
                  required
                  onCopy={preventCopy}
                  onCut={preventCopy}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.togglePassword}
                >
                  {showPassword ? (
                    <EyeOff className={styles.icon} />
                  ) : (
                    <Eye className={styles.icon} />
                  )}
                </button>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="confirm-password">
                Confirm password
              </label>
              <input
                id="confirm-password"
                type="password"
                className={styles.input}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </Default>
  );
}
