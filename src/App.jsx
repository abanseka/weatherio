import { useCallback, useEffect, useState } from "react";
import LocationTime from "./components/locationTime/locationTime";
import { SearchBar } from "./components/searchBar/searchBar";
import WeatherStatus from "./components/weatherStatus/weatherStatus";
import TempSunCycle from "./components/tempSunCycle/tempSunCycle";
import MiscForecast from "./components/miscForecast/miscForecast";
import DailyForecast from "./components/dailyForecast/dailyForecast";
import HourlyForecast from "./components/hourlyForecast/hourlyForecast";
import "./App.css";

// Util Funcs
const roundDown = (num) => Math.floor(num);
const convertToCelsius = (k) => k - 272.15;
const formatTime = (ts, opts = {}) =>
  new Date(ts * 1000).toLocaleString("en-US", opts);

function App() {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const fetchWeather = useCallback(async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const hourOpts = { hour: "numeric", minute: "numeric" };
      const dateOpts = { weekday: "long", day: "numeric", month: "short" };

      const url = `${baseUrl}/weather?q=${query}&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      const appData = {
        location: data.name,
        weather: data.weather[0].description,
        temp: roundDown(convertToCelsius(data.main.temp)),
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        time: formatTime(data.dt, { ...hourOpts, hourCycle: "h23" }),
        date: formatTime(data.dt, dateOpts),
        sunrise: formatTime(data.sys.sunrise, hourOpts),
        sunset: formatTime(data.sys.sunset, hourOpts),
      };

      setWeatherData(appData);
    } catch (err) {
      console.log(err);
    }
  }, [query]);

  useEffect(() => {
    !!query && fetchWeather();
  }, [fetchWeather, query]);

  return (
    <main className="app">
      <SearchBar query={query} setQuery={setQuery} />

      {!!query && (
        <div className="dashboard">
          <LocationTime
            location={weatherData?.location}
            time={weatherData?.time}
            date={weatherData?.date}
          />

          <WeatherStatus weather={weatherData?.weather} />

          <TempSunCycle
            temp={weatherData?.temp}
            sunrise={weatherData?.sunrise}
            sunset={weatherData?.sunset}
          />

          <MiscForecast
            humidity={weatherData?.humidity}
            pressure={weatherData?.pressure}
          />

          <DailyForecast />
          <HourlyForecast />
        </div>
      )}
    </main>
  );
}

export default App;
