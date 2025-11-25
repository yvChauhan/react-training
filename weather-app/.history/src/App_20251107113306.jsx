import { useState, useEffect } from "react";
import "./index.css";
import {AppComponent, AppCounter} from "./AppComponent";

const KEY = "e6355b2d4fb644629bc50139250611";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getData();
    return () => {
      // clean up code
      controller.abort();
    };
  }, [city]);

  async function getData() {
    try {
      const queryCity = city.trim() || "New York";
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${queryCity}`,
        { signal }
      );
      const data = await res.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  return (
    // <div className="app">
    //   <div className="widget-container">
    //     <div className="weather-card-container">
    //       <h1 className="app-title">Weather Widget</h1>
    //       <div className="search-container">
    //         <input
    //           type="text"
    //           value={city}
    //           placeholder="Enter city name"
    //           className="search-input"
    //           onChange={(e) => setCity(e.target.value)}
    //         />
    //       </div>
    //     </div>
    //     <div className="weather-card">
    //       <h2>
    //         {weatherData?.location?.name}, {weatherData?.location?.country}{" "}
    //       </h2>
    //       <img src="" alt="icon" className="weather-icon" />
    //       <p className="temperature">21°C</p>
    //       <p className="condition">Cloudy</p>
    //       <div className="weather-details">
    //         <p>Humidity: 20%</p>
    //         <p>Wind: 22 km/h</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <AppComponent />
    <AppCounter />
  );
}

export default App;
