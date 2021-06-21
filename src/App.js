import React, { useState } from "react";

import fetchWeather from "./api/fetchWeather";
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchWeather(query);
    setWeather(data);
    setQuery("");
    console.log(data);
  };
  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Search"
          className="search"
          value={query}
          onChange={handleChange}
        />
      </form>
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {weather.main.temp}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
