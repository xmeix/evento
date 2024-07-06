import SearchBox from "../../components/searchBox/SearchBox";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <p className="hero-text">Explore &</p>
        <p className="hero-text">Have Fun!</p>
      </div>

      <SearchBox />
    </div>
  );
};

export default Hero;
