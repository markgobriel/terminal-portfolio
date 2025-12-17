import "./WorkCard.css";

function WorkCard({ item }) {
  return (
    <article className="work-card">
      <div className="work-card__title">
        <div>{item.title}</div>
        <span>{item.type}</span>
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
