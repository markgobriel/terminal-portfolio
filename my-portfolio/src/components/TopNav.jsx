import { useEffect, useRef, useState } from "react";
import "./TopNav.css";

function TopNav({ sections, visible, lang = "en", onLangChange }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClick);
    return () => document.removeEventListener("pointerdown", handleClick);
  }, []);

  const selectLang = (code) => {
    onLangChange?.(code);
    setOpen(false);
  };

  return (
    <nav className={`top-nav ${visible ? "top-nav--visible" : "top-nav--hidden"}`} aria-label="section navigation">
      <div className="top-nav__bubble">
        {sections.map((item) => (
          <a
            key={item.label}
            href={item.href || `#${item.id}`}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
          >
            {item.label}
          </a>
        ))}
        <div className="lang-switch" ref={menuRef}>
          <button
            type="button"
            className="lang-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-haspopup="true"
            aria-expanded={open}
          >
            {lang.toUpperCase()}
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path d="M3 5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
          {open && (
            <div className="lang-menu">
              <button type="button" className={lang === "en" ? "is-active" : ""} onClick={() => selectLang("en")}>
                English
              </button>
              <button type="button" className={lang === "fr" ? "is-active" : ""} onClick={() => selectLang("fr")}>
                Français
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
