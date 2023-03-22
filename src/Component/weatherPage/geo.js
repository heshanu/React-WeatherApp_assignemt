import React, { useState, useEffect } from "react";
import Weather3days from "../../template/weather3days";

const Geo = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState([]);

  const url = `http://api.weatherapi.com/v1/current.json?key=61701315568d4faaa22163510231303&q=${location}&days=0`;
  // const url ="https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=latitude&lon=longtitude&appid=process.env.REACT_APP_WEATHER_API_KEY";
  var projectStyle = {
    width: 300,
    height: 300,
    border: 10,
    backgroundColor: "blue",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(location);
  };

  useEffect(() => {
    if (location) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setData(data);
          setCurrentWeather(data.current);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [url]);

  return (
    <>
      <article>
        <form className="form" onClick={handleSubmit}>
          <div className="form-control">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />

            {
             currentWeather &&(currentWeather.map((m,index)=>{
                return (
                  <div key={index}>
                    <h1>{m.temp_c}</h1>
                  </div>
                )
              })
            )}
          </div>
        </form>
      </article>
    </>
  );
};
export default Geo;
