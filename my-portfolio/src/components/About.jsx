import { useState } from "react";
import "./About.css";

function About({ paragraphs, status, focusList, id, title, portrait }) {
  const [bursts, setBursts] = useState([]);

  const handleBurst = () => {
    const now = Date.now();
    const newBursts = Array.from({ length: 10 }).map((_, idx) => ({
      id: `${now}-${idx}`,
      dx: (Math.random() - 0.5) * 120,
      delay: Math.random() * 0.25,
    }));
    setBursts((prev) => [...prev, ...newBursts]);
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => !newBursts.some((n) => n.id === b.id)));
    }, 1300);
  };

  return (
    <section className="panel about panel--delay-1" id={id} data-fade>
      <h2>{title || "about"}</h2>
      <div className="about-body">
        <div className="about-copy">
          {paragraphs.map((text, index) => (
            <p key={`${text.slice(0, 12)}-${index}`}>{text}</p>
          ))}
          <div className="signature">
            <span className="pulse" aria-hidden="true"></span>
            {status}
          </div>
          <div className="focus-list">
            {focusList.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        {portrait?.src && (
          <div className="about-portrait" data-emoji="😍" onClick={handleBurst}>
            <img src={portrait.src} alt={portrait.alt || "portrait"} />
            {bursts.map((item) => (
              <span
                key={item.id}
                className="emoji-burst"
                style={{ "--dx": `${item.dx}px`, "--delay": `${item.delay}s` }}
                aria-hidden="true"
              >
                😍
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
