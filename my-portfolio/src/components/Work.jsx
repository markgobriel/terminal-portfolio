import "./Work.css";
import WorkCard from "./WorkCard";

function Work({ items, id }) {
  return (
    <section className="panel work panel--delay-2" id={id} data-fade>
      <h2>projects</h2>
      <div className="work-list">
        {items.map((item) => (
          <WorkCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Work;
