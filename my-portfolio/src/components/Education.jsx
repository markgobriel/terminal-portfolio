import "./Education.css";

function Education({ items, id }) {
  return (
    <section className="panel education panel--delay-1" id={id}>
      <h2>education</h2>
      <div className="edu-list">
        {items.map((item) => (
          <article className="edu-card" key={item.school}>
            <div className="edu-header">
              <div className="edu-school">{item.school}</div>
              <div className="edu-date">{item.date}</div>
            </div>
            <div className="edu-program">{item.program}</div>
            {item.details && <p className="edu-details">{item.details}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
