import "./Experience.css";

function Experience({ items }) {
  return (
    <section className="panel experience panel--delay-2">
      <h2>work experience</h2>
      <div className="exp-list">
        {items.map((item) => (
          <article className="exp-card" key={`${item.org}-${item.role}`}>
            <div className="exp-top">
              <div>
                <div className="exp-role">{item.role}</div>
                <div className="exp-org">{item.org}</div>
              </div>
              <div className="exp-meta">
                <span>{item.location}</span>
                <span className="exp-date">{item.date}</span>
              </div>
            </div>
            <ul>
              {item.bullets.map((bullet, idx) => (
                <li key={`${item.org}-${idx}`}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
