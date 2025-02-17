// src/App.jsx
import React, { useState } from "react";
import TerminalPanel from "./components/Terminal";
import InfoPanel from "./components/InfoPanel";
import "./App.css"; // We'll define some simple styling here

function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="app-container">
      {/* Left side terminal */}
      <div className="terminal-section">
        <TerminalPanel setActiveProject={setActiveProject} />
      </div>

      {/* Right side info panel */}
      <div className="info-section">
        <InfoPanel activeProject={activeProject} />
      </div>
    </div>
  );
}

export default App;