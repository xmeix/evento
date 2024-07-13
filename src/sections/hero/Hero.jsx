import Banner from "../../components/banner/Banner";
import SearchBox from "../../components/searchBox/SearchBox";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <Banner text1={"Give it a Try"} text2={""} />
      <SearchBox />
    </div>
  );
};

export default Hero;
