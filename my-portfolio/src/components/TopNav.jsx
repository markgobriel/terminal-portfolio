import "./TopNav.css";

function TopNav({ sections, visible }) {
  return (
    <nav className={`top-nav ${visible ? "top-nav--visible" : "top-nav--hidden"}`} aria-label="section navigation">
      <div className="top-nav__bubble">
        {sections.map((item) => (
          <a
            key={item.label}
            href={item.href || `#${item.id}`}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            data-emoji={item.emoji || undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default TopNav;
