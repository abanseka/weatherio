import snowIcon from "../../assets/dailyforeCast/snowIcon.svg";
import lightningIcon from "../../assets/dailyforeCast/lightningIcon.svg";
import drizzleIcon from "../../assets/dailyforeCast/drizzleIcon.svg";
import cloudIcon from "../../assets/dailyforeCast/cloudIcon.svg";
import rainIcon from "../../assets/dailyforeCast/rainIcon.svg";

import "./dailyForecast.css";

const DailyForecast = () => {
  // prettier-ignore
  const forecastData = [
    { icon: snowIcon, temp: "5", date: "Fri 2", },
    { icon: lightningIcon, temp: "20", date: "Mon 2", },
    { icon: drizzleIcon, temp: "27", date: "Tue 2", },
    { icon: cloudIcon, temp: "18", date: "Wed 2", },
    { icon: rainIcon, temp: "16", date: "Thur 2", },
  ];

  return (
    <article
      className="dailyForecastContainer"
      aria-label="5days weather forecast"
    >
      {forecastData.map((data, idx) => (
        <div className="dailyForecastWrapper" key={+Date.now() + idx}>
          <img src={data.icon} alt="weather icon" className="forecastIcon" />
          <p className="forecastTemp">{String(data.temp).padStart(2, "0")}°C</p>
          <p className="forecastDate">{data.date}</p>
        </div>
      ))}
    </article>
  );
};

export default DailyForecast;
