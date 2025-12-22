import "./About.css";

function About({ paragraphs, status, focusList, id, title, portrait }) {
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
          <div className="about-portrait">
            <img src={portrait.src} alt={portrait.alt || "portrait"} />
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
