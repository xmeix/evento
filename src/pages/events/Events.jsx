import "./Events.css";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import img from "../../assets/images/cta/Constantine 🇩🇿.jfif";
import { events } from "../../assets/data/events";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EventsList from "../../components/eventsList/EventsList";

const Events = () => {
  const { categoryId, subCategoryId } = useParams();
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    const getAppropriateArray = () => {
      if (!categoryId && !subCategoryId) {
        setEventsList([...events]);
      } else if (!subCategoryId) {
        setEventsList(events.filter((event) => event.type === "Activity"));
      } else {
        // Filter events by categoryId and subCategoryId
        setEventsList([...events]);
      }
    };
    getAppropriateArray();
  }, [categoryId, subCategoryId]);

  return (
    <div className="events">
      <Navbar categoriesBar={false} lightMode={false} />
      {/* 1. background for events */}
      <Banner
        text2={"all events"}
        imgUrl={
          "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5),rgba(234, 64, 73, 0.129)),url(" +
          img +
          ")"
        }
        height="20vh"
      />

      <EventsList events={eventsList} />
    </div>
  );
};

export default Events;
