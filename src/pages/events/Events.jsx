import "./Events.css";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import img from "../../assets/images/other/bg.jpg";
import { useParams } from "react-router-dom";
const Events = () => {
  const { categoryId, subCategoryId } = useParams();

  return (
    <div className="events">
      <Navbar categoriesBar={false} />
      {/* 1. background for events */}
      <Banner text1={"hello"} text2={"its always me"} imgUrl={img} />
      {!categoryId && !subCategoryId
        ? "All the offers"
        : !subCategoryId
        ? `All Events of category ${categoryId}`
        : `Events of subcategory ${subCategoryId} of category ${categoryId}`}
      {/* 2. catgories aside bar */}
      {/* 3. search and filter parameters */}
      {/* 3. display all events + empty */}
    </div>
  );
};

export default Events;
