import React from "react";
import fetchData from "../Component/weatherPage/fetchData";

<<<<<<< HEAD
const Weatherweek = () => {
  return (
    <div>
      <h1>Weatherweek</h1>
    </div>
=======
const Weatherweek = ({ data }) => {
  const { lan, log, location } = data;
  return (
    <>
      <h1>Weather Week</h1>
      {lan}
      {log}
      {/*data &&
        data.map((index, d) => {
          return (
            <>
              <div>
                <h1>{lan}</h1>
                <h1>{log}</h1>
                <h1>{location}</h1>
              </div>
            </>
          );
        })*/}
    </>
>>>>>>> parent of 3062371 (having bug in displaying)
  );
 
};

export default Weatherweek;
