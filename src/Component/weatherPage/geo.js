import React, { useState, useEffect } from "react";
import Weather3days from "../../template/weather3days";
import Weatherweek from "../../template/weatherweek";

import db from "../../utils/weather4days.json";

const Geo = () => {
  const [location, setLocation] = useState("");
  
  const [data, setData] = useState([]);

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

  // useEffect(
  //   async (url) => {
  //     const fetchData=async()=>{
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setData(data);
  //       console.log(data);
  //       return data;
  //     }

  //     // const fetchData = async () => {
  //     //   // navigator.geolocation.getCurrentPosition(function (position) {
  //     //   //   setLatitude(position.coords.latitude);
  //     //   //   setLongtitude(position.coords.longitude);
  //     //   // });
  //     // await fetch(url)
  //     //   .then((res) => res.json())
  //     //   .then((result) => {
  //     //     setData(result);
  //     //     console.log(result);
  //     //   });
  //     // fetchData(latitude, longtitude).then((data) => {
  //     //   setData(data);
  //     //   console.log(data);
  //     // });
  //   },
  //   [latitude, longtitude]
  // );

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
  };

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };
  //today weather
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

        {/*data.map((index, d) => {
          return (
            <div key={d} style={projectStyle}>
              <h1>{}</h1>
            </div>
          );
        })*/}
      </article>
      <Weather3days data={data}/>
    </>
  );
};
export default Geo;
