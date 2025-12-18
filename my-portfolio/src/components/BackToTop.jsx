import { useEffect, useState } from "react";
import "./BackToTop.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible((window.scrollY || 0) > 280);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "is-visible" : ""}`}
      onClick={handleClick}
      aria-label="Back to top"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" role="img">
        <path
          d="M12 5l-6 6m6-6 6 6M12 5v14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default BackToTop;
