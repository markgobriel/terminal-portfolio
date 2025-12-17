import "./Footer.css";

function Footer({ updated, motto }) {
  return (
    <footer className="footer">
      <span>{updated}</span>
      <span>{motto}</span>
    </footer>
  );
}

export default Footer;
