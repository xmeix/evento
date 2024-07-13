import "./Event.css";
import { useParams } from "react-router-dom";
const Event = () => {
  const params = useParams();

  return (
    <div className="event">
      event {params.eventId}
    </div>
  );
};

export default Event;
