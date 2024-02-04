import PropTypes from "prop-types";
import { UseGeolocation } from "../../hooks/useGeolocation";
import mapPin from "../../assets/searchbar/mapPin.svg";
import searchIcon from "../../assets/searchbar/searchIcon.svg";
import "./searchBar.css";

export const SearchBar = ({ setQuery }) => {
  const { userLocation } = UseGeolocation();
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setQuery(e.currentTarget.value);
      e.currentTarget.value = "";
    }
  };

  return (
    <nav className="searchInput" role="search" aria-label="search bar">
      <img src={searchIcon} alt="search icon" />
      <input
        type="text"
        onKeyDown={handleKeyPress}
        placeholder="Search for your preferred city..."
      />
      <img
        src={mapPin}
        alt="location icon"
        role="show user current location"
        onClick={() => setQuery(userLocation)}
      />
    </nav>
  );
};

SearchBar.propTypes = {
  setQuery: PropTypes.func.isRequired,
};
