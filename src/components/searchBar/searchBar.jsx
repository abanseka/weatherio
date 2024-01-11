import PropTypes from "prop-types";
import mapPin from "../../assets/searchbar/mapPin.svg";
import searchIcon from "../../assets/searchbar/searchIcon.svg";
import "./searchBar.css";

export const SearchBar = ({ query, setQuery }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setQuery(e.currentTarget.value);
      e.currentTarget.value = "";
    }
  };

  return (
    <div className={`searchInput ${query === "" && "centeredSearch"}`}>
      <img src={searchIcon} alt="search icon" />
      <input
        type="text"
        defaultValue={query}
        onKeyDown={handleKeyPress}
        placeholder="Search for your preferred city..."
      />
      <img src={mapPin} alt="location icon" />
    </div>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};
