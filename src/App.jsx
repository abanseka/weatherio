import { UseWeatherData } from "./useWeather";
import LocationTime from "./components/locationTime/locationTime";
import { SearchBar } from "./components/searchBar/searchBar";
import WeatherStatus from "./components/weatherStatus/weatherStatus";
import TempSunCycle from "./components/tempSunCycle/tempSunCycle";
import MiscForecast from "./components/miscForecast/miscForecast";
import DailyForecast from "./components/dailyForecast/dailyForecast";
import HourlyForecast from "./components/hourlyForecast/hourlyForecast";
import "./App.css";

function App() {
  const { weatherData, query, setQuery, isCityFound, hasQuery } =
    UseWeatherData();

  return (
    <main className="app">
      {!isCityFound && <p className="notFound">{weatherData?.errMsg}!</p>}

      <SearchBar query={query} setQuery={setQuery} />

      {hasQuery && isCityFound && (
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
