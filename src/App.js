import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Geo from "./Component/weatherPage/geo";
import Weather3days from "./template/weather3days";
import Weatherweek from "./template/weatherweek";

function App() {
  return (
    <>
      <h1>Welcome to WeatherApp!</h1>
      <Router>
        <Switch>
          <Route path="/" exact component={Geo} />
          <Route path="/weather3days" component={Weather3days} />
          <Route path="/weatherweek" component={Weatherweek} />
        </Switch>
      </Router>
      <Geo />
      <button>
        <a href="/weather3days">3 days weather</a>
      </button>
    </>
  );
}

export default App;
