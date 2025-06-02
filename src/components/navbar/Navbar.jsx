import "./Navbar.css";
import Proptypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = ({ categoriesBar, lightMode }) => {
  const categories = [
    { name: "Workshops", href: "/events/1" },
    { name: "Activities", href: "/events/2" },
    { name: "Trips", href: "/events/3" },
    { name: "Events", href: "/events/4" },
    { name: "all offers", href: "/events/" },
  ];

  return (
    <div
      className="navbar"
      style={{
        padding: lightMode ? "" : "0.5em 3em",
        top: lightMode ? "" : "0",
        right: lightMode ? "" : "0",
        left: lightMode ? "" : "0",
        boxShadow: lightMode ? "" : "var(--box-shadow)",
        position: lightMode ? "" : "fixed",
        zIndex: lightMode ? "": "999",
        backgroundColor: lightMode? "": "var(--white)"
      }}
    >
      <div className="nav-top" style={{}}>
        <NavLink
          className="logo"
          to="/"
          style={{
            color: lightMode ? "" : "var(--black)",
          }}
        >
          Evento
        </NavLink>
        <div className="nav-btns">
          <NavLink
            className="add-log btn-nbg"
            to="/add-event"
            style={{
              color: lightMode ? "" : "var(--black)",
              border: lightMode ? "" : "solid 2.5px var(--black)",
            }}
          >
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
  lightMode: Proptypes.bool,
};
export default Navbar;
