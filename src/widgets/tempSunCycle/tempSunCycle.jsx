import PropTypes from "prop-types";
import sunRiseIcon from "../../assets/app/sunrise.svg";
import sunSetIcon from "../../assets/app/sunset.svg";
import "./tempSunCycle.css";

export const TempSunCycle = ({ temp, sunrise, sunset }) => {
  return (
    <article className="tempContainer">
      <div className="tempWrapper" aria-label="temperature reading">
        <p className="tempStatus">Feels Like</p>
        <h2 className="tempValue">{temp}°C</h2>
      </div>

      <div className="sunWrapper" aria-label="sunrise reading">
        <img src={sunRiseIcon} alt="" className="sunriseIcon" />
        <div className="timeWrapper">
          <h5 className="sunTime">{sunrise}</h5>
          <p className="sunStatus">sunrise</p>
        </div>
      </div>

      <div className="sunWrapper" aria-label="sunset reading">
        <img src={sunSetIcon} alt="" className="sunsetIcon" />
        <div className="timeWrapper">
          <p className="sunStatus">sunset</p>
          <h5 className="sunTime">{sunset}</h5>
        </div>
      </div>
    </article>
  );
};

export default TempSunCycle;

TempSunCycle.propTypes = {
  temp: PropTypes.number,
  sunrise: PropTypes.string,
  sunset: PropTypes.string,
};
