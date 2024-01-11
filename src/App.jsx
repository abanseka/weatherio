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

// app
function App() {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const removeOnTimeOut = useCallback(() => {
    const DELAY = 5000;
    const $errElement = document.querySelector(".notFound");

    if ($errElement) {
      setTimeout(() => {
        $errElement.classList.add("hidden");
      }, DELAY);

      $errElement.classList.remove("hidden");
    }
  }, []);

  const fetchWeather = useCallback(async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const hourOpts = { hour: "numeric", minute: "numeric" };
      const dateOpts = { weekday: "long", day: "numeric", month: "short" };

      const url = `${baseUrl}/weather?q=${query}&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === "404") {
        setWeatherData({ errMsg: data.message, code: 404 });
        setQuery("");
        return;
      }

      const appData = {
        location: data.name,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        weather: data.weather[0].main,
        date: formatTime(data.dt, dateOpts),
        sunset: formatTime(data.sys.sunset, hourOpts),
        sunrise: formatTime(data.sys.sunrise, hourOpts),
        temp: roundDown(convertToCelsius(data.main.temp)),
        time: formatTime(data.dt, { ...hourOpts, hourCycle: "h23" }),
      };

      setWeatherData(appData);
    } catch (err) {
      console.log(err);
    }
  }, [query]);

  useEffect(() => {
    query && fetchWeather();
    removeOnTimeOut();
  }, [fetchWeather, query, weatherData, removeOnTimeOut]);

  return (
    <main className="app">
      {weatherData?.code === 404 && (
        <p className="notFound">{weatherData?.errMsg ?? 404}!</p>
      )}

      <SearchBar query={query} setQuery={setQuery} />

      {!!query && weatherData?.code !== 404 && (
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
