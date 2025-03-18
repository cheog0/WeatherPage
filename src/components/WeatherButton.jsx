import React from "react";
import { Button } from "react-bootstrap";
import "./WeatherButton.css";

const WeatherButton = ({ cities, setCity }) => {
  return (
    <div className="weather-button">
      <Button className="weather-btn" variant="primary">
        Current Location
      </Button>
      {cities.map((item, index) => (
        <Button
          className="weather-btn"
          key={index}
          onClick={() => setCity(item)}
          variant="primary"
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
