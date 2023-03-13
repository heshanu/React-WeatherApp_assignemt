import React, { useState, useEffect } from "react";
import fetchData from "./fetchData";
import Weather3days from "../../template/weather3days";

const Geo = () => {
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState(6.9271);
  const [longtitude, setLongtitude] = useState(79.8612);
  const [data, setData] = useState([]);

  // const url ="https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=latitude&lon=longtitude&appid=process.env.REACT_APP_WEATHER_API_KEY";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location);
    if (location) {
      //const location = { location: location };

      setLocation((l) => {
        return [location];
      });
      setLatitude("");
      setLongtitude("");
    } else if (latitude && longtitude) {
      setLatitude(latitude);
      setLongtitude(longtitude);
      console.log(latitude, longtitude);
    } else {
      alert("Please enter the location");
    }
  };

  var projectStyle = {
    width: 300,
    height: 300,
    border: 10,
    backgroundColor: "blue",
  };

  useEffect(() => {
    fetchData(latitude, longtitude);
    // const fetchData = async () => {
    //   // navigator.geolocation.getCurrentPosition(function (position) {
    //   //   setLatitude(position.coords.latitude);
    //   //   setLongtitude(position.coords.longitude);
    //   // });

    //   await fetch(url)
    //     .then((res) => res.json())
    //     .then((result) => {
    //       setData(result);
    //       console.log(result);
    //     });
    // };
    fetchData(latitude, longtitude);
  }, [latitude, longtitude]);

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lat">Latitude:</label>
            <input
              type="text"
              id="Latitude"
              name="Latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="location">longitude:</label>
            <input
              type="text"
              id="longtitude"
              name="longtitude"
              value={longtitude}
              onChange={(e) => setLongtitude(e.target.value)}
            />
          </div>
          <button type="submit">Search Weather</button>
        </form>
        <Weather3days data={fetchData(latitude, longtitude)} />
        {/*data.map((index, d) => {
          return (
            <div key={d} style={projectStyle}>
              <h1>{}</h1>
            </div>
          );
        })*/}
      </article>
    </>
  );
};

export default Geo;
