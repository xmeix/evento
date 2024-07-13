import { NavLink } from "react-router-dom";
import "./SearchBox.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBox = () => {
  return (
    <div className="search-box">
      <div className="form-field">
        <SearchRoundedIcon className="search-icon" />
        <input
          type="search"
          className="search-input"
          placeholder="Escape Room Algeria"
        />
      </div>
      <NavLink className="search-btn btn" to="/">
        Search
      </NavLink>
    </div>
  );
};

export default SearchBox;
