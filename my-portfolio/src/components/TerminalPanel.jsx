// src/components/TerminalPanel.jsx
import React, { useState, useEffect, useRef } from "react";
import projectsData from "../data/Projects";
import "./TerminalPanel.css";

const TerminalPanel = ({ setActiveProject }) => {
  const [history, setHistory] = useState([
    "Welcome to my portfolio.",
    "Here are some commands you can try:",
    "help, open <projectName>, ls projects, cat about.txt, contact, clear, exit",
  ]);
  const [inputValue, setInputValue] = useState("");
  const [prompt, setPrompt] = useState("markgobriel-portfolio$");

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCommand = (command) => {
    // show user input in the history
    let newHistory = [...history, `${prompt} ${command}`];
    const args = command.trim().split(" ");
    const mainCmd = args[0];
    const secondArg = args[1] || "";

    switch (mainCmd) {
      case "help":
        newHistory.push(
          "Commands:",
          "help",
          "open <projectName>",
          "ls projects",
          "cat about.txt",
          "contact",
          "clear",
          "exit"
        );
        break;

      case "ls":
        if (secondArg === "projects") {
          const projectNames = projectsData.map((p) => p.name).join(", ");
          newHistory.push(`Projects: ${projectNames}`);
        } else {
          newHistory.push("Usage: ls projects");
        }
        break;

      case "open":
        // "open projectName"
        if (secondArg) {
          const project = projectsData.find((p) => p.name === secondArg);
          if (project) {
            newHistory.push(`Opening ${project.name} on the right panel...`);
            setActiveProject(project);
          } else {
            newHistory.push(`Project "${secondArg}" not found. Try "ls projects" to see available ones.`);
          }
        } else {
          newHistory.push("Usage: open <projectName>");
        }
        break;

      case "cat":
        if (secondArg === "about.txt") {
          newHistory.push(
            "Hi, I'm Mark Gabriel. I'm a CS student passionate about building creative web experiences."
          );
        } else {
          newHistory.push("File not found. Try 'cat about.txt'.");
        }
        break;

      case "contact":
        newHistory.push(
          "GitHub: https://github.com/yourUsername",
          "LinkedIn: https://www.linkedin.com/in/yourProfile",
          "Email: youremail@example.com"
        );
        break;

      case "clear":
        setHistory([]);
        return; // skip setHistory at the end to avoid duplicating

      case "exit":
        newHistory.push("Exiting the portfolio terminal... goodbye!");
        // Optionally disable input or do something else
        break;

      default:
        if (command.trim().length > 0) {
          newHistory.push(`Command not found: ${command}`);
        }
    }

    setHistory(newHistory);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    handleCommand(inputValue);
    setInputValue("");
  };

  return (
    <div className="terminal-panel" onClick={() => inputRef.current.focus()}>
      <div className="terminal-output">
        {history.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <form className="terminal-input" onSubmit={onSubmit}>
        <span className="prompt">{prompt}</span>
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input-field"
        />
      </form>
    </div>
  );
};

export default TerminalPanel;