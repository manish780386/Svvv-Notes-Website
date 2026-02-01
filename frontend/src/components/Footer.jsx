import React from "react";
import "./Footer.css";
import { Facebook, Instagram, Github, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>Svvv Notes</h2>
          <p>
            Exam-oriented notes for SVVV students.
            Simple language • Smart learning.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/notes">Notes</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/query">Query</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h3>Connect</h3>
          <div className="icons">
            <a href="https://www.facebook.com/share/16d7D2YUGz/" target="_blank" rel="noopener noreferrer"><Facebook /></a>
            <a
              href="https://www.instagram.com/manish_dange_07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>

            <a
              href="https://github.com/manish780386"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/manish-dange-2a03b6312/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>


            <a
              href="mailto:manishdange17@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail />
            </a>

          </div>

          {/* Developer Info */}
          <p style={{ marginTop: "15px", fontSize: "14px", lineHeight: "1.6" }}>
            <strong>Developer:</strong> Manish Dange <br />
            <a href="mailto:manishdange17@gmail.com">manishdange17@gmail.com</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
