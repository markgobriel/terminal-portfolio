import "./Notes.css";

function Notes({ items, id }) {
  return (
    <section className="panel certifications panel--delay-3" id={id}>
      <h2>certifications</h2>
      <div className="cert-list">
        {items.map((note, index) => {
          const key = `${note.title}-${index}`;
          return (
            <article className="cert-card" key={key}>
              <div className="cert-card__header">
                <div className="cert-institution">{note.institution}</div>
                {note.href ? (
                  <a
                    className="cert-link"
                    href={note.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`open ${note.title}`}
                  >
                    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                      <path
                        d="M8 16.5 16.5 8M10 7.5h7.5V15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ) : null}
              </div>
              <div className="cert-title">{note.title}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Notes;
