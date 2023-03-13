import React from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import "./App.css";

import Geo from "./Component/weatherPage/geo";
import Weather3days from "./template/weather3days";
import Weatherweek from "./template/weatherweek";
import Page404 from "./template/Page404";

function App() {
  return (
    <>
      <h1>Welcome to WeatherApp!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact component={Geo} />
          <Route path="/weather3days" component={Weather3days} />
          <Route path="/weatherweek" component={Weatherweek} />
          <Route path="/*" component={Page404} />
        </Routes>
      </BrowserRouter>
      <Geo />
      <br />
      <button>
      </button>
    </>
  );
}

export default App;
