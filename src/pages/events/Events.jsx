import "./Events.css";
import Navbar from "../../components/navbar/Navbar";
import { events } from "../../assets/data/events";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EventsList from "../../components/eventsList/EventsList";
import TopFilterBox from "../../components/topFilterBox/TopFilterBox";
 
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
      <TopFilterBox/>
      <div className="events-filter-container">
        
        <EventsList events={eventsList} />
      </div>
    </div>
  );
};

export default Events;
