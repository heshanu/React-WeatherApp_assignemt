import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import "./App.css";

import Geo from "./Component/weatherPage/geo";
// import Weather3days from "./template/weather3days";
// import Weatherweek from "./template/weatherweek";
// import Page404 from "./template/Page404";

import LoginButton from "./template/login";
import LogoutButton from "./template/logout";

const {
  loginWithPopup,
  loginWithRedirect,
  logout,
  user,
  isAuthenticated,
} = useAuth0();

function App() {
  return (
    <>
      <h1>Welcome to WeatherApp!</h1>
      <LoginButton />
      <LogoutButton />
      <Geo/>
    </>
  );
}

export default App;
