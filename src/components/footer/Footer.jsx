import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">Evento</h2>
          <p>
            Evento is your go-to platform for finding and organizing events.
            Stay connected and make the most out of every moment.
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Evento | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
