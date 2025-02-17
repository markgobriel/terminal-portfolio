// src/components/InfoPanel.jsx
import React from "react";

const InfoPanel = ({ activeProject }) => {
  if (!activeProject) {
    return (
      <div style={{ padding: "1rem" }}>
        <h2>Quick Links</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><a href="https://github.com/yourUsername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/yourProfile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="mailto:youremail@example.com">Email</a></li>
        </ul>
      </div>
    );
  }

  // If we have an activeProject, display its details
  return (
    <div style={{ padding: "1rem" }}>
      <h2>{activeProject.name}</h2>
      <p>{activeProject.description}</p>
      {activeProject.repo && (
        <p>
          <strong>GitHub Repo:</strong>{" "}
          <a href={activeProject.repo} target="_blank" rel="noopener noreferrer">
            {activeProject.repo}
          </a>
        </p>
      )}
      {/* Add more fields like images, screenshots, etc. */}
    </div>
  );
};

export default InfoPanel;