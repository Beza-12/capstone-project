import React, { useState } from "react";
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    
    if (!email.includes("@")) {
      setEmailError("Please enter a valid email address with @ symbol");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    console.log("Subscribed with email:", email);
    setIsSubscribed(true);
    setEmail("");
    setEmailError("");
    
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>University Student Hub</h3>
          <p>Your platform for academic success and career development.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="Instagram">📸</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/exams">Exams</a></li>
            <li><a href="/jobs">Careers</a></li>
            <li><a href="/admin">Admin</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Study Materials</a></li>
            <li><a href="#">Research Papers</a></li>
            <li><a href="#">Tutorials</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📧 info@universityhub.edu</p>
          <p>📞 +1 (555) 123-4567</p>
          <div className="newsletter">
            <p>Subscribe to newsletter:</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="newsletter-input">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  value={email}
                  onChange={handleEmailChange}
                  className={emailError ? "error" : ""}
                />
                <button type="submit">Subscribe</button>
              </div>
              {emailError && <p className="error-message">{emailError}</p>}
              {isSubscribed && <p className="success-message">Thank you!</p>}
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 University Student Hub. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;