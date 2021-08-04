import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  return (
    <div className="WeatherIcon">
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#900C3F"
        size={64}
        animate={true}
      />
    </div>
  );
}
