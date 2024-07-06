import "./CTAction.css";
import img from "./../../assets/cta/cta.png";
const CTAction = () => {
  return (
    <div className="cta">
      <div className="cta-hero">
        <p className="cta-text">
          make your place, event, theme-restaurant, workshop and activity game
          <b> shine</b> on <b>Evento</b>
        </p>
        <div className="cta-links">
          <a href="">Quick and free registration</a>| <a href="">Learn more</a>
        </div>
      </div>
      <div className="cta-img">
        <img src={img} alt="https://www.instagram.com/p/C40-dTrN2bB/" />
      </div>
    </div>
  );
};

export default CTAction;
