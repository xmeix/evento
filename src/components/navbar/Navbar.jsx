import "./Navbar.css";
const Navbar = () => {
  const categories = [
    "workshops",
    "events",
    "themed-restaurants",
    "game-spots",
    "touristic-spots",
    "trips",
  ];

  return (
    <div className="navbar">
      <div className="nav-top">
        <a className="logo" href="">
          Evento
        </a>
        <div className="nav-btns">
          <a className="add-log" href="">
            Add Your Place
          </a>
          <a className="login" href="">
            Login
          </a>
        </div>
      </div>
      <ul className="nav-bottom">
        {categories.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
