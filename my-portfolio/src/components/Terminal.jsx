// src/components/Terminal.jsx
import React, { useState, useRef, useEffect } from "react";
import "./Terminal.css";
import InfoPanel from "./InfoPanel"; // If you want to dynamically use InfoPanel again

export default function Terminal({ setInfoContent }) {
  const [history, setHistory] = useState([
    "Welcome to my portfolio!",
    "Type 'help' or try 'cd projects', 'nano resume.pdf', 'open linkedin', 'open github', 'contact', 'clear'..."
  ]);
  const [inputValue, setInputValue] = useState("");
  const outputRef = useRef(null);

  // Scroll to bottom on history change
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  // Command handling
  function handleCommand(command) {
    const newHistory = [...history, `markgobriel-portfolio$ ${command}`];
    const args = command.split(" ");
    const mainCmd = args[0];
    const subCmd = args[1];

    switch (mainCmd) {
      case "help":
        newHistory.push("Available commands: help, cd projects, nano resume.pdf, open linkedin, open github, contact, clear");
        break;

      case "cd":
        if (subCmd === "projects") {
          newHistory.push("Listing my projects...\n1) projectA\n2) projectB\n3) projectC");
        } else {
          newHistory.push("Usage: cd projects");
        }
        break;

      case "nano":
        if (subCmd === "resume.pdf") {
          newHistory.push("Opening resume.pdf in a new tab...");
          window.open("/assets/resume.pdf", "_blank"); 
          // Make sure resume.pdf is in public/assets/ or your chosen path
        } else {
          newHistory.push("Usage: nano resume.pdf");
        }
        break;

      case "open":
        if (subCmd === "linkedin") {
          newHistory.push("Opening LinkedIn...");
          window.open("https://linkedin.com/in/yourProfile", "_blank");
        } else if (subCmd === "github") {
          newHistory.push("Opening GitHub...");
          window.open("https://github.com/yourUsername", "_blank");
        } else {
          newHistory.push("Usage: open linkedin | open github");
        }
        break;

      case "contact":
        newHistory.push(
          "Contact Info:\n" +
          "Email: yourEmail@example.com\n" +
          "LinkedIn: https://linkedin.com/in/yourProfile\n" +
          "GitHub: https://github.com/yourUsername"
        );
        break;

      case "clear":
        setHistory([]);
        return; // no setHistory at the end

      default:
        if (command.trim().length > 0) {
          newHistory.push(`Command not found: ${command}`);
        }
    }

    setHistory(newHistory);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!inputValue) return;
    handleCommand(inputValue.trim());
    setInputValue("");
  }

  return (
    <>
      <div ref={outputRef} className="terminal-output">
        {history.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <form className="terminal-input" onSubmit={onSubmit}>
        <span className="prompt">markgobriel-portfolio$</span>
        <input
          className="input-field"
          type="text"
          placeholder="Type a command..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </>
  );
}