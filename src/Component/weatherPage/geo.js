import React, { useState, useEffect } from "react";

const Geo = () => {
  const [location, setLocation] = useState("");
  const url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
    location +
    ",UK?key=" +
    process.env.REACT_APP_WEATHER_API_KEY;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location);
    if (location) {
      //const location = { location: location };
      setLocation((l) => {
        return [location];
      });
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

  useEffect(
    (url) => {
      return () => {

      };
    },
    [location]
  );
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
          <button type="submit">Search Weather</button>
        </form>
        {/*location.map((person, index) => {
          const { id } = person;
          return (
            <>
              <div className="item" key={id}>
                <h4></h4>
              </div>
            </>
          );
        })*/}
      </article>
    </>
  );
};

export default Geo;
