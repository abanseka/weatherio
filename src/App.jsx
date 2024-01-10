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
    <>
      <SearchBar />

      <div className="dashboard">
        <LocationTime />
        <WeatherStatus />
        <TempSunCycle />
        <MiscForecast />
        <DailyForecast />
        <HourlyForecast />
      </div>
    </>
  );
}

export default App;
