import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./Cursor.css";

const INTERACTIVE_SELECTOR =
  "a, button, .work-card, .skill-pill, .contact-line a, .work-card__link";

function Cursor({ nameHover, nameHoverImage, eduHover, eduHoverImage }) {
  const prefersFinePointer =
    typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

  const [isInteractive, setIsInteractive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const [pos, setPos] = useState(() => {
    if (typeof window === "undefined") return { x: -9999, y: -9999 };
    return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  });

  const rafRef = useRef(null);
  const target = useRef({ ...pos });
  const current = useRef({ ...pos });

  useEffect(() => {
    if (!prefersFinePointer) return undefined;

    const handleMove = (event) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
      setIsHovering(true);
      const isLink = Boolean(event.target.closest(INTERACTIVE_SELECTOR));
      setIsInteractive(isLink);
    };

    const handleScroll = () => {
      // keep aligned to last known pointer position during scroll
      setPos({ x: current.current.x, y: current.current.y });
    };

    const handleSelection = () => {
      const sel = window.getSelection();
      const active = sel && !sel.isCollapsed && sel.toString().length > 0;
      setIsSelecting(Boolean(active));
    };

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.90;
      current.current.y += (target.current.y - current.current.y) * 0.20;
      setPos({ x: current.current.x, y: current.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("selectionchange", handleSelection);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("selectionchange", handleSelection);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersFinePointer]);

  if (!prefersFinePointer) return null;

  const usePortrait = (nameHover && nameHoverImage) || (eduHover && eduHoverImage);
  const portraitSrc = nameHover && nameHoverImage ? nameHoverImage : eduHoverImage;
  const portraitSize = usePortrait ? (eduHover ? 150 : 200) : undefined;

  const classes = [
    "cursor",
    isInteractive ? "cursor--interactive" : "",
    isHovering ? "cursor--hover" : "",
    isSelecting ? "cursor--selecting" : "",
    usePortrait ? "cursor--portrait" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return createPortal(
    <div
      className={classes}
      style={{
        transform: `translate3d(${pos.x + 8}px, ${pos.y + 8}px, 0)`,
        width: usePortrait ? `${portraitSize}px` : undefined,
        height: usePortrait ? `${portraitSize}px` : undefined,
      }}
    >
      <div
        className="cursor-ring"
        style={usePortrait ? { opacity: 0, display: "none" } : undefined}
      />
      {usePortrait && portraitSrc ? (
        <div
          className="cursor-portrait"
          style={{
            backgroundImage: `url(${portraitSrc})`,
            width: portraitSize ? `${portraitSize}px` : undefined,
            height: portraitSize ? `${portraitSize}px` : undefined,
          }}
        />
      ) : null}
      <svg className="cursor-arrow" viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <path
          d="M7.5 16.5 16.5 7.5M9 7h8v8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>,
    document.body
  );
}

export default Cursor;
