import "./CTAction.css";
import img from "./../../assets/images/cta/cta.png";
const CTAction = () => {
  return (
    <div className="cta">
      <div className="cta-hero">
        <p className="cta-text">
          make your place, event, theme-restaurant, workshop and activity game
          <b> shine</b>
        </p>
        <div className="cta-description">
          Registering your event or place on our platform comes with numerous
          benefits designed to help you reach a wider audience and enhance your
          visibility.
        </div>

        <div className="cta-links">
          <a href="">Quick and free registration</a>| <a href="">Learn more</a>
        </div>
      </div>
      <div className="cta-img">
        <img
          height={700}
          src={img}
          alt="https://www.instagram.com/p/C40-dTrN2bB/"
        />
      </div>
    </div>
  );
};

export default CTAction;
