// src/components/Terminal.jsx
import React, { useState, useEffect, useRef } from "react";
import projectsData from "../data/Projects";
import "./Terminal.css";

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentDirectory, setCurrentDirectory] = useState("root"); 
  // "root" is your default directory

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleCommand = (command) => {
    // push the typed command to history
    let newHistory = [...history, `$ ${command}`];
    const args = command.trim().split(" ");
    const mainCmd = args[0];
    const secondArg = args[1] || "";

    switch (mainCmd) {
      case "help":
        newHistory.push(
          "Available commands:",
          "help",
          "ls projects",
          "cd projects/<project-name>",
          "cd ..",
          "cat about.txt",
          "nano resume.txt",
          "contact",
          "clear",
          "exit"
        );
        break;

      case "ls":
        if (secondArg === "projects") {
          // only list projects if user is at root
          if (currentDirectory === "root") {
            const projectNames = projectsData.map((p) => p.name).join("\n");
            newHistory.push(projectNames);
          } else {
            newHistory.push("You are not in root. Try 'cd ..' first.");
          }
        } else {
          newHistory.push("Unknown directory. Try 'ls projects'.");
        }
        break;

      case "cd":
        if (secondArg === "..") {
          // Go up only if not in root
          if (currentDirectory !== "root") {
            setCurrentDirectory("root");
            newHistory.push("Back to root directory.");
          } else {
            newHistory.push("Already at root directory.");
          }
        } else if (secondArg.startsWith("projects/")) {
          // user wants to cd into a specific project
          const projectName = secondArg.replace("projects/", "");
          const projectExists = projectsData.some((p) => p.name === projectName);
          if (projectExists && currentDirectory === "root") {
            setCurrentDirectory(`projects/${projectName}`);
            newHistory.push(`Entered projects/${projectName}`);
          } else {
            newHistory.push("Project not found or already in a subdirectory. Use 'ls projects'.");
          }
        } else {
          newHistory.push("Usage: cd projects/<project-name> or cd ..");
        }
        break;

      case "cat":
        if (secondArg === "about.txt") {
          newHistory.push(
            "Hi, I'm Jane Doe, a CS student passionate about full-stack development...",
            "I build creative UIs, love new technologies, etc."
          );
        } else {
          newHistory.push("File not found. Try 'cat about.txt'.");
        }
        break;

      case "nano":
        if (secondArg === "resume.txt") {
          newHistory.push(
            "Opening resume...\n\nName: Jane Doe\nEducation: B.Sc. in CS\nExperience: ...\nContact: ...\n\n[Type another command to exit nano simulation]"
          );
        } else {
          newHistory.push("File not found. Try 'nano resume.txt'.");
        }
        break;

      case "contact":
        newHistory.push(
          "GitHub: https://github.com/yourUsername",
          "LinkedIn: https://linkedin.com/in/yourProfile",
          "Email: your@email"
        );
        break;

      case "clear":
        // Just clear the entire history
        setHistory([]);
        return; // end early

      case "exit":
        newHistory.push("Shutting down terminal... Goodbye!");
        // Possibly disable input or show a new screen
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
    <div className="terminal-container" onClick={() => inputRef.current.focus()}>
      <div className="terminal-output">
        {history.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <form className="terminal-input" onSubmit={onSubmit}>
        <span className="prompt">$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input-field"
        />
      </form>
    </div>
  );
};

export default Terminal;