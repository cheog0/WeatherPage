import React from "react";
import "./WeatherBox.css";

const WeatherBox = ({ weather }) => {
  if (!weather || !weather.main) {
    return <p>Loading weather data...</p>;
  }

  return (
    <div className="weather-box">
      <div>{weather.name}</div>
      <h2>{weather.main.temp}도</h2>
      <h3>{weather.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
