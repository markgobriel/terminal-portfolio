import "./Notes.css";

function Notes({ items }) {
  return (
    <section className="panel notes panel--delay-3">
      <h2>notes</h2>
      <ul>
        {items.map((note, index) => (
          <li key={`${note.slice(0, 12)}-${index}`}>{note}</li>
        ))}
      </ul>
    </section>
  );
}

export default Notes;
