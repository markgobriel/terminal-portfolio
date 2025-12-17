import "./Masthead.css";

function Masthead({ name, tagline, meta, portrait }) {
  const hasPortrait = Boolean(portrait?.src);
  const portraitAlt = portrait?.alt || `${name} portrait`;

  return (
    <header className="masthead">
      <div className="masthead__intro">
        <p className="eyebrow">portfolio</p>
        <h1>{name}</h1>
        <p className="tagline">{tagline}</p>
      </div>
      <div className="masthead__side">
        <div className="portrait-frame">
          {hasPortrait ? (
            <img src={portrait.src} alt={portraitAlt} />
          ) : (
            <div className="portrait-placeholder" aria-hidden="true">
              portrait
            </div>
          )}
        </div>
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
