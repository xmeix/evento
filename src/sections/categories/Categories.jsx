import "./Categories.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Navigation, Autoplay, A11y, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import img from "./../../assets/images/cta/teripark.png";
import img1 from "./../../assets/images/cta/Constantine 🇩🇿.jfif";
import img2 from "./../../assets/images/cta/iftar.png";
import img3 from "./../../assets/images/cta/f00bc063-1b60-46b0-8cca-263ed4a2973e.jfif";
import { NavLink } from "react-router-dom";

const categoriesData = [
  { name: "Workshops", img: img, href: "/events/1" },
  { name: "Activities", img: img1, href: "/events/2" },
  { name: "Trips", img: img2, href: "/events/3" },
  { name: "Events", img: img3, href: "/events/4" },
  { name: "Plogging", img: img3, href: "/events/1/1" },
  { name: "themed Restaurant", img: img3, href: "/events/2/1" },
  { name: "Gameplace", img: img3, href: "/events/2/2" },
  { name: "Hiking", img: img3, href: "/events/3/1" },
  { name: "Concert", img: img3, href: "/events/4/1" },
];
const Categories = () => {
  return (
    <div className="categories">
      <h2 className="section-title">Discover Our Offerings</h2>
      <p className="categories-description">
        Discover a variety of <b>exciting activities</b> with <b>Evento</b>{" "}
        diverse categories. Explore now and find the perfect place for your
        <b> next adventure</b>!
      </p>
      <Swiper
        modules={[Navigation, A11y, Autoplay, EffectCoverflow]}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        centeredSlides:true
        autoplay
        loop={true}
        spaceBetween={0}
        grabCursor={true}
        slidesPerView={3}
        className="categories-imgs"
      >
        {categoriesData.map((el, i) => (
          <SwiperSlide key={i}>
            <NavLink
              className="category"
              to={el.href}
              style={{
                backgroundImage: el.img
                  ? "linear-gradient(rgba(7, 7, 7, 0.5), rgba(0, 0, 0, 0.5)),url(" +
                    el.img +
                    ")"
                  : "",
              }}
            >
              {el.name}
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
