// src/components/InfoPanel.jsx
import React from "react";
import "./InfoPanel.css";

export default function InfoPanel() {
  return (
    <div>
      <h2>Quick Links</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <a href="https://github.com/yourUsername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/yourProfile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:yourEmail@example.com">Email</a>
        </li>
      </ul>
      <p style={{ marginTop: "1rem" }}>
        Try commands like <code>cd projects</code> or <code>nano resume.pdf</code> in the terminal on the left!
      </p>
    </div>
  );
}