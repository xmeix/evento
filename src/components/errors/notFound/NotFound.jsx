import "./NotFound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-text">404 Not Found</div>
      <Link className="not-found-btn" to="/"></Link>
    </div>
  );
};

export default NotFound;
