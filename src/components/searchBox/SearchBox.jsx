import "./SearchBox.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBox = () => {
  return (
    <div className="search-box">
      <div className="form-field">
        <SearchRoundedIcon className="search-icon" />
        <input type="search" className="search-input" />
      </div>
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBox;
