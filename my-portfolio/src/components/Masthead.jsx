import { useEffect, useState } from "react";
import "./Masthead.css";

function Masthead({
  name,
  tagline,
  meta,
  portrait,
  resumeHref,
  resumeLabel,
  eyebrowLabel,
  eyebrowTouchLabel,
  onNameHover,
}) {
  const [hasFinePointer, setHasFinePointer] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setHasFinePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const label = hasFinePointer ? eyebrowLabel : eyebrowTouchLabel || eyebrowLabel;
  const hasPortrait = Boolean(portrait?.src);
  const portraitAlt = portrait?.alt || `${name} portrait`;

  return (
    <header className="masthead">
      <div className="masthead__intro">
        <p className="eyebrow">{label}</p>
        <h1 onMouseEnter={() => onNameHover?.(true)} onMouseLeave={() => onNameHover?.(false)}>
          {name}
        </h1>
        <p className="tagline" dangerouslySetInnerHTML={{ __html: tagline }} />
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
