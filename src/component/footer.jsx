export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">© {new Date().getFullYear()} Jacob Emanuelsson</p>

        <ul className="footer-links">
          <li>
            <a href="#home" className="footer-link">Home</a>
          </li>
          <li>
            <a href="#contact" className="footer-link">Contact</a>
          </li>
          <li>
            <a href="/projects" className="footer-link">Projects</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}