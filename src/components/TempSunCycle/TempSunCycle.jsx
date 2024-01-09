import sunRiseIcon from "../../assets/app/sunrise.svg";
import sunSetIcon from "../../assets/app/sunset.svg";
import "./TempSunCycle.css";

export const TempSunCycle = () => {
  return (
    <div className="tempContainer">
      <div className="tempWrapper">
        <p className="tempStatus">Feels Like 22°C</p>
        <h2 className="tempValue">24°C</h2>
      </div>

      <div className="sunWrapper">
        <img src={sunRiseIcon} alt="" className="sunriseIcon" />
        <div className="timeWrapper">
          <h5 className="sunTime">06:00 AM</h5>
          <p className="sunStatus">Sunrise</p>
        </div>
      </div>

      <div className="sunWrapper">
        <img src={sunSetIcon} alt="" className="sunsetIcon" />
        <div className="timeWrapper">
          <h5 className="sunTime">06:00 AM</h5>
          <p className="sunStatus">Sunrise</p>
        </div>
      </div>
    </div>
  );
};

export default TempSunCycle;
