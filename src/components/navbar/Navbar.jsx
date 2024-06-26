import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Evento</div>
      <ul className="nav-right">
        <li>Workshops</li>
        <li>spots</li>
        <li>Events</li>
        <li>Games</li>
        <li className="login">Login</li>
      </ul>
    </div>
  );
};

export default Navbar;
