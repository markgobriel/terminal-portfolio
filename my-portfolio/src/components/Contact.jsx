import "./Contact.css";

function Contact({ items, id, title }) {
  return (
    <section className="panel contact panel--delay-4" id={id} data-fade>
      <h2>{title || "contact"}</h2>
      <div className="links">
        {items.map((item) => (
          <div className="contact-line" key={item.label} data-fade>
            <span>{item.label}</span>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
