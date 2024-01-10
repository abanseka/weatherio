import "./App.css";
import LocationTime from "./components/locationTime/locationTime";
import SearchBar from "./components/searchBar/searchBar";
import WeatherStatus from "./components/weatherStatus/weatherStatus";
import TempSunCycle from "./components/tempSunCycle/tempSunCycle";
import MiscForecast from "./components/miscForecast/miscForecast";
import DailyForecast from "./components/dailyForecast/dailyForecast";
import HourlyForecast from "./components/hourlyForecast/hourlyForecast";

function App() {
  return (
    <main>
      <SearchBar />

      <div className="app">
        <LocationTime />
        <WeatherStatus />
        <TempSunCycle />
        <MiscForecast />
        <DailyForecast />
        <HourlyForecast />
      </div>
    </main>
  );
}

export default App;
