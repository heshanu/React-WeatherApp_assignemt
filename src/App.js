import "./App.css";
import "./Component/Geo";
import Geo from "./Component/weatherPage/geo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to WeatherApp</h1>
        <Geo />
      </header>
    </div>
  );
}

export default App;
