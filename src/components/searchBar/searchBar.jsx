import mapPin from "../../assets/searchbar/mapPin.svg";
import searchIcon from "../../assets/searchbar/searchIcon.svg";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <form className="searchInput">
      <img src={searchIcon} alt="search icon" />
      <input type="text" placeholder="Search for your preffered city" />
      <img src={mapPin} alt="location icon" />
    </form>
  );
};

export default SearchBar;
