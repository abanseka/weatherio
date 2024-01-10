import sunIcon from "../../assets/hourlyforeCast/sunIcon.svg";
import snowIcon from "../../assets/hourlyforeCast/snowIcon.svg";
import cloudIcon from "../../assets/hourlyforeCast/cloudIcon.svg";
import lightningIcon from "../../assets/hourlyforeCast/lightningIcon.svg";
import windIcon from "../../assets/hourlyforeCast/windDirectionIcon.svg";
import "./hourlyForecast.css";

const HourlyForecast = () => {
  const hourlyForecastData = [
    {
      hour: "12:00",
      wind: { value: "5", unit: "km/h", icon: windIcon },
      temp: { value: "15", unit: "°C", icon: lightningIcon },
    },

    {
      hour: "15:00",
      wind: { value: "2", unit: "km/h", icon: windIcon },
      temp: { value: "27", unit: "°C", icon: cloudIcon },
    },

    {
      hour: "18:00",
      wind: { value: "5", unit: "km/h", icon: windIcon },
      temp: { value: "30", unit: "°C", icon: sunIcon },
    },

    {
      hour: "21:00",
      wind: { value: "5", unit: "km/h", icon: windIcon },
      temp: { value: "10", unit: "°C", icon: snowIcon },
    },

    {
      hour: "00:00",
      wind: { value: "20", unit: "km/h", icon: windIcon },
      temp: { value: "5", unit: "°C", icon: snowIcon },
    },
  ];

  return (
    <div className="hourlyForecastContainer">
      {hourlyForecastData.map(({ hour, wind, temp }, idx) => (
        <div
          key={+Date.now() + idx}
          className="hourlyForecastwrapper"
          style={{
            backgroundColor: temp?.value >= 25 ? "#ffb798" : "#B9E6FF",
            gridArea: `h${idx + 1}`,
          }}
        >
          <h2 className="hour">{hour}</h2>

          <div className="temp">
            <img src={temp.icon} alt="" className="tempIcon" />
            <h3 className="tempValue">
              {temp.value}
              {temp.unit}
            </h3>
          </div>

          <div className="wind">
            <img src={wind.icon} alt="" className="windIcon" />
            <h3 className="windSpeed">
              {wind.value}
              {wind.unit}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
