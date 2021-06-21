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
    </div>
  );
}
