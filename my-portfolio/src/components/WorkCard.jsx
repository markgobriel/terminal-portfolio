import "./WorkCard.css";

function WorkCard({ item }) {
  const hasLink = Boolean(item.link);

  return (
    <article className="work-card">
      <div className="work-card__title">
        <div>{item.title}</div>
        {hasLink && (
          <a
            className="work-card__link"
            href={item.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`open ${item.title} on github`}
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
        )}
      </div>
      <p className="work-card__description">{item.description}</p>
      <div className="stack">
        {item.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </article>
  );
}

export default WorkCard;
