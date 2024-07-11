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

const categoriesData = [
  { name: "Events", img: img, href: "/events" },
  { name: "Workshops", img: img1, href: "/workshops" },
  { name: "Games", img: img2, href: "/games" },
  { name: "Themed Restaurants", img: img3, href: "/themed-restaurants" },
  { name: "Spots", img: img1, href: "/spots" },
];
const Categories = () => {
  return (
    <div className="categories">
      <h2 className="categories-title">Discover Our Offerings</h2>
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
            <a
              className="category"
              href={el.href}
              style={{
                backgroundImage: el.img
                  ? "linear-gradient(rgba(7, 7, 7, 0.5), rgba(0, 0, 0, 0.5)),url(" +
                    el.img +
                    ")"
                  : "",
              }}
            >
              {el.name}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
