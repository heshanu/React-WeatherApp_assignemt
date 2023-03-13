import React from "react";

const fetchData = async (latitude, longtitude) => {
  const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=latitude&lon=longtitude&appid=process.env.REACT_APP_WEATHER_API_KEY`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};

export default fetchData;
