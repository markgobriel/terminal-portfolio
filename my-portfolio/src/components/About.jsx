import "./About.css";

function About({ paragraphs, status, focusList, id, title }) {
  return (
    <section className="panel about panel--delay-1" id={id} data-fade>
      <h2>{title || "about"}</h2>
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
    </section>
  );
}

export default About;
