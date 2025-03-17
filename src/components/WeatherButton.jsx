import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = () => {
  return (
    <div>
      <Button variant="primary">Current Location</Button>
      <Button variant="primary">paris</Button>
      <Button variant="primary">new york</Button>
    </div>
  );
};

export default WeatherButton;
