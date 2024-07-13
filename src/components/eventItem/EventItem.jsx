import "./EventItem.css";
import { NavLink } from "react-router-dom";
import Proptypes from "prop-types";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useState } from "react";
const EventItem = ({ item }) => {
  const { id, name, description, images, isOnline, price } = item;
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <NavLink className="event-item" to={`/event/${id}`}>
      <div className="event-content">
        <img className="event-img" src={images[0]} alt="" />
        <div className="event-item-info-wrapper">
          <div className="event-item-top">
            <div className="event-name">{name}</div>
            <div className="event-online">
              {isOnline ? "online" : "on-site"}
            </div>
          </div>
          <div className="event-description">{description}</div>
          <div className="event-price">{price == 0 ? "free" : price}</div>
        </div>
      </div>
      <div className="event-icon">
        {isFavourite ? (
          <FavoriteRoundedIcon onClick={() => setIsFavourite(false)} />
        ) : (
          <FavoriteBorderRoundedIcon onClick={() => setIsFavourite(true)} />
        )}
      </div>
    </NavLink>
  );
};

EventItem.propTypes = {
  item: Proptypes.object,
};
export default EventItem;
