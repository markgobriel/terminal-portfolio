import { useEffect, useState } from "react";
import "./Masthead.css";

function Masthead({
  name,
  tagline,
  taglineTokens,
  meta,
  portrait,
  resumeHref,
  resumeLabel,
  eyebrowLabel,
  eyebrowTouchLabel,
  onNameHover,
}) {
  const [hasFinePointer, setHasFinePointer] = useState(true);
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setHasFinePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!taglineTokens || !taglineTokens.length) return undefined;
    setTypedCount(0);
    const total = taglineTokens.length;
    const interval = setInterval(() => {
      setTypedCount((prev) => {
        if (prev >= total) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [taglineTokens]);

  const label = hasFinePointer ? eyebrowLabel : eyebrowTouchLabel || eyebrowLabel;
  const hasPortrait = Boolean(portrait?.src);
  const portraitAlt = portrait?.alt || `${name} portrait`;

  const renderTagline = () => {
    const hasTokens = Array.isArray(taglineTokens) && taglineTokens.length > 0;
    if (!hasTokens) {
      return <p className="tagline" dangerouslySetInnerHTML={{ __html: tagline }} />;
    }
    const words = taglineTokens.slice(0, typedCount);
    const isTyping = typedCount < taglineTokens.length;
    return (
      <div className="tagline-wrapper">
        <p className={`tagline typewriter ${isTyping ? "is-typing" : ""}`}>
          {words.map((token, idx) => {
            const space = idx === words.length - 1 ? "" : " ";
            const content = token.href ? (
              <a href={token.href} target={token.external ? "_blank" : undefined} rel={token.external ? "noreferrer" : undefined}>
                {token.text}
              </a>
            ) : (
              token.text
            );
            return (
              <span key={`${token.text}-${idx}`}>
                {content}
                {space}
              </span>
            );
          })}
          <span className="typewriter-caret" aria-hidden="true"></span>
        </p>
        <p className="tagline tagline-placeholder" aria-hidden="true" dangerouslySetInnerHTML={{ __html: tagline }} />
      </div>
    );
  };

  return (
    <header className="masthead" id="home">
      <div className="masthead__intro">
        <p className="eyebrow">{label}</p>
        <h1 onMouseEnter={() => onNameHover?.(true)} onMouseLeave={() => onNameHover?.(false)}>
          {name}
        </h1>
        {renderTagline()}
        {/* {resumeHref && (
          <div className="masthead__actions">
            <a className="resume-top" href={resumeHref} target="_blank" rel="noreferrer">
              {resumeLabel || "resume"}
            </a>
          </div>
        )} */}
      </div>
      <div className="masthead__side">
        {hasPortrait && (
          <div className="portrait-frame">
            <img src={portrait.src} alt={portraitAlt} />
          </div>
        )}
        <div className="meta">
          {meta.map((item) => (
            <div className="meta-item" key={item.label}>
              <span className="label">{item.label}</span>
              <span className="value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Masthead;
