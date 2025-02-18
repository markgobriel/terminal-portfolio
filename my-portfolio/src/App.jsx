// src/App.jsx
import React, { useState } from "react";
import Terminal from "./components/Terminal";
import InfoPanel from "./components/InfoPanel";

function App() {
  // State for right panel content (could also store commands / project data here)
  const [infoContent, setInfoContent] = useState(<InfoPanel />);

  return (
    <div className="app-container">
      {/* LEFT: Terminal */}
      <div className="left-panel">
        <Terminal setInfoContent={setInfoContent} />
      </div>

      {/* RIGHT: Info Panel */}
      <div className="right-panel">
        {infoContent}
      </div>
    </div>
  );
}

export default App;