"use client";
import React from "react";
import "./style.css";

const SupportSection = () => {
  // Function to handle the "Start Chat" button click
  const startChat = () => {
    alert("Starting chat...");
    // Add actual logic for starting a chat, e.g., opening a chat widget
  };

  // Function to handle the "Schedule Now" button click
  const openCalendar = () => {
    alert("Opening calendar...");
    // Add actual logic for scheduling, e.g., redirecting to a calendar booking page
  };

  return (
    <>
      <section className="extra-features">
        <div className="feature">
          <h2>💬 Live Chat Support</h2>
          <p>
            Have questions? Get instant answers from our AI-powered chatbot.
          </p>
          <button onClick={startChat}>Start Chat</button>
        </div>
        <div className="feature">
          <h2>📅 Schedule a Call</h2>
          <p>Book a one-on-one call with our experts.</p>
          <button onClick={openCalendar}>Schedule Now</button>
        </div>
      </section>
    </>
  );
};

export default SupportSection;
