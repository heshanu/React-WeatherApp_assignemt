import React from "react";
import fetchData from "./fetchData";

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
  );
};

export default Weatherweek;
