import "./App.css";
import LocationTime from "./components/locationTime/locationTime";
import SearchBar from "./components/searchBar/searchBar";

function App() {
  return (
    <>
      <SearchBar />

      <div className="app">
        <LocationTime />
      </div>
    </>
  );
}

export default App;
