import "./App.css";
import Geo from "./Component/weatherPage/geo";
import { Weather3days } from "./template/weather3days";
import Weatherweek from "./template/weatherweek";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to WeatherApp</h1>
        <Geo />
        <button>
          <a target="_blank">show weekly weather</a>
        </button>
      </header>
    </div>
  );
}

export default App;
