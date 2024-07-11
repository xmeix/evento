import "./Navbar.css";
const Navbar = () => {
  const categories = [
    { name: "workshops", href: "/workshops" },
    { name: "events", href: "/events" },
    { name: "themed-restaurants", href: "/themed-restaurants" },
    { name: "game-spots", href: "/game-spots" },
    { name: "touristic-spots", href: "/touristic-spots" },
    { name: "trips", href: "/trips" },
  ];

  return (
    <div className="navbar">
      <div className="nav-top">
        <a className="logo" href="">
          Evento
        </a>
        <div className="nav-btns">
          <a className="add-log btn-nbg" href="">
            Add Spot | Event
          </a>
          <a className="login btn" href="">
            Login
          </a>
        </div>
      </div>
      <ul className="nav-bottom">
        {categories.map((el, i) => (
          <a href={el.href} key={i}>
            <li>{el.name}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
