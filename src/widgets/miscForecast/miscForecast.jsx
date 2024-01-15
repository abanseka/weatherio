import PropTypes from "prop-types";
import humidityIcon from "../../assets/app/humidityIcon.svg";
import pressureIcon from "../../assets/app/pressureIcon.svg";
import "./miscForecast.css";

const MiscForecast = ({ pressure, humidity }) => {
  return (
    <article
      className="miscContainer"
      aria-label="humidity and pressure readings"
    >
      <div className="humidityWrapper">
        <img src={humidityIcon} alt="" className="humidityIcon" />
        <h2 className="humidityValue">{humidity}%</h2>
        <p className="humidityLabel">Humidity</p>
      </div>

      <div className="pressureWrapper">
        <img src={pressureIcon} alt="" className="pressureIcon" />
        <h2 className="pressureValue">{pressure}hPa</h2>
        <p className="pressureLabel">pressure</p>
      </div>
    </article>
  );
};

export default MiscForecast;

MiscForecast.propTypes = {
  humidity: PropTypes.number,
  pressure: PropTypes.number,
};
