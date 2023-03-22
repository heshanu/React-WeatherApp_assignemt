import React from "react";

const fetchData = async (latitude, longtitude) => {
<<<<<<< HEAD
  // const url = `api.openweathermap.org/data/2.5/forecast/daily?lat=latitude&lon=longtitude&appid=process.env.REACT_APP_WEATHER_API_KEY`;
  // //const url = `https://api.brightsky.dev/weather?lat=52&lon=7.6&date=2020-04-21`;
  // const response = await fetch(url);
  // const data = await response.json();
  // console.log(data);
  // return data;
=======
  const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=latitude&lon=longtitude&appid=process.env.REACT_APP_WEATHER_API_KEY`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
>>>>>>> parent of 3062371 (having bug in displaying)
};

export default fetchData;
