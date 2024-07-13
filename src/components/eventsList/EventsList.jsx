import EventItem from "../eventItem/EventItem";
import "./EventsList.css";
import Proptypes from "prop-types";

const EventsList = ({ events }) => {
  return (
    <div className="eventsList"> 
      {events && events.length > 0
        ? events.map((e, i) => <EventItem key={i} item={e} />)
        : "empty list"}
    </div>
  );
};

EventsList.propTypes = {
  events: Proptypes.array,
};
export default EventsList;
