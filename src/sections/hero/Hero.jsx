import Banner from "../../components/banner/Banner";
import SearchBox from "../../components/searchBox/SearchBox";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <Banner text1={"Explore &"} text2={"Have Fun!"} />
      <SearchBox />
    </div>
  );
};

export default Hero;
