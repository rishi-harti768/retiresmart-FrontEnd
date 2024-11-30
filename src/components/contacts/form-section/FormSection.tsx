"use client";
import React, { useEffect } from "react";
import "./style.css";

const FormSection = () => {
  useEffect(() => {
    const path = document.getElementById("curvedPath");

    if (path instanceof SVGPathElement) {
      const totalLength = path.getTotalLength();

      // Set up initial state
      path.style.strokeDasharray = `${totalLength} ${totalLength}`;
      path.style.strokeDashoffset = `${totalLength}`;

      const createDynamicPath = (scroll: number) => {
        const startX = 0;
        const startY = 800 - scroll * 200;

        const cp1x = 200 + scroll * 100;
        const cp1y = 800 - scroll * 600;
        const cp2x = 100 - scroll * 50;
        const cp2y = 200 + scroll * 400;
        const x1 = 300 + scroll * 100;
        const y1 = 400 + scroll * 200;

        const cp3x = 500 + scroll * 200;
        const cp3y = 900 - scroll * 500;
        const x2 = 700 - scroll * 100;
        const y2 = 300 + scroll * 300;

        const cp4x = 900 - scroll * 100;
        const cp4y = 100 + scroll * 400;
        const endX = 1000;
        const endY = 500 + scroll * 200;

        return `M ${startX} ${startY} 
                C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x1} ${y1}
                S ${cp3x} ${cp3y}, ${x2} ${y2}
                S ${cp4x} ${cp4y}, ${endX} ${endY}`;
      };

      const handleScroll = () => {
        const scrollPercent =
          window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight);

        // Update stroke offset
        const draw = totalLength * (1 - scrollPercent);
        path.style.strokeDashoffset = `${draw}`;

        // Update path dynamically
        const newPath = createDynamicPath(scrollPercent);
        path.setAttribute("d", newPath);

        // Add rotation based on scroll
        path.style.transform = `rotate(${scrollPercent * 5}deg)`;
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      console.error(
        "Element with ID 'curvedPath' is not an SVGPathElement or does not exist."
      );
    }
  }, []);

  const startChat = () => {
    alert("Starting chat...");
  };

  const openCalendar = () => {
    alert("Opening calendar...");
  };

  return (
    <>
      <svg
        className="curved-line"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 800 
             C 200 800, 100 200, 300 400 
             S 500 900, 700 300 
             S 900 100, 1000 500"
          fill="none"
          stroke="#a87cff"
          strokeWidth="6"
          id="curvedPath"
        />
      </svg>

      <section className="contact-form">
        <h2>Quick Connect Form</h2>
        <form id="contactForm">
          <input type="text" name="name" placeholder="Your Name" required />
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            required
          />
          <input type="text" name="phone" placeholder="Your Phone (Optional)" />
          <select name="subject">
            <option value="general">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="feedback">Feedback</option>
            <option value="partnership">Partnership Opportunity</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message *"
            required
          ></textarea>
          <label>
            <input type="checkbox" required /> I agree to the{" "}
            <a href="#">terms of service</a> and <a href="#">privacy policy</a>.
          </label>
          <button type="submit">Let's Connect 🚀</button>
        </form>
      </section>
    </>
  );
};

export default FormSection;
