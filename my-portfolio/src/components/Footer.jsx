import "./Footer.css";

function Footer({ updated, motto }) {
  return (
    <footer className="footer">
      <span className="footer-left">{updated}</span>
      <span className="footer-center" aria-hidden="true"></span>
      <span className="footer-right">{motto}</span>
    </footer>
  );
}

export default Footer;
