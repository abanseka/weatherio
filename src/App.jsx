import "./App.css";
import TempSunCycle from "./components/TempSunCycle/TempSunCycle";
import LocationTime from "./components/locationTime/locationTime";
import SearchBar from "./components/searchBar/searchBar";
import WeatherStatus from "./components/weatherStatus/weatherStatus";

function App() {
  return (
    <>
      <SearchBar />

      <div className="app">
        <LocationTime />
        <WeatherStatus />
        <TempSunCycle />
      </div>
    </>
  );
}

export default App;
