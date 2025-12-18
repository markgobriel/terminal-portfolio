import "./Footer.css";

function Footer({ updated, motto }) {
  return (
    <footer className="footer">
      <span className="footer-left">{updated}</span>
      <div className="webring" aria-label="UofT Webring">
        <a href="https://uoftwebring.com/redirect?nav=prev&id=36" aria-label="previous site in uoft webring">
          ←
        </a>
        <a href="https://uoftwebring.com" target="_blank" rel="noreferrer">
          <img src="https://uoftwebring.com/ring_logo.svg" alt="UofT Webring" />
        </a>
        <a href="https://uoftwebring.com/redirect?nav=next&id=36" aria-label="next site in uoft webring">
          →
        </a>
      </div>
      <span className="footer-right">{motto}</span>
    </footer>
  );
}

export default Footer;
