import "./Contact.css";

function Contact({ items }) {
  return (
    <section className="panel contact panel--delay-4">
      <h2>contact</h2>
      <div className="links">
        {items.map((item) => (
          <div className="contact-line" key={item.label}>
            <span>{item.label}</span>
            <a href={item.href}>{item.value}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
