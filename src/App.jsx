import "./App.css";
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
      </div>
    </>
  );
}

export default App;
