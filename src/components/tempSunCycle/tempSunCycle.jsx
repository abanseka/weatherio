import PropTypes from "prop-types";
import sunRiseIcon from "../../assets/app/sunrise.svg";
import sunSetIcon from "../../assets/app/sunset.svg";
import "./tempSunCycle.css";

export const TempSunCycle = ({ temp, sunrise, sunset }) => {
  return (
    <div className="tempContainer">
      <div className="tempWrapper">
        <p className="tempStatus">Feels Like</p>
        <h2 className="tempValue">{temp}°C</h2>
      </div>

      <div className="sunWrapper">
        <img src={sunRiseIcon} alt="" className="sunriseIcon" />
        <div className="timeWrapper">
          <h5 className="sunTime">{sunrise}</h5>
          <p className="sunStatus">sunrise</p>
        </div>
      </div>

      <div className="sunWrapper">
        <img src={sunSetIcon} alt="" className="sunsetIcon" />
        <div className="timeWrapper">
          <p className="sunStatus">sunset</p>
          <h5 className="sunTime">{sunset}</h5>
        </div>
      </div>
    </div>
  );
};

export default TempSunCycle;

TempSunCycle.propTypes = {
  temp: PropTypes.number,
  sunrise: PropTypes.string,
  sunset: PropTypes.string,
};
