import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import "./App.css";

import Geo from "./Component/weatherPage/geo";
import Weather3days from "./template/weather3days";
import Weatherweek from "./template/weatherweek";
import Page404 from "./template/Page404";

import LoginButton from "./template/login";
import LogoutButton from "./template/logout";
import Profile from "./template/profile";
import Footer from "./template/footer";
function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <h1>Welcome to WeatherApp!</h1>
      <h1>User is {isAuthenticated ? "Logged in" : "Not LoggedIn"}</h1>
      <div>
        <div className="left">
          <LoginButton />
          <LogoutButton />
        </div>
        <div className="right">
          <Profile />
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/weatherweek" element={<Weatherweek />} />
        </Routes>
      </BrowserRouter>
      <br />
      {isAuthenticated && <Geo />}
      <br/>
      <Footer />
    </>
  );
}

export default App;
