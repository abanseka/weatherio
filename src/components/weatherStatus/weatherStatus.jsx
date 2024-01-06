import weatherStatusIcon from "../../assets/app/weatherStatusIcon.svg";
import "./weatherStatus.css";

const WeatherStatus = () => {
  return (
    <div className="weatherStatusContainer">
      <div className="weatherIconWrapper">
        <img src={weatherStatusIcon} alt="weather icon" />
      </div>

      <h2 className="weatherStatus">Sunny</h2>
    </div>
  );
};

export default WeatherStatus;
