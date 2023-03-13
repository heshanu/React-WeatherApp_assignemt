import React from "react";
import cordinate from "./cordinate";

const Geo = () => {
  var projectStyle = {
    width: 300,
    height: 300,
    border: 10,backgroundColor: "blue",
  };
  return (
    <div style={projectStyle}>
      <h1>Geo Locations</h1>
      <cordinate />
    </div>
  );
};

export default Geo;
