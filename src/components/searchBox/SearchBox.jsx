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
      <a className="search-btn btn">Search</a>
    </div>
  );
};

export default SearchBox;
