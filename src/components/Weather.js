import axios from "axios";
import { useState } from "react";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const handleCurrent = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&aqi=no`
      );
      setWeather(response.data);
      NotificationManager.success(
        "Weather data fetched successfully",
        "Success",
        600
      );
    } catch (err) {
      NotificationManager.error("Failed to fetch weather data", "Error",600);
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        background: "#f8f9fa",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <select
          value={city}
          onChange={handleCityChange}
          style={{
            fontSize: "16px",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ced4da",
            backgroundColor: "#fff",
            width: "100%",
            maxWidth: "300px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <option value="">Select City</option>
          <option value="Karachi">Karachi</option>
          <option value="London">London</option>
          <option value="New York">New York</option>
          <option value="Tokyo">Tokyo</option>
        </select>
      </div>
      <button
        style={{
          marginBottom: "20px",
          padding: "12px 24px",
          fontSize: "18px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        onClick={handleCurrent}
      >
        Current Weather
      </button>
      {weather != null ? (
        <div>
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#343a40",
            }}
          >
            {weather.location.name}, {weather.location.region},{" "}
            {weather.location.country}
          </h3>
          <h4
            style={{ fontSize: "18px", marginBottom: "20px", color: "#6c757d" }}
          >
            Date & Time: {weather.location.localtime}
          </h4>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ flex: "1", marginRight: "10px" }}>
              <p style={{ fontSize: "20px", color: "#343a40" }}>Temperature</p>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
              >
                {weather.current.temp_c}&#176;C
              </p>
              <p style={{ fontSize: "16px", color: "#6c757d" }}>
                Feels like: {weather.current.feelslike_c}&#176;C
              </p>
            </div>
            <div style={{ flex: "1", marginLeft: "10px" }}>
              <p style={{ fontSize: "20px", color: "#343a40" }}>Temperature</p>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
              >
                {weather.current.temp_f}&#176;F
              </p>
              <p style={{ fontSize: "16px", color: "#6c757d" }}>
                Feels like: {weather.current.feelslike_f}&#176;F
              </p>
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontSize: "18px", color: "#343a40" }}>
              {weather.current.condition.text}{" "}
              <img
                style={{ verticalAlign: "middle", marginLeft: "5px" }}
                src={weather.current.condition.icon}
                alt={weather.current.condition.text}
              />
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontSize: "18px", color: "#343a40" }}>
              Wind: {weather.current.wind_mph} mph,{" "}
              {weather.current.wind_degree}&#176;
            </p>
            <p style={{ fontSize: "18px", color: "#343a40" }}>
              Humidity: {weather.current.humidity}%
            </p>
          </div>
        </div>
      ) : null}
      <NotificationContainer />
    </div>
  );
};

export default Weather;
