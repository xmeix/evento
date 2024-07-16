import "./EventItem.css";
import { NavLink } from "react-router-dom";
import Proptypes from "prop-types";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useState } from "react";
const EventItem = ({ item }) => {
  const { id, name, description, images, isOnline, price } = item;
  const [isFavourite, setIsFavourite] = useState(false);

  const handleIconClick = (e) => {
    e.stopPropagation();
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="event-item">
      <NavLink className="event-content" to={`/event/${id}`}>
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
      </NavLink>
      <div onClick={handleIconClick}>
        {isFavourite ? (
          <FavoriteRoundedIcon
            className="event-icon"
            style={{ color: "var(--red)" }}
          />
        ) : (
          <FavoriteBorderRoundedIcon className="event-icon" />
        )}
      </div>
    </div>
  );
};

EventItem.propTypes = {
  item: Proptypes.object.isRequired,
};
export default EventItem;
