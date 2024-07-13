import "./Navbar.css";
import Proptypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = ({ categoriesBar }) => {
  const categories = [
    { name: "Workshops", href: "/events/1" },
    { name: "Activities", href: "/events/2" },
    { name: "Trips", href: "/events/3" },
    { name: "Events", href: "/events/4" },
    { name: "all offers", href: "/events/" },
  ];

  return (
    <div className="navbar">
      <div className="nav-top">
        <NavLink className="logo" to="/">
          Evento
        </NavLink>
        <div className="nav-btns">
          <NavLink className="add-log btn-nbg" to="/add-event">
            Add Spot | Event
          </NavLink>
          <NavLink className="login btn" to="/login">
            Login
          </NavLink>
        </div>
      </div>
      {categoriesBar && (
        <ul className="nav-bottom">
          {categories.map((el, i) => (
            <NavLink to={el.href} key={i}>
              <li>{el.name}</li>
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};

Navbar.propTypes = {
  categoriesBar: Proptypes.bool,
};
export default Navbar;
