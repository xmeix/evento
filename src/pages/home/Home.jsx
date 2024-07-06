import Categories from "../../sections/categories/Categories";
import CTAction from "../../sections/cta/CTAction";
import Hero from "../../sections/hero/Hero";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      {/* Call to Login*/}
      <CTAction />
      {/* Explore Events*/}
      <Categories />
      {/* Steps to Add Event*/}
      {/* Testimonials*/}
      {/* Partners */}
      {/* Social Media*/}
      {/* Newsletter */}
      {/* Footer */}
    </div>
  );
};

export default Home;
