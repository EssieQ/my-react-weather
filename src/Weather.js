import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherState, setWeatherState] = useState({ loaded: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherState({
      loaded: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "bd915d97f51d3c0651893d85326bd29d";
    let city = props.cityName;
    let units = "metric";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherState.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{props.cityName}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherState.date} />
          </li>
          <li>{weatherState.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
            />

            <span className="temperature">{weatherState.temperature}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherState.humidity}%</li>
              <li>Wind: {weatherState.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="Weather">
        <h1>Loading weather for {props.cityName}...</h1>
      </div>
    );
  }
}
