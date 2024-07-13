import "./Banner.css";
import Proptypes from "prop-types";
const Banner = ({ height, text1, text2, imgUrl }) => {
  return (
    <div className="banner" style={{ height: height, backgroundImage: imgUrl }}>
      <p className="banner-text">{text1}</p>
      <p className="banner-text">{text2}</p>
    </div>
  );
};
Banner.propTypes = {
  height: Proptypes.string,
  text1: Proptypes.string,
  text2: Proptypes.string,
  imgUrl: Proptypes.string,
};
export default Banner;
