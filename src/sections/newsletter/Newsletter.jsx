import { NavLink } from "react-router-dom";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-signup">
        <h3 className="section-title">Subscribe to Our Newsletter</h3>
        <p className="newsletter-intro">
          Get the latest updates and offers directly in your inbox.
        </p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <NavLink type="submit" className="newsletter-button btn" to="/">
            Subscribe
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
