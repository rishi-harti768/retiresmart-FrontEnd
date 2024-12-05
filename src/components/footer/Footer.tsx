import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      {/* Section 1: Brand Name and Tagline */}
      <div className="footer-brand">
        <h2>RetirSmart</h2>
        <p>Your Gateway to Financial Freedom</p>
        <div className="social-links">
          <a href="#"><img src="/icons/logos/twitterlogo.png" alt="Twitter" className="twitter" /> </a>
          <a href="#"><img src="/icons/logos/youtubelogo.png" alt="YouTube" className="youtube" /> </a>
          <a href="#"><img src="/icons/logos/instagramlogo.png" alt="Instagram" className="instagram" /> </a>
          <a href="#"><img src="/icons/logos/linkedinlogo.png" alt="LinkedIn" className="linkedin" /> </a>
        </div>
        </div>

      {/* Section 2: Quick Links */}
      <div className="footer-links">
        <h3>Quick Links</h3>
        <p>
          <a href="#">Home</a> | <a href="#">Contact Us</a> | <a href="#">About Us</a> |{" "}
          <a href="#">FAQ</a>
        </p>
      </div>

      {/* Section 3: Address */}
      <div className="footer-address">
        <h3>Our Address</h3>
        <p>RetirSmart HQ</p>
        <p>Velankani Road,</p>
        <p>Electronic City, BLR, 560100, INDIA</p>
        <p>Phone: xxx xxx xxx</p>
        <p>Email: retirsmart05@gmail.com</p>
      </div>

      {/* Footer Note */}
      <div className="footer-note">
        <p>© 2024 RetirSmart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
