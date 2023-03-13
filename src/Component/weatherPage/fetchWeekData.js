import React from "react";

const fetchWeekData = async (latitude, longtitude) => {
  const url = `api.openweathermap.org/data/2.5/forecast/daily?lat=latitude&lon=longtitude&cnt=7&appid=process.env.REACT_APP_WEATHER_API_KEY`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};

export default fetchWeekData;
