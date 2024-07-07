import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-signup">
        <h3 className="newsletter-title">Subscribe to Our Newsletter</h3>
        <p className="newsletter-intro">
          Get the latest updates and offers directly in your inbox.
        </p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div> 
    </div>
  );
};

export default Newsletter;
