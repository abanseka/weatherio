import "./App.css";
import LocationTime from "./components/locationTime/locationTime";
import SearchBar from "./components/searchBar/searchBar";
import WeatherStatus from "./components/weatherStatus/weatherStatus";
import TempSunCycle from "./components/tempSunCycle/tempSunCycle";
import MiscForecast from "./components/miscForecast/miscForecast";

function App() {
  return (
    <>
      <SearchBar />

      <div className="app">
        <LocationTime />
        <WeatherStatus />
        <TempSunCycle />
        <MiscForecast />
      </div>
    </>
  );
}

export default App;
