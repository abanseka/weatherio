import { UseWeatherData } from "./hooks/useWeather";
import LocationTime from "./widgets/locationTime/locationTime";
import { SearchBar } from "./widgets/searchBar/searchBar";
import WeatherStatus from "./widgets/weatherStatus/weatherStatus";
import TempSunCycle from "./widgets/tempSunCycle/tempSunCycle";
import MiscForecast from "./widgets/miscForecast/miscForecast";
import DailyForecast from "./widgets/dailyForecast/dailyForecast";
import HourlyForecast from "./widgets/hourlyForecast/hourlyForecast";
import "./App.css";

function App() {
  const { weatherData, setQuery, isCityFound } = UseWeatherData();

  return (
    <main className="app">
      {!isCityFound && (
        <p className="notFound" role="alert" aria-modal="true">
          {weatherData?.errMsg}!
        </p>
      )}

      <SearchBar setQuery={setQuery} />

      <section className="dashboard" aria-label="dashboard">
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
      </section>
    </main>
  );
}

export default App;
