import PropTypes from "prop-types";
import weatherStatusIcon from "../../assets/app/weatherStatusIcon.svg";
import "./weatherStatus.css";

const WeatherStatus = ({ weather }) => {
  return (
    <div className="weatherStatusContainer">
      <div className="weatherIconWrapper">
        <img src={weatherStatusIcon} alt="weather icon" />
      </div>

      <h2 className="weatherStatus">{weather}</h2>
    </div>
  );
};

export default WeatherStatus;

WeatherStatus.propTypes = {
  weather: PropTypes.string,
};
