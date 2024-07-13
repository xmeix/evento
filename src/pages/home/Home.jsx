import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Categories from "../../sections/categories/Categories";
import CTAction from "../../sections/cta/CTAction";
import Hero from "../../sections/hero/Hero";
import Instructions from "../../sections/Instruction/Instructions";
import Newsletter from "../../sections/newsletter/Newsletter";
import Testimonials from "../../sections/testimonials/Testimonials";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar categoriesBar={true} lightMode={true} />
      <Hero />
      {/* Call to Login*/}
      <CTAction />
      {/* Explore Events*/}
      <Categories />
      {/* Steps to Add Event*/}
      <Instructions />
      {/* Testimonials*/}
      <Testimonials />
      {/* Partners */}
      {/* Social Media*/}
      <Newsletter />
      {/* Newsletter */}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
