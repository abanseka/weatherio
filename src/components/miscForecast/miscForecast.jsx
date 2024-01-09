import humidityIcon from "../../assets/app/humidityIcon.svg";
import pressureIcon from "../../assets/app/pressureIcon.svg";
import "./miscForecast.css";

const MiscForecast = () => {
  return (
    <div className="miscContainer">
      <div className="humidityWrapper">
        <img src={humidityIcon} alt="" className="humidityIcon" />
        <h2 className="humidityValue">41%</h2>
        <p className="humitidyLabel">Humidity</p>
      </div>

      <div className="pressureWrapper">
        <img src={pressureIcon} alt="" className="pressureIcon" />
        <h2 className="pressureValue">997hPa</h2>
        <p className="pressureLabel">pressure</p>
      </div>
    </div>
  );
};

export default MiscForecast;
