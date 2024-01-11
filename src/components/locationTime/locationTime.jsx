import PropTypes from "prop-types";
import "./locationTime.css";

const LocationTime = ({ location, time, date }) => {
  return (
    <div className="locationContainer">
      <h2 className="locationName">{location}</h2>

      <div className="locationTimeDateContainer">
        <h1 className="locationTime">{time}</h1>
        <p className="locationDate">{date}</p>
      </div>
    </div>
  );
};

export default LocationTime;

LocationTime.propTypes = {
  location: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string,
};
