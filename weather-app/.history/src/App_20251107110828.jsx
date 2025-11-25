import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="app">
      <div className="widget-container">
        <div className="weather-card-container">
          <h1 className="app-title">Weather Widget</h1>
          <div className="search-container">
            <input
              type="text"
              value={city}
              placeholder="Enter city name"
              className="search-input"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="weather-card">
          <h2>
            {weatherData?.location?.name}, {weatherData?.location?.country}{" "}
            {city}
          </h2>
          <img src="" alt="icon" className="weather-icon" />
          <p className="temperature">21°C</p>
          <p className="condition">Cloudy</p>
          <div className="weather-details">
            <p>Humidity: 20%</p>
            <p>Wind: 22 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
